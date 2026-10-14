import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react"

import { labels } from "../../data/content.ts"
import { cn } from "../../lib/utils.ts"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1]

type CarouselContextValue = {
  api: CarouselApi
  viewportRef: UseEmblaCarouselType[0]
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const value = useContext(CarouselContext)
  if (!value) throw new Error("Carousel components must be used inside Carousel")
  return value
}

export function Carousel({
  opts,
  plugins,
  className,
  children,
}: {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  className?: string
  children: ReactNode
}) {
  const [viewportRef, api] = useEmblaCarousel(opts, plugins)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((carousel: CarouselApi) => {
    if (!carousel) return
    setCanScrollPrev(carousel.canScrollPrev())
    setCanScrollNext(carousel.canScrollNext())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
    return () => {
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <CarouselContext.Provider value={{ api, viewportRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext }}>
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({ className, ...props }: ComponentProps<"div">) {
  const { viewportRef } = useCarousel()
  return (
    <div ref={viewportRef} className="overflow-hidden">
      <div className={cn("flex", className)} {...props} />
    </div>
  )
}

export function CarouselItem({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)} {...props} />
}

export function CarouselPrevious({ className }: { className?: string }) {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <button
      type="button"
      className={cn(
        "grid size-11 place-items-center rounded-full border border-line bg-white text-navy shadow-sm disabled:opacity-40",
        className,
      )}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label={labels.previousReview}
    >
      <ChevronLeft aria-hidden="true" />
    </button>
  )
}

export function CarouselNext({ className }: { className?: string }) {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <button
      type="button"
      className={cn(
        "grid size-11 place-items-center rounded-full border border-line bg-white text-navy shadow-sm disabled:opacity-40",
        className,
      )}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label={labels.nextReview}
    >
      <ChevronRight aria-hidden="true" />
    </button>
  )
}
