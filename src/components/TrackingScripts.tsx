import Script from "next/script";

const googleAnalyticsId = "G-4STQX7R8EB";
const googleAdsenseClient = "ca-pub-3416645619145039";

const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${googleAnalyticsId}');
`;

export function TrackingScripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {googleAnalyticsScript}
      </Script>
      <Script
        id="google-adsense"
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsenseClient}`}
        strategy="afterInteractive"
      />
    </>
  );
}
