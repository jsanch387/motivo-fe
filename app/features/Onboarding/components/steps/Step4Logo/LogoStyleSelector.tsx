"use client";

import { Wand2, Smile, Zap } from "lucide-react";

type Props = {
  selectedStyle: string;
  onSelect: (style: string) => void;
};

const LOGO_STYLE_OPTIONS = [
  {
    label: "Modern & Minimalist",
    value: "modern_minimalist",
    icon: <Wand2 size={40} className="text-blue-400" />,
  },
  {
    label: "Friendly & Approachable",
    value: "friendly_approachable",
    icon: <Smile size={40} className="text-green-400" />,
  },
  {
    label: "Bold & High-Impact",
    value: "bold_high_impact",
    icon: <Zap size={40} className="text-yellow-400" />,
  },
];

export default function LogoStyleSelector({ selectedStyle, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
      {LOGO_STYLE_OPTIONS.map(({ label, value, icon }) => (
        <div
          key={value}
          onClick={() => onSelect(value)}
          className={`cursor-pointer rounded-xl border transition p-6 text-center space-y-3 ${
            selectedStyle === value
              ? "border-blue-500 bg-blue-500/10"
              : "border-zinc-700 hover:border-blue-500"
          }`}
        >
          <div className="flex justify-center">{icon}</div>
          <h4 className="text-white font-semibold">{label}</h4>
        </div>
      ))}
    </div>
  );
}
