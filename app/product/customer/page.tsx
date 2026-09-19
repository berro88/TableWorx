import type { Metadata } from "next";
import Link from "next/link";
import { GuestScreen } from "@/components/Devices";

export const metadata: Metadata = {
  title: "Customer App",
  description:
    "Guests scan a QR to order, share a cart, and split the bill in the browser — no download required.",
};

const features = [
  {
    title: "QR, no download",
    body: "Guests join the table from any phone browser. No app store, no account wall.",
  },
  {
    title: "Shared cart",
    body: "The table builds one order in real time, so nobody doubles the calamari.",
  },
  {
    title: "Menus that sell",
    body: "Photography, spice, and dietary tags (vegan, GF, allergens) filter before the kitchen is asked.",
  },
  {
    title: "Call waiter, then pay",
    body: "Context-aware requests (“water”, “napkins”) and split-by-item or custom amounts.",
  },
];

export default function CustomerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="kicker">Guest</p>
            <h1>TableWorx Customer App</h1>
            <p className="lede" style={{ marginTop: "1rem" }}>
              Bring-your-own-device dining. Guests order at their pace, split
              cleanly, and free the floor for hospitality.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/demo">
                Book a Demo
              </Link>
              <Link className="btn btn-ghost" href="/product/kds">
                See the KDS
              </Link>
            </div>
          </div>
          <div className="phone device-static" style={{ height: "24rem" }}>
            <GuestScreen />
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap feature-grid">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
