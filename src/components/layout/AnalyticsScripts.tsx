import Script from "next/script";
import { siteConfig } from "@/data/siteConfig";

export function AnalyticsScripts() {
  const googleAnalyticsId: string = siteConfig.analytics.googleAnalyticsId;
  const matomoSiteId: string = siteConfig.analytics.matomoSiteId;
  const matomoUrl: string = siteConfig.analytics.matomoUrl;

  return (
    <>
      {googleAnalyticsId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </>
      ) : null}
      {matomoUrl && matomoSiteId ? (
        <Script id="matomo-analytics" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u='${matomoUrl.replace(/\/$/, "")}/';
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '${matomoSiteId}']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      ) : null}
    </>
  );
}
