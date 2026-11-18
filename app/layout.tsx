import type { Metadata } from "next";
import Link from "next/link";
import { Prata, Hanken_Grotesk } from "next/font/google";
import { BagProvider } from "@/components/BagProvider";
import { Header } from "@/components/Header";
import "./globals.css";

// Stand-ins until the licensed faces arrive: Prata for Caesura, Hanken Grotesk for Aktiv Grotesk.
const serif = Prata({ subsets: ["latin"], weight: "400", variable: "--font-serif", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "ARTwear: authentic artist work clothes", template: "%s · ARTwear" },
  description:
    "Work clothes worn in the studios of a New York collective of young artists. Every piece is one of one.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <BagProvider>
          <Header />
          <main>{children}</main>
          <footer className="site-footer">
            <div>
              <p className="foot-mark">ARTwear</p>
              <p style={{ marginTop: 12 }}>A collective of young artists, New York.</p>
              <p>Half the profit from every sale goes to the artist who wore the piece.</p>
              <p style={{ marginTop: 14 }}>Preview site: artists, pieces and prices shown are samples.</p>
            </div>
            <ul aria-label="Shop">
              <li><Link href="/shop">Shop all</Link></li>
              <li><Link href="/shop/tops">Tops</Link></li>
              <li><Link href="/shop/bottoms">Bottoms</Link></li>
              <li><Link href="/shop/outerwear">Outerwear</Link></li>
              <li><Link href="/shop/aprons">Aprons</Link></li>
            </ul>
            <ul aria-label="Collective">
              <li><Link href="/artists">Artists</Link></li>
              <li><Link href="/drop">This month's drop</Link></li>
              <li><Link href="/about">How it works</Link></li>
              <li><Link href="/bag">Bag</Link></li>
            </ul>
          </footer>
        </BagProvider>
      </body>
    </html>
  );
}
