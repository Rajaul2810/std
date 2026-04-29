import { Quote } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  quote: string
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-md">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-chart-2/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
            <Quote className="size-5" aria-hidden />
          </div>
        </div>

        <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {testimonial.quote}
        </blockquote>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-heading font-semibold tracking-tight">{testimonial.name}</p>
            <p className="mt-1 truncate text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
          <div className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/60 text-muted-foreground/70 sm:inline-flex">
            <span className="font-heading text-lg font-bold">“ ”</span>
          </div>
        </div>

        <div
          className="pointer-events-none absolute left-0 top-full h-px w-full origin-left scale-x-0 bg-linear-to-r from-transparent via-primary/50 to-transparent transition-transform duration-300 group-hover:scale-x-100"
          aria-hidden
        />
      </div>
    </article>
  )
}
