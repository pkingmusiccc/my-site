import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Button — pill-shape CTAs. Every variant uses a layered anthracite drop
 * shadow (contact + mid + ambient) — same dark ink rgba across the system so
 * the depth feels consistent regardless of fill colour. Shadow deepens on
 * hover without scale or translate.
 */
const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium text-[12px] leading-none tracking-[0.14em] uppercase",
    "transition-[color,background-color,box-shadow,transform] duration-[220ms] [transition-timing-function:var(--ease-standard)]",
    "disabled:pointer-events-none disabled:opacity-55",
    "rounded-full",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-ink text-bg",
          "shadow-[0_1px_2px_rgba(26,26,26,0.16),0_6px_14px_-4px_rgba(26,26,26,0.22),0_14px_32px_-10px_rgba(26,26,26,0.28)]",
          "hover:bg-[#000] hover:scale-[1.04]",
          "hover:shadow-[0_2px_4px_rgba(26,26,26,0.22),0_10px_22px_-6px_rgba(26,26,26,0.30),0_22px_44px_-12px_rgba(26,26,26,0.36)]",
        ],
        accent: [
          // Plain CSS class with explicit hex values — bypasses any Tailwind
          // utility resolution so the colour is guaranteed to paint.
          "cta-blue text-[#1A1A1A]",
          "shadow-[0_1px_2px_rgba(26,26,26,0.14),0_6px_14px_-4px_rgba(26,26,26,0.20),0_14px_32px_-10px_rgba(26,26,26,0.26)]",
          "hover:scale-[1.04]",
          "hover:shadow-[0_2px_4px_rgba(26,26,26,0.20),0_10px_22px_-6px_rgba(26,26,26,0.28),0_22px_44px_-12px_rgba(26,26,26,0.34)]",
        ],
        outline: [
          "bg-transparent text-ink",
          "shadow-[inset_0_0_0_1px_var(--color-ink),0_2px_6px_-1px_rgba(26,26,26,0.08),0_10px_22px_-8px_rgba(26,26,26,0.12)]",
          "hover:bg-ink hover:text-bg hover:scale-[1.04]",
          "hover:shadow-[inset_0_0_0_1px_var(--color-ink),0_4px_10px_-2px_rgba(26,26,26,0.18),0_16px_32px_-10px_rgba(26,26,26,0.26)]",
        ],
        ghost: [
          "bg-accent-soft text-ink",
          "shadow-[0_1px_2px_rgba(26,26,26,0.08),0_4px_10px_-3px_rgba(26,26,26,0.10),0_10px_22px_-8px_rgba(26,26,26,0.14)]",
          "hover:bg-[color-mix(in_srgb,var(--color-accent-soft)_70%,var(--color-accent)_30%)] hover:scale-[1.04]",
          "hover:shadow-[0_2px_4px_rgba(26,26,26,0.14),0_8px_18px_-4px_rgba(26,26,26,0.18),0_16px_32px_-10px_rgba(26,26,26,0.22)]",
        ],
        link: [
          "bg-transparent text-ink px-0 py-0 h-auto tracking-[0.1em] rounded-none shadow-none",
          "underline decoration-[color-mix(in_srgb,var(--color-ink)_30%,transparent)] underline-offset-[6px] decoration-1",
          "hover:decoration-[var(--color-ink)]",
        ],
      },
      size: {
        sm: "h-9 px-5",
        default: "h-11 px-6",
        lg: "h-12 px-8 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonStyles };
