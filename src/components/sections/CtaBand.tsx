import { Link } from "react-router-dom"

import { homeCopy, labels } from "../../data/content.ts"
import { Button } from "../ui/button.tsx"

export function CtaBand() {
  return (
    <section className="pb-20">
      <div className="container-page">
        <div className="rounded-2xl bg-navy px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl text-white md:text-4xl">{homeCopy.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{homeCopy.cta.body}</p>
          <Button asChild variant="white" size="lg" className="mt-6">
            <Link to="/book">{labels.bookSentence}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
