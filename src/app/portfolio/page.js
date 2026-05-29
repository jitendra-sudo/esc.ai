import React from 'react'
import { FaGlobe, FaMobileAlt, FaRobot, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

export const metadata = {
    title: 'Portfolio — esc.ai',
    description: 'Portfolio of projects by esc.ai',
}

const PROJECTS = [
    {
        Icon: FaGlobe,
        title: 'NovaDrop',
        category: 'Landing Page',
        desc: 'A high-conversion SaaS landing page with scroll-driven 3D animations.',
        color: '#c9a84c',
        glow: 'rgba(201,168,76,0.18)',
        tag: 'Web',
    },
    {
        Icon: FaMobileAlt,
        title: 'Fluxion App',
        category: 'Mobile App',
        desc: 'Cross-platform app with 180k installs and sub-100ms interaction latency.',
        color: '#00ffe7',
        glow: 'rgba(0,255,231,0.18)',
        tag: 'Mobile',
    },
    {
        Icon: FaRobot,
        title: 'AuraBot',
        category: 'AI Prototype',
        desc: 'A custom GPT-based workflow assistant reducing manual effort by 3x.',
        color: '#9b4dff',
        glow: 'rgba(155,77,255,0.18)',
        tag: 'AI',
    },
]

export default function PortfolioPage() {
    return (
        <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
                <p className="text-[var(--color-text-muted)] mb-10">
                    A curated selection of projects showcasing our capabilities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROJECTS.map(({ Icon, title, category, desc, color, glow, tag }) => (
                        <div key={title} className="group rounded-2xl bg-[var(--color-bg-section)] border border-white/5 p-6 hover:-translate-y-1.5 transition-transform">
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                                    style={{ background: glow, boxShadow: `0 0 16px ${glow}` }}
                                >
                                    <Icon style={{ fontSize: '1.2rem', color }} />
                                </div>
                                <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-[var(--color-text-muted)]">{tag}</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{title}</h3>
                            <p className="text-xs text-[var(--color-text-muted)] mb-2" style={{ color }}>{category}</p>
                            <p className="text-[var(--color-text-muted)] text-sm mb-4">{desc}</p>
                            <div className="flex items-center gap-2 text-sm" style={{ color }}>
                                View case study <FaArrowRight style={{ fontSize: '0.65rem' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
