import { useState } from 'react'
import { projects, type Project } from '../data/profile'
import { Lightbox, ShotPreview } from './Gallery'
import { SectionTitle } from './SectionTitle'

function ProjectText({ project }: { project: Project }) {
  return (
    <div>
      <p className="text-[0.95rem] text-muted">
        {project.context}
        {project.period && `, ${project.period}`}
      </p>
      <h3 className="opsz-text mt-2 font-display text-[2rem] leading-tight font-medium text-heading">{project.name}</h3>
      <ul className="mt-6 space-y-2.5 leading-relaxed text-ink/90">
        {project.points.map((p) => (
          <li key={p} className="border-l border-brass/60 pl-4">
            {p}
          </li>
        ))}
      </ul>
      {project.stack && (
        <ul aria-label="Technologies" className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s} className="rounded-sm border border-rule bg-surface px-2.5 py-0.5 text-sm text-navy">
              {s}
            </li>
          ))}
        </ul>
      )}
      {project.links && (
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-navy underline decoration-brass decoration-1 underline-offset-4 hover:decoration-2"
            >
              {l.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </p>
      )}
    </div>
  )
}

export function Projects() {
  const [open, setOpen] = useState<{ project: Project; index: number } | null>(null)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-24">
        {projects.map((project, n) =>
          project.shots ? (
            <article key={project.name} className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={n % 2 ? 'lg:order-2' : ''}>
                <ProjectText project={project} />
              </div>
              <div className="lg:sticky lg:top-24">
                <ShotPreview
                  title={project.name}
                  shots={project.shots}
                  onOpen={(index) => setOpen({ project, index })}
                />
                <p className="mt-3 text-sm text-muted">
                  Select a screenshot to view it full size.
                  {project.shotsNote && ` ${project.shotsNote}`}
                </p>
              </div>
            </article>
          ) : (
            <article key={project.name} className="max-w-3xl">
              <ProjectText project={project} />
            </article>
          ),
        )}
      </div>

      {open && open.project.shots && (
        <Lightbox
          title={open.project.name}
          shots={open.project.shots}
          index={open.index}
          note={open.project.shotsNote}
          onIndex={(index) => setOpen({ ...open, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
