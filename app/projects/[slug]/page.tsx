import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { projects } from "@/lib/site-data"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) {
    return { title: "Project Not Found | Smart Trend Digital" }
  }
  return {
    title: `${project.title} | Smart Trend Digital`,
    description: project.shortDescription,
  }
}

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {project.category}
        </span>
        <h1 className="font-heading text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{project.description}</p>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl border md:h-96">
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" priority />
      </div>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border bg-card p-5">
          <h3 className="font-semibold">Problem</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.problem}</p>
        </article>
        <article className="rounded-2xl border bg-card p-5">
          <h3 className="font-semibold">Solution</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.solution}</p>
        </article>
        <article className="rounded-2xl border bg-card p-5">
          <h3 className="font-semibold">Result</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.result}</p>
        </article>
      </section>

      <section className="rounded-2xl border bg-card p-6">
        <h3 className="text-xl font-semibold">Tech Stack</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-linear-to-r from-primary/10 to-background p-7">
        <h3 className="text-2xl font-semibold">Need similar results for your business?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Let&apos;s discuss your project goals and create a strategy that fits.
        </p>
        <Button asChild className="mt-5">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}
