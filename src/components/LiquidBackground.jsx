import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function LiquidBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.6 });
  const sy = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.6 });

  // A single transform keeps the glow on the compositor. Driving left/top
  // instead would force layout on every pointer move.
  const transform = useTransform(
    [sx, sy],
    ([x, y]) => `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
  );

  useEffect(() => {
    // No cursor to follow on touch devices, and the glow is hidden there.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    let frame = null;
    const onMove = (e) => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        frame = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="liquid-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="liquid-blob liquid-blob-1" />
      <div className="liquid-blob liquid-blob-2" />
      <div className="liquid-blob liquid-blob-3" />
      <div className="liquid-blob liquid-blob-4" />

      <motion.div className="liquid-cursor-glow" style={{ transform }} />

      <div className="liquid-noise" />
    </div>
  );
}
