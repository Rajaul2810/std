import { ArrowUpRight, Code2, Globe, Palette, Search, ShieldCheck, ShoppingCart, Smartphone } from "lucide-react"
import Link from "next/link"

import type { Service } from "@/lib/site-data"

const iconMap = {
  Globe,
  Smartphone,
  Palette,
  Search,
  ShoppingCart,
  ShieldCheck,
  Code2,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code2

  return (
    <Link
      href="/services"
      aria-label={`${service.title} — view services`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-border/60"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-chart-2/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary/12 dark:to-chart-2/15"
        aria-hidden
      />
      <div className="relative flex flex-1 flex-col">
        <div className="mb-5 inline-flex w-fit rounded-xl border border-primary/15 bg-primary/10 p-3.5 text-primary shadow-sm ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/25 group-hover:bg-primary/15 group-hover:shadow-md">
          <Icon className="size-5" aria-hidden />
        </div>
        <h3 className="font-heading text-lg font-semibold tracking-tight">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <div className="mt-5 flex items-center gap-1 text-xs font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">Learn more</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-linear-to-r from-transparent via-primary/60 to-transparent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
    </Link>
  )
}
