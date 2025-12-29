import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add these for GitHub Pages:
  basePath: '/asora-landing',
  assetPrefix: '/asora-landing/',
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;