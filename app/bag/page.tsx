"use client";

import Link from "next/link";
import { useBag } from "@/components/BagProvider";
import { artistBySlug, formatPrice, pieceByNo, type Piece } from "@/lib/catalog";

export default function BagPage() {
  const { items, remove, ready } = useBag();
  const pieces = items.map((no) => pieceByNo(no)).filter(Boolean) as Piece[];
  const available = pieces.filter((p) => !p.sold);
  const subtotal = available.reduce((s, p) => s + p.price, 0);

  return (
    <div className="page">
      <header className="page-head">
        <h1>Bag</h1>
        {ready && pieces.length > 0 && (
          <p>Pieces aren't held until you check out. Each one exists once, so someone else can still buy it.</p>
        )}
      </header>

      {!ready ? null : pieces.length === 0 ? (
        <div>
          <p className="lede">Your bag is empty.</p>
          <p style={{ marginTop: 24 }}>
            <Link href="/shop" className="btn btn-lg">Browse the shop</Link>
          </p>
        </div>
      ) : (
        <>
          <ul className="bag-list">
            {pieces.map((p) => {
              const a = artistBySlug(p.artist);
              return (
                <li key={p.no} className="bag-item">
                  <img src={p.images[p.images.length > 1 ? 1 : 0]} alt="" width={1024} height={1024} />
                  <div>
                    <h2>
                      <Link href={`/pieces/${p.no}`} style={{ textDecoration: "none" }}>{p.garment}</Link>
                    </h2>
                    <p>
                      {a?.name} · No. {p.no} · Size {p.size}
                    </p>
                    <button type="button" className="link-btn" onClick={() => remove(p.no)} style={{ marginTop: 6 }}>
                      Remove
                    </button>
                  </div>
                  <p style={{ color: "var(--ink)", fontSize: 18 }}>{p.sold ? "Sold, no longer available" : formatPrice(p.price)}</p>
                </li>
              );
            })}
          </ul>
          <dl className="summary">
            <dt>Subtotal</dt>
            <dd style={{ margin: 0, textAlign: "right" }}>{formatPrice(subtotal)}</dd>
            <dt>Shipping</dt>
            <dd style={{ margin: 0, textAlign: "right" }}>At checkout</dd>
            <dt className="total">Total</dt>
            <dd className="total" style={{ margin: 0 }}>{formatPrice(subtotal)}</dd>
          </dl>
          <div className="summary-actions">
            {available.length > 0 ? (
              <Link href="/checkout" className="btn btn-lg">Check out</Link>
            ) : (
              <button className="btn btn-lg" disabled>Nothing left to check out</button>
            )}
          </div>
          <p className="sample-note" style={{ textAlign: "right", marginTop: 12 }}>Sample prices, for the preview.</p>
        </>
      )}
    </div>
  );
}
