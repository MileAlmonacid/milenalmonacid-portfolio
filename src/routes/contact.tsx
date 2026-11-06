import { createFileRoute } from "@tanstack/react-router";
import { Download, Linkedin, MapPin } from "lucide-react";

import { PageIntro } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { CV_FILENAME, CV_URL, PROFILE } from "@/content/cv";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto | Lady Milena Almonacid" },
      {
        name: "description",
        content: "Contacta a Lady Milena Almonacid, Senior Software QA Engineer, por LinkedIn.",
      },
      { property: "og:title", content: "Contacto | Lady Milena Almonacid" },
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
  const items = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/ladymilenaalmonacid",
      href: PROFILE.linkedin,
    },
    { icon: MapPin, label: "Ubicación", value: PROFILE.location },
  ];

  return (
    <PageIntro
      eyebrow="// Contact"
      title="Hablemos de calidad"
      description="¿Tienes un proyecto que necesita lanzamientos sin errores? Escríbeme y conversemos."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon/50 bg-primary/10 text-primary-glow">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-1 truncate font-medium text-foreground">{value}</p>
              </div>
            </>
          );
          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="neon-card flex items-center gap-4 rounded-2xl p-6"
            >
              {content}
            </a>
          ) : (
            <div key={label} className="neon-card flex items-center gap-4 rounded-2xl p-6">
              {content}
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Button asChild variant="hero" size="xl">
          <a href={CV_URL} download={CV_FILENAME} target="_blank" rel="noopener">
            <Download />
            Descargar CV completo
          </a>
        </Button>
      </div>
    </PageIntro>
  );
}
