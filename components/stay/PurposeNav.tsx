import Link from "next/link";
import type { Stay, ComparisonKey } from "@/data/types";
import type { Locale, Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { t } from "@/lib/text";

const purposes: { key: ComparisonKey; labelKey: keyof Messages["stays"] }[] = [
  { key: "smallChildren", labelKey: "purposeSmallChildren" },
  { key: "largeGroup", labelKey: "purposeLargeGroup" },
  { key: "stairsConcern", labelKey: "purposeStairsConcern" },
  { key: "twoCars", labelKey: "purposeTwoCars" },
  { key: "bikanProximity", labelKey: "purposeBikanProximity" },
  { key: "longStay", labelKey: "purposeLongStay" },
  { key: "projector", labelKey: "purposeProjector" },
];

export function PurposeNav({
  stays,
  locale,
  messages,
}: {
  stays: Stay[];
  locale: Locale;
  messages: Messages;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {purposes.map((purpose) => {
        const matches =
          purpose.key === "stairsConcern"
            ? stays.filter((s) => !s.hasStairs)
            : purpose.key === "projector"
              ? stays.filter((s) => s.hasProjector)
              : stays.filter((s) => s.suitableFor.includes(purpose.key));

        if (matches.length === 0) return null;

        return (
          <div key={purpose.key} className="rounded-2xl border border-border bg-bg-white p-5">
            <p className="font-semibold text-ink">{messages.stays[purpose.labelKey]}</p>
            <ul className="mt-3 space-y-1.5">
              {matches.map((stay) => (
                <li key={stay.id}>
                  <Link
                    href={localizedPath(locale, `/stays/${stay.slug}`)}
                    className="text-sm font-medium text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    {t(stay.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
