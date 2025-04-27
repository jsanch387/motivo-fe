"use client";

import { useEffect, useState } from "react";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { generateBrandKit } from "../../api/generateBrandKit";
import { fetchBrandKit } from "../../api/fetchBrandKit";
import { BrandKit } from "../../types/brandKit.type";
import { OnboardingData } from "../../types/onboarding.type";
import { generateFlyer } from "../../api/generateFlyer";
import LockedKitAndFlyer from "@/app/features/LockedBrandKit/LockedKitAndFlyer";
import Button from "@/app/components/ui/Button";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

export default function Step7({ initialData, onUpdate }: Props) {
  const [loading, setLoading] = useState(true);
  const [kit, setKit] = useState<BrandKit | null>(null);
  const [flyerUrl, setFlyerUrl] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [kitError, setKitError] = useState(false);
  const [flyerError, setFlyerError] = useState(false);

  const [kitLoading, setKitLoading] = useState(false);
  const [flyerLoading, setFlyerLoading] = useState(false);

  useEffect(() => {
    loadEverything();
  }, []);

  const loadEverything = async () => {
    setLoading(true);

    await Promise.all([loadBrandKit(), loadFlyer()]);

    setLoading(false);
  };

  const loadBrandKit = async () => {
    setKitLoading(true);
    setKitError(false);

    try {
      const updated: Partial<GetOnboardingResponse> = { current_step: 7 };
      onUpdate(updated);

      const merged: OnboardingData = {
        current_step: 7,
        service_type: initialData.service_type ?? "",
        location: initialData.location ?? "",
        readiness_level: initialData.readiness_level ?? "",
        business_name_suggestions: initialData.business_name_suggestions ?? [],
        selected_business_name: initialData.selected_business_name ?? "",
        custom_name: initialData.custom_name ?? "",
        brand_color_options: initialData.brand_color_options ?? [],
        selected_color_palette: initialData.selected_color_palette ?? [],
        logo_style_options: initialData.logo_style_options ?? [],
        selected_logo_style: initialData.selected_logo_style ?? "",
        selected_logo_url: initialData.selected_logo_url ?? "",
        services: initialData.services ?? [],
        tools: initialData.tools ?? [],
        slogan: initialData.slogan ?? "",
      };

      await saveOnboardingProgress(merged);

      await generateBrandKit();
      const fetchedKit = await fetchBrandKit();
      setKit(fetchedKit);
    } catch (err) {
      console.error("❌ Failed to generate brand kit:", err);
      setKitError(true);
    } finally {
      setKitLoading(false);
    }
  };

  const loadFlyer = async () => {
    setFlyerLoading(true);
    setFlyerError(false);

    try {
      const flyer = await generateFlyer();
      setFlyerUrl(flyer);
    } catch (err) {
      console.error("❌ Failed to generate flyer:", err);
      setFlyerError(true);
    } finally {
      setFlyerLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="min-h-[300px] flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4" />
          <p className="text-gray-300 text-sm">Building your kit…</p>
        </div>
      ) : kit ? (
        <div className="space-y-4">
          <LockedKitAndFlyer
            brandKit={kit}
            flyerUrl={flyerUrl}
            flyerLoading={flyerLoading}
            flyerError={flyerError}
            onRetryFlyer={loadFlyer}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-red-500 text-sm text-center">
            Failed to build your Brand Kit. Please try again.
          </p>
          <Button type="primary" onClick={loadBrandKit} disabled={kitLoading}>
            {kitLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Retrying...
              </div>
            ) : (
              "Try Again"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
