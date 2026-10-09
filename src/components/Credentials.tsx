import { certifications, education, languages } from '../data/profile'
import { SectionTitle } from './SectionTitle'
import { Rows, SubTitle } from './Skills'

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <SectionTitle>Education & credentials</SectionTitle>
      <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-14">
          <div>
            <SubTitle>Education</SubTitle>
            <ul className="divide-y divide-rule border-y border-rule">
              {education.map((e) => (
                <li key={e.name} className="py-4">
                  <p className="font-semibold text-ink">{e.name}</p>
                  <p className="text-navy">
                    {e.school}
                    {e.note && <span className="text-muted italic">, {e.note}</span>}
                  </p>
                  <p className="text-sm text-muted">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Languages</SubTitle>
            <Rows rows={languages} />
          </div>
        </div>
        <div>
          <SubTitle>Certifications & training</SubTitle>
          <ul className="divide-y divide-rule border-y border-rule">
            {certifications.map(([name, issuer, date]) => (
              <li key={name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <span>
                  <span className="text-ink">{name}</span>
                  <span className="block text-sm text-navy/80">{issuer}</span>
                </span>
                <span className="text-sm font-semibold whitespace-nowrap text-muted">{date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
