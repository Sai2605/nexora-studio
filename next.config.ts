
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages static export */
  output: "export",
  basePath: "/orqenza-studio",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  /* Existing configuration */
  experimental: {
    agentFeedback: true,
  },

  // cacheComponents: true,
  // partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
