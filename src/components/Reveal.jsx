import { motion } from "framer-motion";

// One reveal, used everywhere, so timing and easing stay consistent.
// MotionConfig reducedMotion="user" in App.jsx drops the translate for
// users who ask for reduced motion and keeps the fade.
export const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  from = "bottom",
  delay = 0,
  amount = 0.25,
  className,
  as = "div",
}) {
  const offset = {
    bottom: { y: 20, x: 0 },
    left: { x: -32, y: 0 },
    right: { x: 32, y: 0 },
  }[from];

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
