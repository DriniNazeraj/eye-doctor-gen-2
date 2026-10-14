import { format, startOfDay } from "date-fns"
import { enGB } from "date-fns/locale"
import { useState } from "react"
import { Controller, useForm, type FieldPath } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import { toast } from "sonner"

import { bookingCopy } from "../../data/content.ts"
import { doctors } from "../../data/doctors.ts"
import { getDoctor } from "../../data/doctors.ts"
import { getService, services } from "../../data/services.ts"
import { bookingResolver, type BookingValues } from "../../lib/schemas.ts"
import { cn } from "../../lib/utils.ts"
import { Button } from "../ui/button.tsx"
import { Calendar } from "../ui/calendar.tsx"
import { Checkbox } from "../ui/checkbox.tsx"
import { Input, Textarea } from "../ui/input.tsx"
import { Label } from "../ui/label.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.tsx"

const stepFields: FieldPath<BookingValues>[][] = [
  ["service"],
  ["doctor"],
  ["date", "timeOfDay"],
  ["name", "email", "phone", "dob", "patientType", "message", "consent"],
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="text-sm text-danger" role="alert">
      {message}
    </p>
  )
}

function choiceClass(active: boolean) {
  return cn(
    "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-3 text-sm",
    active ? "border-teal bg-mint text-navy" : "border-line bg-white text-navy",
  )
}

