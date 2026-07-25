# Kurashiki Stay Collection (provisional name)

Official website for three whole-house rentals near the Kurashiki Bikan
Historical Quarter — **倉敷NAGAYA**, **SHIRAKABEの宿**, and **民宿HIDAMARI** —
built to send more guests to direct bookings instead of Airbnb/Booking.com.

Japanese (`/ja`) is the source of truth; English (`/en`) and Traditional
Chinese (`/zh-TW`) are provided alongside it.

## Stack

Next.js (App Router, static generation) · TypeScript · Tailwind CSS · a
small hand-rolled i18n layer (no i18n framework dependency).

## Setup

```bash
npm install
cp .env.example .env.local   # fill in booking URLs / domain when known
```

## Development

```bash
npm run dev      # http://localhost:3000 (redirects to /ja)
npm run lint
npm run build && npm run start
```

> Note: this was built and verified inside a network-sandboxed container
> where Turbopack's font fetcher couldn't reach `fonts.gstatic.com` through
> the sandbox's TLS-intercepting proxy, so verification there used
> `next build --webpack`. A normal machine or CI runner with direct internet
> access should build fine with the default (Turbopack) `npm run build`.

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket and import it in Vercel,
   or run `vercel` from this directory.
2. Set the environment variables from `.env.example` in the Vercel project
   settings (Production and Preview).
3. Deploy. The app is statically generated per locale/route where possible.

## Updating content

All facts (addresses, bedding, amenities, rules, etc.) live in `data/`, kept
separate from UI copy in `messages/`, so content edits never require poking
around component code.

- **Property facts** — `data/stays.ts` (`Stay` type in `data/types.ts`).
  Fields intentionally left `null` are unconfirmed in the source brief —
  do not fill them with invented numbers; confirm with the operator first.
- **Shared house rules** — `commonRules` at the top of `data/stays.ts`.
- **Common FAQ** — `data/faq.ts`. Per-property FAQ lives on each `Stay`
  object's `faq` array in `data/stays.ts`.
- **Sightseeing spots** — `data/sightseeing.ts`. Hours/fees are
  intentionally not stated as fixed facts (they change); link out via
  `mapUrl` once the operator supplies a Google Maps list.
- **Brand name / tagline / intro copy** — `data/site.ts`. The brand name is
  provisional (`site.brandNameStatus`); change it in one place here.
- **Legal page text** — `data/legal.ts` (Terms, Tokutei Shotorihiki Ho
  notice, Privacy Policy). Sections marked with the TODO note need real
  business details before launch.
- **UI strings / button labels / static page headings** —
  `messages/ja.json`, `messages/en.json`, `messages/zh-TW.json`. Keep the
  same keys across all three files.

### Photos

Every image in `data/stays.ts` has `src: null`, which renders a labeled
placeholder box (correct aspect ratio, category name shown) instead of a
broken image or a generic gray box. To add real photos:

1. Drop files under `public/images/<stay-slug>/...`.
2. Set `src` to that path (e.g. `/images/kurashiki-nagaya/exterior-01.jpg`).
3. Only use photos the operator owns the rights to. In practice: photos the
   operator personally took/uploaded to their own Airbnb, Booking.com, or
   Google Business Profile listing are fine to reuse (uploading to those
   platforms doesn't sign away the copyright — the host keeps it, and only
   grants that platform a display license). Prefer the operator's original
   source files over images re-downloaded from those listing pages (better
   quality, and avoids any ambiguity about provenance). Do NOT use photos
   uploaded by other users — guests, reviewers, Street View, etc. — since
   those belong to whoever took them, not the operator.

### Booking URLs

Each property resolves its "check availability" button from an env var
(see `.env.example` / `lib/booking.ts`). Until a URL is set, the button
shows "booking page coming soon" and links to `/contact` instead of a dead
link.

### Translations

Edit the matching key in all three `messages/*.json` files together. Do not
translate the underlying facts in `data/stays.ts` mechanically — addresses,
distances, bed counts, and rules must match the Japanese source exactly;
only the surrounding prose should read naturally in each language.

### SEO

- Per-page metadata (title/description/canonical/hreflang) is generated in
  each `app/[locale]/**/page.tsx` via `generateMetadata`.
