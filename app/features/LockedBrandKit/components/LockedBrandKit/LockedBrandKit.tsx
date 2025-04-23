"use client";

import LockedBrandColors from "./LockedBrandColors";
import LockedLogoAndName from "./LockedLogoAndName";
import { BrandKit } from "../../../Onboarding/types/brandKit.type";
import LockedKitFooter from "./LockedKitFooter";
import OnboardingCard from "@/app/features/Onboarding/components/OnboardingCard";
import ServicesSection from "@/app/features/BrandKitDashboardDisplay/ServicesSection/ServicesSection";
import ToolsSection from "@/app/features/BrandKitDashboardDisplay/ToolsSection/ToolsSection";

interface Props {
  brandKit: BrandKit;
}

export default function LockedBrandKit({ brandKit }: Props) {
  return (
    <div className="max-w-6xl mx-auto">
      <OnboardingCard title="" showDivider={false}>
        <div className="space-y-12">
          <LockedLogoAndName
            name={brandKit.business_name}
            logoUrl={brandKit.logo_url}
            slogan={brandKit.slogan}
            serviceType={brandKit.service_type}
          />
          <LockedBrandColors colors={brandKit.brand_colors} />
          <ServicesSection
            user_services={brandKit.user_services}
            suggested_services={brandKit.suggested_services}
            isLockedPreview={true}
          />
          <ToolsSection
            user_tools={brandKit.user_tools}
            suggested_tools={brandKit.suggested_tools}
            isLockedPreview={true}
          />
        </div>

        <LockedKitFooter />
      </OnboardingCard>
    </div>
  );
}
