"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { useCopy } from "@/lib/locale";

export function Stakes() {
  const copy = useCopy();
  return (
    <section
      id="challenge"
      aria-labelledby="challenge-heading"
      className="section-y bg-bg-soft border-y border-line"
    >
      <div className="container-x">
        <div className="text-center mb-14 md:mb-20">
          <Reveal>
            <h2
              id="challenge-heading"
              className="font-medium text-[26px] md:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.018em] text-ink max-w-[24ch] mx-auto"
            >
              {copy.challenge.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-6">
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-ink-muted max-w-[58ch] mx-auto">
              {copy.challenge.lead}
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {copy.challenge.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <article
                className="
                  group h-full
                  bg-bg rounded-2xl
                  border border-line
                  p-7 md:p-9
                  shadow-[0_1px_2px_rgba(26,26,26,0.04),0_10px_28px_-14px_rgba(26,26,26,0.10)]
                  hover:shadow-[0_2px_6px_rgba(26,26,26,0.06),0_18px_40px_-14px_rgba(26,26,26,0.16)]
                  transition-shadow duration-[420ms] [transition-timing-function:var(--ease-standard)]
                "
              >
                <div className="flex items-baseline gap-4 mb-7 md:mb-8">
                  <span className="font-medium text-[38px] md:text-[46px] leading-none tracking-[-0.025em] text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="h-px bg-line-strong flex-1 mb-2 transition-colors duration-[420ms] group-hover:bg-accent"
                  />
                </div>

                <h3 className="font-medium text-[19px] md:text-[21px] tracking-[-0.012em] leading-[1.3] text-ink mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.62] text-ink-muted">
                  {item.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
