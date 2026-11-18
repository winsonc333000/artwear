"use client";

import { useState } from "react";
import { CATEGORIES, type Category, type Piece } from "@/lib/catalog";
import { PieceTile } from "./PieceTile";

export function Catalog({ pieces, eagerCount = 5 }: { pieces: Piece[]; eagerCount?: number }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const shown = filter === "all" ? pieces : pieces.filter((p) => p.category === filter);
  const tabs: { id: Category | "all"; label: string }[] = [{ id: "all", label: "All" }, ...CATEGORIES];

  return (
    <section className="catalog" aria-label="Catalog">
      <div className="tabs" role="tablist" aria-label="Filter by category">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={filter === t.id}
            className="tab"
            onClick={() => setFilter(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="empty">Nothing in this category right now. New pieces come in with each monthly drop.</p>
      ) : (
        <ul className="grid">
          {shown.map((p, i) => (
            <PieceTile key={p.no} piece={p} eager={i < eagerCount} />
          ))}
        </ul>
      )}
    </section>
  );
}
