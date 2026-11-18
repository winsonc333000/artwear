"use client";

import Link from "next/link";
import { useState } from "react";
import { useBag } from "@/components/BagProvider";
import { artistBySlug, formatPrice, pieceByNo, type Piece } from "@/lib/catalog";

type Errors = Partial<Record<string, string>>;

const REQUIRED: [string, string][] = [
  ["email", "Enter your email so we can send the order confirmation."],
  ["name", "Enter the name for delivery."],
  ["address", "Enter a street address."],
  ["city", "Enter a city."],
  ["zip", "Enter a ZIP or postal code."],
];

export default function CheckoutPage() {
  const { items, ready } = useBag();
  const pieces = (items.map((no) => pieceByNo(no)).filter(Boolean) as Piece[]).filter((p) => !p.sold);
  const subtotal = pieces.reduce((s, p) => s + p.price, 0);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    for (const [key, msg] of REQUIRED) {
      if (!String(data.get(key) ?? "").trim()) next[key] = msg;
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "That email doesn't look complete. Check for a missing @ or domain.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
    }
  }

  if (ready && pieces.length === 0) {
    return (
      <div className="page">
        <header className="page-head">
          <h1>Checkout</h1>
        </header>
        <p className="lede">There's nothing in your bag to check out.</p>
        <p style={{ marginTop: 24 }}>
          <Link href="/shop" className="btn btn-lg">Browse the shop</Link>
        </p>
      </div>
    );
  }

  const field = (id: string, label: string, opts: { type?: string; wide?: boolean; auto?: string } = {}) => (
    <div className={`field${opts.wide ? " wide" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={opts.type ?? "text"}
        autoComplete={opts.auto}
        aria-invalid={errors[id] ? true : undefined}
        aria-describedby={errors[id] ? `${id}-err` : undefined}
      />
      {errors[id] && (
        <span className="err" id={`${id}-err`}>
          {errors[id]}
        </span>
      )}
    </div>
  );

  return (
    <div className="page">
      <header className="page-head">
        <h1>Checkout</h1>
      </header>
      <div className="checkout">
        <form onSubmit={onSubmit} noValidate>
          {submitted && (
            <div className="notice" role="status">
              <strong>Payments aren't connected yet.</strong>
              This is a design preview, so no order was placed and nothing was charged. Your bag is unchanged.
            </div>
          )}
          <fieldset>
            <legend>Contact</legend>
            <div className="fields">{field("email", "Email", { type: "email", wide: true, auto: "email" })}</div>
          </fieldset>
          <fieldset>
            <legend>Shipping</legend>
            <div className="fields">
              {field("name", "Full name", { wide: true, auto: "name" })}
              {field("address", "Street address", { wide: true, auto: "street-address" })}
              {field("city", "City", { auto: "address-level2" })}
              {field("zip", "ZIP / postal code", { auto: "postal-code" })}
            </div>
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            <p style={{ color: "var(--ink-2)", maxWidth: "52ch" }}>
              Card payment will appear here once a payment provider is connected.
            </p>
          </fieldset>
          <button type="submit" className="btn btn-lg">Place order</button>
        </form>

        <aside className="order-side" aria-label="Order summary">
          <h2>Your order</h2>
          {pieces.map((p) => (
            <div key={p.no} className="order-line">
              <img src={p.images[p.images.length > 1 ? 1 : 0]} alt="" width={1024} height={1024} />
              <span>
                {p.garment}
                <br />
                <span style={{ color: "var(--ink-3)" }}>
                  {artistBySlug(p.artist)?.name} · No. {p.no}
                </span>
              </span>
              <span>{formatPrice(p.price)}</span>
            </div>
          ))}
          <dl className="summary" style={{ margin: "18px 0 0", maxWidth: "none" }}>
            <dt>Subtotal</dt>
            <dd style={{ margin: 0, textAlign: "right" }}>{formatPrice(subtotal)}</dd>
            <dt>Shipping</dt>
            <dd style={{ margin: 0, textAlign: "right" }}>Not set yet</dd>
            <dt className="total">Total</dt>
            <dd className="total" style={{ margin: 0 }}>{formatPrice(subtotal)}</dd>
          </dl>
        </aside>
      </div>
    </div>
  );
}
