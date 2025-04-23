"use client";

import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type BrandColorsCardProps = {
  brandColors: string[];
  copiedIndex: number | null;
  handleCopy: (color: string, index: number) => void;
};

export default function BrandColorsCard({
  brandColors,
  copiedIndex,
  handleCopy,
}: BrandColorsCardProps) {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-6">
      <h3 className="text-lg font-semibold text-white mb-4">Brand Colors</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {brandColors.map((color, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-2"
          >
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-zinc-700"
              style={{ backgroundColor: color }}
            />
            <button
              onClick={() => handleCopy(color, i)}
              className={clsx(
                "flex items-center gap-1 text-sm font-mono transition",
                "text-gray-400 hover:text-white focus:outline-none cursor-pointer"
              )}
            >
              {copiedIndex === i ? (
                <>
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied</span>
                </>
              ) : (
                <>
                  <ClipboardIcon className="w-4 h-4" />
                  <span>{color}</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
