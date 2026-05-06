import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineSquares2X2,
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlineLifebuoy,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

// Quick links — react-scroll targets preserved
const quickLinks = [
  { name: "Home",       to: "hero",       Icon: HiOutlineHome },
  { name: "About",      to: "about",      Icon: HiOutlineUser },
  { name: "Experience", to: "experience", Icon: HiOutlineBriefcase },
  { name: "Projects",   to: "projects",   Icon: HiOutlineSquares2X2 },
];

// Resources — hrefs preserved exactly as before
const resources = [
  { name: "Blog",           href: "#", Icon: HiOutlineBookOpen },
  { name: "Documentation",  href: "#", Icon: HiOutlineDocumentText },
  { name: "Support",        href: "#", Icon: HiOutlineLifebuoy },
  { name: "Privacy Policy", href: "#", Icon: HiOutlineShieldCheck },
];

// Socials — URLs preserved exactly
const socials = [
  { name: "Facebook",  Icon: FaFacebook,  href: "https://www.facebook.com/WAQASI.369/" },
  { name: "Twitter",   Icon: FaXTwitter,  href: "#" },
  { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/w_a_q_a_s_i/" },
  { name: "LinkedIn",  Icon: FaLinkedin,  href: "https://www.linkedin.com/in/waqas-gul-b7580826b/" },
  { name: "WhatsApp",  Icon: FaWhatsapp,  href: "https://wa.me/+923488446186" },
];

// Animation variants
const panelVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const colsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10, delayChildren: 0.1 } },
};
const colVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
const socialsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
};
const socialItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const Footer = () => {
  return (
    <footer className="ft-section relative overflow-hidden pt-16 pb-8">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="ft-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Main glass panel */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="ft-panel"
        >
          <motion.div
            variants={colsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="ft-grid"
          >
            {/* Brand column */}
            <motion.div variants={colVariants}>
              <h2 className="ft-brand">
                <span className="bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] bg-clip-text text-transparent">
                  WGDeveloper
                </span>
              </h2>
              <p className="ft-desc mt-3">
                Elevate your online presence with WGDeveloper&apos;s innovative
                web development solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={colVariants}>
              <h3 className="ft-col-title">Quick Links</h3>
              <ul className="ft-links">
                {quickLinks.map(({ name, to, Icon }) => (
                  <li key={name}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      className="ft-link group"
                    >
                      <Icon className="ft-link-icon" aria-hidden="true" />
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={colVariants}>
              <h3 className="ft-col-title">Resources</h3>
              <ul className="ft-links">
                {resources.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a href={href} className="ft-link group">
                      <Icon className="ft-link-icon" aria-hidden="true" />
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={colVariants}>
              <h3 className="ft-col-title">Connect</h3>
              <p className="ft-connect-desc mt-2">
                Find me across the web — let&apos;s stay in touch.
              </p>
              <motion.ul
                variants={socialsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="ft-socials mt-4"
                aria-label="Social links"
              >
                {socials.map(({ name, Icon, href }) => (
                  <motion.li key={name} variants={socialItem}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="ft-social-btn"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="ft-bottom mt-8"
        >
          <div aria-hidden="true" className="ft-divider" />
          <div className="ft-bottom-row mt-6">
            <p className="ft-copyright">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#38BDF8]">WGDeveloper</span>.
              All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
