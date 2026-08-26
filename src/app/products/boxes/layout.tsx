import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/i18n";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "../../globals.css";

const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RCTJH64');`;

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
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {googleTagManagerScript}
        </Script>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3416645619145039"
        />
      </head>
      <body className="bg-base-100 text-base-content antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RCTJH64"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
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
