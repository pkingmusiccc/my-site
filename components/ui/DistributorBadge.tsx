"use client";

import { asset } from "@/lib/asset";

type Props = {
  label: string;
  width?: number;
  height?: number;
};

/**
 * Rectangular plaque for the "exclusive Swiss distributor" endorsement.
 * Thin antique-gold frame, embossed; warm cream face; localised label above
 * the TAO wordmark. Gradients and relief are intentional (user-requested
 * standout) and override the project's usual flat-surface rule.
 */
export function DistributorBadge({
  label,
  width = 280,
  height = 132,
}: Props) {
  const ring = 3; // thin gold frame
  const radius = 5;

  return (
    <div
      className="relative inline-flex items-center justify-center select-none"
      style={{ width, height }}
      aria-label={label}
      role="img"
    >
      {/* Outer gold frame — linear gradient simulates light catching a bevel. */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: radius,
          backgroundImage:
            "linear-gradient(145deg, #F1DFA8 0%, #D9B870 22%, #B48A38 50%, #7C5A22 72%, #B79155 90%, #E6CE8F 100%)",
          boxShadow: [
            "0 22px 44px -22px rgba(70, 48, 14, 0.55)",
            "0 8px 18px -8px rgba(70, 48, 14, 0.22)",
            "inset 0 1px 0 rgba(255, 240, 200, 0.85)",
            "inset 0 -1px 0 rgba(60, 40, 10, 0.45)",
          ].join(", "),
        }}
      />

      {/* Engraved groove between frame and face. */}
      <div
        className="absolute"
        style={{
          inset: ring - 1,
          borderRadius: Math.max(0, radius - 1),
          background:
            "linear-gradient(145deg, #8A6A2C 0%, #B48A38 50%, #6D5223 100%)",
        }}
      />

      {/* Cream face. */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          inset: ring,
          borderRadius: Math.max(0, radius - 2),
          backgroundImage:
            "radial-gradient(ellipse at 50% 22%, #FDFAF0 0%, #F4ECD5 90%)",
          boxShadow: [
            "inset 0 2px 4px rgba(70, 48, 14, 0.2)",
            "inset 0 -1px 2px rgba(255, 240, 200, 0.55)",
          ].join(", "),
          paddingInline: 22,
          paddingBlock: 16,
        }}
      >
        {/* ornamental dot */}
        <span
          aria-hidden
          className="block rounded-full"
          style={{
            width: 2.5,
            height: 2.5,
            background:
              "linear-gradient(145deg, #E6CE8F 0%, #B48A38 60%, #7C5A22 100%)",
            boxShadow: "0 1px 0 rgba(255,240,200,0.6)",
            marginBottom: 8,
          }}
        />

        {/* localised endorsement */}
        <p
          className="text-center font-semibold uppercase"
          style={{
            fontSize: 9.5,
            lineHeight: 1.4,
            letterSpacing: "0.22em",
            color: "#2A2418",
            maxWidth: width - 60,
          }}
        >
          {label}
        </p>

        {/* thin gold divider */}
        <span
          aria-hidden
          className="block"
          style={{
            width: 44,
            height: 1,
            marginBlock: 9,
            background:
              "linear-gradient(90deg, transparent 0%, #B48A38 50%, transparent 100%)",
          }}
        />

        {/* TAO wordmark — warmed to bronze. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/tao-logo.svg")}
          alt="TAO Cosmetics"
          style={{
            width: 76,
            height: "auto",
            filter:
              "brightness(0) sepia(1) saturate(2.2) hue-rotate(-12deg) brightness(0.58)",
          }}
        />
      </div>
    </div>
  );
}
