"use client";

import Card from "@/app/components/ui/Card";
import { useState } from "react";
import ServicesSection from "./ServicesSection";
import ToolsChecklistSection from "./ToolsChecklistSection";
import BusinessInfoCard from "./BusinessInfoCard";
import BrandColorsCard from "./BrandColors";
import WhatsNextSection from "./WhatsNextSection";
import { BrandKit } from "../Onboarding/types/brandKit.type";

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
    <main className="space-y-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BusinessInfoCard
          name={brandKit.business_name}
          slogan={brandKit.slogan}
          serviceType={brandKit.service_type}
          logoId={brandKit.id}
        />
        <BrandColorsCard
          brandColors={brandKit.brand_colors}
          copiedIndex={copiedIndex}
          handleCopy={handleCopy}
        />
      </div>

      <Card title="Services & Pricing">
        <ServicesSection services={brandKit.services} />
      </Card>

      <Card title="Tools & Checklist">
        <ToolsChecklistSection tools={brandKit.tools} />
      </Card>

      <WhatsNextSection />
    </main>
  );
}
