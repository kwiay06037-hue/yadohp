"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { localizedPath } from "@/lib/i18n";
import { useLocale, useMessages } from "@/lib/locale-context";
import { t } from "@/lib/text";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/common/Button";

export function Header() {
  const locale = useLocale();
  const messages = useMessages();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href={localizedPath(locale, "/")}
          className="text-base font-semibold tracking-tight text-main sm:text-lg"
          onClick={() => setOpen(false)}
        >
          {site.brandName}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.key}
              href={localizedPath(locale, item.href)}
              className="text-sm font-medium text-ink hover:text-accent"
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher compact />
          <Button href={localizedPath(locale, "/stays#compare")} variant="accent" size="md">
            {messages.header.checkAvailability}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? messages.header.close : messages.header.menu}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-main"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-bg-white px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-border">
            {primaryNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {t(item.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
