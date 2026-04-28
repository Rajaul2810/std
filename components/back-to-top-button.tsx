"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"

export function BackToTopButton() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-22 z-50 rounded-full border bg-background p-3 shadow-md transition hover:scale-105"
    >
      <ArrowUp className="size-4" />
    </button>
  )
}
