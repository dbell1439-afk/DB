import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { leadMagnets } from "@/data/leadMagnets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/start-here",
    "/fers-disability-retirement",
    "/ssdi-offset",
    "/fehb",
    "/fegli",
    "/retirement-timeline",
    "/opm-delay-survival",
    "/rif-separation",
    "/veteran-benefits",
    "/calculators",
    "/calculators/fers-disability-estimate",
    "/calculators/fegli-reduction",
    "/calculators/opm-delay-tracker",
    "/toolkits",
    "/books",
    "/watch",
    "/resources",
    "/consultation",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
    "/disclaimer",
    "/not-affiliated",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt || a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/toolkits/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const leadMagnetRoutes = leadMagnets.map((m) => ({
    url: `${base}/free/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...productRoutes,
    ...leadMagnetRoutes,
  ];
}
