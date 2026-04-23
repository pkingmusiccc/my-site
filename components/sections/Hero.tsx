"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { WaterfallBackground } from "./WaterfallBackground";
import { useCopy } from "@/lib/locale";

export function Hero() {
  const copy = useCopy();
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-bg-soft min-h-[640px] md:min-h-[720px] lg:min-h-[calc(100vh-64px)] flex items-center"
    >
      <WaterfallBackground />

      <div className="relative z-10 container-x w-full pt-[112px] md:pt-[140px] pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <Reveal>
              <p className="eyebrow-accent mb-6 md:mb-8">
                {copy.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                id="hero-heading"
                className="font-medium text-[26px] md:text-[36px] lg:text-[44px] leading-[1.12] tracking-[-0.018em] text-ink max-w-[22ch]"
              >
                {copy.hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.22} className="mt-6 md:mt-8">
              <p className="text-[15px] md:text-[17px] leading-[1.65] text-ink-muted max-w-[52ch]">
                {copy.hero.sub}
              </p>
            </Reveal>
            <Reveal delay={0.34} className="mt-8 md:mt-10">
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <Button asChild size="lg" variant="accent">
                  <a href={copy.hero.primaryCta.href}>
                    {copy.hero.primaryCta.label}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={copy.hero.secondaryCta.href}>
                    {copy.hero.secondaryCta.label}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
