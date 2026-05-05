import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

// Experience data — most recent first
const experiences = [
  {
    company: "Mindtune Innovations",
    location: "Wah Cantt, Pakistan",
    position: "Full Stack Engineer",
    duration: "SEP 2025 - PRESENT",
    tasks: [
      "Building cross-platform mobile applications with React Native, delivering performant native experiences for iOS and Android.",
      "Developing desktop applications with Electron, packaging modern web stacks into installable cross-platform clients.",
      "Designing and shipping production APIs with FastAPI, focused on type-safe contracts, async performance, and clean service boundaries.",
      "Architecting full-stack web platforms in Next.js, integrated with FastAPI services and deployed across AWS and Render.",
      "Owning infrastructure as code with Terraform, provisioning reproducible AWS environments for staging and production.",
    ],
  },
  {
    company: "ITSolera Pvt. Ltd.",
    location: "Islamabad, G12, Pakistan",
    position: "MERN Stack Developer (Employee)",
    duration: "JAN 2025 - AUG 2026",
    tasks: [
      "Designed and developed over 15 complete React and NextJS full theme templates, showcasing proficiency in front-end design and development.",
      "Led the development of the Wired Academy project, a full-stack ReactJS application.",
      "Managed both front-end and back-end aspects, utilizing RecatJS API Routes for seamless integration.",
      "Integrated Stripe Payment Gateway for seamless and secure transactions.",
      "Successfully deployed the application on Vercel for optimal performance and accessibility.",
    ],
  },
  {
    company: "Markit Brain Ltd.",
    location: "Rawalpindi, Pakisatn",
    position: "Back End Developer (Intern)",
    duration: "Mar 2022 - May 2022 ",
    tasks: [
      "Worked on a variety of projects, including Epiko Market, CricTracker, and SportsBuzz.",
      "Collaborated in teams of developers, UI designers, and backend developers.",
      "Demonstrated expertise in designing and building reusable components and pages, ensuring responsiveness and adherence to design specifications.",
      "Proficiently handled API integrations, ensuring seamless data exchange, and played an integral role in reviewing and approving/rejecting junior developers' pull requests on GitHub.",
      "Played a crucial role in project deployment and debugging across different environments, including Development, Staging, and Production.",
    ],
  },
  {
    company: "ITSolera",
    location: "Islamabad, G12, Pakistan",
    position: "Web Developer (intern)",
    duration: "FEB 2024 - Aug 2024 ",
    tasks: [
      "Designed numerous responsive themes using HTML/CSS and ReactJS, ensuring user-friendly and visually appealing web interfaces.",
      "Successfully integrated REST APIs, enhancing website functionality and user experience.",
      "Proficiently worked with PHP and MySQL, handling CRUD operations using PHP to manage and manipulate data effectively.",
    ],
  },
];

// Stagger variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
const dotVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  return (
    <div className="experience-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="experience-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="experience-eyebrow">
            <HiOutlineBriefcase className="text-[15px]" aria-hidden="true" />
            Experience
          </span>
          <h2 className="experience-title mt-4">
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="experience-subtitle mx-auto mt-4 max-w-xl">
            Professional roles, real-world projects, and hands-on engineering
            work.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="exp-timeline mt-14"
        >
          {/* Vertical gradient line */}
          <div aria-hidden="true" className="exp-timeline-line" />

          {experiences.map((exp) => (
            <motion.article
              key={`${exp.company}-${exp.duration}`}
              variants={rowVariants}
              className="exp-row"
            >
              {/* Timeline dot column */}
              <div className="exp-dot-col">
                <motion.span
                  variants={dotVariants}
                  aria-hidden="true"
                  className="exp-dot"
                />
              </div>

              {/* Card */}
              <div className="exp-card">
                {/* Top row: company pill + date pill */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="exp-company-pill">
                    <HiOutlineBuildingOffice2 className="text-[14px]" aria-hidden="true" />
                    {exp.company}
                  </span>
                  <span className="exp-date-pill">
                    <HiOutlineCalendarDays className="text-[13px]" aria-hidden="true" />
                    {exp.duration.trim()}
                  </span>
                </div>

                {/* Position */}
                <h3 className="exp-position">{exp.position}</h3>

                {/* Location */}
                <p className="exp-location">
                  <HiOutlineMapPin className="text-[15px]" aria-hidden="true" />
                  {exp.location}
                </p>

                {/* Tasks */}
                <ul className="exp-tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="exp-task">
                      <span className="exp-bullet" aria-hidden="true" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
