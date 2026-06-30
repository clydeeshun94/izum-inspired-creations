import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Lot } from "@/lib/auction-data";
import { ArrowUpRight, Gavel, Heart, Share2 } from "lucide-react";

const modalSurface =
  "max-w-2xl border-border/60 bg-background/95 text-foreground backdrop-blur-xl p-0 overflow-hidden";

/* ---------------- Lot detail modal ---------------- */
export function LotModal({
  lot,
  open,
  onOpenChange,
}: {
  lot: Lot | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={modalSurface}>
        {lot ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto">
              <img
                src={lot.image}
                alt={lot.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ember backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                {lot.tag}
              </span>
            </div>
            <div className="flex flex-col gap-6 p-7">
              <DialogHeader className="space-y-3 text-left">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                  / {lot.category}
                </p>
                <DialogTitle className="text-display text-[clamp(1.4rem,2vw,1.9rem)] leading-tight">
                  {lot.title}
                </DialogTitle>
                <DialogDescription className="font-mono text-[12px] uppercase tracking-[0.16em] text-foreground/70">
                  {lot.detail}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                <Stat label="Current bid" value={lot.currentBid ?? "—"} />
                <Stat label="Ends in" value={lot.endsIn ?? "—"} />
                <Stat label="Bidders" value={String(lot.bidders ?? 0)} />
                <Stat label="Status" value={lot.tag} />
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-2">
                <button className="group inline-flex flex-1 items-center justify-between gap-4 rounded-lg bg-foreground px-4 py-3 font-mono text-[12px] tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5">
                  <span className="inline-flex items-center gap-2">
                    <Gavel size={14} /> PLACE BID
                  </span>
                  <ArrowUpRight size={14} />
                </button>
                <button
                  aria-label="Watch"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border/60 text-foreground transition-colors hover:text-ember"
                >
                  <Heart size={14} />
                </button>
                <button
                  aria-label="Share"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border/60 text-foreground transition-colors hover:text-ember"
                >
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/40 px-3 py-2.5">
      <p className="text-[10px] text-foreground/55">{label}</p>
      <p className="mt-1.5 text-foreground">{value}</p>
    </div>
  );
}

/* ---------------- Create Auction modal ---------------- */
export function CreateAuctionModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={modalSurface}>
        <div className="p-8">
          <DialogHeader className="space-y-3 text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
              / create auction
            </p>
            <DialogTitle className="text-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-tight">
              List a lot.
              <br />
              Open the floor.
            </DialogTitle>
            <DialogDescription className="font-mono text-[12px] uppercase tracking-[0.16em] text-foreground/65">
              Fill the basics — set a reserve, your timer starts when bidders arrive.
            </DialogDescription>
          </DialogHeader>

          <form className="mt-7 space-y-4 font-mono text-[12px] uppercase tracking-[0.16em]">
            <Field label="Lot title" placeholder="e.g. Vintage Rolex Submariner" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Starting bid" placeholder="$ 500" />
              <Field label="Duration" placeholder="48h" />
            </div>
            <Field label="Category" placeholder="Watches · Art · Auto · Fashion" />
            <FieldArea label="Description" placeholder="Condition, provenance, anything bidders should know." />

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="group inline-flex flex-1 items-center justify-between gap-4 rounded-lg bg-foreground px-4 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>OPEN AUCTION</span>
                <ArrowUpRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-lg border border-border/60 px-4 py-3 text-foreground/70 transition-colors hover:text-foreground"
              >
                SAVE DRAFT
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] text-foreground/55">{label}</span>
      <input
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground placeholder:text-foreground/35 focus:border-ember focus:outline-none"
      />
    </label>
  );
}

function FieldArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] text-foreground/55">{label}</span>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="mt-1.5 w-full resize-none rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground placeholder:text-foreground/35 focus:border-ember focus:outline-none"
      />
    </label>
  );
}

/* ---------------- My Items modal ---------------- */
const myItems = [
  { title: "Vintage Rolex Submariner 1968", status: "ACTIVE", bid: "$14,250", time: "ends 04:12" },
  { title: "1992 McLaren F1 Service Book", status: "ACTIVE", bid: "$3,800", time: "ends 00:47" },
  { title: "Banksy — Girl with Balloon", status: "SOLD", bid: "$48,900", time: "closed" },
  { title: "Leica M6 — Black Paint", status: "DRAFT", bid: "—", time: "not listed" },
];

export function MyItemsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={modalSurface}>
        <div className="p-8">
          <DialogHeader className="space-y-3 text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
              / my items
            </p>
            <DialogTitle className="text-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-tight">
              Your lots
              <br />
              on the floor.
            </DialogTitle>
            <DialogDescription className="font-mono text-[12px] uppercase tracking-[0.16em] text-foreground/65">
              Live auctions, scheduled drafts, and your sold history — all in one place.
            </DialogDescription>
          </DialogHeader>

          <ul className="mt-7 divide-y divide-border/60 rounded-lg border border-border/60 bg-background/40 font-mono text-[12px] uppercase tracking-[0.14em]">
            {myItems.map((it) => (
              <li
                key={it.title}
                className="flex items-center justify-between gap-4 px-4 py-3.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-foreground">{it.title}</p>
                  <p className="mt-1 text-[10px] text-foreground/55">{it.time}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-foreground/80">{it.bid}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      it.status === "ACTIVE"
                        ? "bg-ember/15 text-ember"
                        : it.status === "SOLD"
                          ? "bg-foreground/10 text-foreground/70"
                          : "bg-background/60 text-foreground/55"
                    }`}
                  >
                    {it.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
