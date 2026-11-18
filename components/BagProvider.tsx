"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type BagContextValue = {
  items: string[];
  ready: boolean;
  add: (no: string) => void;
  remove: (no: string) => void;
  has: (no: string) => boolean;
  clear: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);
const KEY = "artwear-bag";

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed.filter((x) => typeof x === "string"));
      }
    } catch {
      /* storage unavailable: start with an empty bag */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, ready]);

  // Every piece is one of one, so the bag holds each number at most once.
  const add = useCallback((no: string) => setItems((cur) => (cur.includes(no) ? cur : [...cur, no])), []);
  const remove = useCallback((no: string) => setItems((cur) => cur.filter((x) => x !== no)), []);
  const has = useCallback((no: string) => items.includes(no), [items]);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => ({ items, ready, add, remove, has, clear }), [items, ready, add, remove, has, clear]);
  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const ctx = useContext(BagContext);
  if (!ctx) throw new Error("useBag must be used inside BagProvider");
  return ctx;
}
