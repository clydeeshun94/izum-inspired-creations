import { Link } from "@tanstack/react-router";
import { Menu, ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="3" fill="currentColor" />
      <circle cx="14" cy="6" r="3" fill="currentColor" opacity="0.55" />
      <circle cx="6" cy="14" r="3" fill="currentColor" opacity="0.55" />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
    </svg>
  );
}

const navItems = [
  { label: "MARKETPLACE", to: "/marketplace" as const },
  { label: "AUCTIONS", to: "/auctions" as const },
  { label: "WATCHLIST", to: "/watchlist" as const },
];

export function AuctionShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full text-foreground">
      <div aria-hidden className="fixed inset-0 -z-10 bg-ember-scene" />

      <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 sm:top-8">
        <nav className="nav-pill flex w-full max-w-3xl items-center justify-between rounded-xl px-5 py-3.5 font-mono text-[13px] tracking-[0.18em]">
          <Link to="/" className="flex items-center gap-2.5 text-foreground">
            <Logo />
            <span className="font-medium">BAKDOR</span>
          </Link>
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "flex items-center gap-2 text-foreground" }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full border border-current" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:ml-2"
            aria-label="Menu"
          >
            <Menu size={16} />
          </button>
        </nav>
      </header>

      <section className="relative px-6 pt-36 pb-10 sm:px-10 sm:pt-44 lg:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> back
        </Link>
        <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.22em] text-ember">
          / {eyebrow}
        </p>
        <h1 className="text-display mt-4 text-[clamp(2.25rem,6vw,5rem)]">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-xl font-mono text-[13px] uppercase leading-relaxed tracking-[0.16em] text-foreground/75">
            {description}
          </p>
        ) : null}
      </section>

      <section className="relative px-6 pb-24 sm:px-10 lg:px-16">{children}</section>
    </main>
  );
}
