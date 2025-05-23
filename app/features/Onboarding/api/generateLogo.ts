import apiClient from "@/lib/api/apiClient";

export async function generateLogo(style: string): Promise<string[]> {
  const { data } = await apiClient.get<{ urls: string[] }>("/ai/logo", {
    params: { style },
  });

  return data.urls;
}
