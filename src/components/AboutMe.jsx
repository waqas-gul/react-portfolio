import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  HiOutlineUserCircle,
  HiOutlineMusicalNote,
  HiOutlineGlobeAlt,
  HiOutlineBanknotes,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { Mountain } from "lucide-react";

// Interests (content unchanged) — clean outline icons
const interests = [
  { label: "Listening to Music", icon: <HiOutlineMusicalNote />, tone: "text-cyan-400"    },
  { label: "Travelling",         icon: <HiOutlineGlobeAlt />,    tone: "text-sky-400"     },
  { label: "Mountains",          icon: <Mountain strokeWidth={2} />, tone: "text-violet-400" },
  { label: "Money",              icon: <HiOutlineBanknotes />,   tone: "text-emerald-400" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
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

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#A78BFA]";

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
            <HiOutlineUserCircle className="text-[15px]" aria-hidden="true" />
            About Me
          </span>
          <h2 className="about-title mt-4">
            Crafting{" "}
            <span className={GRADIENT_TEXT}>digital experiences</span> with code
          </h2>
          <p className="about-subtitle mx-auto mt-4 max-w-xl">
            A senior full-stack engineer obsessed with shipping fast,
            thoughtful, production-grade software.
          </p>
        </motion.div>

        {/* Row: Who I am (left) + bento tiles (right) */}
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
                I'm a <strong>senior full-stack software engineer</strong> who
                designs and ships scalable mobile, web and desktop
                applications, from the interface down to the infrastructure.
              </p>
              <p>
                I own products end to end: API design and data modelling,
                database migrations, containerised deployments, and the CI/CD
                pipelines that keep releases predictable. I work the same way on
                hardware-facing products, turning raw device data into something
                a user can act on.
              </p>
              <p>
                I'm currently building an{" "}
                <strong>EEG-based wellness platform</strong>: streaming raw
                brain-signal data from BLE devices, processing it in real time,
                and surfacing focus and stress insights people can act on.
              </p>
              <p>
                I care about clean architecture, expressive interfaces, and
                software that feels effortless to use because it was
                deliberately engineered.
              </p>
            </div>
          </motion.article>

          {/* RIGHT — bento tiles */}
          <motion.div variants={slideRight} className="about-bento lg:col-span-5">
            {/* Headline stat */}
            <div className="about-card about-tile about-tile--wide">
              <span aria-hidden="true" className="about-tile-orb" />
              <p className={`about-tile-value about-tile-value--lg ${GRADIENT_TEXT}`}>
                {inViewStats ? (
                  <CountUp start={0} end={3.9} duration={1.5} decimals={1} />
                ) : (
                  "0.0"
                )}
                +
              </p>
              <p className="about-tile-label">Years of Experience</p>
              <p className="about-tile-note">
                Shipping production software across web, mobile, cloud and IoT.
              </p>
            </div>

            {/* Two square stats */}
            <div className="about-card about-tile">
              <p className={`about-tile-value ${GRADIENT_TEXT}`}>
                {inViewStats ? <CountUp start={0} end={20} duration={1.5} /> : "0"}+
              </p>
              <p className="about-tile-label">Projects Completed</p>
            </div>

            <div className="about-card about-tile">
              <p className={`about-tile-value ${GRADIENT_TEXT}`}>
                {inViewStats ? <CountUp start={0} end={10} duration={1.5} /> : "0"}+
              </p>
              <p className="about-tile-label">Happy Clients</p>
            </div>

            {/* Interests */}
            <div className="about-card about-tile about-tile--wide">
              <h3 className="about-card-title">I Love</h3>
              <ul className="about-love-grid">
                {interests.map((item) => (
                  <li key={item.label} className="about-love-item">
                    <span className={`about-love-icon ${item.tone}`} aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="about-love-label">{item.label}</span>
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
            <HiOutlineArrowLongRight
              className="text-[20px] transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
