import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAddAPhoto } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaLaptopCode,
  FaGlobe,
  FaCertificate,
} from "react-icons/fa";
import { FaJs, FaReact, FaBootstrap, FaFigma, FaSass } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import {
  SiAdobexd,
  SiRedux,
  SiStyledcomponents,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
  SiSemanticui,
  SiTailwindcss,
} from "react-icons/si";
import { DiJqueryUiLogo } from "react-icons/di";
import { PiNotebookLight } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const certificates = [
  {
    platform: "Udemy",
    icon: <SiCoursera className="text-blue-600 text-3xl" />,
    title: "Advanced React.js ,Hooks etc",
    link: "#",
  },
  {
    platform: "Udemy",
    icon: <SiUdemy className="text-red-500 text-3xl" />,
    title: "The Complete JavaScript Course 2020: From Zero to Expert!",
    link: "#",
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600 text-3xl" />,
    title: "Next.js Essential Training",
    link: "#",
  },
  {
    platform: "Other",
    icon: <PiNotebookLight className="text-blue-500 text-3xl" />,
    title: "Understanding Redux: A Beginner’s Guide To State Management",
    link: "#",
  },
];

const skills = [
  { icon: <FaJs className="text-yellow-500 text-2xl" />, name: "JavaScript" },
  {
    icon: <DiJqueryUiLogo className="text-blue-500 text-2xl" />,
    name: "jQuery",
  },
  { icon: <FaSass className="text-pink-400 text-2xl" />, name: "Sass" },
  {
    icon: <FaBootstrap className="text-indigo-600 text-2xl" />,
    name: "Bootstrap",
  },
  { icon: <FaReact className="text-blue-400 text-2xl" />, name: "React" },
  { icon: <SiRedux className="text-purple-600 text-2xl" />, name: "Redux" },
  {
    icon: <SiExpress className="text-yellow-500 text-2xl" />,
    name: "Express JS",
  },
  {
    icon: <IoLogoNodejs className="text-green-500 text-2xl" />,
    name: "Node JS",
  },
  { icon: <SiMongodb className="text-green-600 text-2xl" />, name: "MongoDb" },
  {
    icon: <SiStyledcomponents className="text-yellow-400 text-2xl" />,
    name: "Styled Components",
  },
  { icon: <SiNextdotjs className="text-black text-2xl" />, name: "Next.js" },
  { icon: <SiGraphql className="text-pink-600 text-2xl" />, name: "GraphQL" },
  {
    icon: <SiFirebase className="text-yellow-500 text-2xl" />,
    name: "Firebase",
  },
  {
    icon: <GiMaterialsScience className="text-blue-500 text-2xl" />,
    name: "Material UI",
  },
  {
    icon: <SiSemanticui className="text-green-500 text-2xl" />,
    name: "Semantic UI",
  },
  {
    icon: <SiTailwindcss className="text-teal-500 text-2xl" />,
    name: "Tailwind CSS",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen py-16 px-28 bg-white  dark:bg-gray-900  dark:text-white">
      <div className="container mx-auto border-2 border-gray-300 dark:border-gray-700 rounded-lg p-8 bg-gray-200 dark:bg-gray-800 mt-16">
        {/* Header Section */}
        <header className="flex gap-20 flex-col md:flex-row items-center md:items-start mb-8 border-b-2 pb-4 border-gray-300 dark:border-gray-700">
          {/* Image on the left */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-1 border-yellow-500 shadow-lg shadow-yellow-500 overflow-hidden md:mr-8 bg-gray-300">
            <img
              src="/waqas.png" // Replace with your image URL
              alt="Waqas Gul"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side: Name and Details */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              WAQAS GUL
            </h1>
            <p className="text-xl font-mono mt-2 text-gray-700 dark:text-gray-300">
              MERN Stack Developer / WEB DESIGNER
            </p>

            {/* Links arranged in a 2x2 Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/waqas-gul-b7580826b/"
                className="inline-flex items-center gap-2 font-mono w-fit px-3 py-2 rounded-md shadow-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <FaLinkedin className="text-2xl text-blue-700" />
                www.linkedin.com/in/waqas-gul/
              </a>
              <a
                target="_blank"
                href="https://github.com/waqas-gul/"
                className="inline-flex items-center gap-2 w-fit px-3 py-2 rounded-md shadow-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
                github.com/waqas-gul/
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/WAQASI.369/"
                className="inline-flex items-center gap-2 rounded-md shadow-md w-fit px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <FaFacebookSquare className="text-2xl text-blue-600" />
                www.facebook.com/WAQASI.369/
              </a>
              <a
                href="https://wa.me/923488446186"
                className="inline-flex items-center rounded-md shadow-md gap-2 w-fit px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareWhatsapp className="text-2xl text-green-500" />
                +92 3488446186
              </a>
            </div>
          </div>
        </header>

        {/* Rest of the content remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-8">
          {/* Left Column */}
          <div className="border-r-2 border-gray-300 dark:border-gray-700 pr-6">
            <section className="mb-8 border-b-2 border-gray-300 dark:border-gray-700 pb-8">
              <h2 className="text-2xl font-bold mb-7 flex items-center gap-4 font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                <ImProfile className="text-gray-600 dark:text-gray-400" />{" "}
                PROFILE
              </h2>
              <p className="font-sans text-gray-700 dark:text-gray-300 mb-8">
                I’m Waqas Gull, a MERN Stack Developer from Pakistan. I hold a
                Bachelor's degree in Software Engineering from the University of
                Malakand. With 3 years of experience, I specialize in designing,
                building, and maintaining scalable web applications. Proficient
                in React.js, Next.js, Node.js, Express.js, MongoDB, Redux,
                Tailwind CSS, and Material UI.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="https://wa.me/923488446186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-md shadow-md mb-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition p-2 cursor-pointer"
                >
                  <FaPhone className="ml-4 text-green-600" /> +91 7096490307
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=waqasgul369@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  className="flex items-center gap-5 mb-3 rounded-md shadow-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition p-2 cursor-pointer"
                >
                  <FaEnvelope className="ml-4 text-red-600" />{" "}
                  waqasgul369@gmail.com
                </a>
                <p className="flex items-center gap-5 shadow-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition rounded-md p-2 cursor-pointer">
                  <FaLocationDot className="ml-4 text-blue-600" /> Pakistan,
                  Islamabad
                </p>
              </div>
            </section>

            <section className="mb-8 border-b-2 border-gray-300 dark:border-gray-700 pb-8">
              <h2 className="text-2xl font-bold gap-4 mb-7 flex items-center font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                <FaGraduationCap className="text-gray-600 dark:text-gray-400" />{" "}
                EDUCATION
              </h2>
              <div className="space-y-4">
                <div className="font-sans text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 inline-flex px-2 py-1 rounded-md shadow-md mb-2">
                    2019 – 2021
                  </p>
                  <p className="font-semibold font-2xl">
                    FSc (Free Engineering){" "}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Govt Degree College GulAbad, KPK, Pakistan{" "}
                  </p>
                </div>
                <div className="font-sans text-gray-700 dark:text-gray-300">
                  <p className="font-bold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 inline-flex px-2 py-1 rounded-md shadow-md mb-2">
                    2021 – 2025
                  </p>
                  <p className="font-semibold font-2xl">
                    Bachelor of Software Engineering{" "}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {" "}
                    University of Malakand, KPK, Pakistan
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8 border-b-2 border-gray-300 dark:border-gray-700 pb-8">
              <h2 className="text-2xl font-bold flex gap-4 mb-7 items-center font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                <FaGlobe className="text-gray-700 dark:text-gray-400" />{" "}
                LANGUAGES
              </h2>
              <div className="flex gap-4">
                <p className="px-2 py-1 bg-gray-100 dark:bg-gray-700 font-sans rounded-md shadow-md text-gray-800 dark:text-gray-200 font-semibold">
                  English{" "}
                </p>{" "}
                <p className="px-2 py-1 bg-gray-100 dark:bg-gray-700 font-sans rounded-md shadow-md text-gray-800 dark:text-gray-200 font-semibold">
                  Urdu
                </p>{" "}
                <p className="px-2 py-1 bg-gray-100 dark:bg-gray-700 font-sans rounded-md shadow-md text-gray-800 dark:text-gray-200 font-semibold">
                  Pashto
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-7 flex items-center gap-2 font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                <FaHandHoldingHeart className="text-gray-600 dark:text-gray-400" />{" "}
                HOBBIES
              </h2>
              <div className="flex flex-wrap gap-4 font-mono">
                <p className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-md">
                  <GiCommercialAirplane className="text-xl text-yellow-500" />
                  Traveling
                </p>
                <p className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-md">
                  <MdAddAPhoto className="text-xl text-green-500" />
                  Photography
                </p>
                <p className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-md">
                  <FaCode className="text-xl text-blue-500" />
                  Competitive Coding
                </p>

                <p className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-md">
                  <GrTechnology className="text-xl text-purple-500" />
                  Learning New Technologies
                </p>
                <p className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-md">
                  <IoGameController className="text-xl text-red-500" />
                  Gaming
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <div className="gap-8 mb-8 mr-6">
              <section className="">
                <h2 className="text-2xl font-bold flex items-center gap-4 mb-1 font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  <FaLaptopCode className="text-gray-600 dark:text-gray-400 text-3xl" />{" "}
                  MY PROJECTS
                </h2>
                <div className="space-y-4 font-sans border-l-2 border-b-2 border-gray-300 dark:border-gray-700 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-[30%_70%] border-b-2 ml-4 border-gray-300 dark:border-gray-700 pb-2">
                    <div className="flex items-center justify-center flex-col gap-10">
                      <p className="flex gap-3 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 py-2 px-8 w-fit rounded-md shadow-md font-semibold">
                        <BsBuildingsFill className="text-red-950 text-xl" />
                        ITSolera
                      </p>
                    </div>
                    <div className="mr-10">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 font-sans my-3">
                          ITSolera Software Company{" "}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 rounded-md shadow-md px-5 py-1">
                          2025
                        </p>
                      </div>
                      <div className="font-sans text-gray-600 dark:text-gray-400 mb-1">
                        Developed a responsive website for Itsolera Software
                        using React and Tailwind CSS, ensuring performance and a
                        seamless user experience.
                      </div>
                      <div className="flex items-center justify-between font-mono text-gray-700 dark:text-gray-300">
                        <a
                          href="https://itsolera.com/"
                          target="_blank"
                          className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          link
                        </a>
                        <a
                          href="https://itsolera.com/"
                          target="_blank"
                          className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          https://itsolera.com/
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[30%_70%] border-b-2 ml-4 border-gray-300 dark:border-gray-700 pb-2">
                    <div className="flex items-center justify-center flex-col gap-10">
                      <p className="flex gap-3 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 py-1 px-8 w-fit rounded-md shadow-md font-semibold">
                        <BsBuildingsFill className="text-red-950 text-xl" />
                        Shadesco
                      </p>
                    </div>
                    <div className="mr-10">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 font-sans my-1">
                          Shadesco Cleaning Company
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 rounded-md shadow-md px-5 py-1">
                          2025
                        </p>
                      </div>
                      <div className="font-sans text-gray-600 dark:text-gray-400 mb-2">
                        Developed a responsive website for Shadesco Cleaning
                        Company in Dubai using JavaScript and Bootstrap,
                        ensuring performance and a seamless user experience.
                      </div>
                      <div className="flex items-center justify-between font-mono text-gray-700 dark:text-gray-300">
                        <a
                          href="https://shadesco.ae/"
                          target="_blank"
                          className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          link
                        </a>
                        <a
                          href="https://shadesco.ae/"
                          target="_blank"
                          className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          https://shadesco.ae/
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[30%_70%] ml-4 pb-2">
                    <div className="flex items-center justify-center flex-col gap-10">
                      <p className="flex gap-3 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 py-1 px-8 w-fit rounded-md shadow-md font-semibold">
                        <BsBuildingsFill className="text-red-950 text-xl" />
                        ITSolera
                      </p>
                    </div>
                    <div className="mr-10">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 font-sans my-1">
                          ITSolera Software Company{" "}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 rounded-md shadow-md px-5 py-1">
                          2025
                        </p>
                      </div>
                      <div className="font-sans text-gray-600 dark:text-gray-400 mb-2">
                        Developed an LMS for Itsolera Software using the MERN
                        stack, Tailwind CSS, ShadCN UI, and Cloudinary, ensuring
                        scalability and a modern user experience.
                      </div>
                      <div className="flex items-center justify-between font-mono text-gray-700 dark:text-gray-300">
                        <a
                          href="#"
                          target="_blank"
                          className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          link
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          pending
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold my-2 flex items-center gap-2 font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  <FaCode className="text-gray-600 dark:text-gray-400" />{" "}
                  EXPERIENCE
                </h2>
                <div className="border-l-2 border-b-2 border-gray-300 dark:border-gray-700 rounded-md">
                  <div className="space-y-4 grid grid-cols-[35%_65%] mr-10 border-b-2 ml-4 border-gray-300 dark:border-gray-700 pb-3">
                    <div className="flex items-center justify-center">
                      <p className="text-gray-800 dark:text-gray-200 font-bold bg-gray-100 dark:bg-gray-700 font-sans flex items-center justify-center gap-3 py-2 px-6 rounded-md shadow-md w-fit">
                        <AiFillExperiment className="text-blue-500 text-xl" />
                        ITSolera
                      </p>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold flex text-gray-800 dark:text-gray-200 font-sans">
                          MERN Stack DEVELOPER{" "}
                          <p className="text-gray-400"> (intern)</p>
                        </p>
                        <p className="px-2 py-1 font-mono text-gray-600 dark:text-gray-400 rounded-md shadow-md bg-gray-100 dark:bg-gray-700">
                          FB 2023 - AUG 2023
                        </p>
                      </div>

                      <p className="font-sans text-gray-600 dark:text-gray-400">
                        Integrated modules in a MERN stack system, enhancing
                        functionality, performance, and scalability.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 grid grid-cols-[35%_65%] mr-10 py-3 border-b-2 ml-4 border-gray-300 dark:border-gray-700">
                    <div className="flex items-center justify-center">
                      <p className="text-gray-800 dark:text-gray-200 font-bold bg-gray-100 dark:bg-gray-700 font-sans flex items-center justify-center gap-2 py-2 px-2 rounded-md shadow-md w-fit">
                        <AiFillExperiment className="text-blue-500 text-xl" />
                        Markit Brains
                      </p>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold flex text-gray-800 dark:text-gray-200 font-sans">
                          Back End DEVELOPER{" "}
                          <p className="text-gray-400"> (intern)</p>
                        </p>
                        <p className="px-2 py-1 font-mono text-gray-600 dark:text-gray-400 rounded-md shadow-md bg-gray-100 dark:bg-gray-700">
                          MAY 2024 - AUG 2024
                        </p>
                      </div>

                      <p className="font-sans text-gray-600 dark:text-gray-400">
                        Developed and optimized backend systems, ensuring
                        efficient data processing, API integration, and system
                        scalability.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 grid grid-cols-[35%_65%] mr-10 py-3 ml-4">
                    <div className="flex items-center justify-center">
                      <p className="text-gray-800 dark:text-gray-200 font-bold bg-gray-100 dark:bg-gray-700 font-sans flex items-center justify-center gap-3 py-2 px-6 rounded-md shadow-md w-fit">
                        <AiFillExperiment className="text-blue-500 text-xl" />
                        ITSolera
                      </p>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold flex text-gray-800 dark:text-gray-200 font-sans">
                          MERN Stack DEVELOPER{" "}
                          <p className="text-gray-400"> (employee)</p>
                        </p>
                        <p className="px-1 py-1 font-mono text-gray-600 dark:text-gray-400 rounded-md shadow-md bg-gray-100 dark:bg-gray-700">
                          Jan 2025 - Present
                        </p>
                      </div>

                      <p className="font-sans text-gray-600 dark:text-gray-400">
                        Worked on a MERN stack-based system, gaining experience
                        in backend and frontend development, API integration,
                        database management, and performance optimization
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  <FaCode className="text-gray-600 dark:text-gray-400" /> SKILLS
                </h2>
                <div className="w-fit mx-auto">
                  <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 w-fit bg-gray-100 dark:bg-gray-700 p-2 rounded-lg shadow-sm"
                      >
                        {skill.icon}
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-4 font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  <FaCertificate className="text-gray-600 dark:text-gray-400" />{" "}
                  CERTIFICATES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
                  {certificates.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        {cert.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600">
                        {cert.title}
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
