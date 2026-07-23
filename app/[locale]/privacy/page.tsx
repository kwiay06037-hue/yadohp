import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/data/site";
import { privacySections } from "@/data/legal";
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
    title: messages.privacy.pageTitle,
    alternates: { canonical: `${site.domain}/${locale}/privacy` },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <Section tone="white" className="pt-10">
      <SectionHeading title={messages.privacy.pageTitle} />
      <div className="max-w-2xl">
        <LegalSections sections={privacySections} locale={locale} />
        <p className="mt-10 text-xs text-ink-soft">
          {locale === "ja"
            ? "お問い合わせ先: "
            : locale === "en"
              ? "Contact: "
              : "聯絡窗口："}
          {site.contactEmail}
        </p>
      </div>
    </Section>
  );
}
