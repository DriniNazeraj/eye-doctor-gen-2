import { BookingForm } from "../components/forms/BookingForm.tsx"
import { PageHero } from "../components/common/PageHero.tsx"
import { Seo } from "../components/seo/Seo.tsx"
import { bookingCopy, pageCopy } from "../data/content.ts"

export default function BookPage() {
  return (
    <>
      <Seo title={pageCopy.book.title} description={pageCopy.book.description} path="/book" />
      <PageHero eyebrow={bookingCopy.eyebrow} title={bookingCopy.title} intro={bookingCopy.intro} />
      <div className="container-page max-w-3xl py-14">
        <BookingForm />
      </div>
    </>
  )
}
