import type { Metadata } from "next";
import Link from "next/link";
import { KdsScreen } from "@/components/Devices";

export const metadata: Metadata = {
  title: "Kitchen Display System",
  description:
    "TableWorx KDS routes every order to the right station, colour-coded from queue to ready — in the browser, with no local server.",
};

const features = [
  {
    title: "Station-specific views",
    body: "Route tickets to grill, bar, garde manger, or expo so each chef only sees what they own.",
  },
  {
    title: "Queue → preparing → ready",
    body: "Tap a ticket through an honest status language the whole pass already understands.",
  },
  {
    title: "Expo mode",
    body: "A master view for the expediter to time garnish, hold, and send a table together.",
  },
  {
    title: "Wait-time colour",
    body: "Ageing tickets surface before they become a complaint — no lost dockets at the spike.",
  },
];

export default function KdsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="kicker">Kitchen</p>
            <h1>TableWorx KDS</h1>
            <p className="lede" style={{ marginTop: "1rem" }}>
              A kitchen display that organises the chaos. Every order is routed
              with station-level precision, and nothing to host on site.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/demo">
                Book a Demo
              </Link>
              <Link className="btn btn-ghost" href="/product/waiter">
                See the waiter app
              </Link>
            </div>
          </div>
          <div className="tablet device-static" style={{ width: "100%", height: "20rem" }}>
            <KdsScreen />
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
