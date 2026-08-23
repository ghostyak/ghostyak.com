import type { Metadata } from "next";
import type { ReactNode } from "react";
import { boxes } from "@/data/products";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const title = "Ghostyak Boxes — 바탕화면을 더 단정하게";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghostyak.com"),
  title,
  description: boxes.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "ghostyak.com",
    title,
    description: boxes.description,
    images: ["/images/boxes-hero-concept-v3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
