import { PROFILE } from "@/content/cv";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.role}
      </div>
    </footer>
  );
}
