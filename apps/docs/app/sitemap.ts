import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { ALL_COMPONENTS, GETTING_STARTED_STEPS } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const gettingStarted: MetadataRoute.Sitemap = GETTING_STARTED_STEPS.map(
    (step) => ({
      url: `${siteConfig.url}/docs/getting-started/${step.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  const components: MetadataRoute.Sitemap = ALL_COMPONENTS.map((component) => ({
    url: `${siteConfig.url}/docs/components/${component.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...home, ...gettingStarted, ...components];
}
