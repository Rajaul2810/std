import Link from "next/link"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="rounded-3xl border border-primary/20 bg-linear-to-r from-primary/15 via-primary/5 to-background p-8 md:p-12">
      <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        Ready to build your next digital product?
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
        Partner with Smart Trend Digital to launch a fast, reliable, and high-converting
        website or app.
      </p>
      <div className="mt-6">
        <Button asChild size="lg" className="transition-transform hover:scale-105">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </section>
  )
}
