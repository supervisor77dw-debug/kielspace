import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/projekt/", "/api/"],
    },
    sitemap: "https://kielspace.de/sitemap.xml",
  };
}
