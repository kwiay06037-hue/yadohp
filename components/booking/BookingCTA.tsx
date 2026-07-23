import type { Stay } from "@/data/types";
import type { Locale, Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { getBookingUrl } from "@/lib/booking";
import { Button } from "@/components/common/Button";

export function BookingCTA({
  stay,
  locale,
  messages,
  label,
  size = "lg",
  className = "",
}: {
  stay: Stay;
  locale: Locale;
  messages: Messages;
  label?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const bookingUrl = getBookingUrl(stay);

  if (bookingUrl) {
    return (
      <Button href={bookingUrl} variant="accent" size={size} className={className}>
        {label ?? messages.cta.checkAvailability}
      </Button>
    );
  }

  return (
    <Button
      href={localizedPath(locale, "/contact")}
      variant="accent"
      size={size}
      className={className}
    >
      {messages.cta.bookingComingSoon}
    </Button>
  );
}
