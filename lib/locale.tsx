"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { copy as en, type Copy } from "@/content/copy.en";
import { copy as de } from "@/content/copy.de";
import { copy as fr } from "@/content/copy.fr";
import { copy as it } from "@/content/copy.it";

export const LOCALES = ["en", "de", "fr", "it"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  it: "IT",
};

export const LOCALE_NATIVE: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

const copies: Record<Locale, Copy> = { en, de, fr, it };

const STORAGE_KEY = "vitra-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  copy: Copy;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && (LOCALES as readonly string[]).includes(stored)) {
        setLocaleState(stored as Locale);
      }
    } catch {
      // localStorage blocked; stick with default.
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // Ignore storage errors.
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, copy: copies[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const c = useContext(LocaleContext);
  if (!c) throw new Error("useLocale must be used inside LocaleProvider");
  return c;
}

export function useCopy() {
  return useLocale().copy;
}
