import apiClient from "@/lib/api/apiClient";

export async function uploadSelectedLogo(rawBase64: string): Promise<string> {
  // ✅ Auto-correct if user sends only the base64 portion
  const base64 = rawBase64.startsWith("data:image")
    ? rawBase64
    : `data:image/png;base64,${rawBase64}`;

  const { data } = await apiClient.post<{ url: string }>("/api/upload-logo", {
    base64,
  });

  return data.url;
}
