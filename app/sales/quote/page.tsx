import type { Metadata } from "next";
import Link from "next/link";
import { QuoteBuilder } from "@/components/QuoteBuilder";

export const metadata: Metadata = {
  title: "Quotation builder",
  description: "Build a costed TableWorx proposal with the client.",
  robots: { index: false, follow: false },
};

export default function QuotePage() {
  return (
    <section className="section q-page">
      <div className="wrap">
        <div className="q-page-head">
          <div>
            <p className="kicker">Internal</p>
            <h1>Quotation builder</h1>
          </div>
          <Link className="text-link" href="/sales">
            ← Sales tools
          </Link>
        </div>
        <QuoteBuilder />
      </div>
    </section>
  );
}
