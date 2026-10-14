import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"
import { useRef } from "react"

import { homeCopy } from "../../data/content.ts"
import { reviews, reviewsNote } from "../../data/reviews.ts"
import { SectionHeading } from "../common/Reveal.tsx"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel.tsx"

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={index < rating ? "size-4 fill-gold text-gold" : "size-4 text-line"}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function ReviewsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5200, stopOnMouseEnter: true, stopOnInteraction: false }))

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={homeCopy.reviews.eyebrow} title={homeCopy.reviews.title} />
        <Carousel
          className="mt-10"
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-cream p-6">
                  <Stars rating={review.rating} />
                  <blockquote className="mt-4 flex-1 text-base leading-7 text-navy">“{review.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-teal">{review.name}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <p className="mt-4 text-xs text-muted">{reviewsNote}</p>
      </div>
    </section>
  )
}
