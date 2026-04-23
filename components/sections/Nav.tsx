"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { LogoMark } from "@/components/ui/LogoMark";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NATIVE,
  useLocale,
  type Locale,
} from "@/lib/locale";
import { cn } from "@/lib/cn";

export function Nav() {
  const { locale, setLocale, copy } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!langOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const pickLocale = (l: Locale) => {
    setLocale(l);
    setLangOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-[background-color,border-color,backdrop-filter] duration-[240ms] [transition-timing-function:var(--ease-standard)]",
        scrolled || menuOpen
          ? "bg-bg/92 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-[64px]">
        <Link
          href="#top"
          aria-label="Vitracosmetics home"
          className="shrink-0 inline-flex items-center gap-2"
        >
          <LogoMark height={24} priority />
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {copy.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.16em] text-ink-muted hover:text-ink transition-colors duration-[180ms]"
            >
              {l.label}
            </a>
          ))}

          <div ref={langRef} className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted hover:text-ink transition-colors"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Choose language"
              onClick={() => setLangOpen((v) => !v)}
            >
              <span>{LOCALE_LABELS[locale]}</span>
              <ChevronDown
                size={11}
                strokeWidth={1.25}
                className={cn(
                  "transition-transform duration-150",
                  langOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  role="listbox"
                  aria-label="Language"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{
                    duration: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute right-0 mt-3 min-w-[200px] rounded-lg bg-bg border border-line/80 shadow-[0_1px_2px_rgba(15,21,32,0.04),0_12px_36px_-12px_rgba(15,21,32,0.18),0_24px_60px_-20px_rgba(15,21,32,0.16)] p-1.5 z-[60] overflow-hidden"
                  style={{ transformOrigin: "top right" }}
                >
                  {LOCALES.map((l) => {
                    const isActive = l === locale;
                    return (
                      <li key={l} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onClick={() => pickLocale(l)}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors duration-[160ms] text-left",
                            isActive
                              ? "bg-bg-soft text-ink"
                              : "text-ink-muted hover:bg-bg-soft hover:text-ink",
                          )}
                        >
                          <span
                            className={cn(
                              "text-[10px] tracking-[0.22em] uppercase font-medium w-6 shrink-0",
                              isActive ? "text-accent-deep" : "text-ink-soft",
                            )}
                          >
                            {LOCALE_LABELS[l]}
                          </span>
                          <span className="flex-1 text-[13px] tracking-[-0.005em] leading-none">
                            {LOCALE_NATIVE[l]}
                          </span>
                          <Check
                            size={13}
                            strokeWidth={2.25}
                            className={cn(
                              "shrink-0 transition-opacity duration-[160ms]",
                              isActive
                                ? "opacity-100 text-accent-deep"
                                : "opacity-0",
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="accent">
            <a href={copy.nav.cta.href}>{copy.nav.cta.label}</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 -mr-2 text-ink"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-line bg-bg"
        >
          <div className="container-x py-6 flex flex-col gap-6">
            {copy.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[16px] uppercase tracking-[0.14em] text-ink font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-5 pt-2 border-t border-line">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => {
                    setLocale(l);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "text-[12px] uppercase tracking-[0.18em] transition-colors",
                    l === locale ? "text-ink" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {LOCALE_LABELS[l]}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <Button asChild size="default" variant="accent" className="w-full">
                <a
                  href={copy.nav.cta.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {copy.nav.cta.label}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
