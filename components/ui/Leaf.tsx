import { cn } from "@/lib/cn";

/**
 * Subtle leaf motif — TAO uses a leaf mark across their site as the one
 * organic cue in an otherwise minimalist identity. We echo it as a small,
 * soft sage-coloured ornament in section frames and the footer.
 */
export function Leaf({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("inline-block text-accent-deep", className)}
    >
      <path
        d="M20 4c-6 0-12 3-14 10-1 4 1 7 4 8 6 2 12-3 12-10V4z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M7 17c2-3 5-6 10-9"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
