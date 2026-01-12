import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    qualities:[50,75,90,100]
  },
  transpilePackages: ['three'],
};

export default nextConfig;
