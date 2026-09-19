import Link from "next/link";
import { DemoForm } from "@/components/DemoForm";
import { Icon } from "@/components/Icons";
import { Lineup } from "@/components/Lineup";
import { capabilities, pillars, steps } from "@/lib/site";

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
          <hr />
        </p>
      </section>

      <section className="strip" aria-label="Platform capabilities">
        <div className="strip-grid">
          {capabilities.map((cap) => (
            <div className="cap" key={cap.title}>
              <Icon name={cap.icon} />
              <b>{cap.title}</b>
              <span>{cap.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="band" aria-label="Why restaurants choose TableWorx">
        <article
          className="panel panel-photo"
          style={{ "--panel-photo": "url(/restaurant-dark.png)" } as React.CSSProperties}
        >
          <p className="cap-label">
            Built
            <br />
            for restaurants
            <br />
            like yours
          </p>
          <h2>
            Less admin.
            <br />
            More time
            <em>for what matters.</em>
          </h2>
        </article>

        <article className="panel panel-light panel-top">
          <h2>
            Power
            <em>in your hands.</em>
          </h2>
          <p>
            Take orders, accept payments and serve anywhere with the P5.
          </p>
          <p className="cap-label" style={{ marginTop: "auto" }}>
            Mobile. Flexible.
            <br />
            Always connected.
          </p>
          <div className="hand" aria-hidden="true">
            <div className="pay">
              <span className="tick">✓</span>
              Payment Complete
              <b>R 210.00</b>
            </div>
          </div>
        </article>

        <article className="panel panel-dark panel-top">
          <h2>
            Real insights.
            <em>Real growth.</em>
          </h2>
          <p>
            Turn today’s service into a stronger tomorrow with powerful
            analytics and reporting.
          </p>
          <div className="chart" aria-hidden="true">
            <div className="chart-head">
              <span>
                Sales
                <br />
                <b>R 4,892</b>
              </span>
              <span style={{ color: "#7ee0b0" }}>▲ 12%</span>
            </div>
            <div className="bars">
              {[34, 46, 40, 58, 52, 68, 60, 78, 72, 88, 82, 96].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-row">
              <span>Orders 128</span>
              <span>▲ 12%</span>
            </div>
            <div className="chart-row">
              <span>New Guests 24</span>
              <span>▲ 20%</span>
            </div>
            <div className="chart-row">
              <span>Repeat Guests 64%</span>
              <span>▲ 6%</span>
            </div>
          </div>
          <p className="cap-label" style={{ marginTop: "0.6rem" }}>
            Data that
            <br />
            drives progress.
          </p>
        </article>
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
            <h2>Why offline-first matters</h2>
            <p className="lede" style={{ marginTop: "0.9rem" }}>
              Restaurant Wi-Fi drops. Mobile signals fail. TableWorx stores
              every order, menu update, and payment locally first — then syncs
              the moment connectivity returns. Service never pauses, the kitchen
              never goes dark, and guests never see an error screen.
            </p>
            <div className="status-row">
              <span className="chip">
                <span className="dot" style={{ background: "var(--queue)" }} />
                Queue
              </span>
              <span className="chip">
                <span className="dot" style={{ background: "var(--prep)" }} />
                Preparing
              </span>
              <span className="chip">
                <span className="dot" style={{ background: "var(--ready)" }} />
                Ready
              </span>
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
            <p className="kicker">Local first</p>
            <h3>The ticket lives on the device</h3>
            <p className="lede" style={{ marginTop: "0.7rem", color: "#a9bdcd" }}>
              The waiter app, guest browser, and KDS keep working on the floor
              network. When the internet comes back, nothing is re-keyed and
              nothing is lost.
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
