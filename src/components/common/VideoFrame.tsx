import { useReducedMotion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

import { homeCopy, labels } from "../../data/content.ts"
import type { MediaItem } from "../../data/media.ts"

export function VideoFallback({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-48 w-full items-center justify-center bg-navy px-6 text-center">
      <p className="font-serif text-2xl text-white">{label}</p>
    </div>
  )
}

export function BackgroundVideo({ media }: { media: MediaItem }) {
  const reduce = useReducedMotion()
  const [failed, setFailed] = useState(false)

  if (reduce || failed) {
    return (
      <img
        src={media.poster}
        alt=""
        width={media.width}
        height={media.height}
        className="absolute inset-0 h-full w-full object-cover"
      />
    )
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={media.poster}
      aria-label={media.title}
      onError={() => setFailed(true)}
    >
      <source src={media.src} type="video/mp4" />
      <source src={media.webm} type="video/webm" />
      <track kind="captions" srcLang="en" src={media.captions} label="English" default />
    </video>
  )
}

export function TourVideo({ media }: { media: MediaItem }) {
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <figure className="overflow-hidden rounded-2xl bg-navy shadow-card">
      <div className="relative aspect-video">
        {failed ? (
          <VideoFallback label={labels.videoFallback} />
        ) : playing ? (
          <video
            className="h-full w-full bg-navy object-contain"
            controls
            autoPlay
            playsInline
            poster={media.poster}
            aria-label={media.title}
            onError={() => setFailed(true)}
          >
            <source src={media.src} type="video/mp4" />
            <source src={media.webm} type="video/webm" />
            <track kind="captions" srcLang="en" src={media.captions} label="English" default />
          </video>
        ) : (
          <>
            <img
              src={media.poster}
              alt={media.title}
              width={media.width}
              height={media.height}
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              className="absolute inset-0 grid place-items-center bg-navy/20"
              aria-label={`${labels.playVideo}: ${media.title}`}
              onClick={() => setPlaying(true)}
            >
              <span className="grid size-14 place-items-center rounded-full bg-white text-teal shadow-card">
                <Play className="ml-0.5 size-5 fill-teal" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="sr-only">{homeCopy.about.tourButton}</span>
            </button>
          </>
        )}
      </div>
      <figcaption className="px-4 py-3 text-xs text-white/80">
        {media.credit}.{" "}
        <a className="underline" href={media.licenceUrl}>
          {media.licenceUrl}
        </a>
      </figcaption>
    </figure>
  )
}
