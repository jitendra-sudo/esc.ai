"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import {
  FaBullseye, FaBolt, FaUsers, FaAward, FaCheckCircle,
  FaArrowRight, FaStar, FaTwitter, FaLinkedin, FaGithub,
} from "react-icons/fa";

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

const PILLARS = [
  { Icon: FaBullseye, label: "Mission-Driven", desc: "Every project is built with a clear goal: measurable impact and exponential growth.", color: "#c9a84c", glow: "rgba(201,168,76,0.25)" },
  { Icon: FaBolt,     label: "Speed-First",    desc: "From concept to launch in record time — highly optimised workflows, zero fluff.",    color: "#aaff00", glow: "rgba(170,255,0,0.25)" },
  { Icon: FaUsers,    label: "People-Centered",desc: "Great products are built around real human needs, not raw assumptions.",              color: "#00ffe7", glow: "rgba(0,255,231,0.25)" },
  { Icon: FaAward,    label: "Award-Caliber",  desc: "Design and engineering held to the absolute highest aesthetic standards.",           color: "#9b4dff", glow: "rgba(155,77,255,0.25)" },
];

const VALUES = [
  "Radical transparency in communication",
  "No templates — everything is bespoke and custom",
  "Data-informed, intuition-sharpened design decisions",
  "Obsessive attention to detail at every viewport size",
  "Fusing high art with robust computational engineering",
];

const TEAM = [
  { name: "Alex Rivera", role: "Creative Director", initials: "AR", color: "#c9a84c", glow: "rgba(201,168,76,0.25)" },
  { name: "Sam Patel",   role: "AI / ML Lead",      initials: "SP", color: "#00ffe7", glow: "rgba(0,255,231,0.25)" },
  { name: "Zoe Chen",    role: "Lead Engineer",      initials: "ZC", color: "#9b4dff", glow: "rgba(155,77,255,0.25)" },
];

const handleCardMove = (e) => {
  const card = e.currentTarget;
  const rect  = card.getBoundingClientRect();
  card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
  card.style.setProperty("--mouse-y", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
};

export default function AboutPage() {
  useReveal();
  return (
    <>
      <ThreeCanvas />
      <CustomCursor />
      <div className="noise-overlay" />
      <main style={{ position: "relative", zIndex: 2 }}>

        {/* ══ HERO ══ */}
        <section className="hero-section flex items-center justify-center px-5 pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ minHeight: "70svh" }}>
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", top: "5%", left: "-10%", animationDelay: "0s" }} />
          <div className="hero-orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(155,77,255,0.10) 0%, transparent 70%)", bottom: "0%", right: "-15%", animationDelay: "3s" }} />
          <div className="hero-orb hidden sm:block" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(0,255,231,0.07) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDelay: "1.5s" }} />

          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <span className="hero-label reveal-on-scroll">
                <span className="hero-label-dot" />
                Classical × Gen Z × 3D
              </span>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="hero-title font-serif mb-6">
                We build digital{" "}
                <span className="text-gold">experiences</span><br className="hidden sm:block" />
                {" "}that <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>matter.</em>
              </h1>
              <p className="hero-subtitle mx-auto mb-8">
                ESC.AI is a boutique digital studio blending classical design mastery with Gen Z velocity and AI.
                We do not do templates. We do obsession.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a href="/contact" className="btn-primary w-full sm:w-auto justify-center">Start a Project ↗</a>
                <a href="/services" className="btn-ghost w-full sm:w-auto justify-center">Our Services</a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PILLARS ══ */}
        <section className="px-5 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-on-scroll text-center mb-14">
              <span className="section-label">Our Philosophy</span>
              <div className="ornament-divider mt-4 mb-4">
                <div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black">Core <span className="text-gold">Pillars</span></h2>
              <p className="mt-4 max-w-md mx-auto" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                Four commitments that dictate every creative and technical direction we execute.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {PILLARS.map((p, i) => (
                <div key={p.label} className="service-card reveal-on-scroll flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }} onMouseMove={handleCardMove}>
                  <div className="service-icon" style={{ background: p.glow, boxShadow: `0 0 20px ${p.glow}` }}>
                    <p.Icon style={{ fontSize: "1.3rem", color: p.color }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 700, marginBottom: 10, color: p.color }}>{p.label}</h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: "0.9rem" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VALUES ══ */}
        <section className="px-5 py-14" style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 100%)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal-on-scroll">
              <span className="section-label">Our DNA</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black mt-4 leading-tight">
                Values we <span className="text-genz">never</span> compromise
              </h2>
              <p className="mt-4" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                Practical guidelines embedded in our coding standards, design grids, and client relationships — not taglines on a wall.
              </p>
            </div>
            <div className="service-card reveal-on-scroll p-8" onMouseMove={handleCardMove}>
              <ul className="space-y-4">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    <FaCheckCircle className="mt-1 shrink-0" style={{ color: "var(--gold)", fontSize: "0.85rem" }} />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══ TEAM ══ */}
        <section className="px-5 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-on-scroll text-center mb-14">
              <span className="section-label">The Architects</span>
              <div className="ornament-divider mt-4 mb-4">
                <div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black">Meet the <span className="text-gold">Team</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TEAM.map((m, i) => (
                <div key={m.name} className="service-card reveal-on-scroll text-center py-10 px-6" style={{ transitionDelay: `${i * 0.1}s` }} onMouseMove={handleCardMove}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4"
                    style={{ background: m.glow, border: `2px solid ${m.color}44`, color: m.color, boxShadow: `0 0 20px ${m.glow}` }}>
                    {m.initials}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: m.color, marginBottom: 4 }}>{m.name}</h3>
                  <p className="mb-5" style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{m.role}</p>
                  <div className="flex gap-4 justify-center">
                    {[FaTwitter, FaLinkedin, FaGithub].map((Icon, j) => (
                      <a key={j} href="#" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = m.color}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>
                        <Icon />
                      </a>
                    ))}
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
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--neon-cyan)", marginBottom: 16, textTransform: "uppercase" }}>— Limited Slots Available —</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight mb-5">
              Ready to build something <span className="text-genz">legendary</span>?
            </h2>
            <p className="mb-8" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              We take on select projects each month. Book a free 30-min call — let&apos;s see if we&apos;re a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto justify-center">Book a Free Call ✦</a>
              <a href="/portfolio" className="btn-ghost w-full sm:w-auto justify-center">See Our Work</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
