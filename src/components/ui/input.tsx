import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react"

import { cn } from "../../lib/utils.ts"

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-navy placeholder:text-muted/70",
        className,
      )}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm text-navy placeholder:text-muted/70",
        className,
      )}
      {...props}
    />
  )
}
