"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type WordMaskProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  id?: string;
};

/**
 * Reveals a headline word-by-word using a clip-path mask rather than blur.
 * Per §8 of CLAUDE.md — mask-reveal is quiet confidence; blur reads cheap.
 */
export function WordMask({
  text,
  as = "h1",
  className,
  delay = 0,
  stagger = 0.055,
  id,
}: WordMaskProps) {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }
    : {
        hidden: {
          clipPath: "inset(0 0 100% 0)",
          y: "0.3em",
        },
        visible: {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          transition: {
            duration: 0.82,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

  const words = text.split(" ");

  const inner = (
    <>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden
          style={{
            display: "inline-block",
            overflow: "hidden",
            paddingBottom: "0.12em",
            marginBottom: "-0.12em",
          }}
        >
          <motion.span
            variants={word}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </>
  );

  const sharedProps = {
    id,
    className,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-15%" },
    variants: container,
    "aria-label": text,
  };

  // Switch on a fixed set of tags rather than creating a motion component per
  // render. Keeps the react-hooks/static-components lint rule satisfied.
  if (as === "h2") return <motion.h2 {...sharedProps}>{inner}</motion.h2>;
  if (as === "h3") return <motion.h3 {...sharedProps}>{inner}</motion.h3>;
  if (as === "span") return <motion.span {...sharedProps}>{inner}</motion.span>;
  return <motion.h1 {...sharedProps}>{inner}</motion.h1>;
}
