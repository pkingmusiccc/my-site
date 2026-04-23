import Image from "next/image";

export function WaterfallBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/hero-best.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/55 to-transparent md:from-bg/80 md:via-bg/35"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/60 to-transparent md:hidden"
      />
    </div>
  );
}
