"use client"

import * as React from "react"

import { ProjectCard } from "@/components/project-card"
import type { Project, ProjectCategory } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const filters: Array<"All" | ProjectCategory> = ["All", "Website", "App", "UI/UX", "SEO"]

export function ProjectFilterGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = React.useState<(typeof filters)[number]>("All")

  const filtered =
    active === "All" ? projects : projects.filter((project) => project.category === active)

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              active === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "hover:bg-muted",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
