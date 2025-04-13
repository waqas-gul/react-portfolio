import { useState, useEffect } from "react";
import { SiUdemy } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { SiCoursera } from "react-icons/si";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FiLinkedin } from "react-icons/fi";
import { SiEducative } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Export the certificates array
export const certificates = [
  {
    platform: "Udemy",
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    icon1: <TbCertificate className="text-yellow-700 text-4xl font-bold" />,
    icon2: <SiUdemy className="text-purple-500 text-5xl p-2 font-bold" />,
    link: "#",
    image: "/project.png",
  },
  {
    platform: "Udemy",
    title: "The Complete JavaScript Course 2020: From Zero to Expert!",
    icon1: <TbCertificate className="text-yellow-700 text-4xl font-bold" />,
    icon2: <SiUdemy className="text-purple-500 text-5xl p-2 font-bold" />,
    link: "#",
    image: "/project.png",
  },
  {
    platform: "Coursera",
    title: "Google UX Design",
    icon1: <TbCertificate className="text-yellow-700 text-4xl font-bold" />,
    icon2: <SiCoursera className="text-blue-600 text-5xl p-2 font-bold" />,
    link: "#",
    image: "/project.png",
  },
  {
    platform: "FreeCodeCamp",
    title: "Front End Libraries",
    icon1: <TbCertificate className="text-yellow-700 text-4xl font-bold" />,
    icon2: (
      <LiaFreeCodeCamp className="text-green-500 text-5xl p-2 font-bold" />
    ),
    link: "#",
    image: "/project.png",
  },
  {
    platform: "LinkedIn",
    title: "React.js Essential Training",
    icon1: <TbCertificate className="text-yellow-700 text-4xl font-bold" />,
    icon2: <FiLinkedin className="text-blue-700 text-4xl p-2 font-bold" />,
    link: "#",
    image: "/project.png",
  },
  {
    platform: "Educative",
    title: "Understanding Redux: A Beginner’s Guide To State Management",
    icon1: <TbCertificate className="text-yellow-700 text-4xl font-bold" />,
    icon2: <SiEducative className="text-red-500 text-4xl p-2 font-bold" />,
    link: "#",
    image: "/project.png",
  },
];

export default function Certificates() {
  const controlsTitle = useAnimation();
  const controlsCards = useAnimation();

  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refCards, inViewCards] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0 });
    }
    if (inViewCards) {
      controlsCards.start({ opacity: 1, y: 0 });
    }
  }, [controlsTitle, controlsCards, inViewTitle, inViewCards]);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-gray-200 dark:bg-gray-900">
      {/* Title */}
      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, y: -60 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
        className="text-4xl flex gap-3 items-center justify-center font-extrabold font-sans mb-8 bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent"
      >
        <FaMedal className="text-orange-500 font-extrabold text-4xl animate-bounce font-mono transition-all duration-300 ease-in-out group-hover:translate-y-1" />
        Certificates
      </motion.h2>

      {/* Grid Layout */}
      <motion.div
        ref={refCards}
        initial={{ opacity: 0, y: 150 }}
        animate={controlsCards}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-6"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-5 dark:bg-gray-800 bg-white rounded-2xl hover:shadow-yellow-500 shadow-lg flex flex-col relative hover:scale-105 transition-transform duration-300 ease-in-out shadow-gray-500"
          >
            {/* Platform Image and Badge */}
            <div className="flex items-center justify-between">
              <div className="w-full flex items-center space-x-4 justify-between">
                <span className="flex items-center justify-center px-5 text-sm font-bold bg-gray-300 dark:bg-gray-700 dark:text-yellow-400 text-gray-700 rounded-full">
                  {cert.icon2}
                  <p className="font-bold font-sans text-base">
                    {cert.platform}
                  </p>
                </span>
                <p className="w-12 h-12 object-contain px-5 rounded-md">
                  {cert.icon1}
                </p>
              </div>
            </div>

            {/* Certificate Title */}
            <p className="mt-3 text-lg font-mono font-semibold text-gray-600 dark:text-gray-400">
              {cert.title}
            </p>

            {/* Spacer to push the button to the bottom */}
            <div className="flex-grow"></div>

            {/* View Button */}
            <Link
              to={`/certificate/${index}`} // Pass the certificate index as a URL parameter
              className="mt-4 px-4 py-2 font-mono flex items-center justify-center gap-3 bg-gray-200 dark:bg-gray-600 dark:text-white text-center font-medium shadow-sm hover:shadow-yellow-500 rounded-full text-orange-500 self-start hover:bg-gray-300 hover:scale-110 hover:rotate-12 dark:hover:bg-gray-500 transition-colors duration-500 ease-in-out "
            >
              <FaEye className="dark:text-gray-200" /> View
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
