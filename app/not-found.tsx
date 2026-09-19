import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap prose">
        <p className="kicker">404</p>
        <h1>That page is not on the floor.</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Try the product overview, or book a demo.
        </p>
        <p style={{ marginTop: "1.4rem" }}>
          <Link className="btn" href="/">
            Back home
          </Link>
        </p>
      </div>
    </section>
  );
}
