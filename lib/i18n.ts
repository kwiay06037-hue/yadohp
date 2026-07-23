export const locales = ["ja", "en", "zh-TW"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  "zh-TW": "繁體中文",
};

export const localeNames: Record<Locale, string> = {
  ja: "ja-JP",
  en: "en-US",
  "zh-TW": "zh-TW",
};

import ja from "@/messages/ja.json";
import en from "@/messages/en.json";
import zhTW from "@/messages/zh-TW.json";

const dictionaries = { ja, en, "zh-TW": zhTW };

export type Messages = typeof ja;

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale] as Messages;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

/** Strips the leading /{locale} segment from a pathname, returning the locale-agnostic path. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments.shift();
  }
  const rest = segments.join("/");
  return rest ? `/${rest}` : "/";
}
