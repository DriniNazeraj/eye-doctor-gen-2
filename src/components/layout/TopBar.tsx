import { formatAddress, site } from "../../config/site.ts"
import { hoursSummary } from "../../data/hours.ts"

export function TopBar() {
  return (
    <div className="bg-navy text-xs text-white">
      <div className="container-page flex h-9 items-center justify-center gap-6 sm:justify-between">
        <p className="hidden sm:block">{formatAddress()}</p>
        <a className="font-semibold underline-offset-2 hover:underline" href={`tel:${site.phoneTel}`}>
          {site.phoneDisplay}
        </a>
        <p className="hidden sm:block">{hoursSummary}</p>
      </div>
    </div>
  )
}
