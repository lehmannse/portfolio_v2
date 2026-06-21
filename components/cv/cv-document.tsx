import { CvContent } from '@/content/cv/types';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h2 className="mb-2 border-b border-border pb-1 text-sm font-bold tracking-wide text-brand uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CvDocument({ cv }: { cv: CvContent }) {
  return (
    <article className="cv-document mx-auto w-full max-w-[210mm] bg-card p-8 text-card-foreground shadow-sm print:max-w-none print:p-0 print:shadow-none">
      <header className="mb-6 border-b border-border pb-4">
        <h1 className="text-3xl font-bold">{cv.name}</h1>
        <p className="mt-1 text-lg text-brand">{cv.headline}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>{cv.location}</span>
          <a href={`mailto:${cv.contact.email}`} className="hover:text-brand">
            {cv.contact.email}
          </a>
          <span>{cv.contact.phone}</span>
          <a
            href={`https://${cv.contact.linkedin}`}
            className="hover:text-brand"
            target="_blank"
            rel="noreferrer"
          >
            {cv.contact.linkedin}
          </a>
          <a
            href={`https://${cv.contact.portfolio}`}
            className="hover:text-brand"
            target="_blank"
            rel="noreferrer"
          >
            {cv.contact.portfolio}
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_240px] print:grid-cols-[1fr_220px]">
        <div>
          <Section title={cv.labels.summary}>
            <p className="text-sm leading-relaxed text-justify">{cv.summary}</p>
          </Section>

          <Section title={cv.labels.experience}>
            <div className="flex flex-col gap-4">
              {cv.experience.map((job) => (
                <div key={`${job.company}-${job.duration}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="font-semibold">
                      {job.title}{' '}
                      <span className="font-normal text-muted-foreground">
                        @ {job.company}
                      </span>
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {job.duration}
                    </span>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-justify">
                        {b}
                      </li>
                    ))}
                  </ul>
                  {job.technologies && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      <span className="font-medium">Tech:</span>{' '}
                      {job.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section title={cv.labels.education}>
            {cv.education.map((ed) => (
              <div
                key={ed.school}
                className="flex flex-wrap items-baseline justify-between gap-x-2"
              >
                <div>
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="text-sm text-muted-foreground">{ed.school}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {ed.duration}
                </span>
              </div>
            ))}
          </Section>
        </div>

        <aside>
          <Section title={cv.labels.skills}>
            <ul className="flex flex-wrap gap-1.5">
              {cv.skills.map((s) => (
                <li
                  key={s}
                  className="rounded border border-border bg-muted px-2 py-0.5 text-xs"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={cv.labels.languages}>
            <ul className="space-y-1 text-sm">
              {cv.languages.map((l) => (
                <li key={l.name}>
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted-foreground"> — {l.level}</span>
                </li>
              ))}
            </ul>
          </Section>

          {cv.certifications.length > 0 && (
            <Section title={cv.labels.certifications}>
              <ul className="list-disc space-y-1 pl-4 text-sm">
                {cv.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Section>
          )}
        </aside>
      </div>
    </article>
  );
}
