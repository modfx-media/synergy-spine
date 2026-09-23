import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/wp-admin/",
        "/np-thank-you/",
        "/rof/",
        "/contact-us/thank-you/",
      ],
    },
    sitemap: "https://synergyspineandnerve.com/sitemap.xml",
  };
}
