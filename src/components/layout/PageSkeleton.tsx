import { useLocation } from "react-router-dom"

import { cn } from "../../lib/utils.ts"

function Bone({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("animate-pulse rounded-xl bg-navy/10", className)} />
}

function HeadingBlock({ light = false }: { light?: boolean }) {
  return (
    <div className="max-w-xl space-y-3">
      <Bone className={cn("h-3 w-24", light && "bg-white/20")} />
      <Bone className={cn("h-10 w-4/5", light && "bg-white/25")} />
      <Bone className={cn("h-4 w-full", light && "bg-white/15")} />
      <Bone className={cn("h-4 w-2/3", light && "bg-white/15")} />
    </div>
  )
}

function HomeSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading the page">
      <section className="relative min-h-[88vh] bg-navy">
        <div className="container-page flex min-h-[88vh] flex-col justify-center py-20">
          <Bone className="h-14 w-full max-w-xl bg-white/25 md:h-16" />
          <Bone className="mt-5 h-5 w-full max-w-xl bg-white/15" />
          <Bone className="mt-2 h-5 w-2/3 max-w-md bg-white/15" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Bone className="h-12 w-48 rounded-full bg-white/30" />
            <Bone className="h-12 w-44 rounded-full bg-white/15" />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <Bone className="h-9 w-36 rounded-full bg-white/15" />
            <Bone className="h-9 w-52 rounded-full bg-white/15" />
            <Bone className="h-9 w-48 rounded-full bg-white/15" />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 md:-mt-24">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="space-y-3 rounded-2xl bg-white p-6 shadow-card">
              <Bone className="h-6 w-36" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-4/5" />
              <Bone className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <HeadingBlock />
            <Bone className="h-16 w-full rounded-2xl" />
            <Bone className="h-16 w-full rounded-2xl" />
          </div>
          <Bone className="aspect-video w-full rounded-2xl" />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <HeadingBlock />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="space-y-3 rounded-2xl bg-cream p-6 shadow-card">
                <Bone className="size-12 rounded-2xl" />
                <Bone className="h-6 w-3/4" />
                <Bone className="h-4 w-full" />
                <Bone className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <HeadingBlock />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {Array.from({ length: 8 }, (_, index) => (
              <Bone key={index} className="h-14 w-full rounded-2xl bg-white" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <HeadingBlock />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <Bone key={index} className="aspect-video w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <HeadingBlock />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="grid gap-5 rounded-2xl bg-white p-5 shadow-card sm:grid-cols-[200px_1fr]">
                <Bone className="aspect-[4/5] w-full rounded-2xl" />
                <div className="space-y-3">
                  <Bone className="h-8 w-48" />
                  <Bone className="h-4 w-32" />
                  <Bone className="h-4 w-full" />
                  <Bone className="h-4 w-5/6" />
                  <div className="flex gap-2 pt-2">
                    <Bone className="h-7 w-24 rounded-full" />
                    <Bone className="h-7 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <HeadingBlock />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="space-y-3 rounded-2xl bg-cream p-6">
                <Bone className="h-4 w-28" />
                <Bone className="h-4 w-full" />
                <Bone className="h-4 w-full" />
                <Bone className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="space-y-3">
              <Bone className="h-4 w-24 bg-white/20" />
              <Bone className="h-10 w-20 bg-white/30" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <HeadingBlock />
            <Bone className="h-4 w-2/3" />
            <Bone className="h-4 w-1/2" />
          </div>
          <Bone className="h-72 w-full rounded-2xl" />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="space-y-4 rounded-2xl bg-teal px-6 py-12">
            <Bone className="mx-auto h-10 w-2/3 max-w-md bg-white/30" />
            <Bone className="mx-auto h-4 w-1/2 max-w-sm bg-white/20" />
            <Bone className="mx-auto h-12 w-48 rounded-full bg-white/40" />
          </div>
        </div>
      </section>
    </div>
  )
}

function InnerSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading the page">
      <section className="bg-navy">
        <div className="container-page py-14 md:py-20">
          <HeadingBlock light />
        </div>
      </section>
      <section className="container-page grid gap-4 py-14 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl bg-white p-6 shadow-card">
          <Bone className="h-6 w-40" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-3/4" />
          <Bone className="h-11 w-36 rounded-full" />
        </div>
        <div className="space-y-3 rounded-2xl bg-white p-6 shadow-card">
          <Bone className="h-6 w-32" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-5/6" />
          <Bone className="h-40 w-full rounded-2xl" />
        </div>
      </section>
    </div>
  )
}

export function PageFallback() {
  const { pathname } = useLocation()
  if (pathname === "/") return <HomeSkeleton />
  return <InnerSkeleton />
}
