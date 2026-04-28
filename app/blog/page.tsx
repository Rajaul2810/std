import type { Metadata } from "next"

import { SectionTitle } from "@/components/section-title"

const posts = [
  {
    title: "How to Launch a High-Converting Agency Website",
    excerpt: "Key UI and performance decisions that build instant trust.",
  },
  {
    title: "SEO Foundations Every Business Site Needs",
    excerpt: "Simple technical SEO improvements with strong long-term impact.",
  },
  {
    title: "UI/UX Patterns That Improve Product Retention",
    excerpt: "Design practices that reduce friction and keep users engaged.",
  },
]

export const metadata: Metadata = {
  title: "Blog | Smart Trend Digital",
  description: "Insights on web development, UI/UX, SEO, and digital product growth.",
}

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Blog"
        title="Insights from Smart Trend Digital"
        subtitle="Practical articles on product, design, and growth."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
