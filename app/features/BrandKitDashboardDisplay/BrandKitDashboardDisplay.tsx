"use client";

import { useState } from "react";
import ServicesSection from "./ServicesSection/ServicesSection";
import BusinessInfoCard from "./BusinessInfoCard";
import BrandColorsCard from "./BrandColors";
import WhatsNextSection from "./WhatsNextSection";
import { BrandKit } from "../Onboarding/types/brandKit.type";
import ToolsSection from "./ToolsSection/ToolsSection";

interface Props {
  brandKit: BrandKit;
}

export default function BrandKitDashboardDisplay({ brandKit }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (color: string, index: number) => {
    await navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <main className="space-y-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BusinessInfoCard
          name={brandKit.business_name}
          slogan={brandKit.slogan}
          serviceType={brandKit.service_type}
          logoId={brandKit.logo_url}
        />
        <BrandColorsCard
          brandColors={brandKit.brand_colors}
          copiedIndex={copiedIndex}
          handleCopy={handleCopy}
        />
      </div>

      <ServicesSection
        user_services={brandKit.user_services}
        suggested_services={brandKit.suggested_services}
      />

      <ToolsSection
        user_tools={brandKit.user_tools}
        suggested_tools={brandKit.suggested_tools}
      />

      <WhatsNextSection />
    </main>
  );
}
