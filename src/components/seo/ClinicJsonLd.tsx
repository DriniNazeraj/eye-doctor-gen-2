import { site } from "../../config/site.ts"
import { hours } from "../../data/hours.ts"

export function ClinicJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    description: `${site.tagline}. Placeholder clinic details.`,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    medicalSpecialty: "Ophthalmology",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    },
    openingHoursSpecification: hours
      .filter((row) => row.open && row.close)
      .map((row) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: row.schemaDay,
        opens: row.open,
        closes: row.close,
      })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
