import apiClient from "@/lib/api/apiClient";

/**
 * Calls the backend /ai/flyer endpoint to generate a flyer.
 * @returns The flyer image URL as a string
 * @throws Error if the generation fails
 */
export async function generateFlyer(): Promise<string> {
  try {
    const response = await apiClient.get<{ url: string }>("/ai/flyer");

    if (!response.data?.url) {
      throw new Error("No flyer URL returned from server");
    }

    return response.data.url;
  } catch (err) {
    console.error("❌ Failed to generate flyer:", err);
    throw new Error("Failed to generate flyer. Please try again.");
  }
}
