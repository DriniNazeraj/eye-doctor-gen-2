import { Link } from "react-router-dom"

import { homeCopy, labels } from "../../data/content.ts"
import { services } from "../../data/services.ts"
import { ServiceIcon } from "../../lib/icons.tsx"
import { Reveal, SectionHeading } from "../common/Reveal.tsx"

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        {showHeading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={homeCopy.services.eyebrow}
              title={homeCopy.services.title}
              intro={homeCopy.services.intro}
            />
            <Link className="text-sm font-semibold text-teal" to="/services">
              {homeCopy.services.all}
            </Link>
          </div>
        ) : null}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.03}>
              <Link
                to={`/services/${service.slug}`}
                className="flex h-full flex-col rounded-2xl border border-transparent bg-cream p-6 shadow-card transition hover:-translate-y-1 hover:border-teal"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-mint text-teal">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="mt-4 text-xl">{service.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{service.shortDescription}</p>
                <span className="mt-4 text-sm font-semibold text-teal">{labels.learnMore}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
