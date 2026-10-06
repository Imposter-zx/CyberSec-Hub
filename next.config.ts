import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "CyberSec-Hub";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && process.env.GITHUB_ACTIONS ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
