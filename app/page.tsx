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

      <section className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Built for Trust, Speed, and Long-Term Growth"
            subtitle="We combine product thinking, technical depth, and business outcomes."
          />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>Premium quality design with clean UX patterns</li>
            <li>Transparent process and proactive communication</li>
            <li>Performance-first development and SEO readiness</li>
            <li>Reliable support after launch</li>
          </ul>
        </div>
        <StatsCounter />
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

      <section className="space-y-8">
        <SectionTitle eyebrow="Process" title="How We Deliver" subtitle="A clear process from idea to impact." centered />
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-2xl border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold text-primary">Step {index + 1}</p>
              <p className="mt-2 text-lg font-semibold">{step}</p>
            </div>
          ))}
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
