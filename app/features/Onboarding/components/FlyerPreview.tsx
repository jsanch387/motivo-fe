"use client";

import Image from "next/image";

type Props = {
  flyerUrl: string;
};

export default function FlyerPreview({ flyerUrl }: Props) {
  return (
    <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white border border-gray-200">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">📣 Your Flyer</h2>
        <p className="text-sm text-gray-500">
          This flyer was generated using your business details. Download it,
          share it, or print it out!
        </p>
      </div>

      <div className="bg-white w-full relative aspect-[3/4]">
        <Image
          src={flyerUrl}
          alt="Generated flyer"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <div className="px-6 py-4 text-right text-xs text-gray-400 border-t border-gray-100">
        Generated with ❤️ by Motivo
      </div>
    </div>
  );
}
