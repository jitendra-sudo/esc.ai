"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

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

const CONTACT_INFO = [
  { Icon: FaEnvelope,     label: "Email",          value: "hello@esc.ai",       href: "mailto:hello@esc.ai", color: "#c9a84c", glow: "rgba(201,168,76,0.2)" },
  { Icon: FaPhone,        label: "WhatsApp / Call", value: "+1 (555) 000-0000",  href: "tel:+15550000000",    color: "#00ffe7", glow: "rgba(0,255,231,0.2)" },
  { Icon: FaMapMarkerAlt, label: "Studio",          value: "Remote / Worldwide", href: "#",                   color: "#9b4dff", glow: "rgba(155,77,255,0.2)" },
];

const handleCardMove = (e) => {
  const card = e.currentTarget;
  const rect  = card.getBoundingClientRect();
  card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
  card.style.setProperty("--mouse-y", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
};

export default function ContactPage() {
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
          <div className="hero-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(155,77,255,0.10) 0%, transparent 70%)", bottom: "0%", right: "-15%", animationDelay: "3s" }} />

          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <span className="hero-label reveal-on-scroll">
                <span className="hero-label-dot" />
                Let&apos;s build your vision
              </span>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="hero-title font-serif mb-6">
                Escape the <span className="text-gold">Ordinary</span>
              </h1>
              <p className="hero-subtitle mx-auto">
                Tell us what you&apos;re building. We respond with a roadmap and proposal in 24 hours, every time.
              </p>
            </div>
          </div>
        </section>

        {/* ══ CONTACT BODY ══ */}
        <section className="px-5 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left — info */}
            <div className="lg:col-span-5 reveal-on-scroll">
              <span className="section-label">Connect</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black mt-3 mb-7">Contact Channels</h2>

              <div className="flex flex-col gap-4 mb-7">
                {CONTACT_INFO.map(({ Icon, label, value, href, color, glow }) => (
                  <a key={label} href={href} className="service-card flex items-center gap-4 no-underline" style={{ padding: "1.1rem 1.4rem" }} onMouseMove={handleCardMove}>
                    <div className="service-icon shrink-0" style={{ width: 44, height: 44, margin: 0, background: glow, boxShadow: `0 0 16px ${glow}` }}>
                      <Icon style={{ fontSize: "1.05rem", color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: 2 }}>{label}</div>
                      <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "#fff" }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp card */}
              <div className="service-card p-6" onMouseMove={handleCardMove}>
                <h3 className="mb-2" style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700, color: "#25d366" }}>Instant Chat</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  Prefer direct message? Chat instantly with our team on WhatsApp.
                </p>
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25d366", padding: "0.55rem 1.2rem", borderRadius: 9999, fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <FaWhatsapp style={{ fontSize: "1rem" }} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7 reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <div className="service-card p-6 sm:p-10" onMouseMove={handleCardMove}>
                <span className="section-label">Briefing Form</span>
                <h2 className="font-serif text-2xl font-black mt-2 mb-7">Tell Us About the Project</h2>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input className="form-field" placeholder="Your name" />
                    <input className="form-field" type="email" placeholder="Your email" />
                  </div>
                  <input className="form-field" placeholder="Subject / Project type" />
                  <textarea className="form-field" rows={5} placeholder="Tell us about your project, goals and timeline..." style={{ resize: "vertical" }} />
                  <button type="submit" className="btn-primary justify-center">
                    Send Message <FaPaperPlane style={{ fontSize: "0.85rem" }} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
