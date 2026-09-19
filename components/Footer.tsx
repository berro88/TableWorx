import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo light />
            <p className="lede" style={{ marginTop: "0.9rem", color: "#b9c6d1" }}>
              The platform that connects every part of your restaurant, all the
              time.
            </p>
            <p
              className="cap-label"
              style={{ marginTop: "1.2rem", color: "#7f8f9c" }}
            >
              People · Places · Possibilities
            </p>
          </div>
          <div>
            <h3>Solutions</h3>
            <ul>
              <li>
                <Link href="/product/kds">TableWorx KDS</Link>
              </li>
              <li>
                <Link href="/product/waiter">Waiter App</Link>
              </li>
              <li>
                <Link href="/product/customer">Customer App</Link>
              </li>
              <li>
                <Link href="/hardware">Hardware</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/demo">Book a demo</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy">Privacy</Link>
            {" · "}
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
