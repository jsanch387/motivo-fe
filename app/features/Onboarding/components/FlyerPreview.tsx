"use client";

import { Download } from "lucide-react";
import Image from "next/image";

type Props = {
  flyerUrl: string;
};

export default function FlyerPreview({ flyerUrl }: Props) {
  return (
    <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-5 sm:px-6 sm:py-7 relative">
      {/* Title */}
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
        Your Flyer
      </h2>
      <p className="text-gray-400 text-sm mb-4 max-w-2xl">
        This is a preview. Unlock the full version to remove watermarks and
        download your flyer.
      </p>

      {/* Flyer Wrapper */}
      <div className="w-full flex justify-center relative">
        <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] rounded-lg overflow-hidden shadow-lg">
          {/* Flyer Image */}
          <Image
            src={flyerUrl}
            alt="Generated flyer"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />

          {/* Watermark Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="w-[200%] h-[200%] -left-1/2 -top-1/2 absolute rotate-[-30deg] flex flex-wrap items-center justify-center text-center text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-black/20 select-none leading-snug">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-1/4 p-2">
                  🔒 MOTIVO PREVIEW
                </div>
              ))}
            </div>
          </div>

          {/* Download Icon (locked) */}
          <div className="absolute top-3 right-3 z-30">
            <div className="group relative flex items-center justify-center">
              <button
                type="button"
                disabled
                className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20 cursor-not-allowed"
              >
                <Download className="w-5 h-5 text-white/70" />
              </button>
              <div className="absolute top-10 hidden group-hover:block w-40 text-center bg-zinc-800 text-gray-300 text-xs rounded-md py-2 px-3 shadow-lg z-50">
                Purchase to download
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
