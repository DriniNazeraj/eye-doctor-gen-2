import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import { labels } from "../../data/content.ts"
import { cn } from "../../lib/utils.ts"

export function Dialog(props: ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />
}

export function DialogTrigger(props: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />
}

export function DialogContent({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/70" />
      <DialogPrimitive.Content
        className={cn(
          "fixed top-1/2 left-1/2 z-50 w-[min(100%-2rem,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-cream p-4 shadow-card md:p-6",
          className,
        )}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <DialogPrimitive.Title className="font-serif text-2xl text-navy">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close
            className="grid size-11 shrink-0 place-items-center rounded-full text-navy hover:bg-mint"
            aria-label={labels.closeDialog}
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
          </DialogPrimitive.Close>
        </div>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
