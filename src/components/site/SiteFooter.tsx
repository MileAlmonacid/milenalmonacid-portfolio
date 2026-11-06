import { PROFILE } from "@/content/cv";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <span className="font-mono text-primary-glow">{"</>"}</span>
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.role}
        </p>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
