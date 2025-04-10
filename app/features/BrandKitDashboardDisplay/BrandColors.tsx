"use client";

import Card from "@/app/components/ui/Card";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";

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
    <Card title="Brand Colors">
      <div className="flex flex-wrap gap-4">
        {brandColors.map((color, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg border border-gray-700"
              style={{ backgroundColor: color }}
            />
            <button
              onClick={() => handleCopy(color, i)}
              className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
            >
              {copiedIndex === i ? (
                <>
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <ClipboardIcon className="w-4 h-4" />
                  {color}
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
