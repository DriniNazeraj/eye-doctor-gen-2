import { formatAddress, site } from "../../config/site.ts"
import { homeCopy } from "../../data/content.ts"
import { SectionHeading } from "../common/Reveal.tsx"
import { HoursList } from "../common/HoursList.tsx"

export function LocationSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={homeCopy.location.eyebrow} title={homeCopy.location.title} />
          <address className="mt-6 space-y-2 text-sm leading-6 text-muted not-italic">
            <p className="text-base font-semibold text-navy">{formatAddress()}</p>
            <p>
              <a className="text-teal" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="text-teal" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>{homeCopy.location.parking}</p>
          </address>
          <div className="mt-6 max-w-sm">
            <HoursList />
          </div>
        </div>
        <div className="min-h-80 overflow-hidden rounded-2xl bg-mint shadow-card">
          <iframe
            title={homeCopy.location.mapTitle}
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
