import { Eye } from "lucide-react"
import { Link } from "react-router-dom"

import { site } from "../../config/site.ts"
import { footerCopy, labels, mainNav } from "../../data/content.ts"
import { hours } from "../../data/hours.ts"
import { services } from "../../data/services.ts"
import { HoursList } from "../common/HoursList.tsx"

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
      <path d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.4-1.8 3.3-1.8 2.4 0 4.3 1.6 4.3 5V20z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-white/10">
              <Eye aria-hidden="true" />
            </span>
            <span className="font-serif text-xl text-white">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-white/75">{footerCopy.blurb}</p>
          <div className="mt-5 flex gap-2">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid size-10 place-items-center rounded-full border border-white/20 hover:text-gold"
              >
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold">{footerCopy.quickLinks}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link className="text-white/80 hover:text-white" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-white/80 hover:text-white" to="/book">
                {labels.book}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold">{footerCopy.services}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="text-white/80 hover:text-white" to={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold">{footerCopy.contact}</h2>
          <address className="mt-4 space-y-2 text-sm text-white/80 not-italic">
            <p>
              {site.address.line1}
              <br />
              {site.address.city} {site.address.postcode}
            </p>
            <p>
              <a className="hover:text-white" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
          <h2 className="mt-6 text-sm font-semibold tracking-wide text-gold">{footerCopy.hours}</h2>
          <div className="mt-3 text-white/80 [&_dd]:text-white [&_dt]:text-white/70">
            <HoursList rows={hours} compact />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.year} {site.name}. {footerCopy.rights}
          </p>
          <p className="flex gap-4">
            <Link className="hover:text-white" to="/privacy">
              {footerCopy.privacy}
            </Link>
            <Link className="hover:text-white" to="/cookies">
              {footerCopy.cookies}
            </Link>
          </p>
        </div>
        <p className="container-page pb-6 text-xs leading-5 text-white/60">{footerCopy.disclaimer}</p>
      </div>
    </footer>
  )
}
