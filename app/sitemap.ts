import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;
  const lastModified = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p.priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
