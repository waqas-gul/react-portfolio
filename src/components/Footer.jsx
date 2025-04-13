import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaHome,
  FaUser,
  FaTools,
  FaEnvelope,
  FaBook,
  FaFileAlt,
  FaLifeRing,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Footer = () => {
  // Animation controls for footer sections
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-sans bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              WGDeveloper
            </h2>
            <p className="mt-4 text-gray-400">
              Elevate your online presence with WGDeveloper’s innovative web
              development solutions.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold font-mono bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FaUser /> About
                </Link>
              </li>

              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FaBriefcase /> Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FaProjectDiagram /> Projects
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent font-mono">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2"
                >
                  <FaBook /> Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2"
                >
                  <FaFileAlt /> Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2"
                >
                  <FaLifeRing /> Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FCA61F] transition duration-300 flex items-center gap-2"
                >
                  <FaFileAlt /> Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Follow Us Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent font-mono">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-5">
              <motion.a
                target="_blank"
                href="https://www.facebook.com/WAQASI.369/"
                whileHover={{ scale: 1.2 }}
                className="text-[#1877F2] hover:scale-110 transition-transform duration-300 text-2xl hover:rotate-12"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300 text-2xl hover:rotate-12"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/w_a_q_a_s_i/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-[#E4405F] hover:scale-110 transition-transform duration-300 text-2xl hover:rotate-12"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/waqas-gul-b7580826b/"
                target="_blanks"
                whileHover={{ scale: 1.2 }}
                className="text-[#0A66C2] hover:scale-110 transition-transform duration-300 text-2xl hover:rotate-12"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://wa.me/+923488446186"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-[#25D366] hover:scale-110 transition-transform duration-300 text-2xl hover:rotate-12"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-yellow-500 mt-8 pt-6 text-center text-gray-300 text-sm"
        >
          © {new Date().getFullYear()} WGDeveloper. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
