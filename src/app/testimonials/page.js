"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";

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

const TESTIMONIALS = [
  { q: "ESC.AI built us something that stopped people mid-scroll. Our conversion rate jumped 3x in the first week.", name: "Priya Sharma",  role: "Founder, NovaDrop",  avatar: "PS", rating: 5, color: "#c9a84c", glow: "rgba(201,168,76,0.25)" },
  { q: "They speak both classical polish and Gen Z chaos fluently. That rare mix is exactly what our brand needed.", name: "Marcus Chen",  role: "CMO, Fluxion Labs",   avatar: "MC", rating: 5, color: "#00ffe7", glow: "rgba(0,255,231,0.25)" },
  { q: "The 3D animations are insane. Clients literally call us to ask who built the site. Worth every rupee.",     name: "Zoe Williams", role: "CEO, AuraUI Studio",  avatar: "ZW", rating: 5, color: "#9b4dff", glow: "rgba(155,77,255,0.25)" },
];

const handleCardMove = (e) => {
  const card = e.currentTarget;
  const rect  = card.getBoundingClientRect();
  card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
  card.style.setProperty("--mouse-y", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
};

export default function TestimonialsPage() {
  useReveal();
  return (
    <>
      <ThreeCanvas />
      <CustomCursor />
      <div className="noise-overlay" />
      <main style={{ position: "relative", zIndex: 2 }}>

        {/* ══ HERO ══ */}
        <section className="hero-section flex items-center justify-center px-5 pt-28 pb-14 sm:pt-36 sm:pb-16" style={{ minHeight: "55svh" }}>
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", top: "5%", left: "-10%", animationDelay: "0s" }} />
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(255,45,120,0.10) 0%, transparent 70%)", bottom: "0%", right: "-15%", animationDelay: "2s" }} />

          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <span className="hero-label reveal-on-scroll">
                <span className="hero-label-dot" />
                Social Proof
              </span>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="hero-title font-serif mb-6">
                They <em style={{ fontStyle: "italic", color: "var(--neon-pink)" }}>talk.</em>{" "}
                We <span className="text-gold">deliver.</span>
              </h1>
              <p className="hero-subtitle mx-auto">
                Hear from the visionaries, founders, and teams who escaped the ordinary with ESC.AI.
              </p>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="px-5 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="testimonial-card reveal-on-scroll flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }} onMouseMove={handleCardMove}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed mb-6 flex-1 italic" style={{ color: "rgba(255,255,255,0.8)" }}>
                    &ldquo;{t.q}&rdquo;
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                      style={{ background: t.glow, border: `2px solid ${t.color}44`, color: t.color, boxShadow: `0 0 16px ${t.glow}` }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>{t.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{t.role}</div>
                    </div>
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
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--neon-cyan)", marginBottom: 16, textTransform: "uppercase" }}>— Be Our Next Success Story —</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight mb-5">
              Ready to build something <span className="text-genz">unforgettable</span>?
            </h2>
            <p className="mb-8" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              Let&apos;s build an extraordinary digital presence that sets you apart.
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
