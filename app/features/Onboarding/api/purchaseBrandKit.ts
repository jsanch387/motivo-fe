// app/dashboard/starter-kit/api/purchaseBrandKit.ts

import apiClient from "@/lib/api/apiClient";

export const purchaseBrandKit = async (): Promise<void> => {
  try {
    await apiClient.post("/payments/brand-kit");
  } catch (error) {
    // Log for debugging
    console.error("❌ Failed to purchase brand kit:", error);

    // You could format the error here if needed:
    // const message = error.response?.data?.message || "Something went wrong.";

    // Rethrow so the caller (component) can react
    throw error;
  }
};
