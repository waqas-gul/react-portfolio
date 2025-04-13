import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
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
const projects = [
  {
    name: "ITSoleraa ",
    image: "/itsolera.png",
    Glink: "https://github.com/waqas-gul/itsolera",
    Wlink: "https://itsolera.com/",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiExpress className="text-yellow-400" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-700" />, name: "React.js" },

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
    name: "Shadesco ",
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
    link: "https://sportsbuzz.com",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiExpress className="text-yellow-400" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-700" />, name: "React.js" },

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
  {
    name: "SportsBuzz",
    image: "/project.png",
    Wlink: "https://sportsbuzz.com",
    technologies: [
      { icon: <SiNextdotjs className="text-gray-900" />, name: "Next.js" },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
      {
        icon: <GiMaterialsScience className="text-blue-500" />,
        name: "Material UI",
      },
      { icon: <SiSass className="text-pink-500" />, name: "SCSS" },
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
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-200 py-16 px-10 text-center">
      <h2 className="text-4xl flex items-center justify-center gap-3 font-extrabold font-sans mb-8 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        <GrSystem className="text-orange-500 font-extrabold text-4xl font-mono animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
        Projects
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className=" text-white w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-yellow-500 shadow-gray-500 "
          >
            <div className="flex flex-col md:flex-row items-center w-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-1/3 rounded-lg shadow-md object-cover max-h-64"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-2xl font-bold text-yellow-500 font-sans">
                    {project.name}
                  </h3>
                  <FaInfoCircle className="text-xl cursor-pointer text-gray-400 dark:text-gray-200 hover:text-yellow-400" />
                </div>
                <p className="mt-2 text-sm opacity-80 font-mono">Website</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex font-mono items-center gap-2 px-3 py-1 my-0.5 bg-gray-300 dark:bg-gray-600 text-white rounded-full text-xs font-semibold shadow-md  shadow-gray-400"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.Glink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex lg:text-base text-[.6rem] items-center lg:px-4 px-2   cursor-pointer  gap-2  py-2 bg-yellow-400  rounded-lg relative overflow-hidden  ease-in-out 
         hover:bg-yellow-500  font-mono shadow-lg hover:shadow-amber-500  active:scale-95  bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold    hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group hover:rotate-6"
                  >
                    <FaGithubSquare className="font-bold lg:text-2xl text-xl text-gray-800 animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1 " />
                    Go to Github
                  </a>
                  <a
                    href={project.Wlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 lg:text-base text-[.6rem] inline-flex items-center lg:px-4 px-2 py-2 bg-transparent hover:bg-gray-700  shadow-md shadow-orange-400 border  cursor-pointer  border-yellow-400 text-yellow-400 font-bold rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out 
  hover:bg-gradient-to-r from-yellow-500 font-sans to-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] hover:scale-105 hover:rotate-6"
                  >
                    Go to {project.name}{" "}
                    <FaLocationArrow className="lg:ml-2 ml-1 text-xl text-gray-400  animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className=" mt-10  flex justify-center space-x-3">
        {Array.from(
          { length: Math.ceil(projects.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`px-4 py-2 rounded-full ${
                page === index
                  ? "bg-gradient-to-t from-yellow-500 to-orange-500   text-black"
                  : "dark:bg-gray-600 bg-gray-400 text-white"
              } hover:bg-gradient-to-t from-yellow-500 to-orange-500 transition`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
