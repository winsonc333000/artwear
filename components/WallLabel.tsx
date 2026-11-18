import Link from "next/link";
import { artistBySlug, type Piece } from "@/lib/catalog";
import { AddToBag } from "./AddToBag";

export function WallLabel({ piece, className = "" }: { piece: Piece; className?: string }) {
  const artist = artistBySlug(piece.artist);
  return (
    <aside className={`wall-label ${className}`} aria-label={`Label for No. ${piece.no}`}>
      <p className="wl-artist">
        <Link href={`/artists/${piece.artist}`}>{artist?.name}</Link> /
      </p>
      <p>
        {piece.garment}, {piece.worn}
      </p>
      <p>{piece.media}</p>
      <p className="wl-no">
        No. {piece.no} · {piece.sold ? "Sold" : "1 of 1"}
      </p>
      <AddToBag no={piece.no} sold={piece.sold} />
    </aside>
  );
}