- Structured data (`Organization`, `WebSite` in the root layout;
  `LodgingBusiness`, `BreadcrumbList`, `FAQPage` on property pages) lives
  next to the pages that render it, via `components/seo/JsonLd.tsx`.
  `FAQPage` data only ever includes the Q&A actually rendered on that page.
  Price, rating, review count, phone number, and lat/long are deliberately
  omitted until confirmed — do not add them without real data.
- `app/sitemap.ts` and `app/robots.ts` are generated from `data/stays.ts`
  and `lib/i18n.ts`, so new locales/properties are picked up automatically.
- OG images are generated at request time (`app/[locale]/opengraph-image.tsx`
  and the per-property variant) rather than using a static asset, so they
  stay in sync with the brand name and per-property titles.

## Known unconfirmed items (see also `data/legal.ts` and `data/stays.ts`)

These come directly from the source brief and should be resolved with the
operator before launch:

1. Final brand name (currently provisional: "Kurashiki Stay Collection").
2. Booking platform / URLs for each property (Beds24 or otherwise).
3. Whether official-site rates undercut OTA rates (affects whether the site
   may claim "book direct and save").
4. Photo files for all three properties (the operator's own, ideally
   original-quality files rather than re-downloaded listing-page images —
   see "Photos" above).
5. The operator's Instagram URL/handle (confirmed as an accepted inquiry
   channel — set `NEXT_PUBLIC_INSTAGRAM_URL` once known; see `.env.example`).
6. Domain name.
7. Full cookware/utensil list for 民宿HIDAMARI (dryer count and an IH cooktop
   are now confirmed — see `data/stays.ts`).
8. Phone number, representative name, and payment methods for the Tokutei
   Shotorihiki Ho notice (`data/legal.ts`) — address and cancellation terms
   are now confirmed there, but a professional should verify that
   withholding the public address satisfies the Act's prompt-disclosure
   requirement (see the note already added in `data/legal.ts`).
9. Sightseeing spot hours, fees, and a Google Maps list from the operator.

Resolved so far (2026-07-24): max guest counts for all three properties;
倉敷NAGAYA's bathroom/toilet count and futon threshold (6+ adults);
SHIRAKABEの宿's max guests and futon threshold (8+ adults); 民宿HIDAMARI's
bathroom/toilet count, sofa-bed threshold (4+ adults, queen size, 1st
floor), dryer count, and IH cooktop; why 民宿HIDAMARI has no Google Business
Profile (its parcel overlaps a neighboring facility, "エバホール", so Google
won't register it as a distinct location) — its "View on map" link now
points to a Google Maps address search for 岡山県倉敷市稲荷町7-30 instead of a
dedicated pin, which is the operator-confirmed workaround; the
early-arrival luggage policy (entrance drop-off before 16:00, common to all
three properties); Instagram accepted as an inquiry channel; and the
cancellation policy (free up to 7 days before check-in, 100% after).

## Pre-launch checklist

- [ ] Resolve all items in "Known unconfirmed items" above.
- [ ] Replace every `src: null` image placeholder with an operator-supplied
      photo across all three properties (see "Photos" above).
- [ ] Set real booking URLs (or confirm they should stay "coming soon").
- [ ] Set `NEXT_PUBLIC_SITE_DOMAIN` to the real domain.
- [ ] Wire up real contact-form submission (`components/contact/ContactForm.tsx`
      has a clearly marked TODO where the simulated submit currently is —
      needs a validated, rate-limited server endpoint or third-party form
      backend; add spam protection such as Turnstile if abuse appears).
- [ ] Fill in `data/legal.ts` TODO sections with real business/legal details.
- [ ] Run `npm run build` and fix any warnings; run Lighthouse and confirm
      Performance/Accessibility/Best Practices/SEO scores are in an
      acceptable range for the deploy target (scores vary by environment
      and are not guaranteed by this checklist).
- [ ] Manually test at 375/390/430/768/1024/1440px widths, and in Chrome,
      Safari, Edge, iOS Safari, and Android Chrome.
- [ ] Verify language switching, the mobile fixed CTA bar, gallery keyboard
      navigation, contact form validation, FAQ accordions, external map
      links, sitemap.xml, robots.txt, and the 404 page.
- [ ] Confirm no door codes, keybox numbers, Wi-Fi passwords, guest-list
      URLs, or other private operational details have been added anywhere
      in `data/`, `public/`, or committed history.
