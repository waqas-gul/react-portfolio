import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { projects, categories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ALL = "All";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function ProjectsPage() {
  const [active, setActive] = useState(ALL);
  const prefersReducedMotion = useReducedMotion();

  // Only offer filters that actually match something.
  const usedCategories = useMemo(
    () => [ALL, ...categories.filter((c) => projects.some((p) => p.category === c))],
    []
  );

  const visible = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="projects-section relative overflow-hidden px-6 pb-24 pt-32 sm:px-8">
      <div aria-hidden="true" className="projects-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="projects-eyebrow">
            <HiOutlineSquares2X2 className="text-[15px]" aria-hidden="true" />
            Archive
          </span>
          <h1 className="projects-title mt-4">
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="projects-subtitle mx-auto mt-4 max-w-xl">
            Everything I&apos;ve built and shipped, from client work to things I
            made to learn something new.
          </p>
        </motion.div>

        {/* Category filters */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {usedCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`projects-filter ${isActive ? "projects-filter--active" : ""}`}
              >
                {isActive && !prefersReducedMotion && (
                  <motion.span
                    layoutId="projects-filter-pill"
                    className="projects-filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Grid — layout animation reflows rather than snapping */}
        <motion.div
          layout={!prefersReducedMotion}
          variants={gridContainer}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                layout={!prefersReducedMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="projects-page-info mt-12 text-center">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
