import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ResumeCard() {
  // Animation controls for the title and content
  const controlsTitle = useAnimation();
  const controlsContent = useAnimation();

  // Detect when the title and content are in view
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refContent, inViewContent] = useInView({ triggerOnce: true });

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0 });
    }
    if (inViewContent) {
      controlsContent.start({ opacity: 1, y: 0 });
    }
  }, [controlsTitle, controlsContent, inViewTitle, inViewContent]);

  return (
    <div className="flex justify-center items-center py-16 bg-white dark:bg-gray-900 p-4 border-b border-yellow-500">
      <div className="max-w-4xl w-full p-6 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-2xl text-center relative shadow-gray-500">
        {/* Title */}
        <motion.h2
          ref={refTitle}
          initial={{ opacity: 0, y: -60 }}
          animate={controlsTitle}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-gray-600 dark:text-white font-sans mb-4"
        >
          Checkout my{" "}
          <span className="bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* Content */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 150 }}
          animate={controlsContent}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src="/waqas.png"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-2xl shadow-yellow-500"
          />
          <h3 className="mt-3 mb-2 text-xl font-semibold text-gray-700 dark:text-white font-mono">
            Engr WAQAS GULL
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
            MERN Stack Developer / Modern Web Application Developer
          </p>
          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/CV_waqasi.pdf"
              download="Waqas_Gul_Resume.pdf"
              className="flex cursor-pointer hover:shadow-yellow-500 items-center gap-2 lg:px-6 px-3 py-2 bg-yellow-400 rounded-lg relative overflow-hidden ease-in-out hover:bg-yellow-500 active:scale-95 font-mono bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group hover:rotate-12"
            >
              <FaDownload className="font-sans text-gray-700 animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/waqas-gul-b7580826b/"
              target="_blank"
              className="flex items-center gap-2 dark:bg-gray-700 bg-gray-200 px-4 hover:bg-gray-600 shadow-md shadow-orange-400 py-2 border cursor-pointer font-mono border-yellow-400 text-yellow-400 font-bold rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] hover:scale-105 hover:rotate-6"
            >
              <LuMessageCircleHeart className="font-sans text-gray-700 dark:text-white text-xl animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
              Discuss Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
