import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AuctionShell } from "@/components/auction/shell";
import { LotCard } from "@/components/auction/lot-card";
import { LotModal } from "@/components/auction/modals";
import { lots, type Lot } from "@/lib/auction-data";

export const Route = createFileRoute("/ending-soon")({
  head: () => ({
    meta: [
      { title: "Ending Soon — BAKDOR" },
      {
        name: "description",
        content: "Last-minute bids, sniper protection and lots closing in minutes — only on bakdor.",
      },
    ],
  }),
  component: EndingSoonPage,
});

function EndingSoonPage() {
  const [lot, setLot] = useState<Lot | null>(null);
  // Treat all non-closed live/leader lots as "ending soon"
  const visible = lots.filter((l) => l.endsIn && l.endsIn !== "Closed" && l.endsIn !== "—");

  return (
    <AuctionShell
      eyebrow="ending soon"
      title={<>Final<br />stretch.</>}
      description="Lots in their last hours. Sniper protection on, instant push when a watched lot is closing."
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
