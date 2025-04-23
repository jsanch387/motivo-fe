"use client";

import Image from "next/image";

type Props = {
  flyerUrl: string;
};

export default function FlyerPreview({ flyerUrl }: Props) {
  return (
    <div className="max-w-6xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-5 sm:px-6 sm:py-7">
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
        Your Flyer
      </h2>
      <p className="text-gray-400 text-sm mb-4 max-w-2xl">
        This is a preview. Unlock the full version to remove watermarks and
        download.
      </p>

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900">
        {/* Flyer Image */}
        <Image
          src={flyerUrl}
          alt="Generated flyer"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />

        {/* Watermark Grid */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="w-[200%] h-[200%] -left-1/2 -top-1/2 absolute rotate-[-30deg] flex flex-wrap items-center justify-center text-center text-[18px] font-bold text-white/60 select-none leading-snug">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-1/4 p-4">
                🔒 MOTIVO PREVIEW
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 text-right text-xs text-gray-500">
        Generated with ❤️ by Motivo
      </div>
    </div>
  );
}
