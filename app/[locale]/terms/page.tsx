import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/data/site";
import { termsSections, tokushohoSections } from "@/data/legal";
import { Section, SectionHeading } from "@/components/common/Section";
import { LegalSections } from "@/components/common/LegalSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  return {
    title: messages.terms.pageTitle,
    alternates: { canonical: `${site.domain}/${locale}/terms` },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <Section tone="white" className="pt-10">
      <SectionHeading title={messages.terms.pageTitle} />
      <div className="max-w-2xl space-y-16">
        <LegalSections sections={termsSections} locale={locale} />
        <div>
          <h2 className="mb-6 text-xl font-semibold text-ink">
            {locale === "ja"
              ? "特定商取引法に基づく表記"
              : locale === "en"
                ? "Commercial Transactions Act Notice"
                : "特定商業交易法相關標示"}
          </h2>
          <LegalSections sections={tokushohoSections} locale={locale} />
        </div>
      </div>
    </Section>
  );
}
