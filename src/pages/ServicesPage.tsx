import { pageCopy } from "../data/content.ts"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { CtaBand } from "../components/sections/CtaBand.tsx"
import { ServicesGrid } from "../components/sections/ServicesGrid.tsx"

export default function ServicesPage() {
  return (
    <>
      <Seo title={pageCopy.services.title} description={pageCopy.services.description} path="/services" />
      <PageHero title={pageCopy.services.title} intro={pageCopy.services.intro} />
      <ServicesGrid showHeading={false} />
      <CtaBand />
    </>
  )
}
