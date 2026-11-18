import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page">
      <header className="page-head">
        <h1>Blank wall.</h1>
        <p>Nothing's hanging at this address. The piece may have sold, or the link is wrong.</p>
      </header>
      <p>
        <Link href="/shop" className="btn btn-lg">Go to the shop</Link>
      </p>
    </div>
  );
}
