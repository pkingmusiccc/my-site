"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Leaf } from "@/components/ui/Leaf";
import { useCopy } from "@/lib/locale";
import { asset } from "@/lib/asset";

export function Guide() {
  const copy = useCopy();
  return (
    <section
      id="partner"
      aria-labelledby="partner-heading"
      className="section-y"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <p className="eyebrow-accent mb-8">{copy.partner.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                id="partner-heading"
                className="font-medium text-[24px] md:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.018em] text-ink"
                aria-label={copy.partner.headlineAria}
              >
                {copy.partner.headlineBefore && (
                  <span>{copy.partner.headlineBefore}</span>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/tao-logo.svg")}
                  alt=""
                  className="inline-block align-middle h-[0.72em] w-auto mx-1 -translate-y-[0.04em]"
                  style={{ filter: "brightness(0)" }}
                />
                {copy.partner.headlineAfter && (
                  <span>{copy.partner.headlineAfter}</span>
                )}
              </h2>
            </Reveal>

            <Reveal delay={0.22} className="mt-8">
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-ink-muted max-w-[52ch]">
                {copy.partner.lead}
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 mt-14 md:mt-4">
            <Stagger className="space-y-0">
              {copy.partner.bullets.map((b) => (
                <StaggerItem
                  key={b}
                  className="flex items-start gap-5 py-5 border-t border-line last:border-b"
                >
                  <Leaf size={14} className="mt-1.5 shrink-0" />
                  <p className="text-[15px] md:text-[16px] leading-[1.55] text-ink max-w-[44ch]">
                    {b}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <Reveal
          delay={0.3}
          className="mt-16 md:mt-24 pt-10 border-t border-line flex flex-col items-center gap-4"
        >
          <p className="eyebrow">{copy.partner.endorsement}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/tao-logo.svg"
            alt="TAO Cosmetics"
            width={90}
            height={30}
            className="opacity-70"
            style={{ height: "22px", width: "auto" }}
          />
        </Reveal>
      </div>
    </section>
  );
}
