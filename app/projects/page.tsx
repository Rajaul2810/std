import type { Metadata } from "next"

import { ProjectFilterGrid } from "@/components/project-filter-grid"
import { SectionTitle } from "@/components/section-title"
import { projects } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Projects | Smart Trend Digital",
  description: "Browse Smart Trend Digital case studies across website, app, UI/UX, and SEO projects.",
}

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Projects"
        title="Case Studies and Recent Work"
        subtitle="Filter projects by category to explore our delivery quality."
      />
      <ProjectFilterGrid projects={projects} />
    </div>
  )
}
