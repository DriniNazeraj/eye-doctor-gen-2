import { legalCopy, pageCopy } from "../data/content.ts"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"

export default function CookiesPage() {
  return (
    <>
      <Seo title={pageCopy.cookies.title} description={pageCopy.cookies.description} path="/cookies" />
      <PageHero title={pageCopy.cookies.title} />
      <div className="container-page max-w-3xl space-y-4 py-14 leading-7 text-muted">
        {legalCopy.cookies.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  )
}
