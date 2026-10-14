import { Link } from "react-router-dom"

import { homeCopy, labels } from "../../data/content.ts"
import { doctors } from "../../data/doctors.ts"
import { Reveal, SectionHeading } from "../common/Reveal.tsx"
import { Badge } from "../ui/badge.tsx"
import { Button } from "../ui/button.tsx"

export function DoctorsSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        {showHeading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={homeCopy.doctors.eyebrow}
              title={homeCopy.doctors.title}
              intro={homeCopy.doctors.intro}
            />
            <Link className="text-sm font-semibold text-teal" to="/doctors">
              {homeCopy.doctors.all}
            </Link>
          </div>
        ) : null}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {doctors.map((doctor) => (
            <Reveal key={doctor.slug}>
              <article className="grid gap-5 rounded-2xl bg-white p-5 shadow-card sm:grid-cols-[200px_1fr]">
                <figure>
                  <img
                    src={doctor.photo}
                    alt={doctor.photoAlt}
                    width={doctor.photoWidth}
                    height={doctor.photoHeight}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                  />
                  <figcaption className="mt-2 text-xs text-muted">{doctor.photoNote}</figcaption>
                </figure>
                <div>
                  <h3 className="text-2xl">{doctor.name}</h3>
                  <p className="text-sm text-navy">{doctor.postNominals}</p>
                  <p className="mt-1 text-sm font-medium text-navy">{doctor.role}</p>
                  <p className="mt-3 leading-7 text-muted">{doctor.shortBio}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty) => (
                      <li key={specialty}>
                        <Badge>{specialty}</Badge>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-5">
                    <Link to={`/doctors/${doctor.slug}`}>{labels.viewProfile}</Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
