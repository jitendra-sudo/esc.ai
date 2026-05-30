"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import {
  FaGlobe, FaMobileAlt, FaRobot, FaBullhorn, FaPalette, FaBolt,
  FaCheckCircle, FaChartLine, FaCode, FaLayerGroup, FaShieldAlt,
  FaStar, FaArrowRight,
} from "react-icons/fa";

const ThreeCanvas  = dynamic(() => import("@/components/atoms/ThreeCanvas"),  { ssr: false });
const CustomCursor = dynamic(() => import("@/components/atoms/CustomCursor"), { ssr: false });

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll, .reveal-scale");
    const io  = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const SERVICES = [
  { Icon: FaGlobe,    title: "Web Experiences",  desc: "Premium marketing sites, SaaS frontends, and landing pages with scroll-driven 3D animations.", color: "#00ffe7", glow: "rgba(0,255,231,0.25)",   features: ["Custom 3D / Three.js scenes", "Framer Motion animations", "Mobile-first & fast", "SEO optimised"], tag: "Most Popular" },
  { Icon: FaMobileAlt,title: "Mobile Apps",       desc: "Cross-platform apps engineered for speed and delight — from MVP to 180k installs.",          color: "#9b4dff", glow: "rgba(155,77,255,0.25)", features: ["React Native / Expo", "Offline-first architecture", "Push notifications", "App Store publishing"], tag: null },
  { Icon: FaRobot,    title: "AI & Automation",   desc: "Custom AI pipelines, smart workflows, and data-driven growth engines built to ship.",          color: "#c9a84c", glow: "rgba(201,168,76,0.25)", features: ["LLM integrations (GPT, Claude)", "ML model training & deploy", "Data pipelines", "Process automation"], tag: "Hot" },
  { Icon: FaBullhorn, title: "Growth Marketing",  desc: "Conversion-first design, paid acquisition strategy, and campaigns that hit real targets.",     color: "#ff2d78", glow: "rgba(255,45,120,0.25)", features: ["CRO & A/B testing", "Paid ads strategy", "Email funnels", "Analytics dashboards"], tag: null },
  { Icon: FaPalette,  title: "Brand Identity",    desc: "Classical artistry meets Gen Z aesthetics — logos, systems, motion guidelines, presence.",      color: "#aaff00", glow: "rgba(170,255,0,0.25)",  features: ["Logo & visual identity", "Design token systems", "Motion brand guidelines", "Social kit"], tag: null },
  { Icon: FaBolt,     title: "Performance Ops",   desc: "Sub-second load times, edge deployment, and bulletproof infrastructure — faster and cheaper.",  color: "#ff6b00", glow: "rgba(255,107,0,0.25)", features: ["Core Web Vitals audit", "Edge / CDN optimisation", "Database tuning", "CI/CD pipelines"], tag: null },
];

const PROCESS = [
  { Icon: FaChartLine,  num: "01", title: "Discovery", desc: "We deep-dive into your goals, users, and competition. No assumptions, just clarity.",    color: "#00ffe7", glow: "rgba(0,255,231,0.2)" },
  { Icon: FaLayerGroup, num: "02", title: "Design",    desc: "High-fidelity wireframes and interactive prototypes — you see it before we build it.",   color: "#9b4dff", glow: "rgba(155,77,255,0.2)" },
  { Icon: FaCode,       num: "03", title: "Build",     desc: "Rapid sprints with daily updates. Clean code, zero surprises, full transparency.",         color: "#c9a84c", glow: "rgba(201,168,76,0.2)" },
  { Icon: FaShieldAlt,  num: "04", title: "Launch",    desc: "Full deploy, monitoring, and 30-day support window post-launch. We don't disappear.",     color: "#aaff00", glow: "rgba(170,255,0,0.2)" },
];

