"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function DemoForm({ source = "website" }: { source?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const restaurant = String(data.get("restaurant") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Restaurant: ${restaurant}`,
      `Phone: ${phone}`,
      `Source: ${source}`,
      "",
      message || "I would like to book a 20-minute TableWorx demo.",
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Demo request — ${restaurant || name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success" role="status">
        If your email app did not open, write to {site.email} and we will set a
        20-minute demo.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="row">
        <label>
          Restaurant name
          <input name="restaurant" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label>
        Anything we should know?
        <textarea name="message" placeholder="Covers, sites, current POS…" />
      </label>
      <button className="btn" type="submit">
        Book my demo
      </button>
      <p className="note">We reply from {site.email}. No mailing list.</p>
    </form>
  );
}
