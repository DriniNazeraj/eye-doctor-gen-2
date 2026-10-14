import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: "left" | "center"
  light?: boolean
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={light ? "text-sm font-semibold text-gold" : "text-sm font-semibold text-navy"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={light ? "mt-2 text-3xl text-white md:text-4xl" : "mt-2 text-3xl md:text-4xl"}>{title}</h2>
      {intro ? (
        <p className={light ? "mt-4 leading-7 text-white/80" : "mt-4 leading-7 text-muted"}>{intro}</p>
      ) : null}
    </div>
  )
}
