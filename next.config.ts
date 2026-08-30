import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/boxes/:path*",
        destination: "/product/boxes",
        permanent: true,
      },
      {
        source: "/:lang(en|ja|zh|es|de|fr|pt|it)/products/boxes/:path*",
        destination: "/:lang/product/boxes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
