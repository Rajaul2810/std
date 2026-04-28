import { faqs } from "@/lib/site-data"

export function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-2xl border bg-card p-5">
          <summary className="cursor-pointer list-none font-medium">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  )
}
