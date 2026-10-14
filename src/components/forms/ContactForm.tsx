import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { contactCopy } from "../../data/content.ts"
import { contactResolver, type ContactValues } from "../../lib/schemas.ts"
import { Button } from "../ui/button.tsx"
import { Input, Textarea } from "../ui/input.tsx"
import { Label } from "../ui/label.tsx"

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="text-sm text-danger" role="alert">
      {message}
    </p>
  )
}

export function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: contactResolver,
    defaultValues: { name: "", email: "", phone: "", message: "", website: "" },
  })

  function onSubmit(values: ContactValues) {
    if (values.website) {
      toast.success(contactCopy.successToast)
      form.reset()
      return
    }
    // TODO: POST /api/contact with the validated values.
    toast.success(contactCopy.successToast)
    form.reset()
  }

  return (
    <form className="space-y-4 rounded-2xl bg-white p-6 shadow-card" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="space-y-2">
        <Label htmlFor="contact-name">{contactCopy.name}</Label>
        <Input id="contact-name" autoComplete="name" {...form.register("name")} />
        <FieldError message={form.formState.errors.name?.message} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">{contactCopy.email}</Label>
        <Input id="contact-email" type="email" autoComplete="email" {...form.register("email")} />
        <FieldError message={form.formState.errors.email?.message} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">{contactCopy.phone}</Label>
        <Input id="contact-phone" type="tel" autoComplete="tel" {...form.register("phone")} />
        <FieldError message={form.formState.errors.phone?.message} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">{contactCopy.message}</Label>
        <Textarea id="contact-message" {...form.register("message")} />
        <FieldError message={form.formState.errors.message?.message} />
      </div>
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{contactCopy.honeypot}</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      </div>
      <Button type="submit">{contactCopy.submit}</Button>
    </form>
  )
}
