"use client";

import PaidKitAndFlyer from "../BrandKit/components/PaidBrandKit/PaidKitAndFlyer";
import LockedKitAndFlyer from "../BrandKit/LockedKitAndFlyer";
import { GetOnboardingResponse } from "./api/fetchOnboardingStatusWithData";
import OnboardingFlow from "./OnboardingFlow";

export default function StarterKitEntryPoint({
  serverData,
}: {
  serverData: GetOnboardingResponse;
}) {
  if (serverData.brand_kit_status === "completed" && serverData.brand_kit) {
    return serverData.brand_kit.is_paid ? (
      <PaidKitAndFlyer
        brandKit={serverData.brand_kit}
        flyerUrl={serverData.flyer_url ?? null}
      />
    ) : (
      <LockedKitAndFlyer
        brandKit={serverData.brand_kit}
        flyerUrl={serverData.flyer_url ?? null}
      />
    );
  }

  return <OnboardingFlow serverData={serverData} />;
}
