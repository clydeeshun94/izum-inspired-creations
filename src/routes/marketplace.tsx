import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AuctionShell } from "@/components/auction/shell";
import { LotCard } from "@/components/auction/lot-card";
import { LotModal } from "@/components/auction/modals";
import { lots, type Lot } from "@/lib/auction-data";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — BAKDOR" },
      {
        name: "description",
        content: "Browse every lot on bakdor — watches, art, automotive, fashion. Curated, verified, live.",
      },
    ],
  }),
  component: MarketplacePage,
});

const filters = ["All", "Watches", "Art", "Automotive", "Fashion", "Collector"];

function MarketplacePage() {
  const [active, setActive] = useState<string>("All");
  const [lot, setLot] = useState<Lot | null>(null);

  const visible = active === "All" ? lots : lots.filter((l) => l.category === active);

  return (
    <AuctionShell
      eyebrow="marketplace"
      title={<>Every lot.<br />One floor.</>}
      description="Thousands of listings across every category — from rare watches to studio gear, all curated in one place."
    >
      <div className="flex flex-wrap gap-2 pb-8 font-mono text-[11px] uppercase tracking-[0.22em]">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-3.5 py-1.5 transition-colors ${
              active === f
                ? "border-ember bg-ember/15 text-ember"
                : "border-border/60 text-foreground/70 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((l) => (
          <LotCard key={l.id} lot={l} onOpen={setLot} />
        ))}
      </div>

      <LotModal lot={lot} open={!!lot} onOpenChange={(v) => !v && setLot(null)} />
    </AuctionShell>
  );
}
