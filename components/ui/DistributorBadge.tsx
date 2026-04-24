"use client";

import { asset } from "@/lib/asset";

type Props = {
  label: string;
  width?: number;
  height?: number;
};

/**
 * Quiet rectangular frame around the "exclusive Swiss distributor"
 * endorsement and the TAO wordmark. Hairline border, no fill, no relief —
 * reads as a credential, not a trophy.
 */
export function DistributorBadge({
  label,
  width = 280,
  height = 132,
}: Props) {
  return (
    <div
      className="relative inline-flex items-center justify-center select-none border border-line-strong"
      style={{ width, height, borderRadius: 4 }}
      aria-label={label}
      role="img"
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{ paddingInline: 22, paddingBlock: 16 }}
      >
        <p
          className="text-center font-medium uppercase text-ink"
          style={{
            fontSize: 10,
            lineHeight: 1.4,
            letterSpacing: "0.22em",
          }}
        >
          {label}
        </p>

        <span
          aria-hidden
          className="block bg-line-strong"
          style={{ width: 32, height: 1, marginBlock: 12 }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/tao-logo.svg")}
          alt="TAO Cosmetics"
          style={{ width: 76, height: "auto", opacity: 0.85 }}
        />
      </div>
    </div>
  );
}
