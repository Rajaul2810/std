import { MessageCircle } from "lucide-react"

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-500"
    >
      <MessageCircle className="size-4" />
      WhatsApp
    </a>
  )
}
