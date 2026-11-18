import type { Metadata } from "next";
import Link from "next/link";
import { ARTISTS, piecesByArtist } from "@/lib/catalog";

export const metadata: Metadata = { title: "Artists" };

export default function ArtistsPage() {
  return (
    <div className="page">
      <header className="page-head">
        <h1>Artists</h1>
        <p>
          Painters, printmakers, sculptors, ceramicists and anyone else whose studio is messy. Each artist wears our blank workwear for a month, then it comes back to be sold.
        </p>
      </header>
      <ul className="artist-list">
        {ARTISTS.map((a) => {
          const pieces = piecesByArtist(a.slug);
          const available = pieces.filter((p) => !p.sold).length;
          return (
            <li key={a.slug} className="artist-row">
              <Link href={`/artists/${a.slug}`}>
                <span className="name">{a.name}</span>
                <span className="meta">
                  {a.medium}
                  <br />
                  {a.studio}
                </span>
                <span className="meta">
                  {available} {available === 1 ? "piece" : "pieces"} available
                </span>
                <img src={a.studioImage} alt="" width={1024} height={768} loading="lazy" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
