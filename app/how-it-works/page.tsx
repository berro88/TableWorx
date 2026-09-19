import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Guest scans, orders, kitchen fires, waiter turns the table — the TableWorx service loop.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap prose">
          <p className="kicker">Service loop</p>
          <h1>Guest to kitchen to payment, without the gaps.</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            TableWorx is the ticket. It starts on the guest phone, lands on the
            KDS, alerts the waiter, and closes when the bill is split and paid.
            Online or off.
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap" style={{ display: "grid", gap: "1rem" }}>
          {steps.map((step) => (
            <article className="card" key={step.n}>
              <p className="kicker">{step.n}</p>
              <h2>{step.title}</h2>
              <p className="lede" style={{ marginTop: "0.6rem" }}>
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Link className="btn" href="/demo">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
