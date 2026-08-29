import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TrackingScripts } from "@/components/TrackingScripts";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GhostYak | 일상을 정리하는 Windows 소프트웨어",
    template: "%s | GhostYak",
  },
  description:
    "GhostYak은 일상의 Windows 작업 공간을 더 단순하고 편리하게 만드는 소프트웨어를 만듭니다.",
  applicationName: "GhostYak",
  creator: "GhostYak",
  publisher: "GhostYak",
  verification: getSearchEngineVerification(),
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "GhostYak",
    images: [
      {
        url: "/ghostyak.png",
        width: 300,
        height: 300,
        alt: "GhostYak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ghostyak.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko-KR" data-theme="ghostyak" data-scroll-behavior="smooth">
      <head>
        <TrackingScripts />
      </head>
      <body className="flex min-h-screen min-w-80 flex-col bg-base-100 text-base-content antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
