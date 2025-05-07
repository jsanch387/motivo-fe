"use client";

import { Download } from "lucide-react";
import Image from "next/image";

type Props = {
  flyerUrl: string;
  isPaid: boolean;
};

export default function FlyerPreview({ flyerUrl, isPaid }: Props) {
  const handleDownload = async () => {
    if (!isPaid) return;

    try {
      const response = await fetch(flyerUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Motivo-Flyer.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("❌ Failed to download flyer:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-0">
      <div className="sm:bg-zinc-900 sm:border sm:border-zinc-800 sm:rounded-xl sm:px-6 sm:py-7 px-0 py-0">
        {/* Title + Download */}
        <div className="flex justify-between items-start mb-6 mt-4 sm:mt-0">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
              Your Flyer
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl">
              {isPaid
                ? "Download and start promoting your business!"
                : "Unlock the full version to remove watermarks and download your flyer."}
            </p>
          </div>

          <div className="relative group">
            <button
              type="button"
              onClick={handleDownload}
              className={`p-2 rounded-full border transition ${
                isPaid
                  ? "bg-blue-600 hover:bg-blue-700 border-blue-500 cursor-pointer"
                  : "bg-black/50 border-white/20 cursor-not-allowed"
              }`}
            >
              <Download className="w-5 h-5 text-white" />
            </button>

            {!isPaid && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden group-hover:block w-40 bg-zinc-800 text-gray-300 text-xs text-center rounded-md py-2 px-3 shadow-lg">
                Purchase to download
              </div>
            )}
          </div>
        </div>

        {/* Flyer Image */}
        <div className="w-full flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[90vw] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={flyerUrl}
              alt="Generated flyer"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 500px"
              priority
            />

            {!isPaid && (
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="w-[200%] h-[200%] -left-1/2 -top-1/2 absolute rotate-[-30deg] flex flex-wrap items-center justify-center text-center text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-black/20 select-none leading-snug">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div key={i} className="w-1/4 p-2">
                      🔒 MOTIVO PREVIEW
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
