"use client";

import LockedBrandColors from "./LockedBrandColors";
import LockedLogoAndName from "./LockedLogoAndName";
import { BrandKit } from "../../../Onboarding/types/brandKit.type";
import LockedKitFooter from "./LockedKitFooter";
import ServicesSection from "@/app/features/BrandKitDashboardDisplay/ServicesSection/ServicesSection";
import ToolsSection from "@/app/features/BrandKitDashboardDisplay/ToolsSection/ToolsSection";
import clsx from "clsx";

interface Props {
  brandKit: BrandKit;
  disablePadding?: boolean; // ✅ new prop
}

export default function LockedBrandKit({
  brandKit,
  disablePadding = false,
}: Props) {
  return (
    <div className="max-w-6xl mx-auto mt-4 sm:mt-0">
      <div
        className={clsx(
          "w-full mx-auto",
          disablePadding ? "px-0 py-0" : "px-4 py-5",
          "sm:bg-zinc-900 sm:border sm:border-zinc-800 sm:rounded-xl sm:px-6 sm:py-7"
        )}
      >
        <div className="space-y-12">
          <LockedLogoAndName
            name={brandKit.business_name}
            logoUrl={brandKit.logo_url}
            // slogan={brandKit.slogan}
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
      </div>
    </div>
  );
}
