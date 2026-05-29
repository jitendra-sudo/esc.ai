import React from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata = {
    title: 'Contact — esc.ai',
    description: 'Contact esc.ai — get in touch about your project',
}

const CONTACT_INFO = [
    { Icon: FaEnvelope, label: 'Email', value: 'hello@esc.ai', href: 'mailto:hello@esc.ai', color: '#c9a84c' },
    { Icon: FaPhone, label: 'Phone', value: '+1 (555) 000-0000', href: 'tel:+15550000000', color: '#00ffe7' },
    { Icon: FaMapMarkerAlt, label: 'Location', value: 'Remote — Worldwide', href: '#', color: '#9b4dff' },
]

export default function ContactPage() {
    return (
        <div className="py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Contact</h1>
                <p className="text-[var(--color-text-muted)] mb-10">
                    Send us a message and we&apos;ll get back to you within one business day.
                </p>

                {/* Contact info row */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {CONTACT_INFO.map(({ Icon, label, value, href, color }) => (
                        <a
                            key={label}
                            href={href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-bg-section)] border border-white/5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors no-underline"
                        >
                            <Icon style={{ color, fontSize: '1rem' }} />
                            <span>{value}</span>
                        </a>
                    ))}
                </div>

                <form className="grid grid-cols-1 gap-4">
                    <input className="p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)]" placeholder="Name" />
                    <input className="p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)]" placeholder="Email" type="email" />
                    <textarea className="p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)]" placeholder="Message" rows={6} />
                    <div className="flex items-center gap-4 flex-wrap">
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                            <FaPaperPlane style={{ fontSize: '0.85rem' }} /> Send Message
                        </button>
                        <a
                            href="https://wa.me/15551234567"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors text-sm no-underline"
                        >
                            <FaWhatsapp style={{ color: '#25d366', fontSize: '1.1rem' }} /> Chat on WhatsApp
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
