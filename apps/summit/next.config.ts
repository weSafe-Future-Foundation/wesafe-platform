import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@wesafe/ui",
    "@wesafe/types",
    "@wesafe/api-client",
    "@wesafe/database",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.r2.cloudflarestorage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
