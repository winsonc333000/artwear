import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToBag } from "@/components/AddToBag";
import { PieceTile } from "@/components/PieceTile";
import { CATEGORIES, PIECES, artistBySlug, formatPrice, pieceByNo, piecesByArtist } from "@/lib/catalog";

export function generateStaticParams() {
  return PIECES.map((p) => ({ no: p.no }));
}

export async function generateMetadata({ params }: { params: Promise<{ no: string }> }): Promise<Metadata> {
  const { no } = await params;
  const p = pieceByNo(no);
  const a = p && artistBySlug(p.artist);
  return { title: p ? `${p.garment}, ${a?.name} (No. ${p.no})` : "Piece" };
}

export default async function PiecePage({ params }: { params: Promise<{ no: string }> }) {
  const { no } = await params;
  const piece = pieceByNo(no);
  if (!piece) notFound();
  const artist = artistBySlug(piece.artist)!;
  const category = CATEGORIES.find((c) => c.id === piece.category)!;
  const more = piecesByArtist(artist.slug).filter((p) => p.no !== piece.no);

  return (
    <div className="page">
      <Link href={`/shop/${piece.category}`} className="back">{category.label}</Link>
      <article className="piece">
        <div className="piece-images">
          {piece.images.map((src, i) => (
            <img key={src} src={src} alt={`${piece.garment} worn by ${artist.name}, view ${i + 1}`} width={1024} height={1024} loading={i === 0 ? "eager" : "lazy"} />
          ))}
        </div>
        <div className="piece-info">
          <h1>{piece.garment}</h1>
          <p className="by">
            Worn by <Link href={`/artists/${artist.slug}`}>{artist.name}</Link>, {artist.medium.toLowerCase()}
          </p>
          <p className="piece-price">{piece.sold ? "Sold" : formatPrice(piece.price)}</p>
          <p className="sample-note">Sample price, for the preview.</p>
          <dl className="specs">
            <dt>Number</dt>
            <dd>No. {piece.no} · 1 of 1</dd>
            <dt>Marks</dt>
            <dd>{piece.media}</dd>
            <dt>Wear</dt>
            <dd>{piece.worn[0].toUpperCase() + piece.worn.slice(1)} in {artist.studio}</dd>
            <dt>Size</dt>
            <dd>{piece.size}</dd>
            <dt>Drop</dt>
            <dd>Drop {String(piece.drop).padStart(2, "0")}</dd>
          </dl>
          <AddToBag no={piece.no} sold={piece.sold} size="lg" />
          <p className="piece-note">{piece.note}</p>
        </div>
      </article>

      {more.length > 0 && (
        <section style={{ marginTop: "clamp(64px, 8vw, 128px)" }} aria-labelledby="more">
          <h2 id="more" className="section-title">More from {artist.name}</h2>
          <ul className="grid">
            {more.map((p) => (
              <PieceTile key={p.no} piece={p} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
