import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/i18n";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "../../globals.css";

const googleAnalyticsScript = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4STQX7R8EB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4STQX7R8EB');
</script>`;

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
    <html lang="en" data-theme="ghostyak">
      <head>
        <Script id="google-analytics" strategy="beforeInteractive">
          {googleAnalyticsScript}
        </Script>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3416645619145039"
        />
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
