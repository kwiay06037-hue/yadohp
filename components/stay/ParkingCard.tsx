import type { Locale, Messages } from "@/lib/i18n";
import { t } from "@/lib/text";
import type { ParkingInfo } from "@/data/types";

export function ParkingCard({
  parking,
  locale,
  messages,
}: {
  parking: ParkingInfo;
  locale: Locale;
  messages: Messages;
}) {
  return (
    <div className="rounded-2xl border border-border bg-bg-white p-6">
      <dl className="grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-ink-soft">{messages.stayDetail.parkingDistance}</dt>
          <dd className="mt-1 font-medium text-ink">
            {parking.distanceMeters !== null
              ? `${parking.distanceMeters}m`
              : messages.stays.unconfirmed}
          </dd>
        </div>
        {parking.spaces !== null ? (
          <div>
            <dt className="text-sm text-ink-soft">{messages.stayDetail.parkingSpaces}</dt>
            <dd className="mt-1 font-medium text-ink">{parking.spaces}</dd>
          </div>
        ) : null}
        {parking.maxLengthMeters !== null ? (
          <div>
            <dt className="text-sm text-ink-soft">{messages.stayDetail.parkingMaxLength}</dt>
            <dd className="mt-1 font-medium text-ink">{parking.maxLengthMeters}m</dd>
          </div>
        ) : null}
        <div>
          <dt className="text-sm text-ink-soft">{messages.stayDetail.parkingHours}</dt>
          <dd className="mt-1 font-medium text-ink">
            {t(parking.availableFrom, locale)} – {t(parking.availableUntil, locale)}
          </dd>
        </div>
      </dl>
      {parking.notes.length > 0 ? (
        <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-ink-soft">
          {parking.notes.map((note, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true">・</span>
              <span>{t(note, locale)}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
