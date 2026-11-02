import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Proxy combines slash, locale, host and legacy alias redirects in one hop.
  skipTrailingSlashRedirect: true,
  images: {
    // 95 keeps the smooth gradient of the Notes video poster free of banding.
    qualities: [75, 95],
  },
};

export default nextConfig;
