import type { Metadata } from "next";
import { getDictionary, isLocale, localizedPath, type Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import { site } from "@/data/site";
import { stays } from "@/data/stays";
import { Section, SectionHeading } from "@/components/common/Section";
import { ParkingCard } from "@/components/stay/ParkingCard";
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
    title: messages.access.pageTitle,
    description: messages.access.pageLead,
    alternates: { canonical: `${site.domain}/${locale}/access` },
  };
}

export default async function AccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <Section tone="white" className="pt-10">
      <SectionHeading title={messages.access.pageTitle} lead={messages.access.pageLead} />
      <div className="space-y-10">
        {stays.map((stay) => (
          <div key={stay.id} className="rounded-2xl border border-border bg-bg-white p-6">
            <h3 className="text-lg font-semibold text-ink">{t(stay.name, locale)}</h3>
            <p className="mt-1 text-sm text-ink-soft">{stay.address}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {stay.mapUrl ? (
                <a
                  href={stay.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent underline underline-offset-2"
                >
                  {messages.cta.viewOnMap}
                </a>
              ) : (
                <span className="text-sm text-ink-soft">{messages.cta.noMapListing}</span>
              )}
              <Button
                href={localizedPath(locale, `/stays/${stay.slug}`)}
                variant="ghost"
                size="md"
                className="px-0 underline underline-offset-2"
              >
                {messages.cta.viewDetails}
              </Button>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-bg p-4 text-sm text-ink-soft">
                <p className="font-medium text-ink">{messages.access.byTrain}</p>
                <p className="mt-1">
                  {messages.stays.distanceToStation}:{" "}
                  {stay.distanceToStationMeters !== null
                    ? `${stay.distanceToStationMeters}m`
                    : messages.stays.unconfirmed}
                </p>
              </div>
              <div className="rounded-xl bg-bg p-4">
                <p className="mb-2 text-sm font-medium text-ink">{messages.access.byCar}</p>
                <ParkingCard parking={stay.parking} locale={locale} messages={messages} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink-soft">{messages.access.mapNote}</p>
    </Section>
  );
}
