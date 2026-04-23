"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: ReactNode;
  /** Duration of one full loop in seconds. Lower is faster. Default 40s. */
  speed?: number;
  className?: string;
  /** Pause on hover. Default true. */
  pauseOnHover?: boolean;
};

/**
 * Seamless horizontal marquee. Renders the children twice and translates by
 * -50% so the loop is imperceptible. Honours reduced-motion.
 */
export function Marquee({
  children,
  speed = 40,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="flex items-center gap-16">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <motion.div
        className="flex w-max items-center gap-16 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        style={
          pauseOnHover ? { animationPlayState: "running" } : undefined
        }
      >
        <div className="flex items-center gap-16 shrink-0">{children}</div>
        <div
          aria-hidden
          className="flex items-center gap-16 shrink-0"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
