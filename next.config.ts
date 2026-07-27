import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = process.env.NEXT_PUBLIC_BASE_PATH || "";
if (!repo && isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repoName) {
    repo = `/${repoName}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo || undefined,
  assetPrefix: repo || undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
