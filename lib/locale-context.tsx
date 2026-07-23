"use client";

import { createContext, useContext } from "react";
import type { Locale, Messages } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: LocaleContextValue & { children: React.ReactNode }) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx.locale;
}

export function useMessages(): Messages {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useMessages must be used within LocaleProvider");
  return ctx.messages;
}
