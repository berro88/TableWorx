import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Book a 20-minute TableWorx demo for your restaurant.",
};

export default function DemoPage() {
  return (
    <section className="page-hero">
      <div className="wrap cta-grid" style={{ paddingBottom: "4rem" }}>
        <div>
          <p className="kicker">Book a demo</p>
          <h1>Twenty minutes. Real service, not a slide deck.</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Tell us about the restaurant. We will walk the KDS, waiter app, and
            guest QR on one ticket — including what happens when the network
            drops.
          </p>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Prefer to talk now?{" "}
            <a href={site.phoneHref}>{site.phone}</a>
            {" · "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div
          className="card"
          style={{ background: "var(--ink)", color: "var(--paper)", border: 0 }}
        >
          <DemoForm source="demo-page" />
        </div>
      </div>
    </section>
  );
}
