"use client";

import LockedBrandColors from "./LockedBrandColors";
import LockedLogoAndName from "./LockedLogoAndName";
import LockedServices from "./LockedServices";
import LockedToolsChecklist from "./LockedToolsChecklist";
import { BrandKit } from "../../../Onboarding/types/brandKit.type";
import LockedKitFooter from "./LockedKitFooter";
import OnboardingCard from "@/app/features/Onboarding/components/OnboardingCard";

interface Props {
  brandKit: BrandKit;
}

export default function LockedBrandKit({ brandKit }: Props) {
  return (
    <OnboardingCard title="">
      <div className="space-y-12">
        <LockedLogoAndName
          name={brandKit.business_name}
          logoUrl={brandKit.logo_url}
          slogan={brandKit.slogan}
          serviceType={brandKit.service_type}
        />
        <LockedBrandColors colors={brandKit.brand_colors} />
        <LockedServices services={brandKit.services} />
        <LockedToolsChecklist tools={brandKit.tools} />
      </div>

      <LockedKitFooter />
    </OnboardingCard>
  );
}