export function BookingForm() {
  const [params] = useSearchParams()
  const serviceQuery = params.get("service") ?? ""
  const doctorQuery = params.get("doctor") ?? ""
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  const form = useForm<BookingValues>({
    resolver: bookingResolver,
    defaultValues: {
      service: services.some((item) => item.slug === serviceQuery) ? serviceQuery : "",
      doctor:
        doctorQuery === "no-preference" || doctors.some((item) => item.slug === doctorQuery)
          ? doctorQuery
          : "",
      name: "",
      email: "",
      phone: "",
      dob: "",
      message: "",
      consent: false,
    },
  })

  const { control, register, handleSubmit, trigger, watch, formState } = form
  const values = watch()

  async function next() {
    const fields = stepFields[step]
    if (!fields) return
    const valid = await trigger(fields)
    if (valid) setStep((current) => current + 1)
  }

  function onSubmit(submitted: BookingValues) {
    // TODO: POST /api/appointments with `submitted` once the booking API exists.
    void submitted
    toast.success(bookingCopy.successToast)
    setDone(true)
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-card" role="status">
        <h2 className="text-3xl">{bookingCopy.successTitle}</h2>
        <p className="mt-4 leading-7 text-muted">{bookingCopy.successBody}</p>
        <Button className="mt-6" type="button" onClick={() => window.location.assign("/book")}>
          {bookingCopy.another}
        </Button>
      </div>
    )
  }

  const service = getService(values.service)
  const doctor = values.doctor === "no-preference" ? undefined : getDoctor(values.doctor)

  return (
    <form className="rounded-2xl bg-white p-5 shadow-card md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <ol className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="Booking steps">
        {bookingCopy.steps.map((label, index) => (
          <li
            key={label}
            aria-current={index === step ? "step" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-center text-xs font-semibold",
              index === step ? "bg-teal text-white" : index < step ? "bg-mint text-teal-dark" : "bg-cream text-muted",
            )}
          >
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <fieldset className="space-y-3">
          <legend className="text-lg font-semibold text-navy">{bookingCopy.serviceLabel}</legend>
          {services.map((item) => (
            <label key={item.slug} className={choiceClass(values.service === item.slug)}>
              <input type="radio" value={item.slug} className="accent-teal" {...register("service")} />
              <span>
                <span className="block font-semibold">{item.title}</span>
                <span className="text-muted">{item.price}</span>
              </span>
            </label>
          ))}
          <FieldError message={formState.errors.service?.message} />
        </fieldset>
      ) : null}

      {step === 1 ? (
        <div className="space-y-3">
          <Label htmlFor="doctor">{bookingCopy.doctorLabel}</Label>
          <Controller
            control={control}
            name="doctor"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="doctor">
                  <SelectValue placeholder={bookingCopy.doctorLabel} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-preference">{bookingCopy.noPreference}</SelectItem>
                  {doctors.map((item) => (
                    <SelectItem key={item.slug} value={item.slug}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={formState.errors.doctor?.message} />
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
          <div>
            <p className="text-lg font-semibold text-navy">{bookingCopy.dateLabel}</p>
            <p className="mt-1 text-sm text-muted">{bookingCopy.dateHint}</p>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <Calendar
                  selected={field.value}
                  onSelect={(date) => field.onChange(date)}
                  disabled={[{ dayOfWeek: [0] }, { before: startOfDay(new Date()) }]}
                />
              )}
            />
            <FieldError message={formState.errors.date?.message} />
          </div>
          <fieldset className="space-y-3">
            <legend className="text-lg font-semibold text-navy">{bookingCopy.timeLabel}</legend>
            <label className={choiceClass(values.timeOfDay === "morning")}>
              <input type="radio" value="morning" className="accent-teal" {...register("timeOfDay")} />
              <span>
                {bookingCopy.morning}
                <span className="mt-1 block text-xs text-muted">{bookingCopy.morningHint}</span>
              </span>
            </label>
            <label className={choiceClass(values.timeOfDay === "afternoon")}>
              <input type="radio" value="afternoon" className="accent-teal" {...register("timeOfDay")} />
              <span>
                {bookingCopy.afternoon}
                <span className="mt-1 block text-xs text-muted">{bookingCopy.afternoonHint}</span>
              </span>
            </label>
            <FieldError message={formState.errors.timeOfDay?.message} />
          </fieldset>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">{bookingCopy.name}</Label>
            <Input id="name" autoComplete="name" {...register("name")} />
            <FieldError message={formState.errors.name?.message} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{bookingCopy.email}</Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
            <FieldError message={formState.errors.email?.message} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{bookingCopy.phone}</Label>
            <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
            <FieldError message={formState.errors.phone?.message} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">{bookingCopy.dob}</Label>
            <Input id="dob" type="date" autoComplete="bday" {...register("dob")} />
            <FieldError message={formState.errors.dob?.message} />
          </div>
          <fieldset className="space-y-3 md:col-span-2">
            <legend className="text-sm font-semibold text-navy">{bookingCopy.patientType}</legend>
            <label className={choiceClass(values.patientType === "new")}>
              <input type="radio" value="new" className="accent-teal" {...register("patientType")} />
              {bookingCopy.newPatient}
            </label>
            <label className={choiceClass(values.patientType === "existing")}>
              <input type="radio" value="existing" className="accent-teal" {...register("patientType")} />
              {bookingCopy.existingPatient}
            </label>
            <FieldError message={formState.errors.patientType?.message} />
          </fieldset>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message">{bookingCopy.message}</Label>
            <Textarea id="message" {...register("message")} />
            <p className="text-xs text-muted">{bookingCopy.messageHint}</p>
            <FieldError message={formState.errors.message?.message} />
          </div>
          <div className="flex items-start gap-3 md:col-span-2">
            <Controller
              control={control}
              name="consent"
              render={({ field }) => (
                <Checkbox
                  id="consent"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
              )}
            />
            <Label htmlFor="consent" className="font-normal leading-6">
              {bookingCopy.consent}
            </Label>
          </div>
          <div className="md:col-span-2">
            <FieldError message={formState.errors.consent?.message} />
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div>
          <h2 className="text-2xl">{bookingCopy.summaryTitle}</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.steps[0]}</dt>
              <dd className="font-medium text-navy">{service?.title}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.steps[1]}</dt>
              <dd className="font-medium text-navy">{doctor ? doctor.name : bookingCopy.noPreference}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.dateLabel}</dt>
              <dd className="font-medium text-navy">
                {values.date ? format(values.date, "EEEE d MMMM yyyy", { locale: enGB }) : ""}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.timeLabel}</dt>
              <dd className="font-medium text-navy">
                {values.timeOfDay === "morning" ? bookingCopy.morning : bookingCopy.afternoon}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.name}</dt>
              <dd className="font-medium text-navy">{values.name}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.email}</dt>
              <dd className="font-medium text-navy">{values.email}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line py-2">
              <dt className="text-muted">{bookingCopy.phone}</dt>
              <dd className="font-medium text-navy">{values.phone}</dd>
            </div>
          </dl>
        </div>
      ) : null}

      <div className="mt-8 flex justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={() => setStep((current) => current - 1)}>
            {bookingCopy.back}
          </Button>
        ) : (
          <span />
        )}
        {step < 4 ? (
          <Button type="button" onClick={() => void next()}>
            {bookingCopy.next}
          </Button>
        ) : (
          <Button type="submit">{bookingCopy.submit}</Button>
        )}
      </div>
    </form>
  )
}
