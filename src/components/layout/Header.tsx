import { Eye, Menu } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { site } from "../../config/site.ts"
import { labels, mainNav } from "../../data/content.ts"
import { cn } from "../../lib/utils.ts"
import { Button } from "../ui/button.tsx"
import { Sheet, SheetContent } from "../ui/sheet.tsx"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-black/5 bg-cream">
      <div className="mx-auto flex h-[4.5rem] w-[min(1240px,calc(100%-2.5rem))] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5 text-[#1a1a1a]">
          <Eye aria-hidden="true" className="size-7" strokeWidth={1.75} />
          <span className="text-[1.35rem] leading-none font-medium tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn("text-[15px] font-normal text-[#2c2c2c] hover:text-black", isActive && "font-medium text-black")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="navy" className="hidden sm:inline-flex">
            <Link to="/book">{labels.book}</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center text-navy lg:hidden"
            aria-label={labels.openMenu}
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
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
                  cn(
                    "rounded-md px-3 py-3 text-base font-normal text-[#2c2c2c] hover:bg-white",
                    isActive && "bg-white font-medium text-black",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button asChild variant="navy">
            <Link to="/book" onClick={() => setOpen(false)}>
              {labels.book}
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  )
}
