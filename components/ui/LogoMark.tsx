import Image from "next/image";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

const ASPECT = 610 / 470; // source image aspect ratio

/**
 * Brand mark — renders the supplied leaf PNG at a controlled height.
 * Used alongside the Vitracosmetics wordmark in the nav.
 */
export function LogoMark({
  height = 22,
  className,
  priority = false,
}: {
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const width = Math.round(height * ASPECT);
  return (
    <Image
      src={asset("/leaf.png")}
      alt=""
      width={width}
      height={height}
      className={cn("inline-block align-middle", className)}
      priority={priority}
    />
  );
}
