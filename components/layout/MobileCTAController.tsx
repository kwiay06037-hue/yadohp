"use client";

import { usePathname } from "next/navigation";
import { stays } from "@/data/stays";
import { getBookingUrl } from "@/lib/booking";
import { localizedPath, stripLocale } from "@/lib/i18n";
import { useLocale, useMessages } from "@/lib/locale-context";
import { MobileCTA } from "./MobileCTA";

export function MobileCTAController() {
  const pathname = usePathname();
  const locale = useLocale();
  const messages = useMessages();
  const rest = stripLocale(pathname);

  const match = rest.match(/^\/stays\/([^/]+)/);
  const stay = match ? stays.find((s) => s.slug === match[1]) : undefined;

  if (!stay) {
    return <MobileCTA />;
  }

  const bookingUrl = getBookingUrl(stay);

  return (
    <MobileCTA
      stay={{
        bookingHref: bookingUrl ?? localizedPath(locale, "/contact"),
        isBookingLive: Boolean(bookingUrl),
        contactHref: localizedPath(locale, "/contact"),
        primaryLabel: messages.cta.contactThisStay,
      }}
    />
  );
}
