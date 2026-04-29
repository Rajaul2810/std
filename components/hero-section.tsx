import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const highlights = ["Web & apps", "UI/UX", "SEO"]

export function HeroSection() {
  return (
    <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-b border-border/40 bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/8 via-transparent to-chart-2/4 dark:from-primary/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[min(520px,80vw)] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-15%] size-[min(400px,70vw)] rounded-full bg-chart-2/15 blur-[100px]"
        aria-hidden
      />

      <svg className="pointer-events-none absolute inset-0 h-full w-full text-border dark:text-border" aria-hidden>
        <defs>
          <pattern id="hero-square-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              vectorEffect="non-scaling-stroke"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-square-grid)" />
      </svg>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl justify-center px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-3 text-center duration-500">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-md">
            Smart Trend Digital
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Digital products that{" "}
            <span className="bg-linear-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
              grow with you
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Web, mobile, UI/UX, and SEO—built for clarity, speed, and outcomes you can measure.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full px-7 shadow-md shadow-primary/20 transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/25"
            >
              <Link href="/contact" className="gap-2">
                Start a project
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-border/80 bg-background/60 px-7 backdrop-blur-sm transition-colors hover:bg-muted/80 dark:bg-background/40"
            >
              <Link href="/projects" className="gap-2">
                View work
                <ArrowUpRight className="size-4 opacity-80" data-icon="inline-end" />
              </Link>
            </Button>
          </div>

          <div className="mx-auto mt-12 flex max-w-lg flex-wrap justify-center gap-2 border-t border-border/40 pt-10">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm dark:bg-muted/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
