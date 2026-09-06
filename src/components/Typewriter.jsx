import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const TYPE_MS = 100;
const DELETE_MS = 50;
const HOLD_MS = 1500;

// Isolated so each character tick re-renders only this line, not the whole Hero.
export default function Typewriter({ phrases, className, cursorClassName }) {
  const prefersReducedMotion = useReducedMotion();
  const [text, setText] = useState(() => (phrases[0] ?? ""));

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases[0] ?? "");
      return;
    }

    let phrase = 0;
    let chars = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = phrases[phrase];

      if (!deleting) {
        chars += 1;
        setText(current.slice(0, chars));
        if (chars === current.length) {
          deleting = true;
          timer = setTimeout(tick, HOLD_MS);
          return;
        }
      } else {
        chars -= 1;
        setText(current.slice(0, chars));
        if (chars === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
        }
      }

      timer = setTimeout(tick, deleting ? DELETE_MS : TYPE_MS);
    };

    setText("");
    timer = setTimeout(tick, TYPE_MS);
    return () => clearTimeout(timer);
  }, [phrases, prefersReducedMotion]);

  return (
    <span className={className}>
      {/* Screen readers get a stable label instead of one-character-at-a-time */}
      <span aria-live="off">{text}</span>
      {!prefersReducedMotion && (
        <span aria-hidden="true" className={cursorClassName}>
          |
        </span>
      )}
    </span>
  );
}
