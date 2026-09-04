// Server-side only. Next.js never inlines env vars into client bundles
// unless they're prefixed NEXT_PUBLIC_, so BEDS24_REFRESH_TOKEN below stays
// out of the browser as long as this module is only imported from server
// code (Server Components, Route Handlers, scripts) — never from a
// "use client" component.

const DEFAULT_BASE_URL = "https://api.beds24.com/v2";

export interface Beds24Config {
  baseUrl: string;
  refreshToken: string;
}

/**
 * Reads and validates Beds24 API V2 credentials from environment variables.
 * Throws with setup instructions instead of returning a half-valid config —
 * callers should let this error surface rather than catching and continuing.
 */
export function getBeds24Config(): Beds24Config {
  const refreshToken = process.env.BEDS24_REFRESH_TOKEN;
  if (!refreshToken) {
    throw new Error(
      "BEDS24_REFRESH_TOKEN is not set. Run `npm run beds24:setup -- <inviteCode>` " +
        "to obtain one (see \"Beds24 API V2 setup\" in README.md), then add it to " +
        ".env.local. Never commit this value or log it."
    );
  }

  return {
    baseUrl: process.env.BEDS24_API_BASE_URL || DEFAULT_BASE_URL,
    refreshToken,
  };
}
