import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AuctionShell } from "@/components/auction/shell";
import { LotCard } from "@/components/auction/lot-card";
import { LotModal } from "@/components/auction/modals";
import { lots, type Lot } from "@/lib/auction-data";

export const Route = createFileRoute("/watchlist")({
  head: () => ({
    meta: [
      { title: "Watchlist — BAKDOR" },
      {
        name: "description",
        content: "The lots you're tracking — saved, ending-soon alerts and outbid notifications.",
      },
    ],
  }),
  component: WatchlistPage,
});

function WatchlistPage() {
  const [lot, setLot] = useState<Lot | null>(null);
  // Pretend the user is watching all but the TMB profile
  const visible = lots.filter((l) => l.kind !== "tmb");

  return (
    <AuctionShell
      eyebrow="watchlist"
      title={<>Lots<br />you're tracking.</>}
      description="Saved drops, ending-soon alerts and outbid notifications — everything you don't want to miss."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((l) => (
          <LotCard key={l.id} lot={l} onOpen={setLot} />
        ))}
      </div>
      <LotModal lot={lot} open={!!lot} onOpenChange={(v) => !v && setLot(null)} />
    </AuctionShell>
  );
}
