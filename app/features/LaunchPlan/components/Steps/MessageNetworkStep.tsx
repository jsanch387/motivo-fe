"use client";

import { useState } from "react";
import { Copy, Check, Lightbulb } from "lucide-react";

// ✅ Accept props from API
interface MessageNetworkStepProps {
  scripts?: string[]; // optional fallback
}

export default function MessageNetworkStep({
  scripts = [],
}: MessageNetworkStepProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-white text-lg font-medium">
          Message your close network
        </h3>
        <p className="text-zinc-400 text-sm">
          Copy one of these friendly message scripts and send to 5 people in
          your circle. Let them know you’re open for business!
        </p>
      </div>

      {/* Message cards */}
      <div className="space-y-3">
        {scripts.length > 0 ? (
          scripts.map((msg, i) => (
            <div
              key={i}
              className="relative group rounded-lg bg-zinc-800 border border-zinc-700 p-4 pr-10 hover:border-blue-500/30 transition-colors"
            >
              <p className="text-white">{msg}</p>
              <button
                onClick={() => handleCopy(msg, i)}
                className="absolute top-3 right-3 p-1.5 rounded hover:bg-zinc-700 transition-colors"
                aria-label="Copy message"
              >
                {copiedIndex === i ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 cursor-pointer" />
                )}
              </button>
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-400">No suggestions available yet.</p>
        )}
      </div>

      {/* Tip box */}
      <div className="flex items-center gap-2 p-3 bg-zinc-900/30 rounded-lg border border-zinc-700">
        <Lightbulb className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-zinc-400">
          <span className="font-bold text-white">Tip: </span> Start with
          friends, family, and neighbors. Ask them to spread the word even if
          they don’t need detailing!
        </p>
      </div>
    </div>
  );
}
