import { Link, useParams } from "react-router-dom"

import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { Badge } from "../components/ui/badge.tsx"
import { Button } from "../components/ui/button.tsx"
import { labels } from "../data/content.ts"
import { getDoctor } from "../data/doctors.ts"
import NotFoundPage from "./NotFoundPage.tsx"

export default function DoctorProfilePage() {
  const { slug = "" } = useParams()
  const doctor = getDoctor(slug)
  if (!doctor) return <NotFoundPage />

  return (
    <>
      <Seo
        title={doctor.name}
        description={`${doctor.role}. ${doctor.shortBio}`}
        path={`/doctors/${doctor.slug}`}
      />
      <PageHero eyebrow={doctor.role} title={doctor.name} intro={doctor.postNominals} />
      <article className="container-page grid gap-10 py-20 lg:grid-cols-[280px_1fr]">
        <figure>
          <img
            src={doctor.photo}
            alt={doctor.photoAlt}
            width={doctor.photoWidth}
            height={doctor.photoHeight}
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-xs leading-5 text-muted">
            {doctor.photoNote} {doctor.photoCredit}.
          </figcaption>
        </figure>
        <div>
          <p className="text-sm font-semibold text-navy">{doctor.experience}</p>
          <p className="mt-1 text-sm text-muted">{doctor.training}</p>
          <div className="mt-6 space-y-4 leading-7 text-muted">
            {doctor.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {doctor.specialties.map((specialty) => (
              <li key={specialty}>
                <Badge>{specialty}</Badge>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8">
            <Link to={`/book?doctor=${doctor.slug}`}>{labels.bookSentence}</Link>
          </Button>
        </div>
      </article>
    </>
  )
}
