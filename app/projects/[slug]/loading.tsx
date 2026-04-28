export default function LoadingProjectPage() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-48 rounded bg-muted" />
      <div className="h-12 w-2/3 rounded bg-muted" />
      <div className="h-72 rounded-2xl bg-muted md:h-96" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-32 rounded-2xl bg-muted" />
        <div className="h-32 rounded-2xl bg-muted" />
        <div className="h-32 rounded-2xl bg-muted" />
      </div>
    </div>
  )
}
