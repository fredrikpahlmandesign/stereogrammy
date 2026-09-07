"use client";
import { useEffect, useRef } from "react";

export default function DepthParallax() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => { frame = 0; const rect = section.getBoundingClientRect(); const travel = rect.height - innerHeight; section.style.setProperty("--scroll-depth", String(travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0)); };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); addEventListener("scroll", requestUpdate, { passive: true }); addEventListener("resize", requestUpdate);
    return () => { removeEventListener("scroll", requestUpdate); removeEventListener("resize", requestUpdate); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <section ref={ref} className="scroll-depth" aria-label="A scrolling illustration of depth between clouds"><div className="depth-stage"><div className="depth-sky" /><span className="depth-cloud depth-cloud-far" /><span className="depth-cloud depth-cloud-mid" /><span className="depth-cloud depth-cloud-near" /><div className="depth-caption"><p className="eyebrow">Move through the scene</p><h2>Scroll turns distance<br />into separation.</h2><p>As your viewpoint travels, nearby forms shift faster than distant ones. That parallax is the raw material of stereoscopic depth.</p></div></div></section>;
}
