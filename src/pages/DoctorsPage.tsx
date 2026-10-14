import { pageCopy } from "../data/content.ts"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { CtaBand } from "../components/sections/CtaBand.tsx"
import { DoctorsSection } from "../components/sections/DoctorsSection.tsx"

export default function DoctorsPage() {
  return (
    <>
      <Seo title={pageCopy.doctors.title} description={pageCopy.doctors.description} path="/doctors" />
      <PageHero title={pageCopy.doctors.title} intro={pageCopy.doctors.intro} />
      <DoctorsSection showHeading={false} />
      <CtaBand />
    </>
  )
}
