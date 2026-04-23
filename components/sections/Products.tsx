"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { useCopy } from "@/lib/locale";

export function Products() {
  const copy = useCopy();
  return (
    <section
      id="lineup"
      aria-labelledby="lineup-heading"
      className="section-y"
    >
      <div className="container-x">
        <div className="mb-12 md:mb-16 text-center">
          <Reveal>
            <h2
              id="lineup-heading"
              className="font-medium text-[26px] md:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.018em]"
            >
              {copy.lineup.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-ink-muted max-w-[56ch] mx-auto">
              {copy.lineup.lead}
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
          {copy.lineup.ranges.map((r) => (
            <StaggerItem key={r.index}>
              <article className="group cursor-default">
                <div
                  className="relative overflow-hidden bg-bg-soft mb-4"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Image
                    src={r.image}
                    alt={`${r.name}, ${r.description}`}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[600ms] [transition-timing-function:var(--ease-standard)] group-hover:scale-[1.08]"
                  />
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent-deep font-semibold">
                    {r.index}
                  </span>
                  <h3 className="font-medium text-[14px] md:text-[15px] tracking-[-0.003em] text-ink">
                    {r.name}
                  </h3>
                </div>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-muted">
                  {r.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
