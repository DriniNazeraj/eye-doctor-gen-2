export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <section className="bg-navy">
      <div className="container-page py-14 md:py-20">
        {eyebrow ? <p className="text-sm font-semibold text-gold">{eyebrow}</p> : null}
        <h1 className="mt-2 max-w-3xl text-4xl text-white md:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl leading-7 text-white/80">{intro}</p> : null}
      </div>
    </section>
  )
}
