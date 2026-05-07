import { motion } from "framer-motion";
import {
  HiOutlineArrowDownTray,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineDocumentText,
} from "react-icons/hi2";

const chips = [
  "Full-Stack Developer",
  "Production-Ready Apps",
  "Clean UI Systems",
];

// Stagger variants
const panelVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 },
  },
};
const chipsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};
const chipItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ResumeCard() {
  return (
    <div className="resume-section relative overflow-hidden px-4 py-16 sm:px-8 sm:py-20 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="resume-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="resume-panel"
        >
          {/* LEFT — text + CTAs */}
          <motion.div variants={slideLeft} className="resume-panel-left">
            <span className="resume-eyebrow">
              <HiOutlineDocumentText className="text-[15px]" aria-hidden="true" />
              Resume
            </span>

            <h2 className="resume-title mt-4">
              Want the{" "}
              <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                full picture?
              </span>
            </h2>
            <span aria-hidden="true" className="resume-accent-line" />

            <p className="resume-subtitle mt-4 max-w-md">
              Download my resume or explore my work in more detail.
            </p>

            {/* CTAs */}
            <div className="resume-actions mt-7">
              <a
                href="/CV_waqasi.pdf"
                download="Waqas_Gul_Resume.pdf"
                className="resume-btn-primary group"
              >
                <HiOutlineArrowDownTray
                  className="text-[18px] transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                <span>Resume</span>
              </a>

              <a
                href="https://www.linkedin.com/in/waqas-gul-b7580826b/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn-ghost group"
              >
                <HiOutlineChatBubbleBottomCenterText
                  className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <span>Discuss Project</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — profile + chips */}
          <motion.div variants={slideRight} className="resume-panel-right">
            <div className="resume-avatar-wrap">
              <div aria-hidden="true" className="resume-avatar-glow" />
              <div className="resume-avatar-ring">
                <img
                  src="/waqas.png"
                  alt="Portrait of Waqas Gul"
                  className="resume-avatar"
                />
              </div>
            </div>

            <h3 className="resume-name mt-5">Waqas GUL</h3>
            <p className="resume-role mt-1">
              Full-Stack Engineer · Web, Mobile & Desktop Applications
            </p>

            <motion.ul
              variants={chipsContainer}
              className="resume-chips mt-5"
              aria-label="Strengths"
            >
              {chips.map((chip) => (
                <motion.li key={chip} variants={chipItem} className="resume-chip">
                  {chip}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
