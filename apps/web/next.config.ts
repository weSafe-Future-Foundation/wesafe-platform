import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../../"),
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
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/api/**": [
      "./node_modules/.prisma/**/*",
      "../../node_modules/.prisma/**/*",
      "../../node_modules/@prisma/client/**/*",
      "../../libs/database/node_modules/.prisma/**/*",
      "../../libs/database/node_modules/@prisma/client/**/*",
    ],
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
