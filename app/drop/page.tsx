import type { Metadata } from "next";
import { PieceTile } from "@/components/PieceTile";
import { ARTISTS, CURRENT_DROP, PIECES } from "@/lib/catalog";

export const metadata: Metadata = { title: `Drop ${String(CURRENT_DROP.number).padStart(2, "0")}` };

export default function DropPage() {
  const pieces = PIECES.filter((p) => p.drop === CURRENT_DROP.number).sort((a, b) => Number(a.sold) - Number(b.sold));
  const artists = ARTISTS.filter((a) => pieces.some((p) => p.artist === a.slug));
  return (
    <div className="page">
      <header className="page-head">
        <h1>
          Drop {String(CURRENT_DROP.number).padStart(2, "0")}, {CURRENT_DROP.month}
        </h1>
        <p>
          Released {CURRENT_DROP.released}. {pieces.length} pieces from {artists.map((a) => a.name).join(", ")}. A new drop
          comes every month, when the last round of workwear comes back from the studios.
        </p>
      </header>
      <ul className="grid">
        {pieces.map((p, i) => (
          <PieceTile key={p.no} piece={p} eager={i < 5} />
        ))}
      </ul>
    </div>
  );
}
