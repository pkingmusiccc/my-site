"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/Button";
import { useCopy } from "@/lib/locale";

export function Plan() {
  const copy = useCopy();
  return (
    <section
      id="path"
      aria-labelledby="path-heading"
      className="section-y bg-bg-soft border-y border-line"
    >
      <div className="container-x">
        <Reveal className="mb-14 md:mb-20 text-center">
          <h2
            id="path-heading"
            className="font-medium text-[24px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.018em]"
          >
            {copy.path.headline}
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          staggerChildren={0.1}
        >
          {copy.path.steps.map((step) => (
            <StaggerItem key={step.index}>
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
                <div className="flex items-baseline gap-4 mb-6 md:mb-7">
                  <span className="font-medium text-[38px] md:text-[46px] leading-none tracking-[-0.025em] text-accent-deep">
                    {step.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-px bg-line-strong flex-1 mb-2 transition-colors duration-[420ms] group-hover:bg-accent"
                  />
                </div>

                <p className="text-[11px] uppercase tracking-[0.2em] text-accent-deep font-semibold mb-3">
                  {step.code}
                </p>
                <h3 className="font-medium text-[19px] md:text-[21px] tracking-[-0.012em] leading-[1.3] text-ink mb-4">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.62] text-ink-muted">
                  {step.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="accent">
            <a href={copy.path.cta.href}>{copy.path.cta.label}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
