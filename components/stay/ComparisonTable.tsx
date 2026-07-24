import type { Stay } from "@/data/types";
import type { Locale, Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { t } from "@/lib/text";
import Link from "next/link";

function Row({
  label,
  cells,
}: {
  label: string;
  cells: React.ReactNode[];
}) {
  return (
    <tr className="border-b border-border last:border-0">
      <th scope="row" className="sticky left-0 bg-bg-white px-4 py-3 text-left text-sm font-medium text-ink-soft">
        {label}
      </th>
      {cells.map((cell, i) => (
        <td key={i} className="px-4 py-3 text-center text-sm text-ink">
          {cell}
        </td>
      ))}
    </tr>
  );
}

export function ComparisonTable({
  stays,
  locale,
  messages,
}: {
  stays: Stay[];
  locale: Locale;
  messages: Messages;
}) {
  const dash = messages.stays.unconfirmed;
  const yn = (v: boolean) => (v ? messages.stays.yes : messages.stays.no);

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[720px] border-collapse bg-bg-white">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="sticky left-0 bg-bg-white px-4 py-3 text-left text-sm text-ink-soft">
              {messages.stays.compareTableTitle}
            </th>
            {stays.map((stay) => (
              <th key={stay.id} scope="col" className="px-4 py-3 text-center">
                <Link
                  href={localizedPath(locale, `/stays/${stay.slug}`)}
                  className="font-semibold text-main hover:text-accent"
                >
                  {t(stay.name, locale)}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Row
            label={messages.stays.area}
            cells={stays.map((s) => (
              <span key={s.id}>{s.address}</span>
            ))}
          />
          <Row
            label={messages.stays.distanceToBikan}
            cells={stays.map((s) =>
              s.distanceToBikanMeters !== null ? `${s.distanceToBikanMeters}m` : dash
            )}
          />
          <Row
            label={messages.stays.distanceToStation}
            cells={stays.map((s) =>
              s.distanceToStationMeters !== null ? `${s.distanceToStationMeters}m` : dash
            )}
          />
          <Row
            label={messages.stays.maxGuests}
            cells={stays.map((s) => s.maxGuests ?? dash)}
          />
          <Row
            label={messages.stays.bedrooms}
            cells={stays.map((s) => s.bedrooms ?? dash)}
          />
          <Row
            label={messages.stays.bedConfiguration}
            cells={stays.map((s) => (
              <span key={s.id} className="block text-left">
                {s.beds
                  .filter((b) => b.count > 0)
                  .map((b) => `${t(b.type, locale)} ×${b.count}`)
                  .join(" / ")}
              </span>
            ))}
          />
          <Row
            label={messages.stays.bathrooms}
            cells={stays.map((s) =>
              s.bathrooms !== null || s.showers !== null
                ? `${s.bathrooms ?? dash} / ${s.showers ?? dash}`
                : dash
            )}
          />
          <Row
            label={messages.stays.toilets}
            cells={stays.map((s) => s.toilets ?? dash)}
          />
          <Row
            label={messages.stays.parking}
            cells={stays.map((s) =>
              s.parking.distanceMeters !== null ? `${s.parking.distanceMeters}m` : dash
            )}
          />
          <Row
            label={messages.stays.projector}
            cells={stays.map((s) => yn(s.hasProjector))}
          />
          <Row label={messages.stays.tv} cells={stays.map((s) => yn(s.hasTV))} />
          <Row
            label={messages.stays.laundry}
            cells={stays.map((s) => (
              <span key={s.id}>{t(s.laundryType, locale)}</span>
            ))}
          />
          <Row
            label={messages.stays.kidsEquipment}
            cells={stays.map((s) => yn(s.kidsEquipmentAvailable))}
          />
          <Row
            label={messages.stays.stairsNote}
            cells={stays.map((s) => yn(s.hasStairs))}
          />
        </tbody>
      </table>
    </div>
  );
}
