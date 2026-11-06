import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Cog, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Senior Software QA Engineer | Portafolio" },
      {
        name: "description",
        content:
          "Ingeniera de Sistemas experta en QA Manual y Automatización, metodologías ágiles y testing de APIs.",
      },
      { property: "og:title", content: "Senior Software QA Engineer | Portafolio" },
      {
        property: "og:description",
        content:
          "Garantizando la calidad del software y maximizando el impacto digital con QA manual, automatización y Agile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Metodología QA",
    description:
      "Planificación de pruebas, análisis de requerimientos y diseño de estrategias de testing eficaces que detectan riesgos desde el inicio.",
  },
  {
    icon: Cog,
    title: "Automatización y APIs",
    description:
      "Pruebas funcionales y automatizadas, junto con testing de APIs, para garantizar un software robusto, estable y escalable.",
  },
  {
    icon: Zap,
    title: "Agile & DevOps",
    description:
      "Integración en equipos Scrum y Kanban, impulsando la mejora continua en todo el ciclo de vida del desarrollo.",
  },
];

const TEST_LINES = [
  "auth/login.spec.ts",
  "checkout/payment.spec.ts",
  "api/users.contract.ts",
  "e2e/onboarding.flow.ts",
];

function TestRunCard() {
  return (
    <div className="relative">
      <div className="glow-orb absolute -inset-10 opacity-60" aria-hidden />
      <div className="neon-card relative rounded-2xl p-5 font-mono text-sm">
        <div className="flex items-center gap-1.5 border-b border-border/70 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-4/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
          <span className="ml-3 text-xs text-muted-foreground">~/qa — test run</span>
        </div>
        <p className="mt-4 text-muted-foreground">
          <span className="text-primary">$</span> npm run test:regression
        </p>
        <ul className="mt-3 space-y-2">
          {TEST_LINES.map((line, i) => (
            <li
              key={line}
              className="animate-fade-up flex items-center gap-2"
              style={{ animationDelay: `${300 + i * 180}ms` }}
            >
              <Check className="h-4 w-4 text-success" />
              <span className="text-foreground/90">{line}</span>
              <span className="ml-auto text-xs text-success">PASS</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-border/70 pt-4">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Suites</span>
            <span className="text-success">all passed</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-full rounded-full bg-gradient-primary" />
          </div>
          <p className="mt-4 text-muted-foreground">
            <span className="text-primary">✓</span> Ready to ship
            <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary-glow" />
          </p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="glow-orb pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] opacity-50"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.25fr_1fr] lg:pt-24">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-neon/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Senior Software QA Engineer
            </div>
            <h1
              className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Garantizando la Calidad del Software.{" "}
              <span className="text-gradient">Maximizando el Impacto Digital.</span>
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              Ingeniera de Sistemas experta en QA Manual y Automatización. Conectando metodologías
              ágiles, pruebas exhaustivas y optimización de procesos para asegurar lanzamientos sin
              errores.
            </p>
            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/experience">
                  Ver mi experiencia
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Link
                to="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Hablemos →
              </Link>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <TestRunCard />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {"// Pilares"}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Calidad integrada en cada etapa del desarrollo
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <article key={title} className="neon-card rounded-2xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon/50 bg-primary/10 text-primary-glow">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden py-28">
        <div
          className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          aria-hidden
        />
        <figure className="relative mx-auto max-w-4xl px-5 text-center">
          <span
            className="block font-display text-[9rem] font-extrabold leading-none text-gradient sm:text-[12rem]"
            aria-hidden
          >
            “
          </span>
          <blockquote className="-mt-16 font-display text-2xl font-semibold leading-snug sm:-mt-24 sm:text-4xl">
            La calidad no es un acto, es un hábito.{" "}
            <span className="text-muted-foreground">
              Asegurar la excelencia del software es el puente entre el código y la confianza del
              usuario.
            </span>
          </blockquote>
          <div className="mx-auto mt-10 h-px w-24 bg-gradient-primary" />
        </figure>
      </section>
    </>
  );
}
