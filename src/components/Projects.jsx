import { useState } from "react";
import { GrSystem } from "react-icons/gr";
import { GiMaterialsScience } from "react-icons/gi";
import { SiNextdotjs, SiRedux, SiSass, SiJavascript } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
const projects = [
  {
    name: "ITSolera (Sofyware Company.)",
    image: "/itsolera.png",
    Glink: "https://github.com/waqas-gul/itsolera",
    Wlink: "https://itsolera.com/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiExpress className="text-yellow-400" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
      {
        icon: <GiMaterialsScience className="text-blue-500" />,
        name: "Material UI",
      },
      {
        icon: <RiTailwindCssFill className="text-blue-500" />,
        name: "Tailwindcss",
      },
      {
        icon: <SiJavascript className="text-yellow-500" />,
        name: "JavaScript",
      },
    ],
  },

  {
    name: "foodlakay (Cleaning Company)",
    image: "/lidialakay.png",
    Glink: "https://github.com/waqas-gul/foodlakay",
    Wlink: "https://lidialakay.fr/fr",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <SiNextdotjs className="text-gray-900" />, name: "Next Js" },
      {
        icon: <BiLogoPostgresql className="text-green-400" />,
        name: "Postgresql",
      },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
      {
        icon: <RiTailwindCssFill className="text-blue-600" />,
        name: "TailwindCss",
      },

      {
        icon: <SiJavascript className="text-yellow-500" />,
        name: "JavaScript",
      },
    ],
  },
  {
    name: "Zaroori Zameen (real estate property listing and searching platform)",
    image: "/real.png",
    Glink: "https://github.com/waqas-gul/foodlakay",
    Wlink: "https://lidialakay.fr/fr",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiExpress className="text-yellow-400" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
      {
        icon: <GiMaterialsScience className="text-blue-500" />,
        name: "Material UI",
      },
      {
        icon: <RiTailwindCssFill className="text-blue-500" />,
        name: "Tailwindcss",
      },
      {
        icon: <SiJavascript className="text-yellow-500" />,
        name: "JavaScript",
      },
    ],
  },
  {
    name: "FlowAdmin React - Free Tailwind Admin Dashboard",
    image: "/dashboard.png",
    Glink: "https://github.com/waqas-gul/react-tailwind-admin-dashboard-main",
    Wlink: "https://68b5af81d6dac40637705bfe--flowadmin1.netlify.app/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
      {
        icon: <GiMaterialsScience className="text-blue-500" />,
        name: "Material UI",
      },
      {
        icon: <RiTailwindCssFill className="text-blue-500" />,
        name: "Tailwindcss",
      },
      {
        icon: <SiTypescript className="text-blue-500" />,
        name: "typeScript",
      },
    ],
  },
  {
    name: "Shadesco",
    image: "/shadesco.ae_.png",
    Glink: "https://github.com/waqas-gul/cleaning-company-website",
    Wlink: "https://shadesco.ae/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaHtml5 className="text-pink-500" />, name: "HTML" },
      { icon: <FaBootstrap className="text-blue-600" />, name: "Bootstrap" },
      {
        icon: <SiJavascript className="text-yellow-500" />,
        name: "JavaScript",
      },
    ],
  },

  {
    name: "SportsBuzz",
    image: "/lms.png",
    Wlink: "https://sportsbuzz.com",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiExpress className="text-yellow-400" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
      {
        icon: <SiCloudinary className="text-blue-500" />,
        name: "Cloudinary",
      },
      {
        icon: <RiTailwindCssFill className="text-blue-500" />,
        name: "Tailwindcss",
      },
      {
        icon: <SiJavascript className="text-yellow-500" />,
        name: "JavaScript",
      },
    ],
  },
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const startIndex = page * itemsPerPage;
  const displayedProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="min-h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 bg-gradient-to-b from-gray-100 to-gray-50 py-20 px-4 sm:px-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <GrSystem className="text-orange-500 text-4xl animate-pulse" />
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Projects
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Showcase of my recent projects built with modern technologies and best
          practices
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={`${page}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
          >
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.name}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 hover:shadow-md transition-shadow"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200">
                      +{project.technologies.length - 4}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.Glink && (
                    <motion.a
                      href={project.Glink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <FaGithubSquare className="text-lg" />
                      <span className="hidden sm:inline">Github</span>
                    </motion.a>
                  )}
                  {project.Wlink && (
                    <motion.a
                      href={project.Wlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                    >
                      <FaLocationArrow className="text-lg" />
                      <span className="hidden sm:inline">Visit</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-4 flex-wrap"
      >
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="px-6 py-2 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        >
          ← Previous
        </motion.button>

        {/* Page Numbers */}
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage(i)}
              className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                page === i
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          disabled={page === totalPages - 1}
          className="px-6 py-2 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        >
          Next →
        </motion.button>
      </motion.div>

      {/* Page Info */}
      <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
        <p>
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, projects.length)} of{" "}
          {projects.length} projects
        </p>
      </div>
    </div>
  );
}
