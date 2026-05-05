import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SiSpotify, SiCashapp, SiGooglestreetview } from "react-icons/si";
import { FaMountain } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

// Interests (content unchanged)
const interests = [
  { label: "Listening to Music", icon: <SiSpotify />,          tone: "text-emerald-400" },
  { label: "Travelling",         icon: <SiGooglestreetview />, tone: "text-sky-400"     },
  { label: "Mountains",          icon: <FaMountain />,         tone: "text-violet-400"  },
  { label: "Money",              icon: <SiCashapp />,          tone: "text-emerald-300" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const slideRight = {
  hidden: { opacity: 0, x: 32 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutMe() {
  const [refStats, inViewStats] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="about-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="about-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header — same pattern as hero */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="about-eyebrow">
            <IoMdInformationCircle className="text-[14px]" aria-hidden="true" />
            About Me
          </span>
          <h2 className="about-title mt-4">
            Crafting{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#A78BFA]">
              digital experiences
            </span>{" "}
            with code
          </h2>
          <p className="about-subtitle mx-auto mt-4 max-w-xl">
            A senior full-stack engineer obsessed with shipping fast,
            thoughtful, production-grade software.
          </p>
        </motion.div>

        {/* Single row: Who I am (left) + Stats & I Love (right) */}
        <motion.div
          ref={refStats}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          {/* LEFT — Who I am */}
          <motion.article
            variants={slideLeft}
            className="about-card lg:col-span-7 sm:p-9"
          >
            <h3 className="about-card-title">Who I am</h3>
            <div className="about-card-body space-y-4 text-[15px] leading-[1.8] sm:text-[16px]">
              <p>
                I'm a <strong>full-stack software engineer</strong> who designs
                and ships scalable mobile, web, and desktop applications. My
                day-to-day stack is{" "}
                <strong>
                  React, React Native, TypeScript, Node.js, FastAPI
                </strong>{" "}
                and <strong>PostgreSQL</strong>, deployed on AWS — built for
                performance from the first commit.
              </p>
              <p>
                I'm currently building an{" "}
                <strong>EEG-based wellness platform</strong>: streaming raw
                brain-signal data from BLE devices, processing it in real time,
                and surfacing actionable focus and stress insights for users.
                I own the API design, manage database migrations, and run the
                infrastructure with <strong>Docker and Terraform</strong>.
              </p>
              <p>
                I care about clean architecture, expressive interfaces built
                with <strong>Tailwind CSS</strong>, and software that feels
                effortless to use because it was deliberately engineered.
              </p>
            </div>
          </motion.article>

          {/* RIGHT — Years + Projects + I Love stacked, fills full row height */}
          <motion.div
            variants={slideRight}
            className="flex h-full flex-col gap-5 lg:col-span-5"
          >
            {/* Years + Projects in 2 columns */}
            <div className="grid grid-cols-2 gap-5">
              <div className="about-card about-stat-card">
                <h3 className="about-stat-value bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#A78BFA]">
                  {inViewStats ? (
                    <CountUp start={0} end={3.9} duration={1.5} decimals={1} />
                  ) : (
                    "0.0"
                  )}
                  +
                </h3>
                <p className="about-stat-label">Years Experience</p>
              </div>

              <div className="about-card about-stat-card">
                <h3 className="about-stat-value bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#A78BFA]">
                  {inViewStats ? (
                    <CountUp start={0} end={20} duration={1.5} />
                  ) : (
                    "0"
                  )}
                  +
                </h3>
                <p className="about-stat-label">Projects Completed</p>
              </div>
            </div>

            {/* I Love — flex-1 lets it stretch to match the left card's height */}
            <div className="about-card flex flex-1 flex-col">
              <h3 className="about-card-title text-center">I Love</h3>
              <ul className="grid flex-1 grid-cols-1 content-center gap-2.5 sm:grid-cols-2">
                {interests.map((item) => (
                  <li key={item.label} className="about-love-item">
                    <span className={`text-xl ${item.tone}`} aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact CTA — cyan/blue gradient, matches hero primary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/waqas-gul-b7580826b/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta group"
          >
            <span>Contact Me</span>
            <FiArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
