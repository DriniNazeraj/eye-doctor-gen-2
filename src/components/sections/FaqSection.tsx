import { Link } from "react-router-dom"

import { homeCopy } from "../../data/content.ts"
import { faqs } from "../../data/faqs.ts"
import { Reveal, SectionHeading } from "../common/Reveal.tsx"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion.tsx"

export function FaqSection({ linked = true }: { linked?: boolean }) {
  const midpoint = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, midpoint), faqs.slice(midpoint)]

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={homeCopy.faq.eyebrow} title={homeCopy.faq.title} intro={homeCopy.faq.intro} />
          {linked ? (
            <Link className="text-sm font-semibold text-teal" to="/advice">
              {homeCopy.faq.more}
            </Link>
          ) : null}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <Reveal key={columnIndex}>
              <Accordion type="single" collapsible>
                {column.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
