"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/site-data"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Smart Trend Digital
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted",
                  active ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
