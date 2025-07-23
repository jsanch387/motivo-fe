// src/api/submitRequestForm.ts
import apiClient from "@/lib/api/apiClient";
import axios from "axios";

// Define the type for the payload sent to the backend
interface ProductRequestPayload {
  email: string;
  niche: string;
  audienceQuestions: string;
}

// Define the type for the successful response from the backend
interface ProductRequestResponse {
  message: string; // Matches your NestJS controller's return type
}

export async function submitRequestForm(
  payload: ProductRequestPayload
): Promise<ProductRequestResponse> {
  try {
    console.log("API: Sending product request to backend...", payload);
    const response = await apiClient.post<ProductRequestResponse>(
      "/onboarding/product-request", // Your backend endpoint path
      payload
    );
    console.log("API: Product request successful!", response.data);
    return response.data;
  } catch (error) {
    // Check if it's an Axios error and if a response was received
    if (axios.isAxiosError(error) && error.response) {
      // Backend validation errors (e.g., from NestJS ValidationPipe)
      // are typically in error.response.data.message
      const errorMessage =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error.response.data as any)?.message ||
        "An unexpected error occurred during submission.";
      throw new Error(
        Array.isArray(errorMessage) ? errorMessage.join(", ") : errorMessage // Join array of messages if present
      );
    }
    // Handle network errors or other unexpected errors
    throw new Error("Network error or unknown issue. Please try again.");
  }
}
