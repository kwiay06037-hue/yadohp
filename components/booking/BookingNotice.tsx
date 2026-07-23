import type { Locale, Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function BookingNotice({
  locale,
  messages,
  rulesHref = "/faq",
}: {
  locale: Locale;
  messages: Messages;
  rulesHref?: string;
}) {
  return (
    <p className="max-w-2xl text-sm text-ink-soft">
      {messages.cta.beforeBookingNotice}{" "}
      <a
        href={localizedPath(locale, rulesHref)}
        className="font-medium text-accent underline underline-offset-2"
      >
        {messages.cta.viewFullRules}
      </a>
    </p>
  );
}
