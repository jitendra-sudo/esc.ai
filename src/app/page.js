"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

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

function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let start = 0;
      const step = end / 60;
      const t = setInterval(() => {
        start += step;
        if (start >= end) { setVal(end); clearInterval(t); } else { setVal(Math.floor(start)); }
      }, 24);
      io.disconnect();
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── genz ticker ── */
const TICKS = ["✦ 3D Experiences","✦ Gen Z Energy","✦ Classical Elegance","✦ AI-Powered","✦ Motion Rich","✦ Premium Design","✦ Scroll Magic","✦ Futuristic","✦ Lightning Fast"];
function MarqueeTicker() {
  const items = [...TICKS, ...TICKS];
  return (
    <div className="genz-strip overflow-hidden">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="genz-tag">
            <span className="genz-dot" style={{ background: ["#00ffe7","#ff2d78","#c9a84c","#9b4dff","#aaff00"][i % 5] }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── services data ── */
const SERVICES = [
  { icon: "🌐", title: "Web Experiences", desc: "Premium websites with scroll-driven animations, 3D scenes, and cinematic transitions.", color: "#c9a84c", glow: "rgba(201,168,76,0.25)" },
  { icon: "📱", title: "Mobile Apps", desc: "Cross-platform apps engineered for speed, delight, and viral-worthy UX.", color: "#00ffe7", glow: "rgba(0,255,231,0.25)" },
  { icon: "🤖", title: "AI & Automation", desc: "Custom AI pipelines, smart workflows, and data-driven growth engines.", color: "#9b4dff", glow: "rgba(155,77,255,0.25)" },
  { icon: "📣", title: "Growth Marketing", desc: "Conversion-first design, brand strategy, and digital campaigns that hit.", color: "#ff2d78", glow: "rgba(255,45,120,0.25)" },
  { icon: "🎨", title: "Brand Identity", desc: "Classical artistry meets Gen Z aesthetics — logos, systems, and presence.", color: "#aaff00", glow: "rgba(170,255,0,0.25)" },
  { icon: "⚡", title: "Performance Ops", desc: "Sub-second load times, edge deployment, and bulletproof infrastructure.", color: "#ff6b00", glow: "rgba(255,107,0,0.25)" },
];

/* ── testimonials ── */
const TESTIMONIALS = [
  { q: "ESC.AI built us something that stopped people mid-scroll. Our conversion rate jumped 3x in the first week.", name: "Priya Sharma", role: "Founder, NovaDrop", avatar: "PS" },
  { q: "They speak both classical polish and Gen Z chaos fluently. That rare mix is exactly what our brand needed.", name: "Marcus Chen", role: "CMO, Fluxion Labs", avatar: "MC" },
  { q: "The 3D animations are insane. Clients literally call us to ask who built the site. Worth every rupee.", name: "Zoe Williams", role: "CEO, AuraUI Studio", avatar: "ZW" },
];

/* ── main page ── */
export default function Home() {
  useReveal();

  /* service card mouse glow */
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect  = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
    card.style.setProperty("--mouse-y", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
  };

  return (
    <>
      <ThreeCanvas />
      <CustomCursor />
      <div className="noise-overlay" />

      <main style={{ position: "relative", zIndex: 2 }}>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="hero-section" style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem 4rem" }}>
          {/* Orbs */}
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", top: "10%", left: "-10%", animationDelay: "0s" }} />
          <div className="hero-orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(155,77,255,0.1) 0%, transparent 70%)", bottom: "5%", right: "-15%", animationDelay: "3s" }} />
          <div className="hero-orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(0,255,231,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDelay: "1.5s" }} />

          <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", display: "grid", gap: "4rem", gridTemplateColumns: "1fr", textAlign: "center" }}>
            {/* Label */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="hero-label reveal-on-scroll">
                <span className="hero-label-dot" />
                Classical × Gen Z × 3D
              </span>
            </div>

            {/* Title */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="hero-title font-serif" style={{ marginBottom: "1.5rem" }}>
                <span className="text-gold glitch" data-text="Where Art">Where Art</span>
                <br />
                <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>meets the </em>
                <span className="text-genz">Algorithm</span>
              </h1>
              <p className="hero-subtitle" style={{ margin: "0 auto 2.5rem" }}>
                ESC.AI builds digital experiences that fuse timeless classical design with raw Gen Z energy — powered by motion, 3D, and AI at every pixel.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#services" className="btn-primary">Start a Project ↗</a>
                <a href="#work" className="btn-ghost">See Our Work</a>
                <a href="#contact" className="btn-neon">Let&apos;s Talk</a>
              </div>
            </div>

            {/* Stats row */}
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.2s", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto", width: "100%" }}>
              {[
                { num: 180, suf: "+", label: "Projects Shipped" },
                { num: 4.9, suf: "/5", label: "Client Rating" },
                { num: 3, suf: "x", label: "Avg. ROI Boost" },
                { num: 48, suf: "h", label: "Avg. First Draft" },
              ].map(({ num, suf, label }) => (
                <div key={label} className="stat-card">
                  <div className="stat-num"><Counter end={num} suffix={suf} /></div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: 6, fontFamily: "var(--font-mono)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TICKER ═══════════════ */}
        <MarqueeTicker />

        {/* ═══════════════ SERVICES ═══════════════ */}
        <section id="services" style={{ padding: "7rem 1.5rem", position: "relative" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Section header */}
            <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-label">What We Do</span>
              <div className="ornament-divider" style={{ marginTop: 16, marginBottom: 16 }}>
                <div className="ornament-line" />
                <div className="ornament-diamond" />
                <div className="ornament-line" />
              </div>
              <h2 className="font-serif" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, lineHeight: 1.1 }}>
                Crafted with{" "}
                <span className="text-gold">precision</span>
                {" "}& deployed with{" "}
                <span className="text-genz">chaos</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", maxWidth: 540, margin: "1rem auto 0", lineHeight: 1.7 }}>
                Every service blends old-world craftsmanship with new-world velocity. No templates. No filler. Only fire.
              </p>
            </div>

            {/* Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className="service-card reveal-on-scroll"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  onMouseMove={handleCardMove}
                >
                  <div className="service-icon" style={{ background: `${s.glow}`, boxShadow: `0 0 20px ${s.glow}` }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: s.color }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: "0.9rem" }}>{s.desc}</p>
                  <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: s.color, fontFamily: "var(--font-mono)" }}>
                    Learn more <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CLASSICAL FEATURE BANNER ═══════════════ */}
        <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 100%)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, alignItems: "center" }}>
            <div className="reveal-on-scroll">
              <span className="section-label">Our Philosophy</span>
              <h2 className="font-serif" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
                The <span className="text-gold">Golden Ratio</span> of Digital
              </h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: 16 }}>
                Like Renaissance masters measured perfection with a compass, we measure every pixel against harmony, rhythm, and purpose — then make it go viral.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="reveal-on-scroll" >
              {[
                { label: "Timeless", icon: "🏛️", sub: "Classical structure" },
                { label: "Electric", icon: "⚡", sub: "Gen Z energy" },
                { label: "Immersive", icon: "🌀", sub: "3D & motion" },
                { label: "Intelligent", icon: "🧠", sub: "AI-first logic" },
              ].map((f) => (
                <div key={f.label} style={{ padding: 20, borderRadius: 16, border: "1px solid rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--gold-light)" }}>{f.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <section id="work" style={{ padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-label">Social Proof</span>
              <div className="ornament-divider" style={{ marginTop: 16, marginBottom: 16 }}>
                <div className="ornament-line" />
                <div className="ornament-diamond" />
                <div className="ornament-line" />
              </div>
              <h2 className="font-serif" style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900 }}>
                They <em style={{ color: "var(--neon-pink)" }}>talk</em>. We <span className="text-gold">deliver</span>.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="testimonial-card reveal-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>
                    ))}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 20 }}>&ldquo;{t.q}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gradient-genz)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", color: "white" }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA BANNER ═══════════════ */}
        <section style={{ padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(155,77,255,0.08) 0%, rgba(0,255,231,0.05) 50%, rgba(255,45,120,0.08) 100%)", borderTop: "1px solid rgba(155,77,255,0.2)", borderBottom: "1px solid rgba(0,255,231,0.15)" }} />
          <div className="reveal-scale" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--neon-cyan)", marginBottom: 16, textTransform: "uppercase" }}>
              — Limited Slots Available —
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
              Ready to build something <span className="text-genz">unforgettable</span>?
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 32 }}>
              We take on select projects each month. If you want a website that stops people mid-scroll — this is it.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">Book a Free Call ✦</a>
              <a href="#services" className="btn-neon">View Services</a>
            </div>
          </div>
        </section>

        {/* ═══════════════ CONTACT ═══════════════ */}
        <section id="contact" style={{ padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-label">Get In Touch</span>
              <div className="ornament-divider" style={{ marginTop: 16, marginBottom: 16 }}>
                <div className="ornament-line" />
                <div className="ornament-diamond" />
                <div className="ornament-line" />
              </div>
              <h2 className="font-serif" style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900 }}>
                Let&apos;s build your <span className="text-gold">vision</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: 12, lineHeight: 1.7 }}>
                Tell us what you&apos;re building. We reply within 24 hours, every time.
              </p>
            </div>

            <form className="reveal-on-scroll" style={{ display: "grid", gap: 16, transitionDelay: "0.1s" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input className="form-field" placeholder="Your name" />
                <input className="form-field" type="email" placeholder="Your email" />
              </div>
              <input className="form-field" placeholder="Subject / Project type" />
              <textarea className="form-field" rows={5} placeholder="Tell us about your project, budget, and timeline..." style={{ resize: "vertical" }} />
              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                Send Message ✦
              </button>
            </form>
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ padding: "3rem 1.5rem 2rem" }}>
          <div className="footer-divider" />
          <div style={{ maxWidth: 1100, margin: "2rem auto 0", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div className="font-serif" style={{ fontWeight: 900, fontSize: "1.2rem" }}>
                <span className="text-gold">ESC</span><span style={{ color: "rgba(255,255,255,0.4)" }}>.ai</span>
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginTop: 4 }}>
                Classical × Gen Z × 3D
              </div>
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
              © {new Date().getFullYear()} esc.ai — crafted with obsession.
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {["Twitter", "Instagram", "LinkedIn", "GitHub"].map((l) => (
                <a key={l} href="#" style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", textDecoration: "none", fontFamily: "var(--font-mono)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "var(--gold)"}
                  onMouseLeave={(e) => e.target.style.color = "var(--color-text-muted)"}
                >{l}</a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
