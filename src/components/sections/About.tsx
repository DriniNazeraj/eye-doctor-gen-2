import { homeCopy } from "../../data/content.ts"
import { media } from "../../data/media.ts"
import { Reveal, SectionHeading } from "../common/Reveal.tsx"
import { TourVideo } from "../common/VideoFrame.tsx"

export function About() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow={homeCopy.about.eyebrow} title={homeCopy.about.title} />
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            {homeCopy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-col gap-3">
            {homeCopy.about.badges.map((badge) => (
              <li key={badge.label} className="rounded-2xl bg-mint px-4 py-3">
                <p className="font-semibold text-navy">{badge.label}</p>
                <p className="text-sm text-muted">{badge.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <TourVideo media={media.clinicTour} />
        </Reveal>
      </div>
    </section>
  )
}
