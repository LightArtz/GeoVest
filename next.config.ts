import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporarily use the simpler `domains` configuration for remote images
    domains: ['mapidstorage.s3.ap-southeast-1.amazonaws.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
