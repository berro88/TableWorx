"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const overDark = onHome && !scrolled;

  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => {
      const hero = document.querySelector(".hero");
      const limit = hero ? hero.getBoundingClientRect().height - 120 : 480;
      setScrolled(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  return (
    <header className={overDark ? "header over-dark" : "header solid"}>
      <div className="wrap header-inner">
        <Link href="/" aria-label="TableWorx home" onClick={() => setOpen(false)}>
          <Logo light={overDark} />
        </Link>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Link className="login" href="/login">
            Login
          </Link>
          <Link className={overDark ? "btn btn-glass" : "btn"} href="/demo">
            Get Started <span aria-hidden="true">→</span>
          </Link>
          <button
            className="icon-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={open ? "menu open" : "menu"} aria-label="Mobile">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/login" onClick={() => setOpen(false)}>
          Login
        </Link>
        <Link href="/demo" onClick={() => setOpen(false)}>
          Get Started
        </Link>
      </nav>
    </header>
  );
}
