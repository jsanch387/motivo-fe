"use client";

import { useState } from "react";
import BrandKitTabs from "../Onboarding/components/BrandKitTabs";
import LockedBrandKit from "./components/LockedBrandKit/LockedBrandKit";
import FlyerPreview from "../Onboarding/components/FlyerPreview";
import { BrandKit } from "../Onboarding/types/brandKit.type";

type Props = {
  brandKit: BrandKit;
  flyerUrl: string | null;
};

export default function LockedKitAndFlyer({ brandKit, flyerUrl }: Props) {
  const [view, setView] = useState<"kit" | "flyer">("kit");

  return (
    <div className="space-y-6">
      <BrandKitTabs currentView={view} onTabChange={setView} />

      {view === "kit" ? (
        <LockedBrandKit brandKit={brandKit} />
      ) : flyerUrl ? (
        <FlyerPreview flyerUrl={flyerUrl} />
      ) : (
        <p className="text-red-500 text-sm text-center">
          Could not load flyer preview.
        </p>
      )}
    </div>
  );
}
