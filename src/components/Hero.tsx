import { profile } from '../data/profile'
import { requestCv } from '../lib/contact'

// Fine brass pinstripes on royal navy: a tailored cloth, and a nod to the warp
// threads of the textile mill. They draw down once as the page opens.
const STRIPES = Array.from({ length: 30 }, (_, i) => ({
  x: 24 + i * 2.6 + ((i * 37) % 5) * 0.3,
  strong: i % 6 === 3,
  delay: 120 + i * 30,
}))

function Pinstripes() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full mask-[linear-gradient(to_right,transparent_20%,black_75%)]"
    >
      {STRIPES.map((s) => (
        <line
          key={s.x}
          x1={s.x}
          x2={s.x}
          y1={0}
          y2={100}
          vectorEffect="non-scaling-stroke"
          strokeWidth={1}
          className={`stripe stroke-brass ${s.strong ? 'opacity-60' : 'opacity-25'}`}
          style={{ animationDelay: `${s.delay}ms` }}
        />
      ))}
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-royal text-ivory">
      <Pinstripes />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
        <h1
          className="rise font-display text-[clamp(3.75rem,12vw,10rem)] leading-[0.95] font-medium tracking-[-0.02em]"
          style={{ animationDelay: '200ms' }}
        >
          {profile.name}
        </h1>
        <p
          className="rise mt-6 font-display text-xl leading-snug text-ivory/85 italic sm:text-2xl"
          style={{ animationDelay: '550ms' }}
        >
          {profile.roles[0]}
          <span className="text-brass"> &amp; </span>
          <br className="sm:hidden" />
          {profile.roles[1]}
        </p>
        <div className="fade mt-12 h-px w-28 bg-brass" style={{ animationDelay: '900ms' }} />
        <div
          className="fade mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          style={{ animationDelay: '1000ms' }}
        >
          <button
            type="button"
            onClick={requestCv}
            className="rounded-sm bg-ivory px-6 py-3 font-semibold text-royal transition-colors hover:bg-white"
          >
            Request my CV
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-ivory/40 px-6 py-3 font-semibold text-ivory transition-colors hover:border-brass"
          >
            LinkedIn
          </a>
          <span className="text-ivory/70">{profile.location}</span>
        </div>
      </div>
    </section>
  )
}
