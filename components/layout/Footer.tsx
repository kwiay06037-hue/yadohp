"use client";

import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { localizedPath } from "@/lib/i18n";
import { useLocale, useMessages } from "@/lib/locale-context";
import { t } from "@/lib/text";
import { LanguageLinks } from "./LanguageSwitcher";

export function Footer() {
  const locale = useLocale();
  const messages = useMessages();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-main pb-28 pt-14 text-white lg:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:justify-between">
        <div>
          <p className="text-lg font-semibold">{site.brandName}</p>
          <p className="mt-2 text-sm text-white/70">
            {messages.footer.operatedBy}: {site.operatorName}
          </p>
          <p className="mt-1 text-xs text-white/50">
            {messages.footer.brandNameProvisionalNote}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
            {footerNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className="text-white/80 hover:text-white"
                >
                  {t(item.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <LanguageLinks />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-5 pt-6 text-xs text-white/50 sm:px-8">
        &copy; {year} {site.brandName}. {messages.footer.rightsReserved}
      </div>
    </footer>
  );
}
