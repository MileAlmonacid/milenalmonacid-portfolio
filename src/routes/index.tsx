import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, MapPin } from "lucide-react";
import type { ReactNode } from "react";

import {
  CERTIFICATIONS,
  CV_FILENAME,
  CV_URL,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PROFILE,
  SKILL_GROUPS,
  SOFT_SKILLS,
} from "@/content/cv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lady Milena Almonacid | Senior Software QA Engineer" },
      {
        name: "description",
        content:
          "Portafolio de Lady Milena Almonacid: más de 10 años en QA manual y automatizado, ISTQB® Certified Tester.",
      },
      { property: "og:title", content: "Lady Milena Almonacid | Senior Software QA Engineer" },
      {
        property: "og:description",
        content: "Más de 10 años asegurando la calidad del software en entornos Agile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HomePage,
});

function Section({
  id,
  title,
  alt,
  children,
}: {
  id: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-14 border-b border-border ${alt ? "section-alt" : ""}`}>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-2xl font-semibold text-foreground">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">{children}</p>
  );
}

const btnPrimary =
  "inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow";
const btnOutline =
  "inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary";

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="inicio" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="font-mono text-sm text-primary">{PROFILE.role}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {PROFILE.fullName}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{PROFILE.location}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {PROFILE.location}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#experiencia" className={btnPrimary}>
              Ver experiencia
            </a>
            <a href={CV_URL} download={CV_FILENAME} target="_blank" rel="noopener" className={btnOutline}>
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <Section id="sobre-mi" title="Sobre mí">
        <div className="grid gap-10 md:grid-cols-[1fr_340px]">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-secondary-foreground">
            {PROFILE.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="space-y-6">
            <div className="panel p-6">
              <Label>Idiomas</Label>
              <ul className="space-y-3 text-sm">
                {LANGUAGES.map((l) => (
                  <li key={l.name} className="flex justify-between">
                    <span className="text-foreground">{l.name}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <Label>Habilidades blandas</Label>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-6 mt-16 text-xl font-semibold text-foreground">Formación académica</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((e) => (
            <div key={e.title} className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-foreground">{e.title}</h4>
                <span className="font-mono text-xs text-primary">{e.year}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{e.place}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-6 mt-16 text-xl font-semibold text-foreground">Certificaciones</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CERTIFICATIONS.map((c) => (
            <li key={c.title} className="panel px-5 py-4 text-sm">
              <span className="text-foreground">{c.title}</span>
              <span className="block text-xs text-muted-foreground">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experiencia */}
      <Section id="experiencia" title="Experiencia" alt>
        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <article key={job.company} className="panel p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                  <p className="text-sm text-primary">{job.company}</p>
                </div>
                <div className="text-right font-mono text-xs text-muted-foreground">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-secondary-foreground">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="text-primary">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Habilidades */}
      <Section id="habilidades" title="Especialización técnica">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="panel p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title="Contacto" alt>
        <p className="max-w-xl text-muted-foreground">
          ¿Tienes un proyecto que necesita lanzamientos sin errores? Conectemos y conversemos.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <Linkedin className="mr-2 h-4 w-4" /> Escríbeme en LinkedIn
          </a>
          <a href={CV_URL} download={CV_FILENAME} target="_blank" rel="noopener" className={btnOutline}>
            Descargar CV
          </a>
        </div>
      </Section>
    </>
  );
}
