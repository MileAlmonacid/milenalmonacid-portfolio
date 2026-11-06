import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Habilidades | Senior Software QA Engineer" },
      {
        name: "description",
        content: "Habilidades en QA manual, automatización de pruebas, testing de APIs y Agile.",
      },
      { property: "og:title", content: "Habilidades | Senior Software QA Engineer" },
      {
        property: "og:description",
        content: "Stack de testing, herramientas y metodologías de aseguramiento de calidad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SkillsPage,
});

const SKILLS = [
  "QA Manual",
  "Automatización de pruebas",
  "Testing de APIs",
  "Pruebas funcionales",
  "Pruebas de regresión",
  "Análisis de requerimientos",
  "Planes y casos de prueba",
  "Scrum",
  "Kanban",
  "Mejora continua",
];

function SkillsPage() {
  return (
    <PageIntro
      eyebrow="// Skills"
      title="Habilidades y herramientas"
      description="Un conjunto de prácticas y conocimientos para cubrir la calidad de punta a punta."
    >
      <ul className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-neon/40 bg-primary/10 px-4 py-2 text-sm text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </PageIntro>
  );
}
