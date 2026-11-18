import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PieceTile } from "@/components/PieceTile";
import { ARTISTS, artistBySlug, piecesByArtist } from "@/lib/catalog";

export function generateStaticParams() {
  return ARTISTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: artistBySlug(slug)?.name ?? "Artist" };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artistBySlug(slug);
  if (!artist) notFound();
  const pieces = piecesByArtist(slug).sort((a, b) => Number(a.sold) - Number(b.sold));
  const first = artist.name.split(" ")[0];

  return (
    <div className="page">
      <Link href="/artists" className="back">All artists</Link>
      <section className="artist-top">
        <div>
          <h1>{artist.name}</h1>
          <p className="artist-meta">
            {artist.medium} · {artist.studio}
          </p>
          <p className="artist-bio">{artist.bio}</p>
          <blockquote className="artist-quote">“{artist.statement}”</blockquote>
        </div>
        <figure>
          <img src={artist.studioImage} alt={artist.studioCaption} width={1024} height={768} />
          <figcaption>{artist.studioCaption}</figcaption>
        </figure>
      </section>

      <section className="portfolio" aria-labelledby="work">
        <div>
          <h2 id="work" className="section-title">The work</h2>
          <p className="lede">
            What {first} makes in the studio, and where the marks on the clothes come from.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${artist.work.length}, minmax(0, 1fr))`, gap: "var(--gap)" }}>
          {artist.work.map((w) => (
            <figure key={w.title} style={{ maxWidth: 520 }}>
              <img src={w.image} alt={`${w.title}, ${w.detail}`} width={896} height={1120} loading="lazy" />
              <figcaption>
                <em>{w.title}</em>, {w.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="clothes">
        <h2 id="clothes" className="section-title">
          {first}'s clothes
        </h2>
        <ul className="grid">
          {pieces.map((p) => (
            <PieceTile key={p.no} piece={p} />
          ))}
        </ul>
      </section>
    </div>
  );
}
