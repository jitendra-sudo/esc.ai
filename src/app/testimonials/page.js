import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export const metadata = {
    title: 'Testimonials — esc.ai',
    description: 'Customer testimonials for esc.ai',
}

const TESTIMONIALS = [
    {
        q: 'Great work — our conversion rate improved dramatically. ESC.AI truly delivers.',
        name: 'Client A',
        role: 'CEO, SomeStartup',
        avatar: 'CA',
        rating: 5,
    },
    {
        q: 'Fast, reliable delivery and excellent communication from start to finish.',
        name: 'Client B',
        role: 'Product Lead, TechCo',
        avatar: 'CB',
        rating: 5,
    },
    {
        q: 'The 3D animations blew our customers away. Worth every penny.',
        name: 'Client C',
        role: 'Founder, AuraUI',
        avatar: 'CC',
        rating: 5,
    },
]

export default function TestimonialsPage() {
    return (
        <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Testimonials</h1>
                <p className="text-[var(--color-text-muted)] mb-10">What our clients say about working with us.</p>

                <div className="space-y-6">
                    {TESTIMONIALS.map(({ q, name, role, avatar, rating }) => (
                        <blockquote key={name} className="p-6 rounded-2xl bg-[var(--color-bg-section)] border border-white/5">
                            <FaQuoteLeft style={{ color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '0.75rem', opacity: 0.6 }} />
                            <p className="text-white/80 leading-relaxed mb-4">{q}</p>
                            <div className="flex items-center gap-2 mb-3">
                                {[...Array(rating)].map((_, i) => (
                                    <FaStar key={i} style={{ color: 'var(--gold)', fontSize: '0.8rem' }} />
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                                    {avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{name}</div>
                                    <div className="text-xs text-[var(--color-text-muted)]">{role}</div>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </div>
    )
}
