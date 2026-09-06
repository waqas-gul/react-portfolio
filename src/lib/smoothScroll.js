// Single source of truth for programmatic scrolling.
// Lenis owns the page; nothing else should animate scroll position.

const HEADER_OFFSET = -80;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getLenis = () =>
  typeof window !== "undefined" ? window.__lenis ?? null : null;

export function scrollToSection(id, { offset = HEADER_OFFSET } = {}) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset });
    return;
  }

  // Lenis is absent under reduced motion, and briefly before it mounts.
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function scrollToTop({ immediate = true } = {}) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { immediate });
    return;
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}
