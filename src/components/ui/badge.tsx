import type { ReactNode } from "react"

import { cn } from "../../lib/utils.ts"

export function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-mint px-3 py-1 text-xs font-semibold text-teal-dark",
        className,
      )}
    >
      {children}
    </span>
  )
}
