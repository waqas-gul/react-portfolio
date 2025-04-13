import { useState, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineGrade } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
  // Animation controls for the title and cards
  const controlsTitle = useAnimation();
  const controlsCards = useAnimation();

  // Detect when the title and cards are in view
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refCards, inViewCards] = useInView({ triggerOnce: true });

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0 });
    }
    if (inViewCards) {
      controlsCards.start({ opacity: 1, y: 0 });
    }
  }, [controlsTitle, controlsCards, inViewTitle, inViewCards]);

  return (
    <div className="mp-10 flex flex-col items-center justify-center py-4 bg-white dark:bg-gray-900 transition-all duration-300">
      {/* Title */}
      <motion.h1
        ref={refTitle}
        initial={{ opacity: 0, y: -60 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
        className="text-4xl bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent my-10 font-bold font-sans text-center flex items-center justify-center gap-3"
      >
        <MdCastForEducation className="text-orange-500 animate-bounce font-mono transition-all duration-300 ease-in-out group-hover:translate-y-1" />
        Education
      </motion.h1>

      {/* Cards */}
      <motion.div
        ref={refCards}
        initial={{ opacity: 0, y: 150 }}
        animate={controlsCards}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-6 w-11/12 max-w-5xl mb-10"
      >
        {/* Bachelor's Degree Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-100 transition-transform duration-300 ease-in-out hover:shadow-yellow-500 shadow-gray-500"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-3 items-center font-mono text-yellow-500 justify-center px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700">
              <BsFillCalendarFill className="text-lg" />
              <span className="font-semibold text-orange-400">2019 - 2021</span>
            </div>
            <span className="ml-auto font-sans px-3 py-1 text-sm rounded-full bg-gray-100 font-bold dark:bg-gray-700 dark:text-white">
              🎓 FSc
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-sans">
            Free Engineering
          </h2>
          <p className="flex items-center gap-2 text-gray-700 font-mono dark:text-gray-300">
            <FaGraduationCap className="text-yellow-500 font-extrabold text-3xl" />
            Govt Degree College GulAbad
          </p>
          <p className="flex items-center gap-2 text-gray-700 font-mono dark:text-gray-300">
            <MdLocationOn className="text-yellow-500 font-extrabold text-3xl" />
            Gullabad, Dir Lower, KPK, Pakistan
          </p>
          <p className="flex items-center gap-2 text-gray-700 font-mono dark:text-gray-300">
            <MdOutlineGrade className="text-yellow-500 font-extrabold text-3xl" />
            Secured 908 out of 1100 marks.
          </p>
        </motion.div>

        {/* Master's Degree Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-100 transition-transform duration-300 ease-in-out hover:shadow-yellow-500 shadow-gray-500"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-3 items-center text-yellow-500 justify-center px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700">
              <BsFillCalendarFill className="text-lg" />
              <span className="font-semibold text-orange-400 font-mono">
                2021 - 2025
              </span>
            </div>
            <span className="ml-auto px-3 py-1 text-sm rounded-full font-sans font-bold bg-gray-100 dark:bg-gray-700 dark:text-white">
              🎓 Graduation
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-sans">
            Bachelor of Software Engineering
          </h2>
          <p className="flex items-center gap-2 text-gray-600 font-mono dark:text-gray-300">
            <FaGraduationCap className="text-yellow-500 font-extrabold text-3xl" />
            University Malakand
          </p>
          <p className="flex items-center gap-2 text-gray-600 font-mono dark:text-gray-300">
            <MdLocationOn className="text-yellow-500 font-extrabold text-3xl" />
            Chakdara, Dir Lower, KPK, Pakistan
          </p>
          <p className="flex items-center gap-2 text-gray-700 font-mono dark:text-gray-300">
            <MdOutlineGrade className="text-yellow-500 font-extrabold text-3xl" />
            Earned a GPA of 3.74 out of 4.00
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
