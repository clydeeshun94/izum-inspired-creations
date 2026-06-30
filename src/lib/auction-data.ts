import watchImg from "@/assets/auction-watch.jpg";
import birkinImg from "@/assets/auction-birkin.jpg";
import artImg from "@/assets/auction-art.jpg";
import mclarenImg from "@/assets/auction-mclaren.jpg";
import tmbImg from "@/assets/auction-tmb.jpg";

export type LotKind = "live" | "winner" | "leader" | "tmb";

export type Lot = {
  id: string;
  kind: LotKind;
  tag: string;
  title: string;
  meta: string;
  detail: string;
  image: string;
  category: string;
  currentBid?: string;
  endsIn?: string;
  bidders?: number;
};

export const lots: Lot[] = [
  {
    id: "rolex-1968",
    kind: "live",
    tag: "LIVE NOW",
    title: "Vintage Rolex Submariner 1968",
    meta: "Current bid · $14,250",
    detail: "23 bidders · ends in 04:12:08",
    image: watchImg,
    category: "Watches",
    currentBid: "$14,250",
    endsIn: "04:12:08",
    bidders: 23,
  },
  {
    id: "birkin-etoupe",
    kind: "leader",
    tag: "LEADER",
    title: "Hermès Birkin 30 — Étoupe",
    meta: "Top bidder · @anya.k",
    detail: "Held lead for 1h 42m",
    image: birkinImg,
    category: "Fashion",
    currentBid: "$22,800",
    endsIn: "11:04:55",
    bidders: 41,
  },
  {
    id: "banksy-girl",
    kind: "winner",
    tag: "WINNER",
    title: "Banksy — Girl with Balloon (Print)",
    meta: "Sold · $48,900",
    detail: "Won by @midnight.collector",
    image: artImg,
    category: "Art",
    currentBid: "$48,900",
    endsIn: "Closed",
    bidders: 67,
  },
  {
    id: "mclaren-book",
    kind: "live",
    tag: "LIVE NOW",
    title: "1992 McLaren F1 Service Book",
    meta: "Current bid · $3,800",
    detail: "11 bidders · ends in 00:47:31",
    image: mclarenImg,
    category: "Automotive",
    currentBid: "$3,800",
    endsIn: "00:47:31",
    bidders: 11,
  },
  {
    id: "hugo-tmb",
    kind: "tmb",
    tag: "TOP TMB",
    title: "@hugo.delacroix",
    meta: "Trust me bros · 2,418",
    detail: "147 successful deals · 0 disputes",
    image: tmbImg,
    category: "Collector",
    currentBid: "2,418 TMB",
    endsIn: "—",
    bidders: 147,
  },
];
