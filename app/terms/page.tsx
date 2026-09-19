import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <section className="page-hero">
      <div className="wrap prose">
        <p className="kicker">Legal</p>
        <h1>Terms</h1>
        <p style={{ marginTop: "1rem" }}>
          This website describes {site.legalName} products. A demo request is
          not a contract. Software, hardware, and support are governed by an
          agreement we will send before anything is installed on your floor.
        </p>
        <p>
          Copy and product names on this site belong to {site.legalName} unless
          noted otherwise.
        </p>
      </div>
    </section>
  );
}
