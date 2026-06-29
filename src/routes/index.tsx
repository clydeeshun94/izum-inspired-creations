import { createFileRoute } from "@tanstack/react-router";
import { Menu, MoreHorizontal, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAKDOR — Learn to code" },
      { name: "description", content: "Learn to build websites of any complexity on Taptop — from zero to pro." },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "PROGRAM", href: "#program" },
  { label: "PRICE", href: "#price" },
  { label: "CONTACTS", href: "#contacts" },
];

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

function Nav() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 sm:top-8">
      <nav className="nav-pill flex w-full max-w-3xl items-center justify-between rounded-xl px-5 py-3.5 font-mono text-[13px] tracking-[0.18em]">
        <a href="#top" className="flex items-center gap-2.5 text-foreground">
          <Logo />
          <span className="font-medium">BAKDOR</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full border border-current" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:ml-2" aria-label="Menu">
          <Menu size={16} />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-ember-scene">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-10 pt-40 sm:px-10 sm:pb-14 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <h1 className="text-display col-span-1 text-[clamp(2.75rem,9vw,9.5rem)] text-foreground lg:col-span-8">
            Learn
            <br />
            to code with
            <br />
            bakdor
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
              <a href="#program" className="group inline-flex items-center justify-between gap-6 rounded-lg bg-foreground px-5 py-3.5 font-mono text-[13px] tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5">
                PUSH ME UP
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                aria-label="More"
                className="grid h-12 w-12 place-items-center rounded-lg bg-foreground text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70">
          <span className="rounded-md border border-border/60 px-3 py-1.5">[ scroll ]</span>
          <div className="flex items-center gap-6">
            <a href="https://t.me/bakdor" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              Telegram
            </a>
            <a href="#contacts" className="transition-colors hover:text-foreground">
              D—Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    num: "01.",
    title: "/ A HOME-GROWN PRODUCT.",
    body: "Taptop is our home-grown tool that now almost matches Webflow and is purpose-built for our realities.",
  },
  {
    num: "02.",
    title: "/ SIMPLE PAYMENTS.",
    body: "Accepts every payment method—no headaches over transfers or currency conversion.",
  },
  {
    num: "03.",
    title: "/ SERVERS NEARBY.",
    body: "Everything is fully compliant with the law—no legal headaches. Plus, sites load faster because the server isn't light-years away.",
  },
];

