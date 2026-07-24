import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary, isLocale, localizedPath, locales, type Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import { site } from "@/data/site";
import { stays, getStayBySlug, commonRules } from "@/data/stays";
import { Section, SectionHeading } from "@/components/common/Section";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { Gallery } from "@/components/stay/Gallery";
import { BedsList } from "@/components/stay/BedsList";
import { ParkingCard } from "@/components/stay/ParkingCard";
import { CautionBox } from "@/components/stay/CautionBox";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { BookingNotice } from "@/components/booking/BookingNotice";
import { Button } from "@/components/common/Button";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return locales.flatMap((locale) => stays.map((stay) => ({ locale, stay: stay.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; stay: string }>;
}): Promise<Metadata> {
  const { locale: raw, stay: slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const stay = getStayBySlug(slug);
  if (!stay) return {};
  return {
    title: t(stay.seo.title, locale),
    description: t(stay.seo.description, locale),
    alternates: { canonical: `${site.domain}/${locale}/stays/${stay.slug}` },
    openGraph: {
      title: t(stay.seo.title, locale),
      description: t(stay.seo.description, locale),
    },
  };
}

const equipmentCategories = new Set(["kitchen", "device", "other"]);
const amenityCategories = new Set(["disposable", "bath", "towel"]);

export default async function StayDetailPage({
  params,
}: {
  params: Promise<{ locale: string; stay: string }>;
}) {
  const { locale: raw, stay: slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  const stay = getStayBySlug(slug);
  if (!stay) notFound();

  const equipment = stay.amenities.filter((a) => equipmentCategories.has(a.category));
  const amenities = stay.amenities.filter((a) => amenityCategories.has(a.category));
  const cover = stay.images[0];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.nav.home, item: `${site.domain}/${locale}` },
      {
        "@type": "ListItem",
        position: 2,
        name: messages.stays.pageTitle,
        item: `${site.domain}/${locale}/stays`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t(stay.name, locale),
        item: `${site.domain}/${locale}/stays/${stay.slug}`,
      },
    ],
  };

  const lodgingJsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: t(stay.name, locale),
    description: t(stay.description, locale),
    address: {
      "@type": "PostalAddress",
      streetAddress: stay.address,
      addressCountry: "JP",
    },
    url: `${site.domain}/${locale}/stays/${stay.slug}`,
    amenityFeature: stay.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: t(a.label, locale),
      value: true,
    })),
  };

  const faqJsonLd =
    stay.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: stay.faq.map((item) => ({
            "@type": "Question",
            name: t(item.question, locale),
            acceptedAnswer: { "@type": "Answer", text: t(item.answer, locale) },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={lodgingJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}

      {/* 1. First view */}
      <section className="relative overflow-hidden bg-main text-white">
        <div className="absolute inset-0">
          <PlaceholderImage
            src={cover?.src ?? null}
            alt={cover ? t(cover.alt, locale) : t(stay.name, locale)}
            width={cover?.width ?? 1920}
            height={cover?.height ?? 1280}
            priority
            fill
            className="opacity-40"
          />
        </div>
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-end gap-4 px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm text-white/70">{stay.nameEn}</p>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t(stay.name, locale)}
          </h1>
          <p className="max-w-xl text-white/85">{t(stay.concept, locale)}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <BookingCTA stay={stay} locale={locale} messages={messages} />
            <Button
              href={localizedPath(locale, "/contact")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-main"
            >
              {messages.cta.contactThisStayInquiry}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.overview} />
        <p className="max-w-3xl leading-relaxed text-ink-soft">{t(stay.description, locale)}</p>
        <p className="mt-4 text-sm text-ink-soft">{stay.address}</p>
        {stay.mapUrl ? (
          <a
            href={stay.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-2"
          >
            {messages.cta.viewOnMap}
          </a>
        ) : (
          <p className="mt-2 text-sm text-ink-soft">{messages.cta.noMapListing}</p>
        )}
      </Section>

      {/* 3. Highlights */}
      <Section>
        <SectionHeading title={messages.stayDetail.features} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stay.highlights.map((h, i) => (
            <li
              key={i}
              className="rounded-xl border border-border bg-bg-white px-4 py-3 text-sm text-ink"
            >
              {t(h, locale)}
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Gallery */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.gallery} />
        <Gallery images={stay.images} locale={locale} messages={messages} />
        <p className="mt-4 text-xs text-ink-soft">{messages.stayDetail.airbnbNote}</p>
      </Section>

      {/* 5. Beds */}
      <Section>
        <SectionHeading title={messages.stayDetail.beds} />
        <BedsList beds={stay.beds} locale={locale} />
      </Section>

      {/* 6. Floor plan */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.floorplan} />
        <div className="max-w-md">
          <PlaceholderImage
            src={null}
            alt={messages.stayDetail.floorplanPending}
            width={800}
            height={600}
            label={messages.stayDetail.floorplanPending}
          />
        </div>
      </Section>

      {/* 7. Equipment */}
      <Section>
        <SectionHeading title={messages.stayDetail.equipment} />
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, i) => (
            <li key={i} className="rounded-xl border border-border bg-bg-white px-4 py-3 text-sm text-ink">
              {t(item.label, locale)}
            </li>
          ))}
        </ul>
      </Section>

      {/* 8. Amenities */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.amenities} />
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => (
            <li key={i} className="rounded-xl border border-border bg-bg-white px-4 py-3 text-sm text-ink">
              {t(item.label, locale)}
            </li>
          ))}
        </ul>
      </Section>

      {/* 9. Kids */}
      <Section>
        <SectionHeading title={messages.stayDetail.kids} />
        <p className="text-ink-soft">
          {stay.kidsEquipmentAvailable ? messages.stays.yes : messages.stays.unconfirmed}
        </p>
      </Section>

      {/* 10. Check-in / check-out */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.checkInOut} />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-white p-5">
            <p className="text-sm text-ink-soft">{messages.stayDetail.checkIn}</p>
            <p className="mt-1 text-lg font-semibold text-ink">
              {stay.checkIn} {messages.stayDetail.checkInFrom}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-white p-5">
            <p className="text-sm text-ink-soft">{messages.stayDetail.checkOut}</p>
            <p className="mt-1 text-lg font-semibold text-ink">
              {stay.checkOut} {messages.stayDetail.checkOutBy}
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft">{t(stay.cleaningEntryNote, locale)}</p>
      </Section>

      {/* 11. Access */}
      <Section>
        <SectionHeading title={messages.stayDetail.access} />
        <p className="text-ink-soft">{stay.address}</p>
        {stay.mapUrl ? (
          <a
            href={stay.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-2"
          >
            {messages.cta.viewOnMap}
          </a>
        ) : (
          <p className="mt-2 text-sm text-ink-soft">{messages.cta.noMapListing}</p>
        )}
        <div className="mt-4">
          <Link
            href={localizedPath(locale, "/access")}
            className="text-sm font-medium text-accent underline underline-offset-2"
          >
            {messages.cta.readMore}
          </Link>
        </div>
      </Section>

      {/* 12. Parking */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.parking} />
        <ParkingCard parking={stay.parking} locale={locale} messages={messages} />
      </Section>

      {/* 13. Nearby sightseeing */}
      <Section>
        <SectionHeading title={messages.stayDetail.sightseeingNearby} />
        <Button href={localizedPath(locale, "/sightseeing")} variant="outline">
          {messages.cta.readMore}
        </Button>
      </Section>

      {/* 14. Important rules */}
      <Section tone="white">
        <SectionHeading title={messages.stayDetail.importantRules} />
        <div className="space-y-4">
          {stay.hasStairs && stay.stairsCaution ? (
            <CautionBox caution={stay.stairsCaution} locale={locale} />
          ) : null}
          {stay.cautions.map((caution, i) => (
            <CautionBox key={i} caution={caution} locale={locale} />
          ))}
          <details className="rounded-2xl border border-border bg-bg p-5">
            <summary className="cursor-pointer font-medium text-ink">
              {messages.stayDetail.importantRules}（
              {locale === "ja" ? "共通ルール" : locale === "en" ? "shared house rules" : "共通規則"}
              ）
            </summary>
            <div className="mt-4 space-y-3">
              {commonRules.map((rule, i) => (
                <CautionBox key={i} caution={rule} locale={locale} />
              ))}
            </div>
          </details>
        </div>
      </Section>

      {/* 15. FAQ */}
      <Section>
        <SectionHeading title={messages.stayDetail.faq} />
        <FaqAccordion items={stay.faq} locale={locale} />
      </Section>

      {/* 16. Booking CTA */}
      <Section tone="main">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">{t(stay.name, locale)}</h2>
          <div className="mt-5 flex justify-center">
            <BookingNotice locale={locale} messages={messages} rulesHref="/faq" />
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookingCTA stay={stay} locale={locale} messages={messages} />
            <Button
              href={localizedPath(locale, "/contact")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-main"
            >
              {messages.cta.contactThisStayInquiry}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
