"use client";

import Link from "next/link";
import { useBag } from "./BagProvider";

export function AddToBag({ no, sold, size = "sm" }: { no: string; sold: boolean; size?: "sm" | "lg" }) {
  const { has, add, ready } = useBag();
  const cls = `btn btn-${size}`;

  if (sold) {
    return (
      <button type="button" className={cls} disabled>
        Sold
      </button>
    );
  }
  if (ready && has(no)) {
    return (
      <Link href="/bag" className={`${cls} btn-in`}>
        In your bag
      </Link>
    );
  }
  return (
    <button type="button" className={cls} onClick={() => add(no)}>
      Add to bag
    </button>
  );
}
