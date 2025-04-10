// src/app/features/BrandKitOnboard/api/saveOnboardingProgress.ts
import apiClient from "@/lib/api/apiClient";
import { OnboardingData } from "../types/onboarding.type";

export async function saveOnboardingProgress(data: OnboardingData) {
  try {
    const response = await apiClient.post("/onboarding/save", data);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to save onboarding progress:", error);
    throw error;
  }
}
