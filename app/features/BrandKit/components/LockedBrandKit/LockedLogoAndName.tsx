"use client";

import { ArrowDownTrayIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Props {
  name: string;
  logoUrl: string | null;
  slogan?: string;
  serviceType?: string;
}

export default function LockedLogoAndName({
  name,
  logoUrl,
  // slogan,
  serviceType,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
      {/* Logo Box */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-xl overflow-hidden border border-gray-700 bg-zinc-900 flex items-center justify-center">
        {logoUrl ? (
          <>
            <Image
              src={logoUrl}
              alt="Locked Logo"
              fill
              className="object-contain blur-[2px] opacity-60 bg-white"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="rotate-[-25deg] text-gray-500 text-sm font-bold opacity-30">
                Motivo
              </span>
            </div>
          </>
        ) : (
          <SparklesIcon className="w-16 h-16 text-gray-500 opacity-40" />
        )}

        {/* Download Icon Button (Disabled) */}
        <div className="absolute bottom-2 right-2 group cursor-not-allowed">
          <div className="bg-gray-800/80 p-1.5 rounded-full">
            <ArrowDownTrayIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="absolute bottom-8 right-0 bg-black text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
            Unlock your kit to download
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div className="mt-6 sm:mt-0">
        <h3 className="text-3xl font-bold text-white">{name}</h3>

        {/* {slogan && (
          <p className="text-gray-400 text-sm mt-2 italic">{slogan}</p>
        )} */}

        {serviceType && (
          <p className="text-gray-500 text-sm mt-4">
            <span className="text-white">{serviceType}</span>
          </p>
        )}
      </div>
    </div>
  );
}
