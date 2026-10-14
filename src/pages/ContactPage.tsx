import { formatAddress, site } from "../config/site.ts"
import { ContactForm } from "../components/forms/ContactForm.tsx"
import { HoursList } from "../components/common/HoursList.tsx"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { contactCopy, homeCopy, pageCopy } from "../data/content.ts"

export default function ContactPage() {
  return (
    <>
      <Seo title={pageCopy.contact.title} description={pageCopy.contact.description} path="/contact" />
      <PageHero title={pageCopy.contact.title} intro={contactCopy.intro} />
      <div className="container-page grid gap-8 py-14 lg:grid-cols-[1fr_0.9fr]">
        <ContactForm />
        <div className="space-y-6">
          <address className="rounded-2xl bg-white p-6 text-sm leading-6 text-muted not-italic shadow-card">
            <p className="font-semibold text-navy">{formatAddress()}</p>
            <p className="mt-2">
              <a className="text-teal" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="text-teal" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-3">{homeCopy.location.parking}</p>
            <div className="mt-4">
              <HoursList />
            </div>
          </address>
          <div className="min-h-72 overflow-hidden rounded-2xl bg-mint shadow-card">
            <iframe
              title={homeCopy.location.mapTitle}
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </div>
        </div>
      </div>
    </>
  )
}
