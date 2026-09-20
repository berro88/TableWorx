import Link from "next/link";
import { DemoForm } from "@/components/DemoForm";
import { Lineup } from "@/components/Lineup";
import { capabilities, pillars, steps } from "@/lib/site";

const capabilityIconByKey: Record<string, string> = {
  card: "payments",
  cart: "ordering",
  calendar: "reservations",
  box: "inventory",
  staff: "staff",
  heart: "loyalty",
  chart: "analytics",
  nodes: "ecosystem",
};

export default function HomePage() {
  return (
    <>
      <section
        className="hero"
        style={{ "--hero-photo": "url(/restaurant-dark.png)" } as React.CSSProperties}
      >
        <div className="wrap hero-inner">
          <div>
            <p className="eyebrow">All-in-one restaurant ecosystem</p>
            <h1>
              Everything works better <em>together.</em>
            </h1>
            <p className="hero-sub">
              One connected ecosystem for restaurants. Orders, payments,
              reservations, staff, inventory and insights — all in sync, so you
              can focus on great food and happy guests.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/demo">
                Get Started <span aria-hidden="true">→</span>
              </Link>
              <Link className="play" href="/how-it-works">
                <span aria-hidden="true">▶</span> Watch the Video
              </Link>
            </div>
          </div>
          <Lineup />
        </div>
        <p className="ppp" aria-hidden="true">
          People
          <br />
          Places
          <br />
          Possibilities
        </p>
      </section>

      <section className="strip" aria-label="Platform capabilities">
        <div className="strip-grid">
          {capabilities.map((cap) => (
            <div className="cap" key={cap.title}>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <use
                  href={`/tableworx-concept-1-pack/assets/icons/icon-sprite.svg#${capabilityIconByKey[cap.icon] ?? "payments"}`}
                />
              </svg>
              <b>{cap.title}</b>
              <span>{cap.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="band-crops" aria-label="Why restaurants choose TableWorx">
        <object
          data="/tableworx-concept-1-pack/assets/photography/chef-hospitality-panel.svg"
          type="image/svg+xml"
          aria-label="Built for restaurants like yours. Less admin. More time for what matters."
        />
        <object
          data="/tableworx-concept-1-pack/assets/photography/mobile-hospitality-panel.svg"
          type="image/svg+xml"
          aria-label="Power in your hands. Take orders, accept payments and serve anywhere with the P5."
        />
        <object
          data="/tableworx-concept-1-pack/assets/photography/analytics-background-panel.svg"
          type="image/svg+xml"
          aria-label="Real insights. Real growth. Analytics and reporting panel."
        />
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The ecosystem</p>
            <h2>Three products. One platform.</h2>
            <p className="lede">
              Each tool is powerful on its own. Together they close the gaps
              between guest, floor, and kitchen.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => (
              <article className="card" key={pillar.id}>
                <p className="kicker">{pillar.kicker}</p>
                <h3>{pillar.name}</h3>
                <p className="lede" style={{ marginTop: "0.6rem" }}>
                  {pillar.summary}
                </p>
                <ul>
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link className="text-link" href={pillar.href}>
                  Explore {pillar.kicker.toLowerCase()} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section teal">
        <div className="wrap split">
          <div>
            <p className="kicker">The differentiator</p>
            <h2>No local servers. No clutter.</h2>
            <p className="lede" style={{ marginTop: "0.9rem" }}>
              TableWorx is web-based. There is no local hosting or storage to
              maintain — no back-office box, fewer cables, less clutter. Clean,
              professional, simple.
            </p>
            <div className="status-row">
              <span className="chip">No local servers</span>
              <span className="chip">Fewer cables</span>
              <span className="chip">Runs in the browser</span>
            </div>
          </div>
          <div
            className="card"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.16)",
              color: "#eaf1f6",
            }}
          >
            <p className="kicker">Zero on-site infrastructure</p>
            <h3>Nothing to host in the restaurant</h3>
            <p className="lede" style={{ marginTop: "0.7rem", color: "#a9bdcd" }}>
              Orders, payments, and the kitchen display live in the cloud. Staff
              and guests use the same web platform — no local server, no extra
              hardware stack to keep alive.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2>Four steps. Zero friction. Every service.</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article key={step.n} className="card" style={{ minHeight: "auto" }}>
                <div
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ marginTop: "0.6rem" }}>{step.title}</h3>
                <p className="lede" style={{ marginTop: "0.5rem" }}>
                  {step.body}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.4rem" }}>
            <Link className="text-link" href="/how-it-works">
              See the full flow →
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-grid">
          <div>
            <p className="kicker" style={{ color: "var(--accent-light)" }}>
              Next step
            </p>
            <h2>Ready to modernize your floor?</h2>
            <p className="lede">
              Book a 20-minute demo and see TableWorx in a real restaurant
              service — kitchen, waiter, and guest on one ticket.
            </p>
          </div>
          <DemoForm source="homepage" />
        </div>
      </section>
    </>
  );
}
