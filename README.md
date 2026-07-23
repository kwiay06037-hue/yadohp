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
3. Only use photos the operator has supplied directly — do not download or
   re-host photos from the Airbnb listings referenced in `data/stays.ts`
   (`airbnbReferenceUrl` is for cross-checking facts only).

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
4. Original photo files for all three properties (not Airbnb-sourced).
5. Confirmed max guest count per property.
6. Google Maps URL for 民宿HIDAMARI.
7. Inquiry channels beyond email (LINE, Instagram, etc.)?
8. Domain name.
9. Whether the "6+ adults" futon threshold at SHIRAKABE includes 6 itself.
10. Bathroom/shower/toilet counts, dryer count, and cookware list for HIDAMARI.
11. Early-arrival luggage storage policy (varies / unclear per property).
12. Business address, phone, representative name, payment methods, and
    cancellation terms for the Tokutei Shotorihiki Ho notice (`data/legal.ts`).
13. Sightseeing spot hours, fees, and a Google Maps list from the operator.

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
