import type { Metadata } from "next";
import Link from "next/link";
import { hardware } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hardware",
  description:
    "TableWorx hardware: the P5 mobile POS, D80B receipt printer, and T2 tableside tablet — all connected to one platform.",
};

export default function HardwarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap prose">
          <p className="kicker">Hardware</p>
          <h1>All devices. All connected.</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Terminals, handhelds, printers, and tablets that run the same
            offline-first platform. Buy what the floor needs and add the rest as
            you grow.
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap pillars">
          {hardware.map((device) => (
            <article className="card" key={device.code}>
              <p className="kicker">{device.code}</p>
              <h3>{device.name}</h3>
              <p className="lede" style={{ marginTop: "0.6rem" }}>
                {device.body}
              </p>
              <ul>
                {device.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <Link className="text-link" href="/demo">
                Ask about {device.code} →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
