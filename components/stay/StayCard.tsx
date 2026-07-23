import type { Stay } from "@/data/types";
import type { Locale, Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { t } from "@/lib/text";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { Button } from "@/components/common/Button";

export function StayCard({
  stay,
  locale,
  messages,
}: {
  stay: Stay;
  locale: Locale;
  messages: Messages;
}) {
  const cover = stay.images[0];
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-white">
      <div className="aspect-[4/3] w-full">
        <PlaceholderImage
          src={cover?.src ?? null}
          alt={cover ? t(cover.alt, locale) : t(stay.name, locale)}
          width={cover?.width ?? 1600}
          height={cover?.height ?? 1200}
          priority={cover?.priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{t(stay.name, locale)}</h3>
        <p className="mt-1 text-sm text-ink-soft">{t(stay.concept, locale)}</p>

        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-ink-soft">{messages.stays.maxGuests}</dt>
          <dd className="text-right font-medium text-ink">
            {stay.maxGuests ?? messages.stays.unconfirmed}
          </dd>
          <dt className="text-ink-soft">{messages.stays.stairsNote}</dt>
          <dd className="text-right font-medium text-ink">
            {stay.hasStairs ? messages.stays.yes : messages.stays.no}
          </dd>
          <dt className="text-ink-soft">{messages.stays.parking}</dt>
          <dd className="text-right font-medium text-ink">
            {stay.parking.distanceMeters !== null
              ? `${stay.parking.distanceMeters}m`
              : messages.stays.unconfirmed}
          </dd>
        </dl>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button
            href={localizedPath(locale, `/stays/${stay.slug}`)}
            variant="main"
            className="flex-1"
          >
            {messages.cta.viewDetails}
          </Button>
        </div>
      </div>
    </article>
  );
}
