import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"

import { cn } from "../../lib/utils.ts"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-teal text-white hover:bg-teal-dark",
        navy: "bg-navy text-white hover:bg-navy-soft",
        outline: "border border-navy/15 bg-white text-navy hover:border-teal hover:text-teal",
        ghost: "text-navy hover:bg-mint",
        white: "bg-white text-navy hover:bg-mint",
      },
      size: {
        md: "min-h-11 px-5",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
