import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "How it works" };

export default function AboutPage() {
  return (
    <div className="page">
      <header className="page-head">
        <h1>Worn in the studio. Sold once.</h1>
        <p>
          ARTwear is a collective of young New York artists: painters, sculptors, printmakers, mixed-media makers, anyone
          whose studio is messy. We sell the clothes they actually work in.
        </p>
      </header>

      <p className="lede">
        We handle what artists don't want to: the site, the photos, pricing, shipping and the business side. The artists
        make the work and tell their own followers about it. It runs as a collective, not a clothing company.
      </p>

      <ol className="steps">
        <li>
          <h2>Blank</h2>
          <p>We give each artist new, blank workwear for free.</p>
        </li>
        <li>
          <h2>Worn</h2>
          <p>
            They wear it through about a month of normal studio practice. Artists also bring in clothes they've worn for
            years.
          </p>
        </li>
        <li>
          <h2>Catalogued</h2>
          <p>Each garment comes back, gets photographed, numbered and labelled with who wore it, where and for how long.</p>
        </li>
        <li>
          <h2>One of one</h2>
          <p>It's sold once. Half the profit from the sale goes to the artist who wore it.</p>
        </li>
      </ol>

      <p className="lede" style={{ marginTop: "clamp(48px, 6vw, 96px)" }}>
        New pieces arrive in a monthly drop. <Link href="/drop">See this month's</Link>, or{" "}
        <Link href="/artists">meet the artists</Link>.
      </p>
    </div>
  );
}
