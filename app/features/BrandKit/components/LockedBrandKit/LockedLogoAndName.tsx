"use client";

import { SparklesIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Props {
  name: string;
  logoUrl: string | null;
  serviceType?: string;
}

export default function LockedLogoAndName({
  name,
  logoUrl,
  serviceType,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
      {/* Logo Box */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-xl overflow-hidden border-2 border-gray-300 bg-white flex items-center justify-center">
        {logoUrl ? (
          <>
            {/* Logo with white background - slightly muted */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={logoUrl}
                alt="Preview of your logo"
                fill
                className="object-contain opacity-50"
                unoptimized
              />
            </div>

            {/* Very subtle overlay */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]"></div>

            {/* Lock indicator in bottom-right with text and hover tooltip */}
            <div className="absolute bottom-3 right-3 group">
              <div className="bg-black/80 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm">
                <LockClosedIcon className="h-3.5 w-3.5" />
                <span>Locked</span>
              </div>
              <div className="absolute bottom-10 right-0 bg-black text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                Purchase to unlock downloads
              </div>
            </div>
          </>
        ) : (
          <SparklesIcon className="w-16 h-16 text-gray-500 opacity-40" />
        )}
      </div>

      {/* Business Info */}
      <div className="mt-6 sm:mt-0">
        <h3 className="text-3xl font-bold text-white">{name}</h3>
        {serviceType && (
          <p className="text-gray-500 text-sm mt-2">
            <span className="text-white">{serviceType}</span>
          </p>
        )}
      </div>
    </div>
  );
}
