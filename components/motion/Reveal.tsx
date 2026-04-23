"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  delay = 0,
  y = 14,
  children,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.52,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-10%" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
