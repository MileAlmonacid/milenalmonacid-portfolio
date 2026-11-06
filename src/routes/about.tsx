import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Senior Software QA Engineer" },
      {
        name: "description",
        content: "Conoce a la Ingeniera de Sistemas detrás de este portafolio de QA y automatización.",
      },
      { property: "og:title", content: "Sobre mí | Senior Software QA Engineer" },
      {
        property: "og:description",
        content: "Ingeniera de Sistemas apasionada por la calidad del software y la mejora continua.",
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
      title="Ingeniera de Sistemas enfocada en la calidad"
      description="Combino visión técnica y de negocio para que cada lanzamiento llegue estable, confiable y alineado con lo que el usuario espera."
    />
  );
}
