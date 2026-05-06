import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineSquares2X2,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { SiNextdotjs, SiRedux, SiJavascript } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBootstrap, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoFigma, IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb, SiCloudinary, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

// Project data — preserved exactly as before
const projects = [
  {
    name: "ITSolera (Sofyware Company.)",
    image: "/itsolera.png",
    Glink: "https://github.com/waqas-gul/itsolera",
    Wlink: "https://itsolera.com/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <SiExpress className="text-slate-200" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-emerald-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-emerald-600" />, name: "MongoDB" },
      { icon: <SiRedux className="text-violet-400" />, name: "Redux" },
      { icon: <GiMaterialsScience className="text-blue-400" />, name: "Material UI" },
      { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwindcss" },
      { icon: <SiJavascript className="text-amber-300" />, name: "JavaScript" },
    ],
  },
  {
    name: "foodlakay (Cleaning Company)",
    image: "/lidialakay.png",
    Glink: "https://github.com/waqas-gul/foodlakay",
    Wlink: "https://lidialakay.fr/fr",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <SiNextdotjs className="text-slate-100" />, name: "Next Js" },
      { icon: <BiLogoPostgresql className="text-sky-400" />, name: "Postgresql" },
      { icon: <SiRedux className="text-violet-400" />, name: "Redux" },
      { icon: <RiTailwindCssFill className="text-sky-400" />, name: "TailwindCss" },
      { icon: <SiJavascript className="text-amber-300" />, name: "JavaScript" },
    ],
  },
  {
    name: "Zaroori Zameen (real estate property listing and searching platform)",
    image: "/real.png",
    Glink: "https://github.com/waqas-gul/foodlakay",
    Wlink: "https://lidialakay.fr/fr",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <SiExpress className="text-slate-200" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-emerald-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-emerald-600" />, name: "MongoDB" },
      { icon: <SiRedux className="text-violet-400" />, name: "Redux" },
      { icon: <GiMaterialsScience className="text-blue-400" />, name: "Material UI" },
      { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwindcss" },
      { icon: <SiJavascript className="text-amber-300" />, name: "JavaScript" },
    ],
  },
  {
    name: "FlowAdmin React - Free Tailwind Admin Dashboard",
    image: "/dashboard.png",
    Glink: "https://github.com/waqas-gul/react-tailwind-admin-dashboard-main",
    Wlink: "https://68b5af81d6dac40637705bfe--flowadmin1.netlify.app/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <SiRedux className="text-violet-400" />, name: "Redux" },
      { icon: <GiMaterialsScience className="text-blue-400" />, name: "Material UI" },
      { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwindcss" },
      { icon: <SiTypescript className="text-sky-400" />, name: "typeScript" },
    ],
  },
  {
    name: "Shadesco",
    image: "/shadesco.ae_.png",
    Glink: "https://github.com/waqas-gul/cleaning-company-website",
    Wlink: "https://shadesco.ae/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaBootstrap className="text-violet-500" />, name: "Bootstrap" },
      { icon: <SiJavascript className="text-amber-300" />, name: "JavaScript" },
    ],
  },
  {
    name: "SportsBuzz",
    image: "/lms.png",
    Wlink: "https://sportsbuzz.com",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <SiExpress className="text-slate-200" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-emerald-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-emerald-600" />, name: "MongoDB" },
      { icon: <SiRedux className="text-violet-400" />, name: "Redux" },
      { icon: <SiCloudinary className="text-sky-400" />, name: "Cloudinary" },
      { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwindcss" },
      { icon: <SiJavascript className="text-amber-300" />, name: "JavaScript" },
    ],
  },
];

// Stagger variants
const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const startIndex = page * itemsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="projects-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="projects-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="projects-eyebrow">
            <HiOutlineSquares2X2 className="text-[15px]" aria-hidden="true" />
            Projects
          </span>
          <h2 className="projects-title mt-4">
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="projects-subtitle mx-auto mt-4 max-w-xl">
            Selected work built with modern technologies, clean interfaces, and
            practical user-focused solutions.
          </p>
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={gridContainer}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {displayedProjects.map((project, idx) => {
              const visibleTechs = project.technologies.slice(0, 4);
              const extraCount = project.technologies.length - visibleTechs.length;
              return (
                <motion.article
                  key={`${page}-${idx}-${project.name}`}
                  variants={cardVariants}
                  className="project-card group"
                >
                  {/* Image */}
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="project-image"
                    />
                    <div aria-hidden="true" className="project-image-overlay" />
                  </div>

                  {/* Body */}
                  <div className="project-body">
                    <h3 className="project-title">{project.name}</h3>

                    {/* Tags */}
                    <ul className="project-tags">
                      {visibleTechs.map((tech) => (
                        <li key={tech.name} className="project-tag">
                          <span className="project-tag-icon">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </li>
                      ))}
                      {extraCount > 0 && (
                        <li className="project-tag project-tag--more">
                          +{extraCount}
                        </li>
                      )}
                    </ul>

                    {/* Actions */}
                    <div className="project-actions">
                      {project.Glink && (
                        <a
                          href={project.Glink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn-ghost"
                          aria-label={`${project.name} on GitHub`}
                        >
                          <FaGithub className="text-[15px]" aria-hidden="true" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.Wlink && (
                        <a
                          href={project.Wlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn-primary group/btn"
                          aria-label={`Visit ${project.name}`}
                        >
                          <span>Visit</span>
                          <HiOutlineArrowTopRightOnSquare
                            className="text-[15px] transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="projects-page-nav"
            aria-label="Previous page"
          >
            <HiOutlineChevronLeft className="text-[16px]" aria-hidden="true" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setPage(i)}
                className={`projects-page-btn ${
                  page === i ? "projects-page-btn--active" : ""
                }`}
                aria-label={`Go to page ${i + 1}`}
                aria-current={page === i ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="projects-page-nav"
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <HiOutlineChevronRight className="text-[16px]" aria-hidden="true" />
          </button>
        </motion.div>

        {/* Page info */}
        <p className="projects-page-info mt-6 text-center">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, projects.length)} of{" "}
          {projects.length} projects
        </p>
      </div>
    </div>
  );
}
