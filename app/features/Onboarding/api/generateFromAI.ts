// app/features/BrandKitOnboard/api/generateFromAI.ts

import apiClient from "@/lib/api/apiClient";

//best for generating text or json data
export async function generateFromAI<T>(type: string): Promise<T> {
  const { data } = await apiClient.get("/ai/generate", {
    params: { type },
  });

  return data.result;
}
