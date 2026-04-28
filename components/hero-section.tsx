import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-primary/20 via-background to-background p-8 md:p-14">
      <div className="pointer-events-none absolute -top-8 -left-8 size-40 animate-pulse rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-44 animate-pulse rounded-full bg-chart-2/20 blur-3xl" />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Trusted by growing businesses &amp; startups
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            We Build Modern Websites &amp; Apps That Grow Your Business
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Smart Trend Digital is a tech agency specializing in web development,
            mobile apps, UI/UX, SEO, and digital solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="transition-transform hover:scale-105"
            >
              <Link href="/projects">Explore Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center rounded-3xl border bg-card/70 p-8 shadow-lg">
          <div className="absolute -top-3 -left-3 size-12 animate-bounce rounded-2xl bg-primary/20" />
          <div className="absolute -right-3 bottom-8 size-10 animate-bounce rounded-full bg-chart-1/30 [animation-delay:300ms]" />
          <div className="space-y-3 text-center">
            <p className="text-sm text-muted-foreground">Modern Tech Stack</p>
            <p className="font-heading text-2xl font-semibold">Design + Build + Grow</p>
            <p className="text-sm text-muted-foreground">Web, App, UI/UX, SEO</p>
          </div>
        </div>
      </div>
    </section>
  )
}
