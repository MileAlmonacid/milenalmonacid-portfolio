import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CV_FILENAME, CV_URL, PROFILE } from "@/content/cv";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2" aria-label="Inicio">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon/50 bg-primary/10 font-mono text-sm font-bold text-primary-glow shadow-[var(--shadow-neon)] transition-all group-hover:border-neon">
        {"</>"}
      </span>
      <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
        {PROFILE.shortName}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/40 p-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="neon" size="pill">
            <a href={CV_URL} download={CV_FILENAME} target="_blank" rel="noopener">
              <Download />
              <span>Descargar CV</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="animate-fade-up border-t border-border/60 px-5 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
