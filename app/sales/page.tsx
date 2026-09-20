import type { Metadata } from "next";
import Link from "next/link";
import { RATES_CONFIRMED, rateCard } from "@/lib/quote-catalogue";

export const metadata: Metadata = {
  title: "Sales tools",
  description: "Internal presentation deck and quotation builder for TableWorx consultants.",
  robots: { index: false, follow: false },
};

export default function SalesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Internal</p>
          <h1>Sales tools</h1>
          <p className="lede">
            For consultants in front of a client. Not linked from the public site
            and excluded from search engines — put this whole area behind your
            login before the site goes live.
          </p>
        </div>

        <div className="pillars">
          <article className="card">
            <p className="kicker">Present</p>
            <h3>Ecosystem deck</h3>
            <p className="lede" style={{ marginTop: "0.6rem" }}>
              Eight slides that walk a client through the service loop — how the
              guest, the floor, the kitchen, payments and the numbers plug into
              each other.
            </p>
            <ul>
              <li>Interactive service-loop diagram</li>
              <li>Arrow keys, click or swipe to advance</li>
              <li>Press F for full screen</li>
            </ul>
            <Link className="text-link" href="/sales/deck">
              Open the deck →
            </Link>
          </article>

          <article className="card">
            <p className="kicker">Quote</p>
            <h3>Quotation builder</h3>
            <p className="lede" style={{ marginTop: "0.6rem" }}>
              Build a costed proposal live in front of the client — counter
              positions, floor devices, kitchen screens, printers and software,
              with purchase, rent-to-own or rental on every line.
            </p>
            <ul>
              <li>Totals update as you change the configuration</li>
              <li>Valid {rateCard.validDays} days, terms printed on the quote</li>
              <li>Print or save as PDF</li>
            </ul>
            <Link className="text-link" href="/sales/quote">
              Open the builder →
            </Link>
          </article>
        </div>

        {!RATES_CONFIRMED && (
          <p className="q-warning" style={{ marginTop: "1.6rem" }}>
            <b>Rate card not signed off.</b> The builder is running on placeholder
            pricing. Load the real rate card into{" "}
            <code>lib/quote-catalogue.ts</code> and set{" "}
            <code>RATES_CONFIRMED</code> to <code>true</code> before quoting a
            client.
          </p>
        )}
      </div>
    </section>
  );
}
