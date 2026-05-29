import React from 'react'
import { FaGlobe, FaMobileAlt, FaRobot, FaBullhorn, FaArrowRight } from 'react-icons/fa'

export const metadata = {
    title: 'Services — esc.ai',
    description: 'Services: Websites, Apps, AI/ML, Marketing — esc.ai',
}

const SERVICES = [
    {
        Icon: FaGlobe,
        title: 'Websites',
        desc: 'Marketing sites, landing pages, and product frontends focused on conversion and speed.',
        color: '#c9a84c',
        glow: 'rgba(201,168,76,0.18)',
    },
    {
        Icon: FaMobileAlt,
        title: 'Apps',
        desc: 'Web and mobile applications with scalable architectures and delightful UX.',
        color: '#00ffe7',
        glow: 'rgba(0,255,231,0.18)',
    },
    {
        Icon: FaRobot,
        title: 'AI & ML',
        desc: 'Model consulting, ML pipelines, and integrations for real business impact.',
        color: '#9b4dff',
        glow: 'rgba(155,77,255,0.18)',
    },
    {
        Icon: FaBullhorn,
        title: 'Marketing',
        desc: 'Growth strategies, paid acquisition, and CRO to scale revenue.',
        color: '#ff2d78',
        glow: 'rgba(255,45,120,0.18)',
    },
]

export default function ServicesPage() {
    return (
        <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Services</h1>
                <p className="text-[var(--color-text-muted)] mb-10">Everything you need to launch, grow, and dominate digitally.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map(({ Icon, title, desc, color, glow }) => (
                        <div key={title} className="p-6 rounded-2xl bg-[var(--color-bg-section)] border border-white/5 hover:-translate-y-1 transition-transform group">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                                style={{ background: glow, boxShadow: `0 0 18px ${glow}` }}
                            >
                                <Icon style={{ fontSize: '1.4rem', color }} />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{title}</h3>
                            <p className="text-[var(--color-text-muted)] mb-4">{desc}</p>
                            <div className="flex items-center gap-2 text-sm" style={{ color }}>
                                Learn more <FaArrowRight style={{ fontSize: '0.7rem' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
