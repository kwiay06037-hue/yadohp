import type { LegalSection } from "@/data/legal";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/text";

export function LegalSections({
  sections,
  locale,
}: {
  sections: LegalSection[];
  locale: Locale;
}) {
  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <div key={i}>
          <h2 className="text-lg font-semibold text-ink">{t(section.heading, locale)}</h2>
          <div className="mt-2 space-y-2">
            {section.body.map((paragraph, j) => (
              <p key={j} className="text-sm leading-relaxed text-ink-soft">
                {t(paragraph, locale)}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
