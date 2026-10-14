import { useEffect, useState } from "react"

import { cookieCopy } from "../../data/content.ts"
import { Button } from "../ui/button.tsx"

const storageKey = "clearview-cookie-choice"

export function useCookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(window.localStorage.getItem(storageKey) === null)
  }, [])

  function dismiss() {
    window.localStorage.setItem(storageKey, "set")
    setVisible(false)
  }

  return { visible, dismiss }
}

export function CookieBanner({ visible, onDismiss }: { visible: boolean; onDismiss: () => void }) {
  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-4 shadow-2xl backdrop-blur">
      <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-navy">{cookieCopy.title}</p>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-muted">{cookieCopy.body}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onDismiss}>
            {cookieCopy.essential}
          </Button>
          <Button onClick={onDismiss}>{cookieCopy.accept}</Button>
        </div>
      </div>
    </div>
  )
}
