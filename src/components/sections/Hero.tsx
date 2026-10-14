import { Link } from "react-router-dom"

import { formatAddress, site } from "../../config/site.ts"
import { homeCopy, labels } from "../../data/content.ts"
import { hoursSummary } from "../../data/hours.ts"
import { media } from "../../data/media.ts"
import { Button } from "../ui/button.tsx"
import { BackgroundVideo } from "../common/VideoFrame.tsx"
import { HoursList } from "../common/HoursList.tsx"

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy text-white">
      <BackgroundVideo media={media.heroVideo} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/20" />
      <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-20">
        <h1 className="max-w-xl text-5xl leading-tight text-white md:text-6xl">{homeCopy.hero.title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">{homeCopy.hero.subtitle}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="white">
            <Link to="/book">{labels.bookSentence}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-navy">
            <Link to="/services">{labels.exploreServices}</Link>
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {homeCopy.hero.chips.map((chip) => (
            <li key={chip} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
              {chip}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-white/70">{hoursSummary}</p>
      </div>
    </section>
  )
}

export function InfoCards() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-24" aria-label={homeCopy.info.hoursTitle}>
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
