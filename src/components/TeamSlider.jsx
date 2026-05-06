import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import {
  HiOutlineUserGroup,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";

const teamMembers = [
  {
    name: "Waqas Gul",
    role: "Full Stack developer",
    img: "/waqas.png",
    description:
      "Expert in full Stack software Development, specializing in React.js,Next.js,MongoDB,PostgresSql, Express.js, Node.js,Fastapi,Flask and electron  with a focus on building scalable and high-performance web, mobile and desktop applications.",
    links: {
      facebook: "https://www.facebook.com/WAQASI.369/",
      insta: "https://www.instagram.com/w_a_q_a_s_i/",
      linkedin: "https://linkedin.com/in/waqas",
      whatsapp: "https://wa.me/923488446186",
    },
  },
  {
    name: "Dawood khan",
    role: "UI/UX designer",
    img: "/dawood.png",
    description:
      "Expert in UI/UX Design, specializing in user-centered design, wireframing, prototyping, and creating intuitive, visually appealing, and responsive interfaces using Figma, Adobe XD, and modern design principles.",
    links: {
      facebook: "https://www.facebook.com/dawood.dawoodkhan.50999",
      insta: "https://www.instagram.com/dawoodkhan6914/",
      linkedin: "#",
      whatsapp: "https://wa.me/923499589438",
    },
  },
  {
    name: "Ali Khan",
    role: "Mern stack developer",
    img: "/ali.png",
    description:
      "Expert in MERN Stack Development, specializing in React.js, MongoDB, Express.js, and Node.js, with a focus on building scalable, secure, and high-performance web applications.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100034895843168",
      insta: "https://www.instagram.com/engineer_alikhan/",
      linkedin: "https://www.linkedin.com/in/engr-ali-khan-626667251/",
      whatsapp: "https://wa.me/923436508060",
    },
  },
  {
    name: "Fawad Khan",
    role: "AI Engineer",
    img: "/fawad.png",
    description:
      "Expert in AI Engineering with expertise in Machine Learning, Deep Learning, Natural Language Processing (NLP), and AI model development.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100039326873314",
      insta: "https://www.instagram.com/f_fawad_zm/",
      linkedin: "https://www.linkedin.com/in/fawad-azam-126705253/",
      whatsapp: "https://wa.me/923068859965",
    },
  },
  {
    name: "Adnan Khan",
    role: "Front End developer",
    img: "/adnan.png",
    description:
      "Expert in Front-End Development, specializing in React.js, JavaScript, HTML, CSS, and modern UI/UX design, with a focus on building responsive and high-performance web applications.",
    links: {
      facebook: "https://www.facebook.com/itx.malakadnan",
      insta: "https://www.instagram.com/itx_malak10/",
      linkedin: "https://www.linkedin.com/in/muhammad-adnan-khan-081ab9258/",
      whatsapp: "https://wa.me/923403796639",
    },
  },
  {
    name: "Zohaib khan",
    role: "Data analyst",
    img: "/zohaib.png",
    description:
      "Expert in Data Analysis, specializing in data visualization, statistical analysis, data cleaning, predictive modeling, and deriving actionable insights to support informed business decisions..",
    links: {
      facebook: "#",
      insta: "https://www.instagram.com/zuhaibkhan662?igsh=ODdzdjlwOXEyY2o2",
      linkedin: "https://www.linkedin.com/in/zuhaib-khan-183840275",
      whatsapp: "https://wa.me/92348 1970268",
    },
  },
  {
    name: "Ahmad Ali",
    role: "Cybersecurity Expert",
    img: "/ahmad.png",
    description:
      "Expert in Cybersecurity, specializing in network security, ethical hacking, penetration testing, threat analysis, and risk assessment to protect systems and data from cyber threats.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100039556074398",
      insta: "#",
      linkedin: "https://www.linkedin.com/in/ahmad-ali-683603255/",
      whatsapp: "https://wa.me/923242902438",
    },
  },
];

// Animation variants
const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const thumbsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const thumbVariants = {
  hidden: { opacity: 0, scale: 0.92, x: 20 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
const spotlightSwap = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

export default function TeamSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextMember = () => setIndex((p) => (p + 1) % teamMembers.length);
  const prevMember = () =>
    setIndex((p) => (p - 1 + teamMembers.length) % teamMembers.length);

  // Auto-advance every 2s, paused while user hovers the spotlight card
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(nextMember, 3000);
    return () => clearInterval(id);
  }, [isHovered, index]);

  const active = teamMembers[index];

  return (
    <div className="team-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="team-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="team-eyebrow">
            <HiOutlineUserGroup className="text-[15px]" aria-hidden="true" />
            Network
          </span>
          <h2 className="team-title mt-4">
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              People Around Me
            </span>
          </h2>
          <p className="team-subtitle mx-auto mt-4 max-w-xl">
            Talented people I&apos;ve worked with, learned from, and built
            alongside.
          </p>
        </motion.div>

        {/* Thumbs (left) + Spotlight + Nav (right) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Spotlight + nav (right on lg, first on mobile) */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 flex flex-col gap-5 lg:order-2 lg:col-span-7"
          >
            <div
              className="team-spotlight"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="team-spotlight-image-wrap">
                <div aria-hidden="true" className="team-spotlight-glow" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`img-${index}`}
                    src={active.img}
                    alt={active.name}
                    variants={spotlightSwap}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="team-spotlight-image"
                  />
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${index}`}
                  variants={spotlightSwap}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="team-spotlight-info"
                >
                  <span className="team-spotlight-role">{active.role}</span>
                  <h3 className="team-spotlight-name">{active.name}</h3>
                  <p className="team-spotlight-desc">{active.description}</p>

                  <div className="team-spotlight-socials">
                    <a
                      href={active.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${active.name} on Facebook`}
                      className="team-social-btn"
                    >
                      <FaFacebookF aria-hidden="true" />
                    </a>
                    <a
                      href={active.links.insta}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${active.name} on Instagram`}
                      className="team-social-btn"
                    >
                      <FaSquareInstagram aria-hidden="true" />
                    </a>
                    <a
                      href={active.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${active.name} on LinkedIn`}
                      className="team-social-btn"
                    >
                      <FaLinkedinIn aria-hidden="true" />
                    </a>
                    <a
                      href={active.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${active.name} on WhatsApp`}
                      className="team-social-btn"
                    >
                      <FaWhatsapp aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation — sits directly below the spotlight card */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prevMember}
                aria-label="Previous person"
                className="team-nav-btn"
              >
                <HiOutlineChevronLeft className="text-[18px]" aria-hidden="true" />
              </button>
              <span className="team-counter">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(teamMembers.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={nextMember}
                aria-label="Next person"
                className="team-nav-btn"
              >
                <HiOutlineChevronRight className="text-[18px]" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Thumbnail strip (left on lg, second on mobile) */}
          <motion.div
            variants={thumbsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="team-thumbs">
              {teamMembers.map((m, i) => (
                <motion.button
                  key={m.name}
                  type="button"
                  variants={thumbVariants}
                  onClick={() => setIndex(i)}
                  className={`team-thumb ${i === index ? "team-thumb--active" : ""}`}
                  aria-label={`Show ${m.name}`}
                  aria-pressed={i === index}
                >
                  <span className="team-thumb-avatar">
                    <img src={m.img} alt="" />
                  </span>
                  <span className="team-thumb-info">
                    <span className="team-thumb-name">{m.name}</span>
                    <span className="team-thumb-role">{m.role}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
