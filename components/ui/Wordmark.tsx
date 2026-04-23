import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  size?: "sm" | "lg";
  tone?: "ink" | "inverse";
};

/**
 * Wordmark — sans-serif, uppercase with open tracking. TAO-style:
 * a clean typographic mark, no mid-dot, no decorative glyphs. Swap this
 * file's innards when the client supplies a real mark.
 */
export function Wordmark({
  className,
  size = "sm",
  tone = "ink",
}: WordmarkProps) {
  const color = tone === "inverse" ? "text-bg" : "text-ink";
  const sizing =
    size === "lg"
      ? "text-[19px] tracking-[0.18em]"
      : "text-[13px] tracking-[0.22em]";

  return (
    <span
      className={cn(
        "inline-block font-medium uppercase leading-none",
        sizing,
        color,
        className,
      )}
      aria-label="Vitracosmetics"
    >
      Vitracosmetics
    </span>
  );
}
