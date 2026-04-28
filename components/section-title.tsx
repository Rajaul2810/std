type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
