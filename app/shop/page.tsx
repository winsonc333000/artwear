import type { Metadata } from "next";
import { Catalog } from "@/components/Catalog";
import { PIECES } from "@/lib/catalog";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  const available = PIECES.filter((p) => !p.sold);
  const sold = PIECES.filter((p) => p.sold);
  return (
    <div className="page shop-page">
      <header className="page-head">
        <h1>Shop</h1>
        <p>
          {available.length} pieces available. Each was worn in an artist's studio and exists once; when it sells, it's gone.
        </p>
      </header>
      <div className="flush">
        <Catalog pieces={[...available, ...sold]} />
      </div>
    </div>
  );
}
