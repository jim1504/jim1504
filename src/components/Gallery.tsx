import { useEffect, useRef, type CSSProperties } from 'react'
import type { Shot } from '../data/profile'

// Screenshots are painted as CSS backgrounds, not <img>, so the browser offers
// no "Save image as" or image drag. (Deterrent only, like the rest of the guard.)
const bg = (src: string): CSSProperties => ({ backgroundImage: `url(${src})` })

// Full screenshots fill the frame from the top; wide strips are shown whole on navy.
const fitClass = (shot: Shot) => (shot.fit === 'contain' ? 'bg-contain bg-center bg-no-repeat bg-royal-deep' : 'bg-cover bg-top')

// Observe an unclipped wrapper: Chromium counts a target's own clip-path, so a
// fully clipped `.reveal` element would never report itself as visible.
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function ShotPreview({ title, shots, onOpen }: { title: string; shots: Shot[]; onOpen: (i: number) => void }) {
  const ref = useReveal<HTMLDivElement>()
  const [lead, ...rest] = shots
  return (
    <div ref={ref}>
      <button
        type="button"
        onClick={() => onOpen(0)}
        aria-label={`Open screenshots of ${title}`}
        className="reveal group block w-full overflow-hidden rounded-md bg-surface text-left shadow-[0_24px_60px_-20px_rgb(11_29_77/0.35)] ring-1 ring-rule"
      >
        <div
          role="img"
          aria-label={lead.caption}
          className={`aspect-16/10 w-full transition-transform duration-700 group-hover:scale-[1.02] ${fitClass(lead)}`}
          style={bg(lead.src)}
        />
      </button>
      {rest.length > 0 && (
        <ul className="reveal mt-3 grid grid-cols-3 gap-3" style={{ transitionDelay: '250ms' }}>
          {rest.map((s, i) => (
            <li key={s.src}>
              <button
                type="button"
                onClick={() => onOpen(i + 1)}
                aria-label={`Open screenshot: ${s.caption}`}
                className={`block aspect-16/10 w-full rounded-sm opacity-85 ring-1 ring-rule transition-opacity hover:opacity-100 ${fitClass(s)}`}
                style={bg(s.src)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Lightbox({
  title,
  shots,
  index,
  note,
  onIndex,
  onClose,
}: {
  title: string
  shots: Shot[]
  index: number
  note?: string
  onIndex: (i: number) => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  const go = (step: number) => onIndex((index + step + shots.length) % shots.length)
  const shot = shots[index]

  return (
    <dialog
      ref={ref}
      aria-label={`${title} screenshots`}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      className="lightbox m-auto w-[min(1200px,94vw)] max-w-none overflow-hidden rounded-md bg-royal-deep p-0 text-ivory"
    >
      <div className="flex items-center gap-4 border-b border-ivory/10 px-5 py-3">
        <p className="opsz-text font-display text-lg">{title}</p>
        <p className="text-sm text-ivory/60">
          {index + 1} of {shots.length}
        </p>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="ml-auto rounded-sm px-3 py-1 text-sm font-semibold text-ivory/80 hover:text-ivory"
        >
          Close
        </button>
      </div>
      <div
        key={shot.src}
        role="img"
        aria-label={shot.caption}
        className="fade h-[min(68vh,720px)] bg-contain bg-center bg-no-repeat"
        style={{ ...bg(shot.src), animationDuration: '0.35s' }}
      />
      <div className="flex items-center gap-4 border-t border-ivory/10 px-5 py-4">
        {shots.length > 1 && (
          <button
            type="button"
            onClick={() => go(-1)}
            className="shrink-0 rounded-sm border border-ivory/30 px-3 py-1.5 text-sm hover:border-brass"
          >
            Previous
          </button>
        )}
        <div className="flex-1 text-center">
          <p className="text-[0.95rem] leading-snug">{shot.caption}</p>
          {note && <p className="mt-1 text-xs text-ivory/55">{note}</p>}
        </div>
        {shots.length > 1 && (
          <button
            type="button"
            onClick={() => go(1)}
            className="shrink-0 rounded-sm border border-ivory/30 px-3 py-1.5 text-sm hover:border-brass"
          >
            Next
          </button>
        )}
      </div>
    </dialog>
  )
}
