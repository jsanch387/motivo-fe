// app/features/BrandKitOnboard/api/generateFromAI.ts
import apiClient from "@/lib/api/apiClient";

//best for generating text or json data
export async function generateFromAI<T>(
  type: string,
  body: Record<string, unknown> = {}
): Promise<T> {
  const { data } = await apiClient.post("/ai/generate", body, {
    params: { type },
  });

  return data.result;
}
