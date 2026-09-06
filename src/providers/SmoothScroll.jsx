import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis = null;
    let rafId = null;

    const start = () => {
      if (lenis || mq.matches) return;

      // lerp only. Passing duration/easing alongside it selects a different,
      // conflicting mode in Lenis and silently discards one of them.
      lenis = new Lenis({
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });
      window.__lenis = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
      lenis?.destroy();
      lenis = null;
      window.__lenis = null;
    };

    start();
    const onChange = () => (mq.matches ? stop() : start());
    mq.addEventListener("change", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  return children;
}
