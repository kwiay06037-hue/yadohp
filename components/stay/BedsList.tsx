import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/text";
import type { Bed } from "@/data/types";

export function BedsList({ beds, locale }: { beds: Bed[]; locale: Locale }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {beds.map((bed, i) => (
        <li key={i} className="rounded-2xl border border-border bg-bg-white p-5">
          <p className="font-semibold text-ink">
            {t(bed.type, locale)}
            {bed.count > 0 ? (
              <span className="ml-2 font-normal text-ink-soft">× {bed.count}</span>
            ) : null}
          </p>
          <p className="mt-1 text-sm text-ink-soft">{bed.size}</p>
          {bed.note ? (
            <p className="mt-2 text-sm text-ink-soft">{t(bed.note, locale)}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
