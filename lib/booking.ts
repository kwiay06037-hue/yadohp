import type { Stay } from "@/data/types";
import { site } from "@/data/site";

const bookingUrls: Record<string, string | undefined> = {
  NEXT_PUBLIC_BOOKING_URL: process.env.NEXT_PUBLIC_BOOKING_URL,
  NEXT_PUBLIC_NAGAYA_BOOKING_URL: process.env.NEXT_PUBLIC_NAGAYA_BOOKING_URL,
  NEXT_PUBLIC_SHIRAKABE_BOOKING_URL: process.env.NEXT_PUBLIC_SHIRAKABE_BOOKING_URL,
  NEXT_PUBLIC_HIDAMARI_BOOKING_URL: process.env.NEXT_PUBLIC_HIDAMARI_BOOKING_URL,
};

export function getBookingUrl(stay: Stay): string | null {
  return bookingUrls[stay.bookingUrlEnvVar] || site.defaultBookingUrl || null;
}
