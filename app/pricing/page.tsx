import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "TableWorx pricing for independent restaurants — request a quote for kitchen, floor, or the full house.",
};

const tiers = [
  {
    name: "Kitchen",
    amount: "KDS",
    body: "Station screens, expo mode, and colour-coded tickets.",
    items: ["Kitchen display", "Station routing", "Offline tickets"],
  },
  {
    name: "Floor",
    amount: "KDS + Waiter",
    featured: true,
    body: "The pass plus a waiter command centre with pay-at-table.",
    items: ["Everything in Kitchen", "Waiter section map", "Tap-to-pay & tips"],
  },
  {
    name: "Full house",
    amount: "All three",
    body: "Guests order and split; staff and kitchen stay on the same ticket.",
    items: ["Everything in Floor", "QR guest app", "Shared cart & bill split"],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap prose">
          <p className="kicker">Pricing</p>
          <h1>Every floor is different. Start with a quote.</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Hardware, covers, and how many sites you run change the number. We
            do not publish a fake “from” price. Book a demo and we will price
            the stack you actually need.
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap price-grid">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={tier.featured ? "price featured" : "price"}
            >
              <p className="kicker">{tier.name}</p>
              <div className="amount">{tier.amount}</div>
              <p className="lede">{tier.body}</p>
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="btn" href="/demo">
                Request a quote
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
