import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Menu,
  MoreHorizontal,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Flame,
  ShieldCheck,
  Gavel,
  Bookmark,
  PackageOpen,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { lots, type Lot } from "@/lib/auction-data";
import { CreateAuctionModal, LotModal, MyItemsModal } from "@/components/auction/modals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAKDOR — Live auctions, real bids" },
      {
        name: "description",
        content:
          "Bakdor is the auction platform for hot drops, reverse auctions and buy-now deals. Bid live, watch winners, climb the TMB leaderboard.",
      },
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
        <button
          className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:ml-2"
          aria-label="Menu"
        >
          <Menu size={16} />
        </button>
      </nav>
    </header>
  );
}

function Hero({ onCreate }: { onCreate: () => void }) {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
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
            Bid live.
            <br />
            Win real.
            <br />
            bakdor
          </h1>

          <div className="col-span-1 flex flex-col items-stretch gap-6 lg:col-span-4 lg:items-end">
            <p className="max-w-xs font-mono text-[13px] uppercase leading-relaxed tracking-[0.16em] text-foreground/85 lg:text-right">
              The auction platform
              <br />
              for hot drops, reverse
              <br />
              auctions &amp; buy-now deals
            </p>

            <div className="flex items-center gap-2">
              <a
                href="#program"
                className="group inline-flex items-center justify-between gap-6 rounded-lg bg-foreground px-5 py-3.5 font-mono text-[13px] tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                PUSH ME UP
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                onClick={onCreate}
                aria-label="Create auction"
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
            <a
              href="https://t.me/bakdor"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
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

/* ------------------------------------------------------------------ */
/*                       LIVE AUCTION (full tile)                     */
/* ------------------------------------------------------------------ */

function LiveAuctionTile({ onOpen }: { onOpen: (l: Lot) => void }) {
  const [index, setIndex] = useState(0);
  const total = lots.length;
  const lot = lots[index];

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative h-full min-h-[460px] w-full overflow-hidden">
      {/* Full-bleed photo */}
      <img
        src={lot.image}
        alt={lot.title}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      {/* Top row: tag + counter */}
      <div className="relative flex items-center justify-between p-6 sm:p-8 font-mono text-[11px] uppercase tracking-[0.22em]">
        <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1.5 text-ember backdrop-blur">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
            <span className="relative inline-flex h-full w-full rounded-full bg-current" />
          </span>
          {lot.tag}
        </span>
        <span className="rounded-full bg-background/70 px-3 py-1.5 text-foreground/80 backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
          / {lot.category}
        </p>
        <h4 className="text-display mt-3 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-foreground">
          {lot.title}
        </h4>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85">
          {lot.meta}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
          {lot.detail}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpen(lot)}
            className="group inline-flex items-center gap-3 rounded-lg bg-foreground px-4 py-2.5 font-mono text-[12px] tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            VIEW LOT
            <ArrowUpRight size={14} />
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 text-foreground backdrop-blur transition-colors hover:text-ember"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 text-foreground backdrop-blur transition-colors hover:text-ember"
          >
            <ArrowRight size={14} />
          </button>
          <span className="ml-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            swipe previews
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                           PROGRAM SECTION                          */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    num: "01.",
    title: "/ MARKETPLACE.",
    body: "Browse thousands of listings across every category — from rare watches to studio gear — all in one curated marketplace.",
    icon: ShieldCheck,
    to: "/marketplace" as const,
  },
  {
    num: "02.",
    title: "/ ENDING SOON.",
    body: "Track auctions in their final stretch. Last-minute bids, sniper protection, and instant push when something you watch is closing.",
    icon: Flame,
    to: "/ending-soon" as const,
  },
  {
    num: "03.",
    title: "/ SECURE BIDDING.",
    body: "Verified sellers, escrowed payments and dispute resolution baked in. Every bid is binding — every win is honored.",
    icon: Trophy,
    to: null,
  },
];

function Program({
  onCreate,
  onOpenLot,
}: {
  onCreate: () => void;
  onOpenLot: (l: Lot) => void;
}) {
  return (
    <section
      id="program"
      className="relative w-full rounded-3xl border border-border/40 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-border/40 px-6 py-20 sm:px-10 md:border-r md:py-28 lg:px-16">
          <h2 className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)]">
            Why bid
            <br />
            on bakdor?
          </h2>
        </div>
        <div className="relative px-6 py-20 sm:px-10 md:py-28 lg:px-16">
          <button
            type="button"
            onClick={onCreate}
            className="group inline-flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-foreground"
          >
            [ create auction ]
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <span className="absolute right-6 top-24 inline-block h-1.5 w-1.5 rounded-full bg-ember sm:right-10 lg:right-16" />
        </div>
      </div>

      {/* Bottom split: live auction photo tile + 3 reasons */}
      <div className="grid grid-cols-1 border-t border-border/40 md:grid-cols-2">
        <div className="relative border-border/40 md:border-r min-h-[460px]">
          <LiveAuctionTile onOpen={onOpenLot} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const cls = `group text-left px-6 py-12 sm:px-10 sm:py-16 lg:px-12 transition-colors hover:bg-foreground/[0.04] ${
              i === 0 ? "border-border/40 sm:border-r" : ""
            } ${i > 0 ? "border-t border-border/40 sm:border-t-0" : ""} ${
              i === 2 ? "sm:col-span-2 sm:border-t" : ""
            }`;
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[13px] tracking-[0.22em] text-ember">{r.num}</p>
                  <Icon size={16} className="text-foreground/40 transition-colors group-hover:text-ember" />
                </div>
                <h3 className="text-display mt-8 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight">
                  {r.title}
                </h3>
                <p className="mt-6 max-w-sm font-mono text-[12.5px] uppercase leading-relaxed tracking-[0.14em] text-foreground/70">
                  {r.body}
                </p>
              </>
            );
            return r.to ? (
              <Link key={r.num} to={r.to} className={cls}>
                {content}
              </Link>
            ) : (
              <div key={r.num} className={cls.replace("hover:bg-foreground/[0.04]", "")}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                            PRICE SECTION                           */
/* ------------------------------------------------------------------ */

type Tier = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  icon: typeof Gavel;
  to?: "/auctions" | "/watchlist";
  modal?: "my-items";
};

