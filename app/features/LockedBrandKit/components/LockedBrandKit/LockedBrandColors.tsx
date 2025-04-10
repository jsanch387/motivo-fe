"use client";

interface Props {
  colors: string[];
}

export default function LockedBrandColors({ colors }: Props) {
  return (
    <div>
      <h4 className="text-white font-bold text-lg mb-3">Brand Colors</h4>
      <div className="flex gap-5 items-center mb-3">
        {colors.map((color, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-lg border border-gray-700"
              style={{ backgroundColor: color }}
            />
            <span className="text-xs text-white blur-xs select-none mt-1">
              {color}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        🔒 Unlock to copy and export your color palette
      </p>
    </div>
  );
}
