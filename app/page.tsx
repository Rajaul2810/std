import { Check } from "lucide-react"
import Link from "next/link"

import { CTASection } from "@/components/cta-section"
import { FAQAccordion } from "@/components/faq-accordion"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SectionTitle } from "@/components/section-title"
import { ServiceCard } from "@/components/service-card"
import { StatsCounter } from "@/components/stats-counter"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { clientLogos, projects, services, testimonials } from "@/lib/site-data"

export default function Page() {
  const featuredProjects = projects.slice(0, 6)
  const processSteps = ["Research", "Design", "Development", "Testing", "Launch", "Support"]

  return (
    <div className="space-y-16 md:space-y-20">
      <HeroSection />

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Services"
          title="Full-Service Digital Execution"
          subtitle="From strategy to launch, we deliver digital products focused on quality and growth."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <SectionTitle
            eyebrow="Case Studies"
            title="Featured Projects"
            subtitle="Selected work showing how we solve real business problems."
          />
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border bg-card p-7 md:p-10">
        <SectionTitle
          eyebrow="Trusted By"
          title="Businesses We Work With"
          subtitle="Trusted by growing businesses and startups across industries."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <div key={logo} className="rounded-xl border bg-background px-4 py-3 text-center text-sm font-medium">
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-y border-primary/10 bg-linear-to-br from-primary/6 via-muted/50 to-chart-2/5 py-14 md:py-20 dark:from-primary/10 dark:via-muted/30 dark:to-chart-2/10">
        <div className="pointer-events-none absolute top-1/2 right-[-5%] size-[min(420px,70vw)] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionTitle
                eyebrow="Why Choose Us"
                title="Built for Trust, Speed, and Long-Term Growth"
                subtitle="We combine product thinking, technical depth, and business outcomes."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Premium quality design with clean UX patterns",
                  "Transparent process and proactive communication",
                  "Performance-first development and SEO readiness",
                  "Reliable support after launch",
                ].map((text) => (
                  <li key={text} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border/50 bg-background/85 p-6 shadow-sm backdrop-blur-md dark:bg-card/70 md:p-8">
              <StatsCounter
                itemClassName="border-border/40 bg-muted/50 shadow-none dark:bg-background/50"
                className="gap-3 sm:grid-cols-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from businesses we helped grow."
          centered
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-primary/10 bg-linear-to-br from-primary/6 via-muted/50 to-chart-2/5 py-14 md:py-20 dark:from-primary/10 dark:via-muted/30 dark:to-chart-2/10">
        <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
          <svg
            className="h-full w-full text-border/35 dark:text-border/25"
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <pattern id="proc-square-bg" width="24" height="24" patternUnits="userSpaceOnUse">
                <path
                  d="M 24 0 L 0 0 0 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  vectorEffect="non-scaling-stroke"
                />
              </pattern>
              <linearGradient id="proc-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.35" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#proc-square-bg)" opacity="0.9" />
            <line x1="0" y1="95" x2="600" y2="95" stroke="url(#proc-line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="205" x2="600" y2="205" stroke="url(#proc-line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="space-y-8">
            <SectionTitle eyebrow="Process" title="How We Deliver" subtitle="A clear process from idea to impact." centered />
            <div className="mx-auto max-w-5xl">
              <ol className="relative space-y-4 md:space-y-5">
                <div className="absolute left-6 top-1 bottom-1 w-px bg-primary/15" aria-hidden />

                {processSteps.map((step, index) => (
                  <li key={step} className="relative flex gap-5 pl-14">
                    <div className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-background/70 text-primary shadow-sm backdrop-blur-sm">
                      <span className="font-heading text-sm font-semibold">{index + 1}</span>
                    </div>

                    <div className="group flex-1 rounded-2xl border border-border/60 bg-background/50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background/85 dark:bg-background/50">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-primary">Step {index + 1}</p>
                          <p className="mt-2 text-lg font-semibold">{step}</p>
                        </div>
                        <div
                          className="hidden size-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-muted-foreground transition-colors group-hover:bg-muted/50 sm:flex"
                          aria-hidden
                        >
                          <span className="font-heading text-base font-bold">•</span>
                        </div>
                      </div>

                      <div
                        className="mt-4 h-px w-full bg-linear-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle eyebrow="Pricing" title="Flexible Engagement" subtitle="Choose a model that fits your growth stage." centered />
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {[
            ["Starter", "For small launches", "$599+"],
            ["Growth", "For growing teams", "$1,499+"],
            ["Scale", "For advanced products", "Custom"],
          ].map(([name, info, price]) => (
            <div key={name} className="rounded-2xl border bg-card p-6 text-center shadow-sm">
              <p className="text-sm text-muted-foreground">{name}</p>
              <p className="mt-2 font-heading text-3xl font-bold">{price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{info}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" centered />
        <FAQAccordion />
      </section>

      <CTASection />
    </div>
  )
}
