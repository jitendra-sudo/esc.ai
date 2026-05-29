"use client"

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton({ phone = "1234567890", message = "Hello%20from%20esc.ai" }) {
    const href = `https://wa.me/${phone}?text=${message}`

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed right-6 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
            <FaWhatsapp className="w-5 h-5" />
        </a>
    )
}
