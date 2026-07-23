import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, localeNames, getDictionary, type Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/locale-context";
import { notoSansJP, zenKaku, notoSerifJP, inter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTAController } from "@/components/layout/MobileCTAController";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "ja";
  const messages = getDictionary(locale);

  const languages = Object.fromEntries(
    locales.map((l) => [localeNames[l], `${site.domain}/${l}`])
  );

  return {
    metadataBase: new URL(site.domain),
    title: {
      default: messages.meta.siteTitle,
      template: `%s｜${site.brandName}`,
    },
    description: messages.meta.siteDescription,
    alternates: {
      canonical: `${site.domain}/${locale}`,
      languages: { ...languages, "x-default": `${site.domain}/ja` },
    },
    openGraph: {
      siteName: site.brandName,
      locale: localeNames[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const messages = getDictionary(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    url: site.domain,
    email: site.contactEmail,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brandName,
    url: site.domain,
    inLanguage: localeNames[locale],
  };

  return (
    <html
      lang={locale}
      className={`${notoSansJP.variable} ${zenKaku.variable} ${notoSerifJP.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <LocaleProvider locale={locale} messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-main focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pb-24 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileCTAController />
        </LocaleProvider>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}
