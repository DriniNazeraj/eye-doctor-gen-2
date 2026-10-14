/**
 * Brand configuration. Rename the clinic here before launch.
 * Address, phone and email below are PLACEHOLDERS.
 */
export const site = {
  name: "Clearview Eye Clinic",
  tagline: "Specialist eye care in the heart of London",
  url: "https://clearvieweye.example",
  email: "hello@clearvieweye.example",
  phoneDisplay: "020 7946 0321",
  phoneTel: "+442079460321",
  whatsappUrl: "https://wa.me/442079460321",
  whatsappLabel: "Chat with the clinic on WhatsApp",
  address: {
    line1: "24 Harley Street",
    city: "London",
    postcode: "W1G 9PL",
    country: "United Kingdom",
    countryCode: "GB",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=24%20Harley%20Street%2C%20London%20W1G%209PL&z=16&output=embed",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
  year: 2026,
} as const

export function formatAddress(multiline = false) {
  const line = `${site.address.line1}, ${site.address.city} ${site.address.postcode}`
  if (!multiline) return line
  return `${site.address.line1}\n${site.address.city} ${site.address.postcode}`
}
