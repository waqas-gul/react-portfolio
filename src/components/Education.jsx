import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";
import { MdLocationOn, MdOutlineGrade, MdCastForEducation } from "react-icons/md";

// Education entries — content unchanged, just structured as data
const educationData = [
  {
    period: "2019 - 2021",
    level: "FSc",
    degree: "Free Engineering",
    institution: "Govt Degree College GulAbad",
    location: "Gullabad, Dir Lower, KPK, Pakistan",
    grade: "Secured 908 out of 1100 marks.",
  },
  {
    period: "2021 - 2025",
    level: "Graduation",
    degree: "Bachelor of Software Engineering",
    institution: "University Malakand",
    location: "Chakdara, Dir Lower, KPK, Pakistan",
    grade: "Earned a GPA of 3.74 out of 4.00",
  },
];

// Stagger variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Education() {
  return (
    <div className="education-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="education-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="education-eyebrow">
            <MdCastForEducation className="text-[14px]" aria-hidden="true" />
            Education
          </span>
          <h2 className="education-title mt-4 flex items-center justify-center gap-3">
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="education-subtitle mx-auto mt-4 max-w-xl">
            Academic foundation and continuous learning behind my engineering
            journey.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {educationData.map((entry) => (
            <motion.article
              key={entry.degree}
              variants={cardVariants}
              className="edu-card"
            >
              {/* Top row: date pill + level pill */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="edu-date">
                  <BsFillCalendarFill className="text-[12px]" aria-hidden="true" />
                  {entry.period}
                </span>
                <span className="edu-level">
                  <FaGraduationCap className="text-[12px]" aria-hidden="true" />
                  {entry.level}
                </span>
              </div>

              {/* Degree title */}
              <h3 className="edu-degree">{entry.degree}</h3>

              {/* Details */}
              <ul className="edu-details">
                <li className="edu-detail">
                  <span className="edu-detail-icon">
                    <FaGraduationCap aria-hidden="true" />
                  </span>
                  <span>{entry.institution}</span>
                </li>
                <li className="edu-detail">
                  <span className="edu-detail-icon">
                    <MdLocationOn aria-hidden="true" />
                  </span>
                  <span>{entry.location}</span>
                </li>
                <li className="edu-detail">
                  <span className="edu-detail-icon">
                    <MdOutlineGrade aria-hidden="true" />
                  </span>
                  <span>{entry.grade}</span>
                </li>
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
