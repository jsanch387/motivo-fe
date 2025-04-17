// src/api/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000", // Update to your backend's base URL
  // timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Async request interceptor to attach Supabase access token
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const { getAccessToken } = await import("@/lib/supabase/client");
      const token = await getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.warn("⚠️ Could not attach access token:", err);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Optionally handle response errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: auto logout on 401
    // if (error.response?.status === 401) {
    //   console.log("Unauthorized — redirect to login");
    // }
    return Promise.reject(error);
  }
);

export default apiClient;
