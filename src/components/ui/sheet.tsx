import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { ReactNode } from "react"

import { labels } from "../../data/content.ts"
import { cn } from "../../lib/utils.ts"

export function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

export function SheetContent({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/50" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col gap-6 bg-cream p-6 shadow-2xl",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <Dialog.Title className="font-serif text-xl text-navy">{title}</Dialog.Title>
          <Dialog.Close
            className="grid size-11 place-items-center rounded-full text-navy hover:bg-mint"
            aria-label={labels.closeMenu}
          >
            <X aria-hidden="true" />
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
