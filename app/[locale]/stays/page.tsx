import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/data/site";
import { stays } from "@/data/stays";
import { Section, SectionHeading } from "@/components/common/Section";
import { StayCard } from "@/components/stay/StayCard";
import { ComparisonTable } from "@/components/stay/ComparisonTable";
import { PurposeNav } from "@/components/stay/PurposeNav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  return {
    title: messages.stays.pageTitle,
    description: messages.stays.pageLead,
    alternates: { canonical: `${site.domain}/${locale}/stays` },
  };
}

export default async function StaysPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <>
      <Section tone="white" className="pt-10">
        <SectionHeading title={messages.stays.pageTitle} lead={messages.stays.pageLead} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} locale={locale} messages={messages} />
          ))}
        </div>
      </Section>

      <Section id="compare">
        <SectionHeading title={messages.stays.compareTableTitle} />
        <ComparisonTable stays={stays} locale={locale} messages={messages} />
      </Section>

      <Section tone="white">
        <SectionHeading title={messages.home.purposeTitle} />
        <PurposeNav stays={stays} locale={locale} messages={messages} />
      </Section>
    </>
  );
}
