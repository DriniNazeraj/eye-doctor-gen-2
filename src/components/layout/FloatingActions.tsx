import { MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

import { site } from "../../config/site.ts"
import { labels } from "../../data/content.ts"
import { cn } from "../../lib/utils.ts"

export function FloatingActions({ raised }: { raised: boolean }) {
  return (
    <>
      <Link
        to="/book"
        className={cn(
          "fixed left-4 z-40 inline-flex min-h-12 items-center rounded-full bg-teal px-5 text-sm font-semibold text-white shadow-lg md:hidden",
          raised ? "bottom-28" : "bottom-4",
        )}
      >
        {labels.book}
      </Link>
      <a
        href={site.whatsappUrl}
        className={cn(
          "fixed right-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg",
          raised ? "bottom-28" : "bottom-4",
        )}
        aria-label={site.whatsappLabel}
      >
        <MessageCircle aria-hidden="true" />
      </a>
    </>
  )
}
