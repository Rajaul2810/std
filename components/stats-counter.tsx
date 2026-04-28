import { stats } from "@/lib/site-data"

export function StatsCounter() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((item) => (
        <div key={item.label} className="rounded-2xl border bg-card p-5 text-center shadow-sm">
          <p className="font-heading text-3xl font-bold text-primary">{item.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
