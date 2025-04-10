"use client";

import { BrandService } from "../../../Onboarding/types/brandKit.type";
import { ServiceCard } from "./ServiceCard";

interface Props {
  services: BrandService[];
}

export default function LockedServices({ services }: Props) {
  const userServices = services.filter((s) => s.source === "user");
  const aiServices = services.filter((s) => s.source === "ai").slice(0, 1); // teaser only

  const totalVisible = userServices.length + aiServices.length;
  const lockedCount = Math.max(0, 6 - totalVisible);

  return (
    <div>
      <h4 className="text-white font-bold text-lg mb-2">
        Services You Can Offer
      </h4>
      <p className="text-sm text-gray-400 mb-4">
        These are the services you added, plus a few we recommend to help you
        get started and grow.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {/* ✅ User-added services */}
        {userServices.map((s, i) => (
          <ServiceCard
            key={`user-${i}`}
            title={s.name}
            price={`$${s.price}`}
            source="user"
          />
        ))}

        {aiServices.map((s, i) => (
          <ServiceCard
            key={`ai-${i}`}
            title={s.name}
            price={`$${s.price}`}
            source="ai"
            blurPrice
          />
        ))}

        {/* 🔒 Locked placeholders */}
        {Array.from({ length: lockedCount }).map((_, i) => (
          <div
            key={`locked-${i}`}
            className="bg-zinc-800/50 border border-zinc-700 rounded-xl h-[72px] animate-pulse flex items-center justify-center text-xs text-gray-500"
          >
            🔒 Locked Suggestion
          </div>
        ))}
      </div>
    </div>
  );
}
