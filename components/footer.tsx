import Link from "next/link"
import { Globe, Mail, Phone, Send, MessageCircle, Briefcase } from "lucide-react"

import { navLinks } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-heading text-xl font-bold">Smart Trend Digital</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            We build modern websites and apps that help businesses grow faster.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <a className="flex items-center gap-2 hover:text-foreground" href="mailto:hello@smarttrenddigital.com">
              <Mail className="size-4" /> hello@smarttrenddigital.com
            </a>
            <a className="flex items-center gap-2 hover:text-foreground" href="tel:+8801000000000">
              <Phone className="size-4" /> +8801XXXXXXXXX
            </a>
            <a className="flex items-center gap-2 hover:text-foreground" href="https://wa.me/8801000000000" target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> WhatsApp: +8801XXXXXXXXX
            </a>
            <p>Address: Bangladesh</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <a className="rounded-md border p-2 hover:bg-muted" href="#" aria-label="Website">
              <Globe className="size-4" />
            </a>
            <a className="rounded-md border p-2 hover:bg-muted" href="#" aria-label="Portfolio">
              <Briefcase className="size-4" />
            </a>
            <a className="rounded-md border p-2 hover:bg-muted" href="#" aria-label="Messenger">
              <Send className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
