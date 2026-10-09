import { useEffect, useRef, useState } from 'react'
import { requestCv } from '../lib/contact'

// Deterrent only: blocks copy, right-click, drag, and save/print/view-source shortcuts.
// Anyone with devtools or a screenshot can still get around it.
const BLOCKED_KEYS = new Set(['c', 'x', 's', 'p', 'u', 'a'])
const DEVTOOLS_KEYS = new Set(['i', 'j', 'c'])

export function ContentGuard() {
  const [visible, setVisible] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const showNotice = (e: Event) => {
      e.preventDefault()
      setVisible(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setVisible(false), 4000)
    }
    const silent = (e: Event) => e.preventDefault()
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      const mod = e.ctrlKey || e.metaKey
      if (key === 'f12' || (mod && BLOCKED_KEYS.has(key)) || (mod && e.shiftKey && DEVTOOLS_KEYS.has(key))) {
        showNotice(e)
      }
    }

    const noticeEvents = ['contextmenu', 'copy', 'cut'] as const
    const silentEvents = ['dragstart', 'selectstart'] as const
    noticeEvents.forEach((t) => document.addEventListener(t, showNotice))
    silentEvents.forEach((t) => document.addEventListener(t, silent))
    document.addEventListener('keydown', onKey)
    return () => {
      noticeEvents.forEach((t) => document.removeEventListener(t, showNotice))
      silentEvents.forEach((t) => document.removeEventListener(t, silent))
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(timer.current)
    }
  }, [])

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-sm bg-royal-deep ring-1 ring-brass/40 px-5 py-4 text-ivory shadow-lg transition duration-300 sm:inset-x-auto sm:left-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {visible && (
        <p className="text-sm leading-relaxed">
          Copying and saving are turned off on this page. For my full CV,{' '}
          <button type="button" onClick={requestCv} className="font-semibold underline decoration-brass decoration-2 underline-offset-4">
            email me a request
          </button>
          .
        </p>
      )}
    </div>
  )
}
