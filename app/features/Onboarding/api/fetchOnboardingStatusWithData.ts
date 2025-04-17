// app/features/BrandKitOnboard/api/fetchOnboardingStatusWithData.ts
import { createServerApiClient } from "@/lib/api/serverApiClient";
import { OnboardingData } from "@/app/features/Onboarding/types/onboarding.type";
import { BrandKit } from "../types/brandKit.type";

export type GetOnboardingResponse = {
  brand_kit_status: "not_started" | "in_progress" | "completed";
  current_step?: number;
  brand_kit?: BrandKit;
  flyer_url?: string; // ✅ NEW
} & Partial<OnboardingData>;

export async function fetchOnboardingStatusWithData(): Promise<GetOnboardingResponse> {
  const apiClient = await createServerApiClient();
  const { data } = await apiClient.get<GetOnboardingResponse>(
    "/onboarding/status"
  );
  return data;
}
