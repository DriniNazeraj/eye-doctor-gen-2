import { Play } from "lucide-react"
import { useState } from "react"

import { homeCopy, labels } from "../../data/content.ts"
import { videoStrip, type MediaItem } from "../../data/media.ts"
import { Reveal, SectionHeading } from "../common/Reveal.tsx"
import { VideoFallback } from "../common/VideoFrame.tsx"
import { Dialog, DialogContent } from "../ui/dialog.tsx"

function VideoCard({ item }: { item: MediaItem }) {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <>
      <button
        type="button"
        className="group w-full overflow-hidden rounded-2xl bg-white text-left shadow-card"
        onClick={() => setOpen(true)}
      >
        <span className="relative block aspect-video overflow-hidden">
          <img
            src={item.poster}
            alt=""
            width={item.width}
            height={item.height}
            loading="lazy"
            className={item.orientation === "portrait" ? "h-full w-full object-cover object-top" : "h-full w-full object-cover"}
          />
          <span className="absolute inset-0 grid place-items-center bg-navy/25">
            <span className="grid size-14 place-items-center rounded-full bg-white text-teal">
              <Play className="ml-0.5 fill-teal" aria-hidden="true" />
            </span>
          </span>
        </span>
        <span className="block px-4 py-4 font-serif text-lg text-navy">{item.title}</span>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        {open ? (
          <DialogContent title={item.title}>
            <p className="text-sm leading-6 text-muted">{item.description}</p>
            <div className="mt-4 overflow-hidden rounded-2xl bg-navy">
              {failed ? (
                <VideoFallback label={labels.videoFallback} />
              ) : (
                <video
                  className={
                    item.orientation === "portrait"
                      ? "mx-auto max-h-[70vh] w-auto"
                      : "aspect-video w-full"
                  }
                  controls
                  playsInline
                  poster={item.poster}
                  aria-label={item.title}
                  onError={() => setFailed(true)}
                >
                  <source src={item.src} type="video/mp4" />
                  <source src={item.webm} type="video/webm" />
                  <track kind="captions" srcLang="en" src={item.captions} label="English" default />
                </video>
              )}
            </div>
            <p className="mt-3 text-xs text-muted">
              {homeCopy.videos.demoNote} {item.credit}.
            </p>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  )
}

export function VideoStrip() {
  return (
    <section className="bg-mint/60 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={homeCopy.videos.eyebrow}
          title={homeCopy.videos.title}
          intro={homeCopy.videos.intro}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {videoStrip.map((item) => (
            <Reveal key={item.id}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
