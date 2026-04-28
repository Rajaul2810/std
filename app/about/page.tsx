import type { Metadata } from "next"

import { SectionTitle } from "@/components/section-title"
import { StatsCounter } from "@/components/stats-counter"

export const metadata: Metadata = {
  title: "About | Smart Trend Digital",
  description: "Learn about Smart Trend Digital's mission, vision, values, and team culture.",
}

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="About Us"
        title="Your Long-Term Digital Growth Partner"
        subtitle="Smart Trend Digital helps businesses build modern digital products that perform."
      />
      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Our Story</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We started with a simple belief: every growing business deserves a digital
            presence that looks premium and works reliably. Our team blends design,
            engineering, and SEO into one delivery flow.
          </p>
        </article>
        <article className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Mission &amp; Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Mission: Build digital products that create measurable business impact.
            Vision: Become a trusted technology partner for modern brands globally.
          </p>
        </article>
      </section>
      <section className="space-y-5">
        <h3 className="text-2xl font-semibold">Core Values</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Ownership", "Clarity", "Craft", "Speed"].map((value) => (
            <div key={value} className="rounded-2xl border bg-card p-5 text-center shadow-sm">
              {value}
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-5">
        <h3 className="text-2xl font-semibold">Impact in Numbers</h3>
        <StatsCounter />
      </section>
    </div>
  )
}
