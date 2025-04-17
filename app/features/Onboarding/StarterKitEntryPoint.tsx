"use client";

import BrandKitDashboardDisplay from "../BrandKitDashboardDisplay/BrandKitDashboardDisplay";
import LockedKitAndFlyer from "../LockedBrandKit/LockedKitAndFlyer";
import { GetOnboardingResponse } from "./api/fetchOnboardingStatusWithData";
import OnboardingFlow from "./OnboardingFlow";

export default function StarterKitEntryPoint({
  serverData,
}: {
  serverData: GetOnboardingResponse;
}) {
  console.log("serverData", serverData);
  if (serverData.brand_kit_status === "completed" && serverData.brand_kit) {
    return serverData.brand_kit.is_paid ? (
      <BrandKitDashboardDisplay brandKit={serverData.brand_kit} />
    ) : (
      <LockedKitAndFlyer
        brandKit={serverData.brand_kit}
        flyerUrl={serverData.flyer_url ?? null}
      />
    );
  }

  return <OnboardingFlow serverData={serverData} />;
}
