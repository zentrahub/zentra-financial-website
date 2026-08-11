import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.zentrafinancial.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SERVICES.map((service) => ({
      url: `https://www.zentrafinancial.com/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
