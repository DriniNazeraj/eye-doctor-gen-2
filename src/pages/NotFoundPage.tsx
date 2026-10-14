import { Link } from "react-router-dom"

import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { Button } from "../components/ui/button.tsx"
import { labels, pageCopy } from "../data/content.ts"

export default function NotFoundPage() {
  return (
    <>
      <Seo title={pageCopy.notFound.title} description={pageCopy.notFound.description} path="/404" />
      <PageHero title={pageCopy.notFound.heading} intro={pageCopy.notFound.body} />
      <div className="container-page flex gap-3 py-12">
        <Button asChild variant="navy">
          <Link to="/">{pageCopy.notFound.home}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/book">{labels.bookSentence}</Link>
        </Button>
      </div>
    </>
  )
}
