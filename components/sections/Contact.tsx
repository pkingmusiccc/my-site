"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "./ContactForm";
import { useCopy } from "@/lib/locale";

export function Contact() {
  const copy = useCopy();
  return (
    <>
      <section
        id="ready"
        aria-labelledby="ready-heading"
        className="section-y bg-bg-soft border-t border-line"
      >
        <div className="container-x">
          <div className="text-center max-w-[780px] mx-auto">
            <Reveal>
              <h2
                id="ready-heading"
                className="font-medium text-[26px] md:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.018em] text-ink max-w-[22ch] mx-auto"
              >
                {copy.ready.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-6">
              <p className="text-[17px] md:text-[18px] leading-[1.6] text-ink-muted max-w-[52ch] mx-auto">
                {copy.ready.sub}
              </p>
            </Reveal>
            <Reveal delay={0.22} className="mt-10 flex justify-center">
              <Button asChild size="lg" variant="accent">
                <a href="#enquiry-form">{copy.ready.ctas.call.label}</a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="enquiry-form"
        aria-labelledby="enquiry-heading"
        className="relative py-20 md:py-28 bg-bg-deep overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(131,178,193,0.18),transparent_55%)]"
        />

        <div className="relative container-x">
          <Reveal>
            <div className="max-w-[680px] mx-auto form-on-dark">
              <div
                className="
                  relative
                  rounded-2xl
                  bg-white/[0.05]
                  backdrop-blur-xl
                  border border-white/[0.10]
                  shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55),0_12px_36px_-12px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]
                  p-6 md:p-10
                "
              >
                <div className="mb-7 md:mb-9 text-center">
                  <h3
                    id="enquiry-heading"
                    className="font-medium text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.015em] text-bg"
                  >
                    {copy.ready.form.heading}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.55] text-bg/65 max-w-[46ch] mx-auto">
                    {copy.ready.form.lead}
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
