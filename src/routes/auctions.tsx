import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AuctionShell } from "@/components/auction/shell";
import { LotCard } from "@/components/auction/lot-card";
import { LotModal } from "@/components/auction/modals";
import { lots, type Lot } from "@/lib/auction-data";

export const Route = createFileRoute("/auctions")({
  head: () => ({
    meta: [
      { title: "Quick Actions — BAKDOR" },
      {
        name: "description",
        content: "Hot auctions, buy-now deals and reverse auctions — all the fast moves in one place.",
      },
    ],
  }),
  component: AuctionsPage,
});

const tabs = [
  { id: "hot", label: "HOT AUCTIONS" },
  { id: "buy-now", label: "BUY NOW" },
  { id: "reverse", label: "REVERSE AUCTIONS" },
] as const;

function AuctionsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("hot");
  const [lot, setLot] = useState<Lot | null>(null);

  // Slice the shared lots differently per tab so each page feels distinct
  const visible =
    tab === "hot"
      ? lots.filter((l) => l.kind === "live" || l.kind === "leader")
      : tab === "buy-now"
        ? lots.filter((l) => l.kind !== "tmb")
        : lots.filter((l) => l.kind === "live");

  return (
    <AuctionShell
      eyebrow="quick actions"
      title={<>Jump<br />into the floor.</>}
      description="Three doors into the action — chase a hot bid, buy outright, or let sellers compete on a reverse auction."
    >
      <div className="flex flex-wrap gap-2 pb-8 font-mono text-[11px] uppercase tracking-[0.22em]">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-3.5 py-1.5 transition-colors ${
              tab === t.id
                ? "border-ember bg-ember/15 text-ember"
                : "border-border/60 text-foreground/70 hover:text-foreground"
            }`}
          >
            {t.label}
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
