import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function LiquidBackground() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.6 });
  const sy = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.6 });
  const glowX = useTransform(sx, (v) => `${v}px`);
  const glowY = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="liquid-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="liquid-blob liquid-blob-1" />
      <div className="liquid-blob liquid-blob-2" />
      <div className="liquid-blob liquid-blob-3" />
      <div className="liquid-blob liquid-blob-4" />

      <motion.div
        className="liquid-cursor-glow"
        style={{ left: glowX, top: glowY, x: "-50%", y: "-50%" }}
      />

      <div className="liquid-noise" />
    </div>
  );
}