const tiers: Tier[] = [
  {
    name: "QUICK ACTIONS",
    price: "Jump in",
    features: ["Hot auctions", "Buy now available", "Reverse auctions"],
    cta: "EXPLORE",
    icon: Gavel,
    to: "/auctions",
  },
  {
    name: "MY ITEMS",
    price: "Your listings",
    features: ["Active auctions", "Drafts & scheduled", "Sold history"],
    cta: "OPEN",
    icon: PackageOpen,
    modal: "my-items",
  },
  {
    name: "WATCHLIST",
    price: "Tracked",
    features: ["Saved lots", "Ending-soon alerts", "Outbid notifications"],
    cta: "VIEW",
    icon: Bookmark,
    to: "/watchlist",
  },
];

function Price({ onOpenMyItems }: { onOpenMyItems: () => void }) {
  return (
    <section
      id="price"
      className="relative w-full rounded-3xl border border-border/40 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-border/40 px-6 py-20 sm:px-10 md:border-r md:py-28 lg:px-16">
          <h2 className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)]">
            Pick
            <br />
            your move.
          </h2>
        </div>
        <div className="px-6 py-20 sm:px-10 md:py-28 lg:px-16">
          <p className="max-w-md font-mono text-[13px] uppercase leading-relaxed tracking-[0.18em] text-foreground/75">
            / Three doors into the auction floor. Bid fast, manage what you've listed, or stalk the lots you want.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-border/40 md:grid-cols-3">
        {tiers.map((t, i) => {
          const Icon = t.icon;
          const cls = `group text-left px-6 py-16 sm:px-10 lg:px-12 transition-colors hover:bg-foreground/[0.04] ${
            i < tiers.length - 1
              ? "border-b border-border/40 md:border-b-0 md:border-r"
              : ""
          }`;
          const body = (
            <>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[13px] tracking-[0.22em] text-ember">0{i + 1}.</p>
                <Icon size={16} className="text-foreground/40 transition-colors group-hover:text-ember" />
              </div>
              <h3 className="text-display mt-8 text-[clamp(2rem,3.5vw,2.75rem)]">{t.name}</h3>
              <p className="text-display mt-2 text-[clamp(1.25rem,2vw,1.75rem)] text-foreground/60">
                {t.price}
              </p>
              <ul className="mt-8 space-y-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-foreground/75">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-10 inline-flex items-center gap-3 rounded-lg bg-foreground px-4 py-3 font-mono text-[12px] tracking-[0.2em] text-primary-foreground transition-transform group-hover:-translate-y-0.5">
                {t.cta}
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </>
          );
          return t.to ? (
            <Link key={t.name} to={t.to} className={cls}>
              {body}
            </Link>
          ) : (
            <button key={t.name} type="button" onClick={onOpenMyItems} className={cls}>
              {body}
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                          CONTACTS SECTION                          */
/* ------------------------------------------------------------------ */

function Contacts({ onCreate }: { onCreate: () => void }) {
  return (
    <section id="contacts" className="relative w-full overflow-hidden">
      <div>
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
                <a
                  href="mailto:hi@bakdor.studio"
                  className="group flex items-center justify-between border-b border-border/60 pb-4 transition-colors hover:text-foreground"
                >
                  hi@bakdor.studio
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/bakdor"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-border/60 pb-4 transition-colors hover:text-foreground"
                >
                  Telegram — t.me/bakdor
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={onCreate}
                  className="group flex w-full items-center justify-between border-b border-border/60 pb-4 text-left transition-colors hover:text-foreground"
                >
                  <span className="inline-flex items-center gap-2">
                    <Plus size={14} /> create an auction
                  </span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
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
  const [createOpen, setCreateOpen] = useState(false);
  const [myItemsOpen, setMyItemsOpen] = useState(false);
  const [lot, setLot] = useState<Lot | null>(null);

  return (
    <main className="relative w-full text-foreground">
      {/* Single ember background — every section scrolls over it */}
      <div aria-hidden className="fixed inset-0 -z-10 bg-ember-scene" />
      <Nav />
      <Hero onCreate={() => setCreateOpen(true)} />
      <div className="px-3 sm:px-5 lg:px-6 space-y-4 sm:space-y-6">
        <Program onCreate={() => setCreateOpen(true)} onOpenLot={setLot} />
        <Price onOpenMyItems={() => setMyItemsOpen(true)} />
      </div>
      <Contacts onCreate={() => setCreateOpen(true)} />

      <CreateAuctionModal open={createOpen} onOpenChange={setCreateOpen} />
      <MyItemsModal open={myItemsOpen} onOpenChange={setMyItemsOpen} />
      <LotModal lot={lot} open={!!lot} onOpenChange={(v) => !v && setLot(null)} />
    </main>
  );
}
