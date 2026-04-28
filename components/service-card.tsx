import { Code2, Globe, Palette, Search, ShieldCheck, ShoppingCart, Smartphone } from "lucide-react"

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
    <article className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
    </article>
  )
}
