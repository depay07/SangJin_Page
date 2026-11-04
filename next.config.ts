import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 호스팅용
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
