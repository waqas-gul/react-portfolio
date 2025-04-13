import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For detecting when elements are in view
import { IoDiamond } from "react-icons/io5";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
} from "react-icons/si";

const titles = [
  "I am MERN Stack Developer",
  "I am Frontend Specialist",
  "I am Web Designer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animation controls for left and right sections
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  // Detect when the left and right sections are in view
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    }
    if (inViewRight) {
      controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    }
  }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

  useEffect(() => {
    const currentTitle = titles[index];

    if (isDeleting) {
      // Deleting text
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      // Typing text
      if (charIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + currentTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        // Wait for a moment before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, index, isDeleting]);

  return (
    <section className="flex flex-col lg:h-[80vh] md:h-[50vh] sm:flex-row items-center py-16  justify-between px-10 lg:px-20 lg:py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white ">
      {/* Left Side - Content */}
      <motion.div
        ref={refLeft}
        initial={{ x: -400, opacity: 0 }} // Start off-screen to the left
        animate={controlsLeft} // Animate when in view
        className="w-full md:w-1/2 text-left space-y-4 py-8"
      >
        <h1 className="text-4xl font-bold font-sans text-left">
          ✌️ Hello! I'm{" "}
          <span className="bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent filter drop-shadow-lg">
            Engr Waqas Gul
          </span>
        </h1>

        {/* Typing Animation */}
        <motion.h2
          className="text-2xl font-semibold font-mono text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
          <span className="animate-blink font-mono">|</span>{" "}
          {/* Blinking Cursor */}
        </motion.h2>

        <p className="text-lg font-mono">
          With{" "}
          <span className="bg-gray-200 text-yellow-400 font-bold shadow-lg dark:bg-gray-800 px-2 py-1 rounded">
            3+ Years
          </span>{" "}
          of Experience
        </p>
        <div className="flex gap-4 font-mono py-2">
          <a
            href="/CV_waqasi.pdf"
            download="Waqas_Gul_Resume.pdf"
            className="flex cursor-pointer hover:shadow-yellow-500 items-center gap-2 px-6 py-2 bg-yellow-400 rounded-lg relative overflow-hidden ease-in-out shadow-yellow-500 hover:bg-yellow-500 active:scale-95 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group hover:rotate-12"
          >
            <FaDownload className="font-sans animate-bounce text-gray-700 transition-all duration-300 ease-in-out group-hover:translate-y-1" />
            Resume
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=waqasgul369@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 shadow-md shadow-orange-400 px-6 py-2 border cursor-pointer border-yellow-400 text-yellow-400 font-bold rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 font-sans to-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] hover:scale-105 hover:rotate-12"
          >
            Hire Me
            <IoDiamond className="font-sans animate-bounce dark:text-white text-gray-800 transition-all duration-300 ease-in-out group-hover:translate-y-1" />
          </a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image & Floating Icons */}
      <motion.div
        ref={refRight}
        initial={{ x: 400, opacity: 0 }} // Start off-screen to the right
        animate={controlsRight} // Animate when in view
        className="w-full md:w-1/2 flex flex-col items-center font-mono relative mt-4 lg:mt-10 md:mt-0"
      >
        <img
          src="waqas.png"
          alt="Waqas Gul"
          className="w-64 bg-gray-200 h-64 dark:bg-gray-900 rounded-full border-2 cursor-pointer border-yellow-400 object-cover transition-transform duration-300 hover:scale-110 shadow-[0_0_70px_rgba(255,215,0,0.6)]"
        />

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-0 lg:left-10 -left-3  shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <SiMongodb className="text-2xl text-green-500" /> MongoDB
        </motion.div>

        <motion.div
          className="absolute top-16 lg:left-0 -left-10 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        >
          <SiExpress className="text-2xl text-gray-500" /> Express.js
        </motion.div>

        <motion.div
          className="absolute bottom-16 lg:left-0 -left-5 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
        >
          <SiReact className="text-2xl text-blue-500" /> ReactJS
        </motion.div>

        <motion.div
          className="absolute bottom-0 lg:left-10 -left-2 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
        >
          <SiNodedotjs className="text-2xl text-green-600" /> Node.js
        </motion.div>

        {/* Other Technologies */}
        <motion.div
          className="absolute top-0 lg:right-10 -right-5 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <SiNextdotjs className="text-2xl" /> Next.js
        </motion.div>

        <motion.div
          className="absolute top-16 lg:right-0 -right-6 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        >
          <SiRedux className="text-2xl text-purple-500" /> Redux
        </motion.div>

        <motion.div
          className="absolute bottom-16 lg:right-0 -right-8 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
        >
          <SiTailwindcss className="text-2xl text-blue-400" /> Tailwind CSS
        </motion.div>

        <motion.div
          className="absolute bottom-0 lg:right-10 -right-5 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
        >
          <SiJavascript className="text-2xl text-yellow-400" /> JavaScript
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
