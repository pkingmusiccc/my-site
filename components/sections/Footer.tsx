"use client";

import { Wordmark } from "@/components/ui/Wordmark";
import { LogoMark } from "@/components/ui/LogoMark";
import { useCopy } from "@/lib/locale";
import { asset } from "@/lib/asset";
import { CONTACT_EMAIL } from "@/content/copy.en";

export function Footer() {
  const copy = useCopy();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-deep text-bg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site information
      </h2>

      <div className="container-x pt-12 md:pt-14 pb-20 md:pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-3">
            <LogoMark height={28} />
            <Wordmark tone="inverse" size="lg" />
          </div>

          <div className="flex flex-col items-center gap-3 pt-6 mt-2 border-t border-bg/15 w-full max-w-[320px]">
            <p className="text-[10px] tracking-[0.22em] uppercase text-bg/55">
              {copy.partner.endorsement}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/tao-logo.svg")}
              alt="TAO Cosmetics"
              width={75}
              height={25}
              className="opacity-70"
              style={{
                height: "18px",
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-flex items-center px-4 min-h-[44px] text-[11px] tracking-[0.22em] uppercase text-bg/80 hover:text-bg transition-colors underline underline-offset-[6px] decoration-bg/25 hover:decoration-bg/60 decoration-1"
          >
            {copy.footer.emailLink}
          </a>

          <p className="text-[11px] tracking-[0.14em] uppercase text-bg/45 mt-2">
            {copy.footer.copyright(year)}
          </p>
        </div>
      </div>
    </footer>
  );
}
