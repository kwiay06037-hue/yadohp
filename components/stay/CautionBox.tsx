import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import type { Caution } from "@/data/types";

export function CautionBox({ caution, locale }: { caution: Caution; locale: Locale }) {
  const tone =
    caution.severity === "important"
      ? "bg-accent-soft border-accent/40"
      : "bg-bg border-border";
  return (
    <div className={`rounded-2xl border p-5 ${tone}`}>
      <p className="font-semibold text-ink">{t(caution.title, locale)}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
        {t(caution.body, locale)}
      </p>
    </div>
  );
}
