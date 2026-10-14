export type MediaItem = {
  id: string
  src: string
  webm: string
  poster: string
  captions: string
  title: string
  description: string
  credit: string
  licenceUrl: string
  sourceUrl: string
  width: number
  height: number
  orientation: "landscape" | "portrait"
}

const licence = "https://www.pexels.com/license/"

/**
 * Demo stock clips. Replace src, webm and poster with clinic-owned footage before launch.
 * Files are 1080p H.264 MP4 and VP9 WebM, encoded from the original Pexels downloads.
 */
export const media = {
  heroVideo: {
    id: "hero",
    src: "/videos/hero.mp4?v=2",
    webm: "/videos/hero.webm?v=2",
    poster: "/videos/hero-poster.jpg?v=2",
    captions: "/videos/hero.vtt",
    title: "Eye examination with a phoropter",
    description: "A patient having a sight test on a phoropter in a clinic room.",
    credit: "Karolina Grabowska via Pexels",
    licenceUrl: licence,
    sourceUrl: "https://www.pexels.com/video/person-having-eye-examination-5241181/",
    width: 1920,
    height: 1080,
    orientation: "landscape",
  },
  clinicTour: {
    id: "clinic-tour",
    src: "/videos/clinic-tour.mp4?v=2",
    webm: "/videos/clinic-tour.webm?v=2",
    poster: "/videos/clinic-tour-poster.jpg?v=2",
    captions: "/videos/clinic-tour.vtt",
    title: "Clinic tour",
    description: "A clinician beside slit-lamp equipment in a consulting room.",
    credit: "Pavel Danilyuk via Pexels",
    licenceUrl: licence,
    sourceUrl: "https://www.pexels.com/video/a-doctor-working-in-his-clinic-5995129/",
    width: 1920,
    height: 1080,
    orientation: "landscape",
  },
  firstConsultation: {
    id: "first-consultation",
    src: "/videos/first-consultation.mp4?v=2",
    webm: "/videos/first-consultation.webm?v=2",
    poster: "/videos/first-consultation-poster.jpg?v=2",
    captions: "/videos/first-consultation.vtt",
    title: "Your first consultation",
    description: "Glasses and a contact lens case on a vision chart.",
    credit: "Pavel Danilyuk via Pexels (video 5995133)",
    licenceUrl: licence,
    sourceUrl: "https://www.pexels.com/license/",
    width: 1920,
    height: 1080,
    orientation: "landscape",
  },
  cataractExplained: {
    id: "cataract-explained",
    src: "/videos/cataract-explained.mp4?v=2",
    webm: "/videos/cataract-explained.webm?v=2",
    poster: "/videos/cataract-explained-poster.jpg?v=2",
    captions: "/videos/cataract-explained.vtt",
    title: "Cataract surgery explained",
    description: "Close-up of an adult eye being examined with a light.",
    credit: "cottonbro studio via Pexels",
    licenceUrl: licence,
    sourceUrl: "https://www.pexels.com/video/close-up-video-of-a-man-checking-his-eyes-7580478/",
    width: 1080,
    height: 2048,
    orientation: "portrait",
  },
  childrensEyeTest: {
    id: "childrens-eye-test",
    src: "/videos/childrens-eye-test.mp4?v=2",
    webm: "/videos/childrens-eye-test.webm?v=2",
    poster: "/videos/childrens-eye-test-poster.jpg?v=2",
    captions: "/videos/childrens-eye-test.vtt",
    title: "Children's eye tests",
    description: "A child having a slit-lamp examination with a clinician.",
    credit: "Pavel Danilyuk via Pexels (video 5995136)",
    licenceUrl: licence,
    sourceUrl: "https://www.pexels.com/license/",
    width: 1920,
    height: 1080,
    orientation: "landscape",
  },
} as const satisfies Record<string, MediaItem>

export const videoStrip = [
  media.firstConsultation,
  media.cataractExplained,
  media.childrensEyeTest,
]
