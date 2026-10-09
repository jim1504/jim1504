import { requestCv } from '../lib/contact'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Credentials', '#credentials'],
  ['Contact Me', '#contact'],
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-royal-deep/95 text-ivory backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-8 lg:gap-10">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight whitespace-nowrap">
          Jim William
        </a>
        <nav aria-label="Sections" className="hidden flex-1 gap-7 text-[0.95rem] text-ivory/70 lg:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-ivory">
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={requestCv}
            className="rounded-sm border border-brass/70 px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-brass hover:text-royal-deep"
          >
            Request CV
          </button>
        </div>
      </div>
    </header>
  )
}
