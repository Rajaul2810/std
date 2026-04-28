type Testimonial = {
  name: string
  role: string
  quote: string
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-2xl border bg-card p-6 shadow-sm">
      <p className="text-sm leading-relaxed text-muted-foreground">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="mt-4">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </article>
  )
}
