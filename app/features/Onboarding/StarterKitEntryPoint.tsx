"use client";

import BrandKitDashboardDisplay from "../BrandKitDashboardDisplay/BrandKitDashboardDisplay";
import LockedBrandKit from "../LockedBrandKit/components/LockedBrandKit/LockedBrandKit";
import { GetOnboardingResponse } from "./api/fetchOnboardingStatusWithData";
import OnboardingFlow from "./OnboardingFlow";

export default function StarterKitEntryPoint({
  serverData,
}: {
  serverData: GetOnboardingResponse;
}) {
  if (serverData.brand_kit_status === "completed" && serverData.brand_kit) {
    return serverData.brand_kit.is_paid ? (
      <BrandKitDashboardDisplay brandKit={serverData.brand_kit} />
    ) : (
      <LockedBrandKit brandKit={serverData.brand_kit} />
    );
  }

  return <OnboardingFlow serverData={serverData} />;
}
