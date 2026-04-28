import type { Metadata } from "next"
import { Geist_Mono, Roboto, Noto_Sans } from "next/font/google"

import "./globals.css"
import { BackToTopButton } from "@/components/back-to-top-button"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const notoSansHeading = Noto_Sans({ subsets: ["latin"], variable: "--font-heading" })

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Smart Trend Digital | Modern Websites & Apps",
  description:
    "Smart Trend Digital builds high-performance websites, apps, UI/UX systems, and SEO strategies for growing businesses.",
  openGraph: {
    title: "Smart Trend Digital | Modern Websites & Apps",
    description:
      "Premium web, app, UI/UX, and SEO services to help your business grow faster.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable, notoSansHeading.variable)}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
