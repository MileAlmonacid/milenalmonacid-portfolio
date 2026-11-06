import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap } from "lucide-react";

import { PageIntro } from "@/components/site/PageIntro";
import { CERTIFICATIONS, EDUCATION, PROFILE } from "@/content/cv";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Lady Milena Almonacid" },
      {
        name: "description",
        content:
          "Ingeniera de Sistemas y Senior QA Engineer con más de 10 años de experiencia, certificada ISTQB® y Scrum.",
      },
      { property: "og:title", content: "Sobre mí | Lady Milena Almonacid" },
      {
        property: "og:description",
        content: "Trayectoria, formación y certificaciones de Lady Milena Almonacid, Senior QA Engineer.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageIntro
      eyebrow="// About"
      title={PROFILE.fullName}
      description="Ingeniera de Sistemas apasionada por asegurar la calidad del software, optimizar estrategias de prueba e impulsar la mejora continua de los procesos de QA."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {PROFILE.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="space-y-6">
          <section className="neon-card rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="h-5 w-5 text-primary-glow" strokeWidth={1.5} />
              Formación
            </h2>
            <ul className="mt-4 space-y-4">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <p className="font-medium text-foreground">{e.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.place} · {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="neon-card rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Award className="h-5 w-5 text-primary-glow" strokeWidth={1.5} />
              Certificaciones
            </h2>
            <ul className="mt-4 space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title}>
                  <p className="text-sm font-medium text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PageIntro>
  );
}
