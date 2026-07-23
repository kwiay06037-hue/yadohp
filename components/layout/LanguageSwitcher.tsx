"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeLabels, stripLocale } from "@/lib/i18n";
import { useLocale, useMessages } from "@/lib/locale-context";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const messages = useMessages();
  const restPath = stripLocale(pathname);

  return (
    <div className="relative inline-block">
      <label className="sr-only" htmlFor="language-switcher">
        {messages.header.language}
      </label>
      <select
        id="language-switcher"
        className={`cursor-pointer rounded-full border border-border bg-bg-white ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"} text-ink`}
        value={currentLocale}
        onChange={(e) => {
          const target = e.target.value;
          window.location.href = `/${target}${restPath === "/" ? "" : restPath}`;
        }}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeLabels[locale]}
          </option>
        ))}
      </select>
    </div>
  );
}

export function LanguageLinks() {
  const pathname = usePathname();
  const restPath = stripLocale(pathname);
  const currentLocale = useLocale();
  return (
    <ul className="flex flex-wrap gap-3 text-sm">
      {locales.map((locale) => (
        <li key={locale}>
          <Link
            href={`/${locale}${restPath === "/" ? "" : restPath}`}
            className={
              locale === currentLocale
                ? "font-semibold text-white"
                : "text-white/70 hover:text-white"
            }
            aria-current={locale === currentLocale ? "true" : undefined}
          >
            {localeLabels[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
