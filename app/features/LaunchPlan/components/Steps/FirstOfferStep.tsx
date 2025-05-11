"use client";

import { useState } from "react";
import { Copy, Check, Lightbulb } from "lucide-react";

const offers = [
  "20% off your first detail (limited to first 3 customers)",
  "Book 1 detail, get a free interior wipe on your next visit",
  "$10 off your next detail if you refer a friend who books with me",
];

export default function FirstOfferStep() {
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
          Create your first customer offer
        </h3>
        <p className="text-zinc-400 text-sm">
          A simple discount or referral deal is a powerful way to attract your
          first clients and keep them coming back.
        </p>
      </div>

      {/* Why it works */}
      <div className="rounded-lg bg-zinc-800/50 border border-zinc-700 p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <h4 className="text-white text-sm font-semibold">
            Why offer a discount?
          </h4>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-zinc-300 text-sm">
          <li>It lowers the barrier for people to give you a try.</li>
          <li>
            Early customers will spread the word if they feel they got a deal.
          </li>
          <li>
            Offering a referral discount brings that first customer back again!
          </li>
        </ul>
      </div>

      {/* Offer ideas */}
      <div className="space-y-3">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="relative group rounded-lg bg-zinc-800 border border-zinc-700 p-4 pr-10 hover:border-blue-500/30 transition-colors"
          >
            <p className="text-white">{offer}</p>
            <button
              onClick={() => handleCopy(offer, i)}
              className="absolute top-3 right-3 p-1.5 rounded hover:bg-zinc-700 transition-colors"
              aria-label="Copy offer"
            >
              {copiedIndex === i ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-400 group-hover:text-blue-400" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Extra tip */}
      <div className="flex items-center gap-2 p-3 bg-zinc-900/30 rounded-lg border border-zinc-700">
        <Lightbulb className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-zinc-400">
          <span className="font-bold text-white">Pro Tip:</span> Mention your
          deal in your social posts and group replies to get faster responses.
        </p>
      </div>
    </div>
  );
}
