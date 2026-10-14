import { Eye, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { site } from "../../config/site.ts"
import { labels, mainNav } from "../../data/content.ts"
import { cn } from "../../lib/utils.ts"
import { Button } from "../ui/button.tsx"
import { Sheet, SheetContent } from "../ui/sheet.tsx"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent",
        scrolled && "border-line bg-cream/85 shadow-sm backdrop-blur-md",
      )}
    >
      <div className={cn("container-page flex items-center justify-between gap-4", scrolled ? "h-16" : "h-20")}>
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-mint text-teal">
            <Eye aria-hidden="true" />
          </span>
          <span className="font-serif text-lg leading-tight text-navy md:text-xl">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn("text-sm font-medium text-navy hover:text-teal", isActive && "text-teal")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/book">{labels.book}</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-navy hover:bg-mint lg:hidden"
            aria-label={labels.openMenu}
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent title={site.name}>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-mint", isActive && "bg-mint text-teal")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button asChild>
            <Link to="/book" onClick={() => setOpen(false)}>
              {labels.book}
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  )
}
