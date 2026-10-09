import { otherSkills, technicalSkills } from '../data/profile'
import { SectionTitle } from './SectionTitle'

export function Rows({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-rule border-y border-rule">
      {rows.map(([term, value]) => (
        <div key={term} className="grid gap-1 py-4 sm:grid-cols-[12.5rem_1fr] sm:gap-6">
          <dt className="font-semibold text-navy">{term}</dt>
          <dd className="leading-relaxed text-ink/85">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function SubTitle({ children }: { children: string }) {
  return <h3 className="opsz-text mb-6 font-display text-2xl text-heading">{children}</h3>
}

export function Skills() {
  return (
    <section id="skills" className="border-y border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SubTitle>Software engineering & development</SubTitle>
            <Rows rows={technicalSkills} />
          </div>
          <div>
            <SubTitle>Operations & other skills</SubTitle>
            <Rows rows={otherSkills} />
          </div>
        </div>
      </div>
    </section>
  )
}
