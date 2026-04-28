import type { Metadata } from "next"
import { Mail, MessageCircle, Phone, Send } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { SectionTitle } from "@/components/section-title"

export const metadata: Metadata = {
  title: "Contact | Smart Trend Digital",
  description: "Contact Smart Trend Digital for websites, mobile apps, UI/UX, and SEO services.",
}

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Contact"
        title="Let&apos;s Talk About Your Project"
        subtitle="Share your idea and we will get back with a clear next step."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-5 rounded-2xl border bg-card p-6 shadow-sm">
          <a className="flex items-center gap-3 rounded-xl border p-4 hover:bg-muted/40" href="mailto:hello@smarttrenddigital.com">
            <Mail className="size-5 text-primary" />
            hello@smarttrenddigital.com
          </a>
          <a className="flex items-center gap-3 rounded-xl border p-4 hover:bg-muted/40" href="https://wa.me/8801000000000" target="_blank" rel="noreferrer">
            <MessageCircle className="size-5 text-primary" />
            WhatsApp Chat
          </a>
          <a className="flex items-center gap-3 rounded-xl border p-4 hover:bg-muted/40" href="tel:+8801000000000">
            <Phone className="size-5 text-primary" />
            +8801XXXXXXXXX
          </a>
          <a className="flex items-center gap-3 rounded-xl border p-4 hover:bg-muted/40" href="#" aria-label="Messenger">
            <Send className="size-5 text-primary" />
            Messenger
          </a>
          <div className="overflow-hidden rounded-xl border">
            <iframe
              title="Google map"
              src="https://maps.google.com/maps?q=Dhaka&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
