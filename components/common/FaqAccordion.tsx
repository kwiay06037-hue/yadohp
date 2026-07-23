import type { LocalizedText } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/text";

export type FaqEntry = {
  id?: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export function FaqAccordion({
  items,
  locale,
}: {
  items: FaqEntry[];
  locale: Locale;
}) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-bg-white">
      {items.map((item, i) => (
        <details key={item.id ?? i} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none">
            <span>{t(item.question, locale)}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl text-accent transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {t(item.answer, locale)}
          </p>
        </details>
      ))}
    </div>
  );
}
