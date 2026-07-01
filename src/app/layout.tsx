import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AnalyticsScripts } from "@/components/layout/AnalyticsScripts";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { mediaConfig } from "@/data/mediaConfig";
import { siteConfig } from "@/data/siteConfig";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: mediaConfig.logos.contact.path
  },
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: mediaConfig.home.hero.path,
        width: mediaConfig.home.hero.width,
        height: mediaConfig.home.hero.height,
        alt: mediaConfig.home.hero.alt
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <a
          href="#contenu"
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:shadow-soft"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
