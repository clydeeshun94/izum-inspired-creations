import { createFileRoute } from "@tanstack/react-router";
import { Menu, MoreHorizontal, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IZUM.STUDY — Learn to code" },
      { name: "description", content: "Learn to build websites of any complexity on Taptop — from zero to pro." },
    ],
  }),
  component: Index,
});

const navItems = ["PROGRAM", "PRICE", "CONTACTS"];

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

function Index() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-ember-scene text-foreground">
      {/* subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Nav */}
      <header className="absolute inset-x-0 top-6 z-30 flex justify-center px-4 sm:top-8">
        <nav className="nav-pill flex w-full max-w-3xl items-center justify-between rounded-xl px-5 py-3.5 font-mono text-[13px] tracking-[0.18em]">
          <a href="#" className="flex items-center gap-2.5 text-foreground">
            <Logo />
            <span className="font-medium">IZUM.STUDY</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full border border-current" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:ml-2" aria-label="Menu">
            <Menu size={16} />
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-10 pt-40 sm:px-10 sm:pb-14 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <h1 className="text-display col-span-1 text-[clamp(2.75rem,9vw,9.5rem)] text-foreground lg:col-span-8">
            Learn
            <br />
            to code with
            <br />
            izum.study
          </h1>

          <div className="col-span-1 flex flex-col items-stretch gap-6 lg:col-span-4 lg:items-end">
            <p className="max-w-xs font-mono text-[13px] uppercase leading-relaxed tracking-[0.16em] text-foreground/85 lg:text-right">
              Learn to build websites
              <br />
              of any complexity on
              <br />
              taptop — from zero to pro
            </p>

            <div className="flex items-center gap-2">
              <button className="group inline-flex items-center justify-between gap-6 rounded-lg bg-foreground px-5 py-3.5 font-mono text-[13px] tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5">
                PUSH ME UP
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                aria-label="More"
                className="grid h-12 w-12 place-items-center rounded-lg bg-foreground text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-14 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70">
          <span className="rounded-md border border-border/60 px-3 py-1.5">[ scroll ]</span>
          <div className="flex items-center gap-6">
            <a href="https://t.me/izum_study" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              Telegram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              D—Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
