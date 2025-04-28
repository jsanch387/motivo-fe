"use client";

import BrandKitDashboardDisplay from "@/app/features/BrandKitDashboardDisplay/BrandKitDashboardDisplay";
import BrandKitTabs from "@/app/features/Onboarding/components/BrandKitTabs";
import FlyerPreview from "@/app/features/Onboarding/components/FlyerPreview";
import { BrandKit } from "@/app/features/Onboarding/types/brandKit.type";
import { useState } from "react";

type Props = {
  brandKit: BrandKit;
  flyerUrl: string | null;
};

export default function PaidKitAndFlyer({ brandKit, flyerUrl }: Props) {
  const [view, setView] = useState<"kit" | "flyer">("kit");

  return (
    <div className="max-w-6xl mx-auto sm:px-4 md:px-0 space-y-6">
      {/* Tabs */}
      <BrandKitTabs currentView={view} onTabChange={setView} />

      {/* Content */}
      {view === "kit" ? (
        <BrandKitDashboardDisplay brandKit={brandKit} />
      ) : flyerUrl ? (
        <FlyerPreview flyerUrl={flyerUrl} isPaid={brandKit.is_paid} />
      ) : (
        <p className="text-red-500 text-sm text-center">
          No flyer found. Please contact support.
        </p>
      )}
    </div>
  );
}
