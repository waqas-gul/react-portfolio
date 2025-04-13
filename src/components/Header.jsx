import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

// Navigation Menu Items
const menu = [
  { name: "Home", path: "hero", type: "scroll" },
  { name: "About", path: "about", type: "scroll" },
  { name: "Education", path: "education", type: "scroll" },
  { name: "Experience", path: "experience", type: "scroll" },
  { name: "Projects", path: "projects", type: "scroll" },
  { name: "Portfolio", path: "/portfolio", type: "route" }, // External route
  { name: "Contact", path: "contact", type: "scroll" },
];

const getInitialDarkMode = () => {
  if (typeof window !== "undefined") {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode
      ? savedDarkMode === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

// Apply dark mode before rendering
if (getInitialDarkMode()) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  const [active, setActive] = useState("hero");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRefs = useRef({});
  const location = useLocation();

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

  useEffect(() => {
    // Update active state based on the current route
    if (!isHomePage) {
      const currentRoute = menu.find((item) => item.path === location.pathname);
      if (currentRoute) {
        setActive(currentRoute.path);
      }
    }
  }, [location.pathname, isHomePage]);

  useEffect(() => {
    // Update underline style when active state changes
    if (navRefs.current[active]) {
      const { offsetLeft, offsetWidth } = navRefs.current[active];
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [active]);

  // Track active section on scroll (home page only)
  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 100; // Adjust offset as needed
        const activeSection = menu.find((item) => {
          const section = document.getElementById(item.path);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            return (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            );
          }
          return false;
        });
        if (activeSection) {
          setActive(activeSection.path);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="Logo" class="w-16 h-auto max-w-full" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center relative">
          <nav className="relative">
            <ul className="flex space-x-6 relative">
              {menu.map((item, index) => (
                <motion.li
                  key={item.name}
                  ref={(el) => (navRefs.current[item.path] = el)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {item.type === "route" ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `cursor-pointer transition duration-300 text-lg ${
                          isActive || active === item.path
                            ? "text-yellow-500 font-bold"
                            : "text-gray-600 dark:text-gray-300"
                        } hover:text-yellow-500`
                      }
                      onClick={() => setActive(item.path)}
                    >
                      {item.name}
                    </NavLink>
                  ) : isPortfolioPage ? (
                    // Use NavLink to go back to the home page
                    <NavLink
                      to="/"
                      className="cursor-pointer transition duration-300 text-lg text-gray-600 dark:text-gray-300 hover:text-yellow-500"
                      onClick={() => setActive(item.path)}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    // Use react-scroll on the home page
                    <ScrollLink
                      to={item.path}
                      smooth={true}
                      duration={500}
                      offset={-50}
                      onClick={() => setActive(item.path)}
                      className={`cursor-pointer transition duration-300 text-lg ${
                        active === item.path
                          ? "text-yellow-500 font-bold"
                          : "text-gray-600 dark:text-gray-300"
                      } hover:text-yellow-500`}
                    >
                      {item.name}
                    </ScrollLink>
                  )}
                </motion.li>
              ))}
              {/* Underline Animation */}
              <motion.span
                className="absolute bottom-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded fire-underline"
                style={{
                  ...underlineStyle,
                  position: "absolute",
                  height: "3px",
                  borderRadius: "4px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-6 text-2xl dark:text-yellow-400 hover:text-yellow-400 transition cursor-pointer"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-2xl hover:text-yellow-500 transition"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-500 transition"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900"
        >
          <ul className="flex flex-col text-center">
            {menu.map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * menu.indexOf(item) }}
              >
                {item.type === "route" ? (
                  <NavLink
                    to={item.path}
                    className="block py-3 px-6 text-lg text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition"
                    onClick={() => {
                      setActive(item.path);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                ) : isPortfolioPage ? (
                  <NavLink
                    to="/"
                    className="block py-3 px-6 text-lg text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition"
                    onClick={() => {
                      setActive(item.path);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => {
                      setActive(item.path);
                      setIsOpen(false);
                    }}
                    className="block py-3 px-6 text-lg text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
