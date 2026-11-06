import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experiencia | Senior Software QA Engineer" },
      {
        name: "description",
        content: "Trayectoria profesional en QA manual, automatización y equipos ágiles.",
      },
      { property: "og:title", content: "Experiencia | Senior Software QA Engineer" },
      {
        property: "og:description",
        content: "Proyectos y roles en aseguramiento de calidad de software.",
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
      description="Años liderando estrategias de pruebas, automatización y procesos de calidad en equipos de desarrollo ágiles."
    />
  );
}
