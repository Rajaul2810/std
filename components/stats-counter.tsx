import { cn } from "@/lib/utils"
import { stats } from "@/lib/site-data"

export function StatsCounter({
  className,
  itemClassName,
}: {
  className?: string
  itemClassName?: string
} = {}) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-3", className)}>
      {stats.map((item) => (
        <div
          key={item.label}
          className={cn(
            "rounded-2xl border border-border/60 bg-card p-5 text-center shadow-sm",
            itemClassName
          )}
        >
          <p className="font-heading text-3xl font-bold text-primary">{item.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
