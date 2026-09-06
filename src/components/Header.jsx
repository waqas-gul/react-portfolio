import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../lib/smoothScroll";

// Navigation Menu Items (unchanged)
const menu = [
  { name: "Home", path: "hero", type: "scroll" },
  { name: "About", path: "about", type: "scroll" },
  { name: "Education", path: "education", type: "scroll" },
  { name: "Experience", path: "experience", type: "scroll" },
  { name: "Projects", path: "projects", type: "scroll" },
  { name: "Portfolio", path: "/portfolio", type: "route" },
  { name: "Contact", path: "contact", type: "scroll" },
];

const getInitialDarkMode = () => {
  if (typeof window !== "undefined") {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? savedDarkMode === "true" : true;
  }
  return true;
};

if (getInitialDarkMode()) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isPortfolioPage = location.pathname === "/portfolio";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Track scroll for navbar shrink/glass intensity. rAF-throttled, and the
  // state only changes when the boolean actually flips.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver — no offsetTop/offsetHeight reads,
  // so scrolling never forces a synchronous layout.
  useEffect(() => {
    if (!isHomePage) return;

    const sections = menu
      .filter((item) => item.type === "scroll")
      .map((item) => document.getElementById(item.path))
      .filter(Boolean);
    if (!sections.length) return;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (!visible.size) return;

        let bestId = null;
        let bestRatio = -1;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        // Skip the state write when nothing changed.
        if (bestId) setActive((prev) => (prev === bestId ? prev : bestId));
      },
      {
        // Bias the band toward the upper half so the active item matches what
        // the reader is looking at, not what is merely on screen.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHomePage]);

  // Close the drawer on Escape, and stop the page scrolling behind it.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const lenis = window.__lenis;
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lenis?.start();
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleNav = (item) => {
    setIsOpen(false);
    if (item.type === "route") {
      setActive(item.path);
      navigate(item.path);
      return;
    }
    setActive(item.path);
    if (!isHomePage) {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(item.path), 60);
    } else {
      scrollToSection(item.path);
    }
  };

  const isItemActive = (item) => {
    if (item.type === "route") return location.pathname === item.path;
    return isHomePage && active === item.path;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div
        className={`nav-shell relative flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3 ${
          scrolled ? "nav-shell-scrolled" : ""
        }`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Waqas Gul — Home"
          className="group flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span className="nav-logo-frame">
            <img
              src="/logo.png"
              alt="Waqas Gul"
              className="nav-logo-img transition-transform duration-500 group-hover:scale-105"
            />
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {menu.map((item) => {
            const activeNow = isItemActive(item);
            return (
              <button
                key={item.name}
                onClick={() => handleNav(item)}
                aria-current={activeNow ? "page" : undefined}
                className={`nav-link relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 dark:focus-visible:ring-cyan-300/60 ${
                  activeNow ? "nav-link-active" : "nav-link-idle"
                }`}
              >
                {activeNow && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="nav-pill absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right cluster: dark toggle + mobile menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            className="nav-icon-btn grid h-10 w-10 place-items-center rounded-full liquid-glass text-xl transition-all duration-300 hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 dark:focus-visible:ring-cyan-300/60"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="nav-icon-btn grid h-10 w-10 place-items-center rounded-full liquid-glass text-xl transition-all duration-300 hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 dark:focus-visible:ring-cyan-300/60 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Scrim behind the mobile drawer. Portaled to <body> because the
          header carries a Framer Motion transform, which would otherwise
          make position:fixed resolve against the header instead of the
          viewport. Keeps the menu readable even where backdrop-filter
          doesn't render. */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav-scrim md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Mobile Navigation Drawer — also portaled to <body>. Inside the
          header, the Framer Motion transform makes an ancestor backdrop
          root, so backdrop-filter has only the transparent header to
          sample and renders no blur at all on some engines. */}
      {createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-nav-panel rounded-2xl liquid-glass p-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {menu.map((item, idx) => {
                const activeNow = isItemActive(item);
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <button
                      onClick={() => handleNav(item)}
                      aria-current={activeNow ? "page" : undefined}
                      className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 dark:focus-visible:ring-cyan-300/60 ${
                        activeNow ? "nav-mobile-active" : "nav-mobile-idle"
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>,
      document.body
      )}
    </motion.header>
  );
};

export default Header;
