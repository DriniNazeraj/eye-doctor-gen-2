import { pageCopy } from "../data/content.ts"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { FaqSection } from "../components/sections/FaqSection.tsx"

export default function AdvicePage() {
  return (
    <>
      <Seo title={pageCopy.advice.title} description={pageCopy.advice.description} path="/advice" />
      <PageHero title={pageCopy.advice.title} intro={pageCopy.advice.intro} />
      <FaqSection linked={false} />
    </>
  )
}
