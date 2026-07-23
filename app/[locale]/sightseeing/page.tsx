import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import { site } from "@/data/site";
import { sightseeingCategories, sightseeingSpots } from "@/data/sightseeing";
import { Section, SectionHeading } from "@/components/common/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  return {
    title: messages.sightseeing.pageTitle,
    description: messages.sightseeing.pageLead,
    alternates: { canonical: `${site.domain}/${locale}/sightseeing` },
  };
}

export default async function SightseeingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <Section tone="white" className="pt-10">
      <SectionHeading
        title={messages.sightseeing.pageTitle}
        lead={messages.sightseeing.pageLead}
      />
      <div className="space-y-12">
        {sightseeingCategories.map((category) => {
          const spots = sightseeingSpots.filter((s) => s.category === category.id);
          if (spots.length === 0) return null;
          return (
            <div key={category.id}>
              <h3 className="text-lg font-semibold text-ink">{t(category.label, locale)}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {spots.map((spot) => (
                  <div key={spot.id} className="rounded-2xl border border-border bg-bg-white p-5">
                    <p className="font-semibold text-ink">{t(spot.name, locale)}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {t(spot.description, locale)}
                    </p>
                    {spot.mapUrl ? (
                      <a
                        href={spot.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-2"
                      >
                        {messages.cta.viewOnMap}
                      </a>
                    ) : (
                      <p className="mt-3 text-xs text-ink-soft">{messages.sightseeing.infoPending}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
