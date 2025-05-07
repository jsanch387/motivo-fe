// app/features/BrandKitOnboard/api/fetchBrandKitStatus.ts
import { createServerApiClient } from "@/lib/api/serverApiClient";
import { GetOnboardingResponse } from "./fetchOnboardingStatusWithData";

export async function fetchOnboardingStatusWithData(): Promise<GetOnboardingResponse> {
  const apiClient = await createServerApiClient();
  const { data } = await apiClient.get<GetOnboardingResponse>(
    "/onboarding/status"
  );

  return data;
}
