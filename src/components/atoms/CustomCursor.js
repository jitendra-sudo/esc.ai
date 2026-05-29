"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf;
    let dx = 0, dy = 0;
    let tx = 0, ty = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const onEnter = () => ring.classList.add("expand");
    const onLeave = () => ring.classList.remove("expand");

    const tick = () => {
      dx += (tx - dx) * 0.14;
      dy += (ty - dy) * 0.14;
      dot.style.left  = `${tx}px`;
      dot.style.top   = `${ty}px`;
      ring.style.left = `${dx}px`;
      ring.style.top  = `${dy}px`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
