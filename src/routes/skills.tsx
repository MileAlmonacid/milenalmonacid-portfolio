import { createFileRoute } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { SKILL_GROUPS } from "@/content/cv";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Habilidades | Lady Milena Almonacid" },
      {
        name: "description",
        content:
          "QA manual, API testing, Selenium, Cucumber, Jira, Azure DevOps, Scrum, Kanban, SQL y más.",
      },
      { property: "og:title", content: "Habilidades | Lady Milena Almonacid" },
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

function SkillsPage() {
  return (
    <PageIntro
      eyebrow="// Skills"
      title="Habilidades técnicas"
      description="Prácticas, herramientas y tecnologías para cubrir la calidad de punta a punta."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <section key={group.title} className="neon-card rounded-2xl p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {group.title}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-neon/40 bg-primary/10 px-3 py-1.5 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageIntro>
  );
}
