"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, className = "", rootMargin = "0px 0px -15% 0px" }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                rootMargin,
                threshold: 0.1,
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className={`reveal-on-scroll ${isVisible ? "visible" : ""} ${className}`.trim()}>
            {children}
        </div>
    );
}
