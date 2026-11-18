import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PieceTile } from "@/components/PieceTile";
import { CATEGORIES, PIECES } from "@/lib/catalog";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  return { title: cat ? cat.label : "Shop" };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) notFound();
  const pieces = PIECES.filter((p) => p.category === cat.id).sort((a, b) => Number(a.sold) - Number(b.sold));

  return (
    <div className="page">
      <Link href="/shop" className="back">All pieces</Link>
      <header className="page-head">
        <h1>{cat.label}</h1>
        <p>
          {pieces.filter((p) => !p.sold).length} available. Every piece is one of one.
        </p>
      </header>
      {pieces.length === 0 ? (
        <p className="empty">Nothing here right now. New pieces come in with each monthly drop.</p>
      ) : (
        <ul className="grid">
          {pieces.map((p, i) => (
            <PieceTile key={p.no} piece={p} eager={i < 5} />
          ))}
        </ul>
      )}
    </div>
  );
}
