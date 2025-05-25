import apiClient from "@/lib/api/apiClient";

export async function fetchCompletedSteps(): Promise<string[]> {
  const { data } = await apiClient.get("/launch/completed-steps");
  return data;
}
