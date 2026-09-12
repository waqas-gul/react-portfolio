import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineSquares2X2, HiOutlineArrowRight } from "react-icons/hi2";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <div className="projects-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      <div aria-hidden="true" className="projects-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
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
              Featured Work
            </span>
          </h2>
          <p className="projects-subtitle mx-auto mt-4 max-w-xl">
            Selected work built with modern technologies, clean interfaces, and
            practical user-focused solutions.
          </p>
        </motion.div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link to="/projects" className="projects-view-all group/all">
            <span>View All Projects</span>
            <HiOutlineArrowRight
              className="text-[17px] transition-transform duration-300 group-hover/all:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
