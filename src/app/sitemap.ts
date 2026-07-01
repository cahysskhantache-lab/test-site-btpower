import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const routes = [
  "",
  "/entreprise",
  "/solutions",
  "/savoir-faire",
  "/notre-methode",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
