import React from 'react'
import { FaBullseye, FaBolt, FaUsers, FaAward, FaCheckCircle } from 'react-icons/fa'

export const metadata = {
    title: 'About — esc.ai',
    description: 'About esc.ai — modern products and AI/ML services.',
}

const PILLARS = [
    { Icon: FaBullseye, label: 'Mission-Driven', desc: 'Every project is built with a clear goal: measurable impact.', color: '#c9a84c' },
    { Icon: FaBolt, label: 'Speed-First', desc: 'From concept to launch in record time, without cutting corners.', color: '#aaff00' },
    { Icon: FaUsers, label: 'People-Centered', desc: 'Great products are built around real users, not assumptions.', color: '#00ffe7' },
    { Icon: FaAward, label: 'Award-Caliber', desc: 'Design and engineering held to the highest standards.', color: '#9b4dff' },
]

const VALUES = [
    'Radical transparency in communication',
    'No templates — everything custom',
    'Data-informed design decisions',
    'Obsessive attention to detail',
]

export default function AboutPage() {
    return (
        <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">About esc.ai</h1>
                <p className="text-[var(--color-text-muted)] mb-12 text-lg leading-relaxed">
                    esc.ai builds websites, apps and AI/ML solutions with a focus on speed, usability, and measurable growth.
                    Our approach blends modern design with pragmatic engineering — fusing classical craft with Gen Z energy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
                    {PILLARS.map(({ Icon, label, desc, color }) => (
                        <div key={label} className="p-6 rounded-2xl bg-[var(--color-bg-section)] border border-white/5">
                            <div className="mb-3">
                                <Icon style={{ fontSize: '1.6rem', color }} />
                            </div>
                            <h3 className="font-semibold mb-1">{label}</h3>
                            <p className="text-[var(--color-text-muted)] text-sm">{desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-3">
                    {VALUES.map((v) => (
                        <li key={v} className="flex items-center gap-3 text-[var(--color-text-muted)]">
                            <FaCheckCircle style={{ color: '#c9a84c', flexShrink: 0 }} />
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
