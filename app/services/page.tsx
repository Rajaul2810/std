import type { Metadata } from "next"

import { CTASection } from "@/components/cta-section"
import { SectionTitle } from "@/components/section-title"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services | Smart Trend Digital",
  description: "Explore web development, app development, UI/UX, SEO, and support services.",
}

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="Services"
        title="Digital Services Built for Growth"
        subtitle="Flexible, outcome-focused services tailored for startups and growing brands."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
      <CTASection />
    </div>
  )
}
