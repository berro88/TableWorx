import type { Metadata } from "next";
import Link from "next/link";
import { WaiterScreen } from "@/components/Devices";

export const metadata: Metadata = {
  title: "Waiter App",
  description:
    "The TableWorx Waiter App puts POS, table status, course fires, and tap-to-pay in the server’s hand.",
};

const features = [
  {
    title: "Section at a glance",
    body: "See open, occupied, and calling tables. Assign staff without walking back to a terminal.",
  },
  {
    title: "Hybrid ordering",
    body: "Place a new order or append to a guest’s digital cart from a numpad or visual menu.",
  },
  {
    title: "Haptic course alerts",
    body: "Fire, hold, and ready signals land on the device — no shouting across the pass.",
  },
  {
    title: "Pay at the table",
    body: "Tap-to-pay and chip on the waiter tablet, with split bills and transparent tip tracking.",
  },
];

export default function WaiterPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="kicker">Floor</p>
            <h1>TableWorx Waiter App</h1>
            <p className="lede" style={{ marginTop: "1rem" }}>
              Move the POS to the table. Waiters run the section, take payment,
              and stay in sync with kitchen and guest.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/demo">
                Book a Demo
              </Link>
              <Link className="btn btn-ghost" href="/product/customer">
                See the guest app
              </Link>
            </div>
          </div>
          <div className="phone device-static" style={{ height: "24rem" }}>
            <WaiterScreen />
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
