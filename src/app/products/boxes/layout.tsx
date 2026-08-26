import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TrackingScripts } from "@/components/TrackingScripts";
import { getDictionary } from "@/i18n";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "../../globals.css";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ghostyak Boxes | Windows Desktop Organizer",
    template: "%s | Ghostyak Boxes",
  },
  description:
    "Organize your Windows desktop with Ghostyak Boxes Community or try Boxes Pro free for 30 days.",
  applicationName: "Ghostyak Boxes",
  verification: getSearchEngineVerification(),
};

export default function BoxesLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="ghostyak" data-scroll-behavior="smooth">
      <head>
        <TrackingScripts />
      </head>
      <body className="bg-base-100 text-base-content antialiased">
        <Header
          locale="en"
          labels={dictionary.header}
          homeHref="/"
          featuresHref="/products/boxes#features"
          downloadHref="/products/boxes#download"
          productsHref="/products/boxes"
        />
        {children}
        <Footer labels={dictionary.footer} />
        <Analytics />
      </body>
    </html>
  );
}
