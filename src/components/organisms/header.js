"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
];

function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(document.documentElement.scrollTop > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header-root fixed left-0 right-0 top-0 w-full z-50" data-scrolled={scrolled}>
      <nav
        className="header-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          maxWidth: 1152,
          margin: "0 auto",
          width: "100%",
          borderRadius: scrolled ? "0 0 16px 16px" : "0",
          transition: "border-radius 0.4s ease",
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span
            className="font-serif"
            style={{
              fontSize: "1.35rem",
              fontWeight: 900,
              background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.01em",
            }}
          >
            ESC
          </span>
          <span style={{ color: "rgba(235, 10, 10)", fontFamily: "var(--font-mono)", fontSize: "1.1rem" }}>.ai</span>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul
          className="hidden md:flex items-center gap-6"
          style={{ listStyle: "none" }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  style={{ color: isActive ? "var(--gold-light)" : undefined }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA buttons ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.82rem",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "8px 18px",
              borderRadius: 999,
              color: "var(--gold)",
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            }}
          >
            Book a Demo
          </Link>
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.82rem",
              background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              color: "#0a0a0f",
              padding: "8px 18px",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              transition: "all 0.25s ease",
              boxShadow: "0 2px 20px rgba(201,168,76,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(201,168,76,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 20px rgba(201,168,76,0.3)"; }}
          >
            Start Free <FaArrowRightLong style={{ fontSize: "0.7rem" }} />
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.8)", fontSize: "1.2rem", transition: "color 0.2s" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes style={{ color: "var(--gold)" }} /> : <FaBars />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        style={{
          maxHeight: mobileOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          background: "rgba(6,8,18,0.97)",
          backdropFilter: "blur(24px)",
          borderBottom: mobileOpen ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s",
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary" style={{ marginTop: 8, justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 8 }} onClick={() => setMobileOpen(false)}>
            Start Free <FaArrowRight style={{ fontSize: "0.7rem" }} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
