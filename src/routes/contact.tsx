import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto | Senior Software QA Engineer" },
      {
        name: "description",
        content: "Ponte en contacto para colaborar en proyectos de QA y automatización.",
      },
      { property: "og:title", content: "Contacto | Senior Software QA Engineer" },
      {
        property: "og:description",
        content: "Hablemos sobre cómo llevar la calidad de tu software al siguiente nivel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageIntro
      eyebrow="// Contact"
      title="Hablemos de calidad"
      description="¿Tienes un proyecto que necesita lanzamientos sin errores? Escríbeme y conversemos."
    />
  );
}
