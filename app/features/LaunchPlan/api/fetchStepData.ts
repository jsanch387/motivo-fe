import apiClient from "@/lib/api/apiClient";

export async function fetchStepData(stepKey: string) {
  try {
    const { data } = await apiClient.get(`/launch/${stepKey}`);
    return data?.data ?? {}; // return only step.data from backend
  } catch (error) {
    console.error(`❌ Failed to fetch step data for ${stepKey}:`, error);
    throw new Error("Unable to load step data. Please try again.");
  }
}
