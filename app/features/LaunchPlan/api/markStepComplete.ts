import apiClient from "@/lib/api/apiClient";

export async function markStepComplete(stepKey: string): Promise<void> {
  try {
    await apiClient.post(`/launch/${stepKey}/complete`);
  } catch (error) {
    // ✅ Handle axios-style error (or whatever client you're using)
    if (error instanceof Error) {
      console.error(`❌ Failed to mark step complete: ${error.message}`);
    } else {
      console.error(`❌ Failed to mark step complete:`, error);
    }

    // ✅ optionally re-throw for frontend to handle
    throw new Error("Failed to mark step complete. Please try again.");
  }
}
