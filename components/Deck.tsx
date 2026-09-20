"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { EcosystemWheel } from "./EcosystemWheel";
import { ecosystemStages } from "@/lib/ecosystem";
import { pillars, steps } from "@/lib/site";
import { hardwareByRole } from "@/lib/quote-catalogue";

type Slide = {
  id: string;
  kind: "cover" | "problem" | "wheel" | "products" | "hardware" | "steps" | "why" | "close";
  eyebrow?: string;
  title?: string;
};

const slides: Slide[] = [
  { id: "cover", kind: "cover" },
  { id: "problem", kind: "problem", eyebrow: "The situation", title: "Most restaurants run four systems that do not talk." },
  { id: "wheel", kind: "wheel", eyebrow: "The ecosystem", title: "One loop, one ticket." },
  { id: "products", kind: "products", eyebrow: "The products", title: "Three products. One platform." },
  { id: "hardware", kind: "hardware", eyebrow: "The hardware", title: "The devices on the floor." },
  { id: "steps", kind: "steps", eyebrow: "In service", title: "Four steps. Zero friction." },
  { id: "why", kind: "why", eyebrow: "The difference", title: "No local servers. No clutter." },
  { id: "close", kind: "close", eyebrow: "Next step", title: "Let us build your numbers." },
];

const problems = [
  { a: "Till", b: "does not know what the kitchen is doing" },
  { a: "Kitchen", b: "gets a paper docket and hopes it is legible" },
  { a: "Payments", b: "reconciled by hand at the end of the night" },
  { a: "Stock", b: "counted on a clipboard, costed a month late" },
];

export function Deck() {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const slide = slides[index];
  const onWheel = slide.kind === "wheel";

  const next = useCallback(() => {
    if (onWheel && stage < ecosystemStages.length - 1) {
      setStage((s) => s + 1);
      return;
    }
    setIndex((i) => {
      if (i >= slides.length - 1) return i;
      if (slides[i + 1]?.kind === "wheel") setStage(0);
      return i + 1;
    });
  }, [onWheel, stage]);

  const prev = useCallback(() => {
    if (onWheel && stage > 0) {
      setStage((s) => s - 1);
      return;
    }
    setIndex((i) => {
      if (i <= 0) return i;
      if (slides[i - 1]?.kind === "wheel") setStage(ecosystemStages.length - 1);
      return i - 1;
    });
  }, [onWheel, stage]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        prev();
      } else if (event.key.toLowerCase() === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(() => {});
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const progress = ((index + 1) / slides.length) * 100;

  return (
    <div
      className="deck"
      onTouchStart={(e) => setTouchX(e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const delta = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
        if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
        setTouchX(null);
      }}
    >
      <div className="deck-bar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <header className="deck-chrome">
        <Link className="deck-exit" href="/sales">
          ← Sales tools
        </Link>
        <span className="deck-count">
          {index + 1} / {slides.length}
          {onWheel ? ` · step ${ecosystemStages[stage].step}` : ""}
        </span>
      </header>

      <div className="deck-stage" key={slide.id}>
        {slide.kind === "cover" && (
          <div className="deck-cover">
            <p className="eyebrow">All-in-one restaurant ecosystem</p>
            <h1>
              Everything works better <em>together.</em>
            </h1>
            <p className="deck-lede">
              One connected platform for orders, payments, the kitchen, stock and
              the numbers — running in the browser, with nothing hosted in your
              restaurant.
            </p>
            <p className="deck-hint">Press → or space to begin</p>
          </div>
        )}

        {slide.kind !== "cover" && (
          <div className="deck-head">
            <p className="kicker">{slide.eyebrow}</p>
            <h2>{slide.title}</h2>
          </div>
        )}

        {slide.kind === "problem" && (
          <div className="deck-problem">
            <ul>
              {problems.map((p) => (
                <li key={p.a}>
                  <b>{p.a}</b>
                  <span>{p.b}</span>
                </li>
              ))}
            </ul>
            <p className="deck-note">
              Every gap between those systems is paid for twice — once in staff
              time, once in the mistakes nobody catches until month end.
            </p>
          </div>
        )}

        {slide.kind === "wheel" && <EcosystemWheel active={stage} onSelect={setStage} />}

        {slide.kind === "products" && (
          <div className="deck-cards">
            {pillars.map((pillar) => (
              <article key={pillar.id}>
                <p className="cap-label">{pillar.kicker}</p>
                <h3>{pillar.name}</h3>
                <p>{pillar.summary}</p>
                <ul>
                  {pillar.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {slide.kind === "hardware" && (
          <div className="deck-hardware">
            {(["static-pos", "mobile-pos", "printer", "peripheral"] as const).map((role) => (
              <div key={role}>
                <p className="cap-label">
                  {role === "static-pos"
                    ? "Counter positions"
                    : role === "mobile-pos"
                      ? "On the floor"
                      : role === "printer"
                        ? "Printing"
                        : "Peripherals"}
                </p>
                <ul>
                  {hardwareByRole(role).map((item) => (
                    <li key={item.code}>
                      <b>{item.code}</b>
                      <span>{item.blurb}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {slide.kind === "steps" && (
          <ol className="deck-steps">
            {steps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <b>{step.title}</b>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        )}

        {slide.kind === "why" && (
          <div className="deck-why">
            <p className="deck-lede">
              TableWorx is web-based. There is no back-office box to buy, power,
              cool, back up or replace. Fewer cables, less clutter, and nothing
              on site that can fail on a Friday night.
            </p>
            <div className="deck-chips">
              <span>No local servers</span>
              <span>Fewer cables</span>
              <span>Runs in the browser</span>
              <span>Updates itself</span>
            </div>
          </div>
        )}

        {slide.kind === "close" && (
          <div className="deck-close">
            <p className="deck-lede">
              Every restaurant is a different shape. Let us build the quote with
              you — positions, devices, kitchen screens and the modules you
              actually need — and you will see the number before we leave.
            </p>
            <Link className="btn" href="/sales/quote">
              Open the quote builder <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>

      <div className="deck-nav">
        <button type="button" onClick={prev} disabled={index === 0 && stage === 0} aria-label="Previous">
          ←
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === slides.length - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
