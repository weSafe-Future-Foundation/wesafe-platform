import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@wesafe/ui",
    "@wesafe/types",
    "@wesafe/api-client",
    "@wesafe/auth",
    "@wesafe/database",
    "@wesafe/marketing",
    "@wesafe/sanity",
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
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google OAuth avatars
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
