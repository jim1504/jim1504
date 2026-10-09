import { experience, type Item, type Role } from '../data/profile'
import { SectionTitle } from './SectionTitle'

export function ItemList({ items, nested = false }: { items: Item[]; nested?: boolean }) {
  return (
    <ul className={nested ? 'mt-2 space-y-2 border-l border-rule pl-4' : 'space-y-2.5'}>
      {items.map((item) => {
        const { label, text, children } = typeof item === 'string' ? { text: item } : item
        return (
          <li key={text} className="leading-relaxed">
            {label && <strong className="font-semibold text-navy">{label}: </strong>}
            {text}
            {children && <ItemList items={children} nested />}
          </li>
        )
      })}
    </ul>
  )
}

const countItems = (items: Item[]): number =>
  items.reduce((n, i) => n + 1 + (typeof i === 'string' || !i.children ? 0 : countItems(i.children)), 0)

function RoleEntry({ role, expanded }: { role: Role; expanded: boolean }) {
  const [first, ...rest] = role.sections
  return (
    <li className="grid gap-3 pb-16 md:grid-cols-[12rem_1fr] md:gap-12">
      <div className="text-[0.95rem] md:pt-2 md:text-right">
        <p className="font-semibold text-ink">{role.period}</p>
        <p className="text-muted">{role.location}</p>
      </div>
      <div className="relative border-l border-brass/50 pl-7 md:pl-10">
        <span aria-hidden="true" className="absolute top-3 -left-1.25 h-2.5 w-2.5 rotate-45 bg-heading" />
        <h3 className="opsz-text font-display text-[1.75rem] leading-tight font-medium text-heading">{role.title}</h3>
        <p className="mt-1 font-semibold text-navy/80">{role.org}</p>
        <div className="mt-6 max-w-[70ch] text-ink/90">
          <h4 className="opsz-text mb-2 font-display text-lg text-muted italic">{first.heading}</h4>
          <ItemList items={first.items} />
          {rest.map((s) => (
            <details key={s.heading} open={expanded} className="group mt-6">
              <summary className="opsz-text cursor-pointer list-none font-display text-lg text-muted italic hover:text-heading [&::-webkit-details-marker]:hidden">
                <span className="mr-2 inline-block text-sm not-italic text-brass transition-transform group-open:rotate-90">
                  ▸
                </span>
                {s.heading} <span className="font-sans text-sm not-italic">({countItems(s.items)})</span>
              </summary>
              <div className="mt-3">
                <ItemList items={s.items} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <section id="experience" className="border-y border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <SectionTitle>Work experience</SectionTitle>
        <ol>
          {experience.map((role, i) => (
            <RoleEntry key={role.title + role.period} role={role} expanded={i < 2} />
          ))}
        </ol>
      </div>
    </section>
  )
}
