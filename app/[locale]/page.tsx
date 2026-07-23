import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isLocale, localizedPath, type Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import { site } from "@/data/site";
import { stays } from "@/data/stays";
import { commonFaq } from "@/data/faq";
import { Section, SectionHeading } from "@/components/common/Section";
import { Hero } from "@/components/sections/Hero";
import { StayCard } from "@/components/stay/StayCard";
import { PurposeNav } from "@/components/stay/PurposeNav";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { Button } from "@/components/common/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  return {
    title: messages.meta.siteTitle,
    description: messages.meta.siteDescription,
    alternates: { canonical: `${site.domain}/${locale}` },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} messages={messages} />

      <Section tone="white">
        <SectionHeading title={messages.home.brandIntroTitle} align="center" />
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-ink-soft">
          {t(site.brandIntro, locale)}
        </p>
      </Section>

      <Section id="compare">
        <SectionHeading
          title={messages.home.compareTitle}
          lead={messages.home.compareLead}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} locale={locale} messages={messages} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title={messages.home.purposeTitle} />
        <PurposeNav stays={stays} locale={locale} messages={messages} />
      </Section>

      <Section>
        <SectionHeading title={messages.home.proximityTitle} />
        <div className="grid gap-4 sm:grid-cols-3">
          {stays.map((stay) => (
            <div key={stay.id} className="rounded-2xl border border-border bg-bg-white p-5">
              <p className="font-semibold text-ink">{t(stay.name, locale)}</p>
              <p className="mt-2 text-sm text-ink-soft">
                {messages.stays.distanceToBikan}:{" "}
                {stay.distanceToBikanMeters !== null
                  ? `${stay.distanceToBikanMeters}m`
                  : messages.stays.unconfirmed}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {messages.stays.distanceToStation}:{" "}
                {stay.distanceToStationMeters !== null
                  ? `${stay.distanceToStationMeters}m`
                  : messages.stays.unconfirmed}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title={messages.home.amenitiesTitle} />
        <div className="grid gap-6 sm:grid-cols-3">
          {stays.map((stay) => (
            <div key={stay.id}>
              <p className="font-semibold text-ink">{t(stay.name, locale)}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                {stay.highlights.slice(0, 5).map((h, i) => (
                  <li key={i}>・{t(h, locale)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={messages.home.familyTitle} />
        <div className="grid gap-4 sm:grid-cols-3">
          {stays.map((stay) => (
            <div key={stay.id} className="rounded-2xl border border-border bg-bg-white p-5">
              <p className="font-semibold text-ink">{t(stay.name, locale)}</p>
              <p className="mt-2 text-sm text-ink-soft">
                {messages.stays.kidsEquipment}:{" "}
                {stay.kidsEquipmentAvailable ? messages.stays.yes : messages.stays.no}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          title={messages.home.sightseeingTeaserTitle}
          lead={messages.home.sightseeingTeaserLead}
        />
        <Button href={localizedPath(locale, "/sightseeing")} variant="outline">
          {messages.cta.readMore}
        </Button>
      </Section>

      <Section>
        <SectionHeading title={messages.home.importantTitle} />
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="rounded-2xl border border-border bg-bg-white p-5 text-sm text-ink-soft">
            {t(
              {
                ja: "チェックインは16:00以降、チェックアウトは10:00厳守です。",
                en: "Check-in is from 4:00 PM; check-out is strictly by 10:00 AM.",
                zhTW: "入住時間為 16:00 起，退房時間為 10:00 整（務必遵守）。",
              },
              locale
            )}
          </li>
          <li className="rounded-2xl border border-border bg-bg-white p-5 text-sm text-ink-soft">
            {t(
              {
                ja: "宴会・パーティーは禁止、21:00以降は静粛にお過ごしください。",
                en: "Parties are not permitted; please keep quiet after 9:00 PM.",
                zhTW: "禁止舉辦宴會派對，晚間 21:00 以後請保持安靜。",
              },
              locale
            )}
          </li>
        </ul>
        <div className="mt-6">
          <Link
            href={localizedPath(locale, "/faq")}
            className="text-sm font-medium text-accent underline underline-offset-2"
          >
            {messages.cta.viewFullRules}
          </Link>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title={messages.home.faqTitle} />
        <FaqAccordion items={commonFaq.slice(0, 5)} locale={locale} />
        <div className="mt-6">
          <Button href={localizedPath(locale, "/faq")} variant="outline">
            {messages.cta.readMore}
          </Button>
        </div>
      </Section>

      <Section tone="main">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {messages.home.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            {messages.home.finalCtaLead}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={localizedPath(locale, "/stays#compare")} variant="accent" size="lg">
              {messages.cta.checkAvailability}
            </Button>
            <Button
              href={localizedPath(locale, "/contact")}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-main"
            >
              {messages.cta.contact}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
