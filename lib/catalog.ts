// SAMPLE CONTENT. Every artist, piece, studio and price below is a placeholder
// until the collective's real roster and photographs arrive.

export type Category = "tops" | "bottoms" | "outerwear" | "aprons";

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "outerwear", label: "Outerwear" },
  { id: "aprons", label: "Aprons" },
];

export type Artist = {
  slug: string;
  name: string;
  medium: string;
  studio: string;
  bio: string;
  statement: string;
  studioImage: string;
  studioCaption: string;
  work: { image: string; title: string; detail: string }[];
};

export type Piece = {
  no: string;
  artist: string; // artist slug
  garment: string;
  category: Category;
  media: string;
  worn: string;
  size: string;
  price: number;
  sold: boolean;
  drop: number;
  images: string[];
  note: string;
};

export const CURRENT_DROP = { number: 3, month: "November", released: "1 November 2026" };

export const ARTISTS: Artist[] = [
  {
    slug: "mara-okonkwo",
    name: "Mara Okonkwo",
    medium: "Painter",
    studio: "Bushwick, Brooklyn",
    bio: "Mara paints large gestural abstractions on raw canvas, usually standing, usually with a brush in each hand. Most of her work clothes end up wearing the same palette as the paintings.",
    statement: "I wipe my brushes on whatever I'm wearing. The coat is basically a second palette.",
    studioImage: "/assets/images/studio-painter.png",
    studioCaption: "Mara's studio, Bushwick",
    work: [
      { image: "/assets/images/art-painting.png", title: "Untitled (Ground)", detail: "Acrylic and oil on raw canvas" },
    ],
  },
  {
    slug: "leah-park",
    name: "Leah Park",
    medium: "Printmaker",
    studio: "Ridgewood, Queens",
    bio: "Leah carves and prints relief blocks of the rooftops she can see from her studio window. Ink travels: to her sleeves, her apron, her knees.",
    statement: "Relief ink never fully comes out. After a month, the shirt is a record of every pull.",
    studioImage: "/assets/images/studio-print.png",
    studioCaption: "Leah's press, Ridgewood",
    work: [
      { image: "/assets/images/art-print.png", title: "Water Towers, Morning", detail: "Relief print on Japanese paper" },
    ],
  },
  {
    slug: "diego-salazar",
    name: "Diego Salazar",
    medium: "Sculptor",
    studio: "Sunset Park, Brooklyn",
    bio: "Diego casts folded, drapery-like forms in plaster and Hydrocal. His studio is mostly dust, and so is everything he wears in it.",
    statement: "Plaster gets into the weave and stays. You can feel where I lean on the bench.",
    studioImage: "/assets/images/studio-sculpture.png",
    studioCaption: "Diego's workshop, Sunset Park",
    work: [
      { image: "/assets/images/art-sculpture.png", title: "Fold IV", detail: "Plaster, steel armature" },
    ],
  },
  {
    slug: "grace-lin",
    name: "Grace Lin",
    medium: "Ceramicist",
    studio: "Greenpoint, Brooklyn",
    bio: "Grace hand-builds stoneware vessels and lets the glaze run until it nearly leaves the pot. Slip and glaze drips are her most common marks.",
    statement: "Clay dries pale on dark fabric. Every trim and every dip shows up somewhere.",
    studioImage: "/assets/images/studio-ceramics.png",
    studioCaption: "Grace at the wheel, Greenpoint",
    work: [
      { image: "/assets/images/art-ceramics.png", title: "Three Runs", detail: "Stoneware, celadon and iron glazes" },
    ],
  },
  {
    slug: "ian-rivera",
    name: "Ian Rivera",
    medium: "Mixed media",
    studio: "Lower East Side, Manhattan",
    bio: "Ian builds collage panels from photocopies, tape, spray paint and whatever the street gives him. Nothing he wears to work stays one colour.",
    statement: "Gesso, marker, overspray. If it's on the panel, it's on the vest.",
    studioImage: "/assets/images/studio-mixed.png",
    studioCaption: "Ian's studio wall, Lower East Side",
    work: [
      { image: "/assets/images/art-collage.png", title: "Notice Board", detail: "Photocopy, spray paint, tape on board" },
    ],
  },
];