function Program() {
  return (
    <section
      id="program"
      className="relative w-full bg-foreground text-primary-foreground rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Top split: title + [JOIN US] */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-primary-foreground/10 px-6 py-20 sm:px-10 md:border-r md:py-28 lg:px-16">
          <h2 className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)]">
            Why do we
            <br />
            choose taptop?
          </h2>
        </div>
        <div className="relative px-6 py-20 sm:px-10 md:py-28 lg:px-16">
          <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-primary-foreground/75">
            [ join us ]
          </span>
          <span className="absolute right-6 top-24 inline-block h-1.5 w-1.5 rounded-full bg-ember sm:right-10 lg:right-16" />
        </div>
      </div>

      {/* Bottom split: caption + 3 reasons */}
      <div className="grid grid-cols-1 border-t border-primary-foreground/10 md:grid-cols-2">
        <div className="border-primary-foreground/10 px-6 py-16 sm:px-10 md:border-r md:py-24 lg:px-16">
          <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-primary-foreground/75">
            / Keeping up with
            <br />
            the times
          </p>
          {/* dotted decorative figure */}
          <div className="mt-16 grid h-72 w-full max-w-sm grid-cols-6 grid-rows-8 gap-3 opacity-90">
            {[
              [0,2],[1,1],[2,2],[3,0],[1,3],[3,3],[0,4],[2,4],[4,4],[2,5],[3,6],[2,7],[3,7],
            ].map(([c, r], i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-full bg-ember"
                style={{ gridColumnStart: c + 1, gridRowStart: r + 1 }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={`px-6 py-12 sm:px-10 sm:py-16 lg:px-12 ${
                i === 0 ? "border-primary-foreground/10 sm:border-r" : ""
              } ${i > 0 ? "border-t border-primary-foreground/10 sm:border-t-0" : ""} ${
                i === 2 ? "sm:col-span-2 sm:border-t" : ""
              }`}
            >
              <p className="font-mono text-[13px] tracking-[0.22em] text-ember">{r.num}</p>
              <h3 className="text-display mt-8 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight">
                {r.title}
              </h3>
              <p className="mt-6 max-w-sm font-mono text-[12.5px] uppercase leading-relaxed tracking-[0.14em] text-primary-foreground/70">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const tiers = [
  { name: "BASIC", price: "$0", features: ["Intro lessons", "Community access", "Self-paced"] },
  { name: "PRO", price: "$149", features: ["Full curriculum", "Live workshops", "Project reviews"] },
  { name: "STUDIO", price: "$390", features: ["1:1 mentorship", "Portfolio launch", "Job referrals"] },
];

function Price() {
  return (
    <section
      id="price"
      className="relative w-full bg-foreground text-primary-foreground rounded-3xl overflow-hidden shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-primary-foreground/10 px-6 py-20 sm:px-10 md:border-r md:py-28 lg:px-16">
          <h2 className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)]">
            Pick
            <br />
            your tier.
          </h2>
        </div>
        <div className="px-6 py-20 sm:px-10 md:py-28 lg:px-16">
          <p className="max-w-md font-mono text-[13px] uppercase leading-relaxed tracking-[0.18em] text-primary-foreground/75">
            / Three ways in. Start free, level up when the work demands it. Cancel any time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-primary-foreground/10 md:grid-cols-3">
        {tiers.map((t, i) => (
          <div
            key={t.name}
            className={`px-6 py-16 sm:px-10 lg:px-12 ${i < tiers.length - 1 ? "border-b border-primary-foreground/10 md:border-b-0 md:border-r" : ""}`}
          >
            <p className="font-mono text-[13px] tracking-[0.22em] text-ember">0{i + 1}.</p>
            <h3 className="text-display mt-8 text-[clamp(2rem,3.5vw,2.75rem)]">{t.name}</h3>
            <p className="text-display mt-2 text-[clamp(2.25rem,4vw,3rem)]">
              {t.price}
            </p>
            <ul className="mt-8 space-y-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-primary-foreground/75">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-background px-4 py-3 font-mono text-[12px] tracking-[0.2em] text-foreground transition-transform hover:-translate-y-0.5">
              ENROLL
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}


function Contacts() {
  return (
    <section id="contacts" className="relative w-full overflow-hidden">
      <div className="bg-ember-scene">
        <div className="grid grid-cols-1 border-t border-border md:grid-cols-2">
          <div className="border-border px-6 py-20 sm:px-10 md:border-r md:py-28 lg:px-16">
            <h2 className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)]">
              Let's
              <br />
              talk.
            </h2>
          </div>
          <div className="px-6 py-20 sm:px-10 md:py-28 lg:px-16">
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-foreground/85">
              [ reach out ]
            </p>
            <ul className="mt-10 space-y-5 font-mono text-[14px] uppercase tracking-[0.18em]">
              <li>
                <a href="mailto:hi@bakdor.studio" className="group flex items-center justify-between border-b border-border/60 pb-4 transition-colors hover:text-foreground">
                  hi@bakdor.studio
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="https://t.me/bakdor" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-border/60 pb-4 transition-colors hover:text-foreground">
                  Telegram — t.me/bakdor
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between border-b border-border/60 pb-4 transition-colors hover:text-foreground">
                  D—Profile
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-border px-6 py-10 sm:flex-row sm:items-center sm:px-10 lg:px-16">
          <div className="flex items-center gap-2.5 font-mono text-[13px] tracking-[0.22em]">
            <Logo />
            BAKDOR
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
            © {new Date().getFullYear()} BAKDOR — All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative w-full text-foreground">
      {/* Static ember background that the white blocks scroll over */}
      <div aria-hidden className="fixed inset-0 -z-10 bg-ember-scene" />
      <Nav />
      <Hero />
      <div className="px-3 sm:px-5 lg:px-6 space-y-4 sm:space-y-6">
        <Program />
        <Price />
      </div>
      <Contacts />
    </main>
  );
}

