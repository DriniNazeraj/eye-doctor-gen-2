import { Seo } from "../components/seo/Seo.tsx"
import { About } from "../components/sections/About.tsx"
import { CtaBand } from "../components/sections/CtaBand.tsx"
import { DoctorsSection } from "../components/sections/DoctorsSection.tsx"
import { FaqSection } from "../components/sections/FaqSection.tsx"
import { Hero, InfoCards } from "../components/sections/Hero.tsx"
import { LocationSection } from "../components/sections/LocationSection.tsx"
import { ReviewsCarousel } from "../components/sections/ReviewsCarousel.tsx"
import { ServicesGrid } from "../components/sections/ServicesGrid.tsx"
import { StatsBand } from "../components/sections/StatsBand.tsx"
import { VideoStrip } from "../components/sections/VideoStrip.tsx"
import { site } from "../config/site.ts"

export default function HomePage() {
  return (
    <>
      <Seo
        title={`${site.name} | Specialist eye care in London`}
        description={`${site.tagline}. Consultant ophthalmology for adults and children, with imaging, cataract surgery and glaucoma care.`}
        path="/"
      />
      <Hero />
      <InfoCards />
      <About />
      <ServicesGrid />
      <FaqSection />
      <VideoStrip />
      <DoctorsSection />
      <ReviewsCarousel />
      <StatsBand />
      <LocationSection />
      <CtaBand />
    </>
  )
}
