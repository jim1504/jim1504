import { profile } from '../data/profile'

// Rendered as a CSS background rather than <img> so there is no "Save image as".
function Photo({ src }: { src: string }) {
  return (
    <div
      role="img"
      aria-label={`Portrait of ${profile.name}`}
      className="aspect-4/5 w-full max-w-60 rounded-sm bg-cover bg-center ring-1 ring-rule"
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_19rem] lg:gap-24">
        <div>
          <h2 className="sr-only">About</h2>
          <blockquote className="opsz-text max-w-[30ch] font-display text-[1.9rem] leading-tight text-heading sm:text-[2.5rem]">
            {profile.statement}
          </blockquote>
          <p className="mt-10 max-w-[64ch] text-lg leading-[1.75] text-ink/90">{profile.summary}</p>
        </div>
        <div className="space-y-8">
          {profile.photo && <Photo src={profile.photo} />}
          <div className="border-t border-brass pt-6">
            <h3 className="opsz-text font-display text-2xl text-heading">Areas of expertise</h3>
            <ul className="mt-5 space-y-3.5">
              {profile.expertise.map((e) => (
                <li key={e} className="leading-snug text-ink">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
