import Link from "next/link";
import { artistBySlug, type Piece } from "@/lib/catalog";

export function PieceTile({ piece, eager = false }: { piece: Piece; eager?: boolean }) {
  const artist = artistBySlug(piece.artist);
  const image = piece.images.length > 1 ? piece.images[1] : piece.images[0];
  return (
    <li className={`tile${piece.sold ? " is-sold" : ""}`}>
      <Link href={`/pieces/${piece.no}`} className="tile-link">
        <span className="tile-frame">
          <img src={image} alt={`${piece.garment} worn by ${artist?.name}`} width={1024} height={1024} loading={eager ? "eager" : "lazy"} />
          {piece.sold && <span className="sold-dot">Sold</span>}
        </span>
        <span className="tile-cap">
          <strong>No. {piece.no}</strong>
          <span>
            {artist?.name} / {piece.garment}
          </span>
          <span>{piece.media}</span>
          <span>{piece.sold ? "Sold" : "1 of 1"}</span>
        </span>
      </Link>
    </li>
  );
}
