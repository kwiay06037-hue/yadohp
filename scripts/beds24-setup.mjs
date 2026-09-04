#!/usr/bin/env node
// One-time bootstrap for Beds24 API V2 credentials.
//
// Usage:
//   npm run beds24:setup -- <inviteCode>
//
// The invite code is single-use and short-lived (create it in the Beds24
// control panel under Settings > Account > Access > API V2, or Settings >
// Marketplace > API, depending on your account). This script exchanges it
// for a long-life refresh token and prints it once so you can copy it into
// .env.local as BEDS24_REFRESH_TOKEN. The refresh token is never written to
// a file or logged anywhere by this script — it only appears in your
// terminal output.

const baseUrl = process.env.BEDS24_API_BASE_URL || "https://api.beds24.com/v2";
const inviteCode = process.argv[2];

if (!inviteCode) {
  console.error("Usage: npm run beds24:setup -- <inviteCode>");
  console.error(
    "Create a single-use invite code in the Beds24 control panel first " +
      "(see \"Beds24 API V2 setup\" in README.md)."
  );
  process.exit(1);
}

async function main() {
  const response = await fetch(`${baseUrl}/authentication/setup`, {
    method: "GET",
    headers: {
      accept: "application/json",
      code: inviteCode,
    },
  });

  const body = await response.json().catch(() => null);

  if (!response.ok || !body?.refreshToken) {
    console.error(`Beds24 setup failed (HTTP ${response.status}).`);
    if (body) console.error(JSON.stringify(body, null, 2));
    console.error(
      "Invite codes are single-use and short-lived — if this one was " +
        "already used or has expired, generate a new one and re-run this " +
        "script."
    );
    process.exit(1);
  }

  console.log("Success. Add this to .env.local (do NOT commit it):\n");
  console.log(`BEDS24_REFRESH_TOKEN=${body.refreshToken}`);
  console.log(
    "\nThis refresh token does not expire as long as it's used at least " +
      "once every 30 days. Treat it like a password: never commit it, log " +
      "it, or expose it in client-side code."
  );
}

main().catch((error) => {
  console.error("Beds24 setup request failed:", error.message);
  process.exit(1);
});
