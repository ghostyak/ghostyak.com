import type { NextConfig } from "next";
import { pendingTranslationLocales } from "./src/i18n/locales";

// These locale prefixes were previously public. Until a locale is translated
// and published again, preserve inbound links with a temporary redirect to the
// equivalent Korean canonical route instead of returning a locale-only 404.
const pendingTranslationLocalePattern = pendingTranslationLocales.join("|");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/boxes/:path*",
        destination: "/product/boxes",
        permanent: true,
      },
      {
        source: "/ko/products/boxes/:path*",
        destination: "/product/boxes",
        permanent: true,
      },
      {
        source: `/:lang(${pendingTranslationLocalePattern})/products/boxes/:path*`,
        destination: "/product/boxes",
        permanent: false,
      },
      {
        source: "/ko",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ko/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: `/:lang(${pendingTranslationLocalePattern})`,
        destination: "/",
        permanent: false,
      },
      {
        source: `/:lang(${pendingTranslationLocalePattern})/:path*`,
        destination: "/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
