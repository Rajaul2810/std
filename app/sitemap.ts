import type { MetadataRoute } from "next"

import { projects } from "@/lib/site-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smarttrenddigital.com"
  const staticRoutes = ["", "/about", "/services", "/projects", "/contact", "/blog"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  )

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes]
}