const handleCardMove = (e) => {
  const card = e.currentTarget;
  const rect  = card.getBoundingClientRect();
  card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
  card.style.setProperty("--mouse-y", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
};

export default function ServicesPage() {
  useReveal();
  return (
    <>
      <ThreeCanvas />
      <CustomCursor />
      <div className="noise-overlay" />
      <main style={{ position: "relative", zIndex: 2 }}>

        {/* ══ HERO ══ */}
        <section className="hero-section flex items-center justify-center px-5 pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ minHeight: "70svh" }}>
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(0,255,231,0.10) 0%, transparent 70%)", top: "5%", left: "-10%", animationDelay: "0s" }} />
          <div className="hero-orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(155,77,255,0.09) 0%, transparent 70%)", bottom: "0%", right: "-15%", animationDelay: "3s" }} />
          <div className="hero-orb hidden sm:block" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDelay: "1.5s" }} />

          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <span className="hero-label reveal-on-scroll">
                <span className="hero-label-dot" />
                6 core service areas — everything you need to launch and scale
              </span>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="hero-title font-serif mb-6">
                Crafted with <span className="text-gold">precision,</span><br className="hidden sm:block" />
                {" "}deployed with <span className="text-genz">chaos.</span>
              </h1>
              <p className="hero-subtitle mx-auto mb-8">
                Every service blends old-world craftsmanship with new-world velocity. No templates. No filler. Only fire.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a href="/contact" className="btn-primary w-full sm:w-auto justify-center">Book a Free Call ↗</a>
                <a href="#services" className="btn-ghost w-full sm:w-auto justify-center">Explore Services</a>
                <a href="#process" className="btn-neon w-full sm:w-auto justify-center">Our Process</a>
              </div>
            </div>

            {/* Stat pills */}
            <div className="reveal-on-scroll grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mt-10" style={{ transitionDelay: "0.2s" }}>
              {[
                { v: "180+", l: "Projects shipped" },
                { v: "3x ROI", l: "Avg. client return" },
                { v: "48h", l: "First draft ready" },
                { v: "4.9/5", l: "Client rating" },
              ].map(({ v, l }) => (
                <div key={l} className="stat-card text-center">
                  <div className="stat-num" style={{ fontSize: "1.4rem" }}>{v}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginTop: 4, fontFamily: "var(--font-mono)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES GRID ══ */}
        <section id="services" className="px-5 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-on-scroll text-center mb-14">
              <span className="section-label">What We Do</span>
              <div className="ornament-divider mt-4 mb-4">
                <div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black">Our <span className="text-gold">Services</span></h2>
              <p style={{ color: "var(--color-text-muted)", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.7 }}>Six specialisms. One team. Unlimited ambition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {SERVICES.map((s, i) => (
                <div key={s.title} className="service-card reveal-on-scroll flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }} onMouseMove={handleCardMove}>
                  {s.tag && (
                    <div style={{ position: "absolute", top: 14, right: 14, padding: "0.2rem 0.7rem", borderRadius: 9999, fontSize: "0.6rem", fontFamily: "var(--font-mono)", fontWeight: 700, background: s.glow, color: s.color, border: `1px solid ${s.color}44` }}>{s.tag}</div>
                  )}
                  <div className="service-icon" style={{ background: s.glow, boxShadow: `0 0 20px ${s.glow}` }}>
                    <s.Icon style={{ fontSize: "1.4rem", color: s.color }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, marginBottom: 10, color: s.color }}>{s.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: "0.9rem", marginBottom: 18, flex: 1 }}>{s.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                        <FaCheckCircle style={{ color: s.color, fontSize: "0.65rem", flexShrink: 0 }} />{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: s.color, fontFamily: "var(--font-mono)" }}>
                    Get started <FaArrowRight style={{ fontSize: "0.6rem" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PHILOSOPHY BANNER ══ */}
        <section className="px-5 py-14" style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 100%)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal-on-scroll">
              <span className="section-label">Why Choose Us</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black mt-4 leading-tight">The <span className="text-gold">Golden Ratio</span> of Digital</h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: 16 }}>
                Like Renaissance masters measured perfection with a compass, we measure every pixel against harmony — then make it go viral.
              </p>
            </div>
            <div className="reveal-on-scroll grid grid-cols-2 gap-3">
              {[
                { label: "Timeless",    icon: "🏛️", sub: "Classical structure" },
                { label: "Electric",    icon: "⚡",  sub: "Gen Z energy" },
                { label: "Immersive",   icon: "🌀",  sub: "3D & motion" },
                { label: "Intelligent", icon: "🧠",  sub: "AI-first logic" },
              ].map((f) => (
                <div key={f.label} className="text-center p-4 rounded-2xl" style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.02)" }}>
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--gold-light)", fontSize: "0.95rem" }}>{f.label}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section id="process" className="px-5 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-on-scroll text-center mb-14">
              <span className="section-label">How It Works</span>
              <div className="ornament-divider mt-4 mb-4">
                <div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black">Our <span className="text-gold">Process</span></h2>
              <p style={{ color: "var(--color-text-muted)", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.7 }}>A lean, transparent workflow from first call to final launch.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {PROCESS.map((p, i) => (
                <div key={p.num} className="service-card reveal-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }} onMouseMove={handleCardMove}>
                  <div style={{ position: "absolute", top: 14, right: 18, fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "3.5rem", lineHeight: 1, color: p.color, opacity: 0.07, userSelect: "none" }}>{p.num}</div>
                  <div className="service-icon" style={{ background: p.glow, boxShadow: `0 0 18px ${p.glow}` }}>
                    <p.Icon style={{ fontSize: "1.1rem", color: p.color }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, marginBottom: 8, color: p.color }}>{p.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: "0.88rem" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="px-5 py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(155,77,255,0.08) 0%, rgba(0,255,231,0.05) 50%, rgba(255,45,120,0.08) 100%)", borderTop: "1px solid rgba(155,77,255,0.2)", borderBottom: "1px solid rgba(0,255,231,0.15)" }} />
          <div className="reveal-scale max-w-2xl mx-auto text-center relative">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--neon-cyan)", marginBottom: 16, textTransform: "uppercase" }}>— Limited Slots Available —</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight mb-5">
              Ready to build something <span className="text-genz">unforgettable</span>?
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 32 }}>
              We take on select projects each month. Book a free 30-min call — let&apos;s see if we&apos;re a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto justify-center">Book a Free Call ✦</a>
              <a href="/portfolio" className="btn-neon w-full sm:w-auto justify-center">See Our Work</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
