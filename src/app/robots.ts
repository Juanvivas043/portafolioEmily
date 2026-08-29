import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // El endpoint del formulario no aporta nada a un buscador.
      disallow: "/api/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
