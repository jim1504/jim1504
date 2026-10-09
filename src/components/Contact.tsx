import { profile } from '../data/profile'
import { requestCv } from '../lib/contact'

const YEAR = new Date().getFullYear()

export function Contact() {
  return (
    <section id="contact" className="bg-royal text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <h2 className="font-display text-[2.6rem] leading-tight font-medium sm:text-[3.4rem]">
            Curriculum vitae on request
          </h2>
          <div className="mt-8 h-px w-28 bg-brass" />
          <p className="mt-8 max-w-[50ch] text-lg leading-relaxed text-ivory/85">
            My full CV and phone number are shared on request. Please send me an email or a message on LinkedIn, and I
            will reply with the documents you need.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <button
            type="button"
            onClick={requestCv}
            className="rounded-sm bg-ivory px-7 py-3.5 text-lg font-semibold text-royal transition-colors hover:bg-white"
          >
            Request my CV by email
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline decoration-brass decoration-1 underline-offset-4"
          >
            Message me on LinkedIn
          </a>
        </div>
      </div>
      <footer className="border-t border-ivory/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-ivory/55 sm:px-8">
          © {YEAR} {profile.name} | {profile.location}.
        </p>
      </footer>
    </section>
  )
}
