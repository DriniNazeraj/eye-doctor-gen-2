import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

import { stats, statsNote, type Stat } from "../../data/stats.ts"

function CountUp({ stat }: { stat: Stat }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(reduce ? stat.value : 0)

  useEffect(() => {
    if (reduce) {
      setDisplay(stat.value)
      return
    }
    const node = ref.current
    if (!node) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 2400)
          const eased = 1 - (1 - progress) ** 2
          setDisplay(stat.value * eased)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [reduce, stat.value])

  const text = stat.decimals ? display.toFixed(stat.decimals) : Math.round(display).toLocaleString("en-GB")

  return (
    <span ref={ref}>
      {text}
      {stat.suffix}
    </span>
  )
}

export function StatsBand() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <dt className="text-sm text-white/70">{stat.label}</dt>
              <dd className="mt-2 font-serif text-4xl text-gold">
                <CountUp stat={stat} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-xs text-white/60">{statsNote}</p>
      </div>
    </section>
  )
}
