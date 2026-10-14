import { StrictMode, lazy } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SiteLayout } from "./components/layout/SiteLayout.tsx"
import "./index.css"

const HomePage = lazy(() => import("./pages/HomePage.tsx"))
const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"))
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage.tsx"))
const DoctorsPage = lazy(() => import("./pages/DoctorsPage.tsx"))
const DoctorProfilePage = lazy(() => import("./pages/DoctorProfilePage.tsx"))
const BookPage = lazy(() => import("./pages/BookPage.tsx"))
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"))
const AdvicePage = lazy(() => import("./pages/AdvicePage.tsx"))
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.tsx"))
const CookiesPage = lazy(() => import("./pages/CookiesPage.tsx"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="doctors" element={<DoctorsPage />} />
            <Route path="doctors/:slug" element={<DoctorProfilePage />} />
            <Route path="book" element={<BookPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="advice" element={<AdvicePage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
