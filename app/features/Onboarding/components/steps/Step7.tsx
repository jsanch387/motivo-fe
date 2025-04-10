"use client";

import { useEffect, useState } from "react";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { fetchBrandKit } from "../../api/fetchBrandKit";
import { generateBrandKit } from "../../api/generateBrandKit";
import LockedBrandKit from "../../../LockedBrandKit/components/LockedBrandKit/LockedBrandKit";
import { BrandKit } from "../../types/brandKit.type";
import { OnboardingData } from "../../types/onboarding.type";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

export default function Step7({ initialData, onUpdate }: Props) {
  const [loading, setLoading] = useState(true);
  const [kit, setKit] = useState<BrandKit | null>(null);

  useEffect(() => {
    const loadKit = async () => {
      try {
        const updated: Partial<GetOnboardingResponse> = {
          current_step: 7,
        };

        onUpdate(updated);

        const merged: OnboardingData = {
          ...defaultOnboardingData,
          ...initialData,
          ...updated,
          current_step: 7,
        };

        await saveOnboardingProgress(merged);

        // ✅ Generate brand kit (moved from Step 6)
        await generateBrandKit();

        // ✅ Then fetch the finished kit
        const result = await fetchBrandKit();
        setKit(result);
      } catch (err) {
        console.error("❌ Failed to load or generate kit:", err);
      } finally {
        setLoading(false);
      }
    };

    loadKit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-[300px] flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4" />
          <p className="text-gray-300 text-sm">Building your kit…</p>
        </div>
      ) : kit ? (
        <LockedBrandKit brandKit={kit} />
      ) : (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please refresh.
        </p>
      )}
    </>
  );
}

const defaultOnboardingData: OnboardingData = {
  current_step: 1,
  service_type: "",
  location: "",
  readiness_level: "",
  business_name_suggestions: [],
  selected_business_name: "",
  custom_name: "",
  brand_color_options: [],
  selected_color_palette: [],
  logo_style_options: ["Minimal", "Playful", "Bold"],
  selected_logo_style: "",
  selected_logo_id: "",
  services: [],
  tools: [],
  slogan: "",
};
