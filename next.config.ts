import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  compiler: {
    removeConsole: true, 
    reactRemoveProperties: true, 
  },
  swcMinify: true, 
  experimental: {
    optimizeCss: true, 
  },
};

export default nextConfig;
