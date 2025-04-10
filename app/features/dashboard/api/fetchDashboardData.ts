import { createServerApiClient } from "@/lib/api/serverApiClient";
import { DashboardResponse } from "../types/dashboard.type";

/**
 * Fetches dashboard data for the logged-in user (SSR-safe).
 */
export async function fetchDashboardData(): Promise<DashboardResponse> {
  const apiClient = await createServerApiClient(); // Automatically attaches auth
  const { data } = await apiClient.get<DashboardResponse>("/dashboard");

  return data;
}
