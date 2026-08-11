import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.zentrafinancial.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `https://www.zentrafinancial.com/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
