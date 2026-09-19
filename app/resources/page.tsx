import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "How TableWorx works, who it is for, and how to reach the team.",
};

const links = [
  {
    href: "/how-it-works",
    title: "How it works",
    body: "The service loop from QR scan to split payment, step by step.",
  },
  {
    href: "/product",
    title: "Product overview",
    body: "KDS, Waiter App, and Customer App in one place.",
  },
  {
    href: "/hardware",
    title: "Hardware guide",
    body: "P5 handheld, D80B printer, and T2 tableside tablet.",
  },
  {
    href: "/about",
    title: "About TableWorx",
    body: "Who we build for and who is behind the company.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap prose">
          <p className="kicker">Resources</p>
          <h1>Everything you need before you decide.</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            No gated whitepapers. Read how the platform runs a service, then
            talk to us at{" "}
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap feature-grid">
          {links.map((link) => (
            <Link className="feature" key={link.href} href={link.href}>
              <h3>{link.title}</h3>
              <p>{link.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
