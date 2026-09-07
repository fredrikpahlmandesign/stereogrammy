const section = document.querySelector(".scroll-depth");
if (section && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let frame = 0;
  const update = () => {
    frame = 0;
    const rect = section.getBoundingClientRect();
    const travel = rect.height - innerHeight;
    const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
    section.style.setProperty("--scroll-depth", String(progress));
  };
  const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", requestUpdate);
}
