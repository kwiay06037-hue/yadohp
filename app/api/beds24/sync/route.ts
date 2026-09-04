import { NextResponse } from "next/server";
import { Beds24ApiError, getBookings } from "@/lib/beds24-client";

// Never statically optimized/cached — this must hit Beds24 fresh every run.
export const dynamic = "force-dynamic";

// Vercel Cron Jobs automatically send `Authorization: Bearer <CRON_SECRET>`
// when CRON_SECRET is set in the project's environment variables, so this
// route only runs for real cron invocations (or a manual call carrying the
// same secret) — not for anyone who finds the URL.
function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  return request.headers.get("authorization") === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // No persistence layer yet (deliberate — see "Beds24 booking sync" in
  // README.md), and no date/modified-since filtering yet either: this
  // project's Beds24 account hasn't had its exact query parameter formats
  // (e.g. modifiedFrom) confirmed against its own API docs, and filtering
  // incorrectly could silently miss bookings. For now this fetches Beds24's
  // default result set and just logs what came back, to validate the
  // cron -> auth -> Beds24 fetch path end-to-end before either concern is
  // added.
  try {
    const bookings = await getBookings();
    console.log(
      `[beds24-sync] fetched ${bookings.length} booking(s) at ${new Date().toISOString()}`
    );
    return NextResponse.json({
      success: true,
      count: bookings.length,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    if (error instanceof Beds24ApiError) {
      console.error(
        `[beds24-sync] Beds24 API error (HTTP ${error.status})`,
        error.body
      );
      return NextResponse.json({ error: error.message }, { status: 502 });
    }
    console.error("[beds24-sync] unexpected error", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
