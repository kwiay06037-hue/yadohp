// Server-side only — see the note at the top of lib/beds24-config.ts.
// Fetches always use `cache: "no-store"`: booking/availability data changes
// constantly, and Next.js's default fetch caching would otherwise serve
// stale tokens or stale bookings during static generation / ISR.

import { getBeds24Config } from "./beds24-config";

export class Beds24ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: unknown
  ) {
    super(message);
    this.name = "Beds24ApiError";
  }
}

interface Beds24TokenResponse {
  token: string;
  expiresIn: number;
  refreshToken?: string;
}

// In-memory only — never persisted. On a serverless platform each cold
// start re-fetches a token; on a long-lived server this avoids refetching
// on every call.
let cachedToken: { token: string; expiresAt: number } | null = null;

// Refresh a little early so a token doesn't expire mid-request.
const EXPIRY_SAFETY_MARGIN_SECONDS = 60;

async function fetchAccessToken(): Promise<string> {
  const { baseUrl, refreshToken } = getBeds24Config();

  const response = await fetch(`${baseUrl}/authentication/token`, {
    method: "GET",
    headers: {
      accept: "application/json",
      refreshToken,
    },
    cache: "no-store",
  });

  const body = await response.json().catch(() => null);

  if (!response.ok || !body?.token) {
    throw new Beds24ApiError(
      `Beds24 token refresh failed (HTTP ${response.status})`,
      response.status,
      body
    );
  }

  const data = body as Beds24TokenResponse;

  if (data.refreshToken && data.refreshToken !== refreshToken) {
    // Beds24 refresh tokens are long-life and not expected to rotate on a
    // plain token refresh, but if this ever happens the old value stops
    // working — surface it loudly rather than silently failing later.
    console.warn(
      "Beds24 returned a new refreshToken. Update BEDS24_REFRESH_TOKEN " +
        "in your environment, or subsequent Beds24 API calls will fail " +
        "once the old refresh token is no longer honored."
    );
  }

  cachedToken = {
    token: data.token,
    expiresAt: Date.now() + (data.expiresIn - EXPIRY_SAFETY_MARGIN_SECONDS) * 1000,
  };

  return cachedToken.token;
}

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }
  return fetchAccessToken();
}

export interface Beds24BookingsQuery {
  propertyId?: number | number[];
  roomId?: number | number[];
  status?: string | string[];
  arrivalFrom?: string;
  arrivalTo?: string;
  departureFrom?: string;
  departureTo?: string;
  modifiedFrom?: string;
  modifiedTo?: string;
  bookingId?: number | number[];
  includeInvoiceItems?: boolean;
  includeInfoItems?: boolean;
  page?: number;
}

// Beds24 booking fields beyond the ones listed here still come through —
// this type isn't an exhaustive schema, just the commonly used fields.
export interface Beds24Booking {
  id: number;
  masterId?: number;
  propertyId?: number;
  roomId?: number;
  unitId?: number;
  status?: string;
  subStatus?: string;
  arrival?: string;
  departure?: string;
  numAdult?: number;
  numChild?: number;
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  comments?: string;
  notes?: string;
  price?: number;
  [key: string]: unknown;
}

interface Beds24BookingsResponse {
  success?: boolean;
  data?: Beds24Booking[];
}

function buildQueryString(query: Beds24BookingsQuery): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.append(key, String(value));
    }
  }
  return params.toString();
}

async function requestBookings(
  query: Beds24BookingsQuery,
  token: string
): Promise<Response> {
  const { baseUrl } = getBeds24Config();
  const queryString = buildQueryString(query);
  const url = `${baseUrl}/bookings${queryString ? `?${queryString}` : ""}`;

  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      token,
    },
    cache: "no-store",
  });
}

/**
 * Fetches bookings from Beds24 API V2 (GET /bookings), handling access
 * token retrieval/caching. On a 401 (e.g. a stale cached token) it forces
 * one token refresh and retries once before giving up.
 */
export async function getBookings(
  query: Beds24BookingsQuery = {}
): Promise<Beds24Booking[]> {
  let token = await getAccessToken();
  let response = await requestBookings(query, token);

  if (response.status === 401) {
    cachedToken = null;
    token = await getAccessToken();
    response = await requestBookings(query, token);
  }

  const body = (await response.json().catch(() => null)) as
    | Beds24BookingsResponse
    | null;

  if (!response.ok || !body?.data) {
    throw new Beds24ApiError(
      `Beds24 bookings request failed (HTTP ${response.status})`,
      response.status,
      body
    );
  }

  return body.data;
}
