"use client";
import { useEffect } from "react";

export default function WiggleEnhancer() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-wiggle-button]"));
    const cleanups = buttons.map((button) => {
      let timer = 0;
      let right = false;
      const frame = button.previousElementSibling as HTMLElement | null;
      const image = frame?.querySelector("img");
      if (!frame || !image) return () => {};
      const view = document.createElement("div");
      view.className = "wiggle-view";
      view.setAttribute("role", "img");
      view.setAttribute("aria-label", `${image.alt}, animated wiggle view`);
      view.style.backgroundImage = `url("${image.currentSrc || image.src}")`;
      frame.appendChild(view);
      const stop = () => { if (timer) window.clearInterval(timer); timer = 0; frame.classList.remove("is-wiggling"); button.classList.remove("is-active"); button.textContent = "Wiggle view"; button.setAttribute("aria-pressed", "false"); };
      const toggle = () => {
        if (timer || frame.classList.contains("is-wiggling")) { stop(); return; }
        frame.classList.add("is-wiggling"); button.classList.add("is-active"); button.textContent = "Show stereo pair"; button.setAttribute("aria-pressed", "true");
        if (!reduced) timer = window.setInterval(() => { right = !right; view.classList.toggle("show-right", right); }, 240);
      };
      button.addEventListener("click", toggle);
      return () => { stop(); button.removeEventListener("click", toggle); view.remove(); };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
  return null;
}
