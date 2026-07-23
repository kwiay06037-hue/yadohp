import type { Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/data/types";

export function t(text: LocalizedText, locale: Locale): string {
  if (locale === "en") return text.en;
  if (locale === "zh-TW") return text.zhTW;
  return text.ja;
}
