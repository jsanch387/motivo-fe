import apiClient from "@/lib/api/apiClient";

export const generateBrandKit = async () => {
  const res = await apiClient.get("/onboarding/generate");
  return res.data;
};
