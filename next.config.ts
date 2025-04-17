import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "vsoqynevbdqmjnppkwlo.supabase.co", // 👈 your Supabase domain
      },
    ],
  },
};

export default nextConfig;
