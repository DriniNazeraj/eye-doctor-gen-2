import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isUkPhone(value: string) {
  const compact = value.replace(/[\s()-]/g, "")
  return /^(\+44|0)(7\d{9}|1\d{8,9}|2\d{9}|3\d{9}|8\d{8,9})$/.test(compact)
}
