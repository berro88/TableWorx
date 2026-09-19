import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your TableWorx restaurant dashboard.",
};

export default function LoginPage() {
  return (
    <section className="page-hero">
      <div className="wrap prose">
        <p className="kicker">Login</p>
        <h1>Restaurant sign-in</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          The TableWorx dashboard is issued per restaurant during install. If
          you already run TableWorx, your manager login was set up with your
          site — contact us and we will resend it.
        </p>
        <p className="lede" style={{ marginTop: "1rem" }}>
          <a className="text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {" · "}
          <a className="text-link" href={site.phoneHref}>
            {site.phone}
          </a>
        </p>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="btn" href="/demo">
            Not a customer yet? Get started
          </Link>
        </p>
      </div>
    </section>
  );
}
