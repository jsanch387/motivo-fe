// app/features/Onboarding/api/purchaseBrandKit.ts

import apiClient from "@/lib/api/apiClient";

export async function purchaseBrandKit(): Promise<string> {
  const res = await apiClient.post("/payments/checkout");
  return res.data.url; // Stripe Checkout URL
}
