import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/data/site";
import { Section, SectionHeading } from "@/components/common/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);
  return {
    title: messages.contact.pageTitle,
    description: messages.contact.pageLead,
    alternates: { canonical: `${site.domain}/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

  return (
    <Section tone="white" className="pt-10">
      <SectionHeading title={messages.contact.pageTitle} lead={messages.contact.pageLead} />
      <div className="max-w-xl">
        <ContactForm />
        <p className="mt-6 text-xs text-ink-soft">
          {messages.contact.directEmailNote} {site.contactEmail}
        </p>
        {site.instagramUrl ? (
          <p className="mt-1 text-xs text-ink-soft">
            {messages.contact.instagramNote}{" "}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-2"
            >
              Instagram
            </a>
          </p>
        ) : null}
      </div>
    </Section>
  );
}
