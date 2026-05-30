"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FaGlobe, FaMobileAlt, FaRobot, FaArrowRight, FaStar } from "react-icons/fa";

const ThreeCanvas  = dynamic(() => import("@/components/atoms/ThreeCanvas"),  { ssr: false });
const CustomCursor = dynamic(() => import("@/components/atoms/CustomCursor"), { ssr: false });

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll, .reveal-scale");
    const io  = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const CATEGORIES = ["All", "Web", "Mobile", "AI"];

const PROJECTS = [
  { Icon: FaGlobe,     title: "NovaDrop eCommerce",    category: "Web",    desc: "High-conversion SaaS landing page with scroll-driven 3D animations and cinematic transitions.", color: "#c9a84c", glow: "rgba(201,168,76,0.2)",  metrics: "3x Conv Rate" },
  { Icon: FaMobileAlt, title: "Fluxion DeFi Wallet",   category: "Mobile", desc: "Cross-platform crypto wallet with 180k installs, biometrics, and sub-100ms interaction latency.", color: "#00ffe7", glow: "rgba(0,255,231,0.2)",  metrics: "180k+ Downloads" },
  { Icon: FaRobot,     title: "AuraBot Enterprise AI",  category: "AI",     desc: "Bespoke LLM agent automating customer logic and cutting overhead 3×.",                          color: "#9b4dff", glow: "rgba(155,77,255,0.2)", metrics: "3x Cost Savings" },
];

const handleCardMove = (e) => {
  const card = e.currentTarget;
  const rect  = card.getBoundingClientRect();
  card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
  card.style.setProperty("--mouse-y", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
};

export default function PortfolioPage() {
  useReveal();
  const [activeTab, setActiveTab] = useState("All");
  const filtered = PROJECTS.filter((p) => activeTab === "All" || p.category === activeTab);

  return (
    <>
      <ThreeCanvas />
      <CustomCursor />
      <div className="noise-overlay" />
      <main style={{ position: "relative", zIndex: 2 }}>

        {/* ══ HERO ══ */}
        <section className="hero-section flex items-center justify-center px-5 pt-28 pb-14 sm:pt-36 sm:pb-16" style={{ minHeight: "60svh" }}>
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", top: "5%", left: "-10%", animationDelay: "0s" }} />
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(155,77,255,0.10) 0%, transparent 70%)", bottom: "0%", right: "-15%", animationDelay: "2s" }} />

          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <span className="hero-label reveal-on-scroll">
                <span className="hero-label-dot" />
                A curated selection of custom creations
              </span>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="hero-title font-serif mb-6">
                Digital products that{" "}
                <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>stopped</em>
                <br className="hidden sm:block" /> people <span className="text-genz">mid-scroll.</span>
              </h1>
              <p className="hero-subtitle mx-auto">
                Explore projects bridging timeless typography grids with modern web performance and AI.
              </p>
            </div>
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section className="px-5 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">

            {/* Filter tabs */}
            <div className="reveal-on-scroll flex flex-wrap justify-center gap-2 mb-12">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className="px-5 py-2 rounded-full text-xs font-bold tracking-wider transition"
                  style={{
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                    background: activeTab === c ? "linear-gradient(135deg, #c9a84c, #f0d080)" : "rgba(255,255,255,0.05)",
                    color: activeTab === c ? "#050d1a" : "var(--color-text-muted)",
                    border: activeTab === c ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <div key={p.title} className="service-card reveal-on-scroll flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }} onMouseMove={handleCardMove}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="service-icon" style={{ width: 44, height: 44, margin: 0, background: p.glow, boxShadow: `0 0 16px ${p.glow}` }}>
                      <p.Icon style={{ fontSize: "1.1rem", color: p.color }} />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "var(--color-text-muted)" }}>
                      {p.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                  <p className="text-xs font-bold font-mono mb-3" style={{ color: p.color }}>{p.metrics}</p>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--color-text-muted)" }}>{p.desc}</p>
                  <div className="flex items-center gap-2 mt-auto text-xs font-mono font-bold" style={{ color: p.color }}>
                    View Case Study <FaArrowRight style={{ fontSize: "0.6rem" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="px-5 py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(155,77,255,0.08) 0%, rgba(0,255,231,0.05) 50%, rgba(255,45,120,0.08) 100%)", borderTop: "1px solid rgba(155,77,255,0.2)", borderBottom: "1px solid rgba(0,255,231,0.15)" }} />
          <div className="reveal-scale max-w-2xl mx-auto text-center relative">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--neon-cyan)", marginBottom: 16, textTransform: "uppercase" }}>— Limited Slots —</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight mb-5">
              Ready to <span className="text-genz">escape the ordinary</span>?
            </h2>
            <p className="mb-8" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>Let&apos;s build an extraordinary digital presence together.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto justify-center">Book a Discovery Call ✦</a>
              <a href="/services" className="btn-ghost w-full sm:w-auto justify-center">View Services</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
