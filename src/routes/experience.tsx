import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { EXPERIENCE } from "@/content/cv";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experiencia | Lady Milena Almonacid" },
      {
        name: "description",
        content:
          "Más de 10 años como QA en MAS Global Consulting, Globant, Grupo ASD, IDEMIA, Choucair Testing y Telefónica.",
      },
      { property: "og:title", content: "Experiencia | Lady Milena Almonacid" },
      {
        property: "og:description",
        content: "Trayectoria profesional en QA manual, automatización y equipos ágiles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageIntro
      eyebrow="// Experience"
      title="Experiencia profesional"
      description="Más de una década asegurando la calidad de software en tecnología, medios y servicios públicos."
    >
      <ol className="relative space-y-8 border-l border-neon/30 pl-8">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="relative">
            <span
              className="absolute -left-[39px] top-7 h-3.5 w-3.5 rounded-full border-2 border-neon bg-background shadow-[var(--shadow-neon)]"
              aria-hidden
            />
            <article className="neon-card rounded-2xl p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="text-xl font-semibold">{job.role}</h2>
                  <p className="mt-1 font-medium text-primary-glow">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-foreground">{job.period}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </PageIntro>
  );
}
