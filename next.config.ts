import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProduction ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
