import type { Metadata } from "next";
import Link from "next/link";
import { GuestScreen, KdsScreen, WaiterScreen } from "@/components/Devices";
import { pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "TableWorx KDS, Waiter App, and Customer App — three products, one offline-first restaurant platform.",
};

export default function ProductPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Product</p>
          <h1>Three pillars. One service.</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            TableWorx is a hybrid ecosystem: guests order at their own pace,
            waiters run the section, and the kitchen sees every ticket in
            colour-coded time. Depth lives here — the homepage is only the
            pitch.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap" style={{ display: "grid", gap: "3rem" }}>
          {pillars.map((pillar) => (
            <article className="split" key={pillar.id}>
              <div>
                <p className="kicker">{pillar.kicker}</p>
                <h2>{pillar.name}</h2>
                <p className="lede" style={{ marginTop: "0.8rem" }}>
                  {pillar.summary}
                </p>
                <ul>
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link className="btn" href={pillar.href} style={{ marginTop: "0.6rem" }}>
                  Explore {pillar.name}
                </Link>
              </div>
              <div className="tablet device-static" style={{ width: "100%", height: "18rem" }}>
                {pillar.id === "kds" ? (
                  <KdsScreen />
                ) : pillar.id === "waiter" ? (
                  <WaiterScreen />
                ) : (
                  <GuestScreen />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
