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

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("[data-wiggle-button]").forEach((button) => {
  const frame = button.previousElementSibling;
  const image = frame?.querySelector("img");
  if (!frame || !image) return;
  const view = document.createElement("div");
  view.className = "wiggle-view";
  view.setAttribute("role", "img");
  view.setAttribute("aria-label", `${image.alt}, animated wiggle view`);
  view.style.backgroundImage = `url("${image.currentSrc || image.src}")`;
  frame.appendChild(view);
  let timer = 0;
  let right = false;
  button.addEventListener("click", () => {
    if (timer || frame.classList.contains("is-wiggling")) {
      if (timer) clearInterval(timer);
      timer = 0;
      frame.classList.remove("is-wiggling");
      button.classList.remove("is-active");
      button.textContent = "Wiggle view";
      button.setAttribute("aria-pressed", "false");
      return;
    }
    frame.classList.add("is-wiggling");
    button.classList.add("is-active");
    button.textContent = "Show stereo pair";
    button.setAttribute("aria-pressed", "true");
    if (!reducedMotion) timer = setInterval(() => { right = !right; view.classList.toggle("show-right", right); }, 240);
  });
});
