import { Label as RadixLabel } from "@radix-ui/react-label";
import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

// --- Label ------------------------------------------------------------------

export function Label({
  className,
  children,
  htmlFor,
}: {
  className?: string;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <RadixLabel
      htmlFor={htmlFor}
      className={cn(
        "block text-[12px] font-medium tracking-[0.16em] uppercase",
        "text-ink-muted mb-2",
        className,
      )}
    >
      {children}
    </RadixLabel>
  );
}

// --- Shared base style -------------------------------------------------------

const fieldBase = [
  "w-full bg-transparent",
  "border-0 border-b border-line-strong",
  "px-0 py-3",
  "text-[16px] text-ink leading-snug",
  "placeholder:text-ink-soft",
  "transition-colors duration-[180ms] [transition-timing-function:var(--ease-standard)]",
  "focus:outline-none focus:border-ink",
  "aria-[invalid=true]:border-error",
  "disabled:opacity-50",
];

// --- Input ------------------------------------------------------------------

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldBase, className)} {...props} />
));
Input.displayName = "Input";

// --- Textarea ---------------------------------------------------------------

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 3, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(fieldBase, "resize-y min-h-[80px]", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

// --- Select -----------------------------------------------------------------

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        fieldBase,
        "appearance-none cursor-pointer pr-8",
        "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234A5060%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')]",
        "bg-[length:12px] bg-[right_4px_center] bg-no-repeat",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  </div>
));
Select.displayName = "Select";

// --- Checkbox ---------------------------------------------------------------

export const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn(
      "mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer",
      "appearance-none",
      "rounded-[2px] border border-line-strong bg-bg",
      "transition-colors duration-[180ms] [transition-timing-function:var(--ease-standard)]",
      "checked:bg-ink checked:border-ink",
      "checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23FBFAF7%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%2220 6 9 17 4 12%22/></svg>')]",
      "checked:bg-center checked:bg-no-repeat",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2",
      className,
    )}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";

// --- FieldError -------------------------------------------------------------

export function FieldError({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return (
    <p className="mt-2 text-[13px] text-error leading-tight" role="alert">
      {children}
    </p>
  );
}
