import { legalCopy, pageCopy } from "../data/content.ts"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"

export default function PrivacyPage() {
  return (
    <>
      <Seo title={pageCopy.privacy.title} description={pageCopy.privacy.description} path="/privacy" />
      <PageHero title={pageCopy.privacy.title} />
      <div className="container-page max-w-3xl space-y-4 py-20 leading-7 text-muted">
        {legalCopy.privacy.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  )
}
