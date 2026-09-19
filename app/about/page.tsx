import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TableWorx builds offline-first restaurant technology for independent restaurants in South Africa.",
};

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="wrap prose">
        <p className="kicker">About</p>
        <h1>Built for independent restaurants.</h1>
        <p style={{ marginTop: "1.1rem" }}>
          {site.legalName} makes restaurant technology that treats hospitality
          as the point — not a side effect of a spreadsheet. We connect guests,
          waiters, and the kitchen so the floor can stay human while the ticket
          stays reliable.
        </p>
        <p>
          The current public site was a placeholder. This build follows a
          clearer sales path: product, how it works, pricing, and a demo you
          can actually book.
        </p>
        <h2>Who it is for</h2>
        <p>
          Independent restaurants and small groups that need a KDS, a waiter
          tool, and a guest QR experience that still works when the Wi-Fi does
          not. We are not a generic all-purpose SaaS template.
        </p>
        <h2>Leadership</h2>
        <p>
          {site.founder.name}, {site.founder.role}
          <br />
          <a href={`mailto:${site.founder.email}`}>{site.founder.email}</a>
        </p>
        <h2>Studio</h2>
        <p>
          {site.address.line1}
          <br />
          {site.address.line2}
          <br />
          {site.address.line3}
        </p>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="btn" href="/demo">
            Book a Demo
          </Link>
        </p>
      </div>
    </section>
  );
}
