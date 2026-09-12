import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const HOLD_MS = 2800;
const EASE_OUT = [0.16, 1, 0.3, 1];
const EASE_IN = [0.7, 0, 0.84, 0];

// Letters rise out of a blur, then drift up and blur away.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.028 } },
  exit: { transition: { staggerChildren: 0.012 } },
};
const letter = {
  hidden: { y: "0.7em", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0em",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_OUT },
  },
  exit: {
    y: "-0.7em",
    opacity: 0,
    filter: "blur(8px)",
    transition: { duration: 0.28, ease: EASE_IN },
  },
};

// Isolated so each role change re-renders only this line, not the whole Hero.
export default function RoleRotator({ roles, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || roles.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), HOLD_MS);
    return () => clearInterval(id);
  }, [roles.length, prefersReducedMotion]);

  const role = roles[index];

  return (
    <span className={`role-rotator ${className}`}>
      {/* Screen readers get the full list once, not a changing word */}
      <span className="sr-only">{roles.join(", ")}</span>

      <span aria-hidden="true" className="role-rotator-stage">
        <AnimatePresence mode="wait">
          <motion.span
            key={role}
            className="role-rotator-word"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {Array.from(role).map((ch, i) => (
              <motion.span key={i} variants={letter} className="role-rotator-char">
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Progress line: fills while the current role is on screen */}
      {!prefersReducedMotion && roles.length > 1 && (
        <span aria-hidden="true" className="role-rotator-track">
          <motion.span
            key={index}
            className="role-rotator-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: HOLD_MS / 1000, ease: "linear" }}
          />
        </span>
      )}
    </span>
  );
}
