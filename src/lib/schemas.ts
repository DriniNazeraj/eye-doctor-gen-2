import { zodResolver } from "@hookform/resolvers/zod"
import { differenceInYears, isValid, parseISO, startOfDay } from "date-fns"
import { z } from "zod"

import { bookingCopy, contactCopy } from "../data/content.ts"
import { isUkPhone } from "./utils.ts"

export const bookingSchema = z.object({
  service: z.string().min(1, { error: bookingCopy.errors.service }),
  doctor: z.string().min(1, { error: bookingCopy.errors.doctor }),
  date: z
    .date({ error: bookingCopy.errors.date })
    .refine((value) => value.getDay() !== 0, { error: bookingCopy.errors.sunday })
    .refine((value) => value >= startOfDay(new Date()), { error: bookingCopy.errors.past }),
  timeOfDay: z.enum(["morning", "afternoon"], { error: bookingCopy.errors.timeOfDay }),
  name: z.string().trim().min(2, { error: bookingCopy.errors.name }),
  email: z.email({ error: bookingCopy.errors.email }),
  phone: z.string().trim().refine(isUkPhone, { error: bookingCopy.errors.phone }),
  dob: z
    .string()
    .min(1, { error: bookingCopy.errors.dob })
    .refine((value) => isValid(parseISO(value)), { error: bookingCopy.errors.dob })
    .refine((value) => parseISO(value) <= new Date(), { error: bookingCopy.errors.dobFuture })
    .refine((value) => differenceInYears(new Date(), parseISO(value)) <= 120, {
      error: bookingCopy.errors.dob,
    }),
  patientType: z.enum(["new", "existing"], { error: bookingCopy.errors.patientType }),
  message: z.string().max(1000, { error: bookingCopy.errors.message }),
  consent: z.boolean().refine((value) => value, { error: bookingCopy.errors.consent }),
})

export type BookingValues = z.infer<typeof bookingSchema>

export const contactSchema = z.object({
  name: z.string().trim().min(2, { error: contactCopy.errors.name }),
  email: z.email({ error: contactCopy.errors.email }),
  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || isUkPhone(value), { error: contactCopy.errors.phone }),
  message: z.string().trim().min(10, { error: contactCopy.errors.message }),
  website: z.string().optional(),
})

export type ContactValues = z.infer<typeof contactSchema>

export const bookingResolver = zodResolver(bookingSchema)
export const contactResolver = zodResolver(contactSchema)
