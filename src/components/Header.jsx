import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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

  // Track scroll for navbar shrink/glass intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update active section on scroll (home page only)
  useEffect(() => {
    if (!isHomePage) return;
    const onScroll = () => {
      const y = window.scrollY + 120;
      const hit = menu.find((item) => {
        if (item.type !== "scroll") return false;
        const el = document.getElementById(item.path);
        if (!el) return false;
        const { offsetTop, offsetHeight } = el;
        return y >= offsetTop && y < offsetTop + offsetHeight;
      });
      if (hit) setActive(hit.path);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // Smooth scroll via Lenis (falls back to native if not present)
  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      setTimeout(() => smoothScrollTo(item.path), 60);
    } else {
      smoothScrollTo(item.path);
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
        {/* Logo (unchanged source) */}
        <NavLink
          to="/"
          aria-label="Home"
          className="group flex items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl liquid-glass">
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-violet-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/logo.png"
              alt="Logo"
              className="relative z-10 h-7 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
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
                {darkMode ? <FiSun /> : <FiMoon />}
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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-3 right-3 top-full mt-2 rounded-2xl liquid-glass p-3 md:hidden sm:left-5 sm:right-5"
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
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
