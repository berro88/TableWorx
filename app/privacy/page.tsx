import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="page-hero">
      <div className="wrap prose">
        <p className="kicker">Legal</p>
        <h1>Privacy</h1>
        <p style={{ marginTop: "1rem" }}>
          Demo requests are sent to {site.email} so we can reply. We do not sell
          that information. This marketing site does not run a customer
          database.
        </p>
        <p>
          If you want personal data removed, email {site.email} and we will
          delete the correspondence we hold.
        </p>
      </div>
    </section>
  );
}
