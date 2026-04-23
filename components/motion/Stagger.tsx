"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

type StaggerProps = HTMLMotionProps<"div"> & {
  delayChildren?: number;
  staggerChildren?: number;
};

type ItemProps = HTMLMotionProps<"div"> & {
  y?: number;
};

export function Stagger({
  delayChildren = 0,
  staggerChildren = 0.06,
  children,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ y = 14, children, ...props }: ItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
      }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
