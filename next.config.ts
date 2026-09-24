import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Proxy combines slash, locale, host and legacy alias redirects in one hop.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
