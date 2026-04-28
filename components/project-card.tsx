import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/site-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 w-full">
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.shortDescription}</p>
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link href={`/projects/${project.slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
