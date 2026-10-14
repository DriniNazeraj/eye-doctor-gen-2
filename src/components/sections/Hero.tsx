import { Link } from "react-router-dom"

import { formatAddress, site } from "../../config/site.ts"
import { homeCopy, labels } from "../../data/content.ts"
import { media } from "../../data/media.ts"
import { Button } from "../ui/button.tsx"
import { BackgroundVideo } from "../common/VideoFrame.tsx"
import { HoursList } from "../common/HoursList.tsx"

export function Hero() {
  return (
    <section className="relative isolate h-[calc(100svh-7rem)] min-h-[24rem] overflow-hidden bg-neutral-200" aria-label={homeCopy.hero.title}>
      <h1 className="sr-only">{homeCopy.hero.title}</h1>
      <div className="absolute inset-0 grayscale">
        <BackgroundVideo media={media.heroVideo} />
      </div>
    </section>
  )
}

export function InfoCards() {
  return (
    <section className="bg-cream py-16 md:py-20" aria-label={homeCopy.info.hoursTitle}>
      <div className="container-page grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="text-xl">{homeCopy.info.hoursTitle}</h2>
          <div className="mt-4">
            <HoursList />
          </div>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="text-xl">{homeCopy.info.appointmentsTitle}</h2>
          <p className="mt-4 leading-7 text-muted">{homeCopy.info.appointmentsBody}</p>
          <Button asChild className="mt-5">
            <Link to="/book">{labels.bookSentence}</Link>
          </Button>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="text-xl">{homeCopy.info.contactTitle}</h2>
          <p className="mt-4 text-sm leading-6 text-navy">
            <a className="font-semibold text-teal" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">{formatAddress()}</p>
          <p className="mt-2 text-sm">
            <a className="text-teal" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}
