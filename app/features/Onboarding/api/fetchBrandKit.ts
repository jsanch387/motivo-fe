import apiClient from "@/lib/api/apiClient";
import { BrandKit } from "../types/brandKit.type";

export const fetchBrandKit = async (): Promise<BrandKit> => {
  const res = await apiClient.get("/onboarding/brand-kit");
  return res.data;
};
