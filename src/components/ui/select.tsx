import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../../lib/utils.ts"

export function Select(props: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root {...props} />
}

export function SelectTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex min-h-11 w-full items-center justify-between gap-2 rounded-xl border border-line bg-white px-3 text-left text-sm text-navy",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronDown className="size-5 text-muted" strokeWidth={1.75} aria-hidden="true" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export function SelectValue(props: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value {...props} />
}

export function SelectContent({ children }: { children: ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        className="z-50 max-h-80 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-line bg-white shadow-card"
      >
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export function SelectItem({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex cursor-pointer items-center rounded-lg py-2 pr-8 pl-3 text-sm text-navy outline-none data-[highlighted]:bg-mint",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-2">
        <Check className="size-4 text-teal" aria-hidden="true" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
