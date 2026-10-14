import { MapPin, Phone } from "lucide-react"

import { formatAddress, site } from "../../config/site.ts"

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  )
}

export function TopBar() {
  const socials = site.social.filter((item) => item.label === "Facebook" || item.label === "Instagram")

  return (
    <div className="bg-navy text-[13px] text-white">
      <div className="mx-auto flex h-10 w-[min(1240px,calc(100%-2.5rem))] items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-5">
          <p className="hidden min-w-0 items-center gap-2 sm:flex">
            <MapPin aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={1.75} />
            <span className="truncate">{formatAddress()}</span>
          </p>
          <a className="inline-flex shrink-0 items-center gap-2 hover:underline" href={`tel:${site.phoneTel}`}>
            <Phone aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <a key={item.label} href={item.href} aria-label={item.label} className="text-white hover:text-white/80">
              <SocialIcon label={item.label} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
