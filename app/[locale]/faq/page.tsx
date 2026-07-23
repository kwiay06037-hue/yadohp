import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import { site } from "@/data/site";
import { stays, commonRules } from "@/data/stays";
import { commonFaq } from "@/data/faq";
import { Section, SectionHeading } from "@/components/common/Section";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { CautionBox } from "@/components/stay/CautionBox";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  return {
    title: messages.faq.pageTitle,
    description: messages.faq.pageLead,
    alternates: { canonical: `${site.domain}/${locale}/faq` },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  const allFaqEntries = [
    ...commonFaq,
    ...stays.flatMap((stay) => stay.faq),
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqEntries.map((item) => ({
      "@type": "Question",
      name: t(item.question, locale),
      acceptedAnswer: { "@type": "Answer", text: t(item.answer, locale) },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Section tone="white" className="pt-10">
        <SectionHeading title={messages.faq.pageTitle} lead={messages.faq.pageLead} />

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-ink">{messages.faq.commonTitle}</h3>
            <FaqAccordion items={commonFaq} locale={locale} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-ink">
              {locale === "ja"
                ? "3施設共通の宿泊ルール"
                : locale === "en"
                  ? "House rules shared by all 3 properties"
                  : "三館共通住宿規則"}
            </h3>
            <div className="space-y-3">
              {commonRules.map((rule, i) => (
                <CautionBox key={i} caution={rule} locale={locale} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-ink">{messages.faq.stayTitle}</h3>
            <div className="space-y-8">
              {stays.map((stay) => (
                <div key={stay.id}>
                  <p className="mb-3 font-medium text-ink">{t(stay.name, locale)}</p>
                  <FaqAccordion items={stay.faq} locale={locale} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
