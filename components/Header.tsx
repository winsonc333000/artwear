"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBag } from "./BagProvider";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/artists", label: "Artists" },
  { href: "/drop", label: "Drop" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { items, ready } = useBag();
  const count = ready ? items.length : 0;

  return (
    <header className="site-header">
      <div className="brand">
        <Link href="/" className="wordmark" aria-label="ARTwear home">
          ARTwear
        </Link>
        <p className="tagline">authentic artist work clothes</p>
      </div>
      <nav className="site-nav" aria-label="Main">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
            {n.label}
          </Link>
        ))}
        <Link href="/bag" aria-current={pathname === "/bag" ? "page" : undefined}>
          Bag ({count})
        </Link>
      </nav>
    </header>
  );
}
