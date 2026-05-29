import React from "react";
import { FaGlobe, FaMobileAlt, FaRobot, FaBullhorn, FaStar, FaChartLine } from "react-icons/fa";
import RevealOnScroll from "@/components/atoms/RevealOnScroll";

export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-(--color-bg-main) text-(--color-text-main)">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-fixed bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_26%)]" />
      <RevealOnScroll>
        <section className="relative overflow-hidden py-24 px-6 section-parallax" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 26%), radial-gradient(circle at bottom right, rgba(139,92,246,0.06), transparent 28%)' }}>
          <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-[#0b172d] to-[#121827] opacity-95" />
          <div className="absolute left-10 top-16 w-44 h-44 rounded-full bg-cyan-500/20 blur-2xl animate-float" />
          <div className="absolute right-10 top-32 w-56 h-56 rounded-full bg-purple-600/20 blur-2xl animate-float-slow" />
          <div className="absolute left-1/2 top-48 -translate-x-1/2 w-105 h-105 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-(--color-text-muted) backdrop-blur-sm shadow-[0_0_24px_rgba(59,130,246,0.05)]">
                <FaStar className="text-cyan-300" /> Future-ready sticky digital experiences
              </span>
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl text-glow animate-glow">
                Launch fast with modern websites, apps, and AI-driven growth.
              </h1>
              <p className="max-w-2xl text-lg text-(--color-text-muted)">
                Escape the ordinary with ESC.AI — a premium, minimal business experience built to convert, scale, and delight.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.03]">
                  Book a consultation
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-(--color-text-muted) transition hover:border-white/25 hover:text-white">
                  View services
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/5 p-4 text-sm text-(--color-text-muted) shadow-[0_20px_80px_rgba(15,23,42,0.2)]">
                  <p className="font-semibold text-white">100+ launches</p>
                  <span>From websites to AI products.</span>
                </div>
                <div className="rounded-3xl bg-white/5 p-4 text-sm text-(--color-text-muted) shadow-[0_20px_80px_rgba(15,23,42,0.2)]">
                  <p className="font-semibold text-white">Fast deployment</p>
                  <span>Ready for launch in weeks.</span>
                </div>
                <div className="rounded-3xl bg-white/5 p-4 text-sm text-(--color-text-muted) shadow-[0_20px_80px_rgba(15,23,42,0.2)]">
                  <p className="font-semibold text-white">AI-enabled</p>
                  <span>Data and automation built in.</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:sticky lg:top-24">
              <div className="mb-6 flex items-center justify-between text-sm text-(--color-text-muted)">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Sticky dashboard</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">Live</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950/70 p-5 shadow-inner shadow-slate-950/20">
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>Performance</span>
                    <span className="text-cyan-300">+32%</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#0f172a]/80 p-4 text-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                    <div className="flex items-center gap-3 text-sm text-(--color-text-muted)">
                      <FaMobileAlt /> Mobile product
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">180k installs</p>
                  </div>
                  <div className="rounded-3xl bg-[#0f172a]/80 p-4 text-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                    <div className="flex items-center gap-3 text-sm text-(--color-text-muted)">
                      <FaRobot /> AI automation
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">3X efficiency</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl animate-float-slow" />
              <div className="absolute -left-10 bottom-8 h-20 w-20 rounded-full bg-cyan-500/20 blur-2xl animate-float" />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="features" className="py-16 px-6 bg-(--color-bg-section)">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <span className="text-sm uppercase tracking-[0.3em] text-(--color-text-muted)">Featured capabilities</span>
              <h2 className="mt-4 text-3xl font-bold">More ways ESC.AI powers your growth</h2>
              <p className="max-w-2xl mx-auto text-(--color-text-muted) mt-3">From launch to scale, every feature is designed for speed, automation, and premium digital experiences.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="feature-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 feature-icon icon-float">
                  <FaChartLine className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid prototyping</h3>
                <p className="text-(--color-text-muted)">Turn ideas into live concepts quickly with a lean, modular workflow.</p>
              </div>
              <div className="feature-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-purple-500/10 text-purple-300 feature-icon icon-float">
                  <FaStar className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI personalization</h3>
                <p className="text-(--color-text-muted)">Create tailored user experiences with intelligent content, recommendations, and automation.</p>
              </div>
              <div className="feature-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 feature-icon icon-float">
                  <FaGlobe className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Design systems</h3>
                <p className="text-(--color-text-muted)">Scale fast with consistent design tokens, reusable components, and polished branding.</p>
              </div>
              <div className="feature-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300 feature-icon icon-float">
                  <FaMobileAlt className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cross-platform apps</h3>
                <p className="text-(--color-text-muted)">Reach users on mobile, desktop, and web with responsive, performance-first apps.</p>
              </div>
              <div className="feature-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300 feature-icon icon-float">
                  <FaRobot className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated workflows</h3>
                <p className="text-(--color-text-muted)">Reduce manual effort with AI triggers, smart flows, and built-in process automation.</p>
              </div>
              <div className="feature-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300 feature-icon icon-float">
                  <FaBullhorn className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conversion optimization</h3>
                <p className="text-(--color-text-muted)">Drive more leads with UX copy, analytics, and conversion-focused page experiences.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="services" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <p className="text-(--color-text-muted) mb-8">We help teams ship products and grow using modern design and AI.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-(--color-bg-section) hover:-translate-y-1.5 transition transform">
                <div className="text-4xl mb-4"><FaGlobe /></div>
                <h3 className="font-semibold">Websites</h3>
                <p className="text-(--color-text-muted) mt-2">Fast, responsive marketing and product sites.</p>
              </div>

              <div className="p-6 rounded-xl bg-(--color-bg-section) hover:-translate-y-1.5 transition transform">
                <div className="text-4xl mb-4"><FaMobileAlt /></div>
                <h3 className="font-semibold">Apps</h3>
                <p className="text-(--color-text-muted) mt-2">Cross-platform mobile and web apps with great UX.</p>
              </div>

              <div className="p-6 rounded-xl bg-(--color-bg-section) hover:-translate-y-1.5 transition transform">
                <div className="text-4xl mb-4"><FaRobot /></div>
                <h3 className="font-semibold">AI & ML</h3>
                <p className="text-(--color-text-muted) mt-2">Custom models, data pipelines, and integrations.</p>
              </div>

              <div className="p-6 rounded-xl bg-(--color-bg-section) hover:-translate-y-1.5 transition transform">
                <div className="text-4xl mb-4"><FaBullhorn /></div>
                <h3 className="font-semibold">Marketing</h3>
                <p className="text-(--color-text-muted) mt-2">Growth strategies, ads, and conversion-focused design.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="contact" className="py-12 px-6 bg-(--color-bg-section)">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Let's talk</h3>
            <p className="text-(--color-text-muted) mb-6">Tell us about your project and we'll reply within 1 business day.</p>

            <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded bg-(--color-bg-card) border border-(--color-border)" placeholder="Name" />
              <input className="p-3 rounded bg-(--color-bg-card) border border-(--color-border)" placeholder="Email" />
              <textarea className="md:col-span-2 p-3 rounded bg-(--color-bg-card) border border-(--color-border)" placeholder="Project details" rows={4} />
              <button className="md:col-span-2 px-6 py-3 rounded bg-linear-to-r from-blue-500 to-purple-600 font-semibold">Send</button>
            </form>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <footer className="py-8 text-center text-(--color-text-muted)">
          <div className="max-w-6xl mx-auto">© {new Date().getFullYear()} esc.ai — Built with care.</div>
        </footer>
      </RevealOnScroll>
    </main>
  );
}
