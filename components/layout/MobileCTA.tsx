"use client";

import { localizedPath } from "@/lib/i18n";
import { useLocale, useMessages } from "@/lib/locale-context";
import { Button } from "@/components/common/Button";

type StayCta = {
  bookingHref: string;
  isBookingLive: boolean;
  contactHref: string;
  primaryLabel: string;
};

export function MobileCTA({ stay }: { stay?: StayCta }) {
  const locale = useLocale();
  const messages = useMessages();

  const primaryHref = stay
    ? stay.isBookingLive
      ? stay.bookingHref
      : stay.contactHref
    : localizedPath(locale, "/stays#compare");
  const primaryLabel = stay
    ? stay.isBookingLive
      ? stay.primaryLabel
      : messages.cta.bookingComingSoon
    : messages.cta.checkAvailability;
  const secondaryHref = stay
    ? stay.contactHref
    : localizedPath(locale, "/stays");
  const secondaryLabel = stay
    ? messages.cta.contactThisStayInquiry
    : messages.cta.compareStaysShort;

  return (
    <div
      data-mobile-cta
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg-white/95 px-4 py-3 backdrop-blur lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl gap-3">
        <Button href={primaryHref} variant="accent" size="lg" className="flex-1">
          {primaryLabel}
        </Button>
        <Button href={secondaryHref} variant="outline" size="lg" className="flex-1 bg-bg-white">
          {secondaryLabel}
        </Button>
      </div>
    </div>
  );
}
