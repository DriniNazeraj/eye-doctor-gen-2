import { Suspense, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { labels } from "../../data/content.ts"
import { ClinicJsonLd } from "../seo/ClinicJsonLd.tsx"
import { Toaster } from "../ui/sonner.tsx"
import { CookieBanner, useCookieBanner } from "./CookieBanner.tsx"
import { FloatingActions } from "./FloatingActions.tsx"
import { Footer } from "./Footer.tsx"
import { Header } from "./Header.tsx"
import { PageFallback } from "./PageSkeleton.tsx"
import { TopBar } from "./TopBar.tsx"

export function SiteLayout() {
  const { pathname } = useLocation()
  const cookie = useCookieBanner()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={cookie.visible ? "pb-36" : undefined}>
      <a
        href="#main"
        className="absolute top-3 left-3 z-[60] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy focus:translate-y-0"
      >
        {labels.skip}
      </a>
      <ClinicJsonLd />
      <div className="sticky top-0 z-40">
        <TopBar />
        <Header />
      </div>
      <main id="main">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingActions raised={cookie.visible} />
      <CookieBanner visible={cookie.visible} onDismiss={cookie.dismiss} />
      <Toaster />
    </div>
  )
}
