"use client";

import { useEffect, useState } from "react";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { generateBrandKit } from "../../api/generateBrandKit";
import { fetchBrandKit } from "../../api/fetchBrandKit";
import { BrandKit } from "../../types/brandKit.type";
import { OnboardingData } from "../../types/onboarding.type";
import LockedBrandKit from "../../../LockedBrandKit/components/LockedBrandKit/LockedBrandKit";
import BrandKitTabs from "../BrandKitTabs";
import FlyerPreview from "../FlyerPreview";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

export default function Step7({ initialData, onUpdate }: Props) {
  const [loading, setLoading] = useState(true);
  const [kit, setKit] = useState<BrandKit | null>(null);
  const [view, setView] = useState<"kit" | "flyer">("kit");

  useEffect(() => {
    const loadKit = async () => {
      try {
        const updated: Partial<GetOnboardingResponse> = { current_step: 7 };
        onUpdate(updated);

        // Build a complete onboarding object with all required fields
        const merged: OnboardingData = {
          current_step: 7,

          // Step 1
          service_type: initialData.service_type ?? "",
          location: initialData.location ?? "",
          readiness_level: initialData.readiness_level ?? "",

          // Step 2
          business_name_suggestions:
            initialData.business_name_suggestions ?? [],
          selected_business_name: initialData.selected_business_name ?? "",
          custom_name: initialData.custom_name ?? "",

          // Step 3
          brand_color_options: initialData.brand_color_options ?? [],
          selected_color_palette: initialData.selected_color_palette ?? [],

          // Step 4
          logo_style_options: initialData.logo_style_options ?? [],
          selected_logo_style: initialData.selected_logo_style ?? "",
          selected_logo_id: initialData.selected_logo_id ?? "",

          // Step 5
          services: initialData.services ?? [],

          // Step 6
          tools: initialData.tools ?? [],

          // Step 7
          slogan: initialData.slogan ?? "",
        };

        await saveOnboardingProgress(merged);
        await generateBrandKit();
        const result = await fetchBrandKit();
        setKit(result);
      } catch (err) {
        console.error("❌ Failed to load or generate kit:", err);
      } finally {
        setLoading(false);
      }
    };

    loadKit();
  }, []);

  return (
    <div className="space-y-6">
      {!loading && <BrandKitTabs currentView={view} onTabChange={setView} />}

      {loading ? (
        <div className="min-h-[300px] flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4" />
          <p className="text-gray-300 text-sm">Building your kit…</p>
        </div>
      ) : kit ? (
        view === "kit" ? (
          <LockedBrandKit brandKit={kit} />
        ) : (
          <FlyerPreview brandKit={kit} />
        )
      ) : (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please refresh.
        </p>
      )}
    </div>
  );
}
