"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";

interface Props {
  name: string;
  price: number;
  source: "user" | "ai";
}

export default function ServiceCardView({ name, price, source }: Props) {
  return (
    <div className="relative border border-gray-700 bg-zinc-900 rounded-xl px-4 py-3 text-white text-sm flex justify-between items-center">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-blue-400 font-semibold">${price}</p>
      </div>
      {source === "ai" && <SparklesIcon className="w-5 h-5 text-yellow-300" />}
    </div>
  );
}
