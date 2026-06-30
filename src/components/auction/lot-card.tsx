import type { Lot } from "@/lib/auction-data";
import { ArrowUpRight } from "lucide-react";

export function LotCard({ lot, onOpen }: { lot: Lot; onOpen: (l: Lot) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(lot)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/40 text-left backdrop-blur transition-colors hover:border-ember/60"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={lot.image}
          alt={lot.title}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[10.5px] uppercase tracking-[0.22em]">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-2.5 py-1 text-ember backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            {lot.tag}
          </span>
          <span className="rounded-full bg-background/70 px-2.5 py-1 text-foreground/80 backdrop-blur">
            {lot.category}
          </span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-4 p-5">
        <div>
          <h3 className="text-display text-[clamp(1.05rem,1.6vw,1.35rem)] leading-tight">
            {lot.title}
          </h3>
          <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-foreground/75">
            {lot.meta}
          </p>
          <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55">
            {lot.detail}
          </p>
        </div>
        <span className="mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border/60 text-foreground transition-all group-hover:-translate-y-0.5 group-hover:border-ember group-hover:text-ember">
          <ArrowUpRight size={14} />
        </span>
      </div>
    </button>
  );
}
