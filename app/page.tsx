import { Catalog } from "@/components/Catalog";
import { HungCoat } from "@/components/HungCoat";
import { WallLabel } from "@/components/WallLabel";
import { FEATURED_NO, HOME_ORDER, pieceByNo, type Piece } from "@/lib/catalog";

export default function Home() {
  const featured = pieceByNo(FEATURED_NO)!;
  const pieces = HOME_ORDER.map((no) => pieceByNo(no)).filter(Boolean) as Piece[];

  return (
    <>
      <section className="home-wall" aria-label="Featured piece">
        <h1 className="visually-hidden">ARTwear: authentic artist work clothes</h1>
        <HungCoat
          src="/assets/plates/hero-coat.png"
          alt="Chore coat worn by Mara Okonkwo, covered in paint, hung on the wall"
        />
        <WallLabel piece={featured} />
      </section>
      <Catalog pieces={pieces} />
    </>
  );
}
