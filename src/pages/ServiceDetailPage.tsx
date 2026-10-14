import { Link, useParams } from "react-router-dom"

import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { Badge } from "../components/ui/badge.tsx"
import { Button } from "../components/ui/button.tsx"
import { labels, pageCopy } from "../data/content.ts"
import { getService, services } from "../data/services.ts"
import { ServiceIcon } from "../lib/icons.tsx"
import NotFoundPage from "./NotFoundPage.tsx"

export default function ServiceDetailPage() {
  const { slug = "" } = useParams()
  const service = getService(slug)
  if (!service) return <NotFoundPage />

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <Seo title={service.title} description={service.summary} path={`/services/${service.slug}`} />
      <PageHero eyebrow={service.price} title={service.title} intro={service.summary} />
      <article className="container-page grid gap-10 py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <span className="grid size-14 place-items-center rounded-2xl bg-mint text-teal">
            <ServiceIcon name={service.icon} />
          </span>
          <div className="mt-6 space-y-4 leading-7 text-muted">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="mt-8 text-2xl">{pageCopy.services.suitable}</h2>
          <p className="mt-3 leading-7 text-muted">{service.suitableFor}</p>
          <h2 className="mt-8 text-2xl">{pageCopy.services.includes}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-white p-6 shadow-card">
          <p className="text-sm text-muted">{pageCopy.services.fee}</p>
          <p className="mt-1 font-serif text-3xl text-navy">{service.price}</p>
          <p className="mt-2 text-xs text-muted">{service.priceNote}</p>
          <p className="mt-4 text-sm text-navy">{service.duration}</p>
          <Button asChild className="mt-6 w-full">
            <Link to={`/book?service=${service.slug}`}>{labels.bookSentence}</Link>
          </Button>
        </aside>
      </article>
      <section className="bg-white py-14">
        <div className="container-page">
          <h2 className="text-2xl">{pageCopy.services.others}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.slug}`}>
                  <Badge>{item.title}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