export const PIECES: Piece[] = [
  { no: "031", artist: "mara-okonkwo", garment: "Chore coat", category: "outerwear", media: "Cotton duck, acrylic, plaster", worn: "worn 5 weeks", size: "M", price: 340, sold: false, drop: 3, images: ["/assets/plates/hero-coat.png", "/assets/plates/tile-4.png"], note: "Issued blank in October. The blue on the right front is from the large canvas in her studio photo." },
  { no: "028", artist: "ian-rivera", garment: "Work jacket", category: "outerwear", media: "Cotton twill, acrylic, oil", worn: "worn 4 weeks", size: "L", price: 300, sold: false, drop: 3, images: ["/assets/plates/tile-1.png"], note: "Dark denim with overspray and oil smears on both cuffs." },
  { no: "029", artist: "leah-park", garment: "Painter's pants", category: "bottoms", media: "Cotton duck, acrylic", worn: "worn 6 weeks", size: "30", price: 210, sold: false, drop: 3, images: ["/assets/plates/tile-2.png"], note: "Blue run down the left leg, ink at both knees from kneeling at the press." },
  { no: "030", artist: "diego-salazar", garment: "Studio apron", category: "aprons", media: "Canvas, acrylic, plaster", worn: "worn 2 years", size: "One size", price: 160, sold: true, drop: 3, images: ["/assets/plates/tile-3.png"], note: "Submitted from Diego's own studio. Two years of plaster in the weave." },
  { no: "032", artist: "grace-lin", garment: "Work pants", category: "bottoms", media: "Cotton twill, acrylic", worn: "worn 5 weeks", size: "28", price: 220, sold: false, drop: 3, images: ["/assets/plates/tile-5.png"], note: "Olive twill with slip and pale glaze at the thighs." },
  { no: "033", artist: "mara-okonkwo", garment: "Studio tee", category: "tops", media: "Cotton jersey, acrylic", worn: "worn 4 weeks", size: "M", price: 120, sold: false, drop: 3, images: ["/assets/images/g-tee.png"], note: "Thumbprints in cadmium red where she wipes her hands." },
  { no: "034", artist: "leah-park", garment: "Work shirt", category: "tops", media: "Chambray, relief ink, graphite", worn: "worn 5 weeks", size: "S", price: 180, sold: false, drop: 3, images: ["/assets/images/g-workshirt.png"], note: "Black relief ink on both cuffs, pencil in the chest pocket." },
  { no: "035", artist: "grace-lin", garment: "Thermal", category: "tops", media: "Cotton waffle, clay slip, glaze", worn: "worn 4 weeks", size: "M", price: 140, sold: false, drop: 3, images: ["/assets/images/g-thermal.png"], note: "Celadon drips on the left sleeve, frayed at both cuffs." },
  { no: "036", artist: "diego-salazar", garment: "Work shorts", category: "bottoms", media: "Canvas, plaster, spray paint", worn: "worn 6 weeks", size: "32", price: 150, sold: false, drop: 3, images: ["/assets/images/g-shorts.png"], note: "Orange overspray from a shared booth, rip at the right pocket." },
  { no: "037", artist: "ian-rivera", garment: "Work vest", category: "outerwear", media: "Duck canvas, gesso, paint marker", worn: "worn 5 weeks", size: "L", price: 240, sold: false, drop: 3, images: ["/assets/images/g-vest.png"], note: "Gesso drips and silver marker; tape residue on the back." },
  { no: "038", artist: "leah-park", garment: "Printmaker's apron", category: "aprons", media: "Cotton, etching ink", worn: "worn 1 year", size: "One size", price: 170, sold: false, drop: 3, images: ["/assets/images/g-apron.png"], note: "Submitted from Leah's studio. Handprints where she wipes the plate." },
  { no: "039", artist: "mara-okonkwo", garment: "Denim jacket", category: "outerwear", media: "Denim, oil paint", worn: "worn 3 years", size: "M", price: 280, sold: true, drop: 2, images: ["/assets/images/g-denim.png"], note: "Viridian and white crusted at the cuffs, burn mark at the hem." },
];

export function artistBySlug(slug: string) {
  return ARTISTS.find((a) => a.slug === slug);
}

export function pieceByNo(no: string) {
  return PIECES.find((p) => p.no === no);
}

export function piecesByArtist(slug: string) {
  return PIECES.filter((p) => p.artist === slug);
}

export function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

// The piece hung on the home page wall.
export const FEATURED_NO = "031";

// Catalog order on the home page follows the comp: 028, 029, 030, 031, 032, then the rest.
export const HOME_ORDER = ["028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039"];
