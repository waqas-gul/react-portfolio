import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaTwitter,
  FaSkype,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

// Email — featured prominently in its own compact card
const emailContact = {
  name: "Email",
  address: "waqasgul369@gmail.com",
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=waqasgul369@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
};

// Compact social pills — links preserved exactly
const socials = [
  { name: "LinkedIn",  tone: "text-sky-400",     icon: <FaLinkedin />,    link: "https://www.linkedin.com/in/waqas-gul-b7580826b/" },
  { name: "WhatsApp",  tone: "text-emerald-400", icon: <IoLogoWhatsapp />,link: "https://wa.me/+923488446186" },
  { name: "Facebook",  tone: "text-sky-400",     icon: <FaFacebook />,    link: "https://www.facebook.com/WAQASI.369/" },
  { name: "Instagram", tone: "text-pink-400",    icon: <FaInstagram />,   link: "https://www.instagram.com/w_a_q_a_s_i/" },
  { name: "Telegram",  tone: "text-sky-400",     icon: <FaTelegram />,    link: "#" },
  { name: "Twitter",   tone: "text-slate-100",   icon: <FaTwitter />,     link: "#" },
  { name: "Skype",     tone: "text-sky-400",     icon: <FaSkype />,       link: "#" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const formStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const fieldFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};
const socialsStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};
const socialItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_88osjpn";
    const templateID = "template_zmddcab";
    const userID = "oGENuhiJqtOm9HIDW";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        Swal.fire({
          title: "Message sent!",
          text: "Thanks for reaching out — I'll get back to you shortly.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#38BDF8",
          background: "#0F172A",
          color: "#F8FAFC",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#38BDF8",
          background: "#0F172A",
          color: "#F8FAFC",
        });
      });
  };

  return (
    <div className="cf-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Ambient gradient wash */}
      <div aria-hidden="true" className="cf-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Status pill with pulsing dot */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <span className="cf-status">
            <span className="cf-status-dot" aria-hidden="true">
              <span className="cf-status-pulse" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 text-center"
        >
          <h2 className="cf-title">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              talk.
            </span>
          </h2>
          <p className="cf-subtitle mx-auto mt-4 max-w-md">
            Have a project, collaboration, or opportunity in mind? Let&apos;s
            start the conversation.
          </p>
        </motion.div>

        {/* Side-by-side: contact hub (left) + form (right) */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* LEFT — compact contact hub */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5"
          >
            <h3 className="cf-hub-title">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] bg-clip-text text-transparent">
                meaningful.
              </span>
            </h3>
            <p className="cf-hub-desc mt-3">
              Reach out any time — whether it&apos;s a quick question or a
              long-term collaboration, my inbox is open.
            </p>

            {/* Email card — prominent but compact */}
            <a
              href={emailContact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cf-email-compact mt-5"
              aria-label="Email Waqas Gul"
            >
              <span className="cf-email-compact-icon">
                <HiOutlineEnvelope aria-hidden="true" />
              </span>
              <span className="cf-email-compact-info">
                <span className="cf-email-compact-label">Email</span>
                <span className="cf-email-compact-value">{emailContact.address}</span>
              </span>
            </a>

            {/* Connect with me — compact social pill grid */}
            <div className="mt-6">
              <span className="cf-socials-heading">Connect with me</span>
              <motion.ul
                variants={socialsStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="cf-socials-grid mt-3"
                aria-label="Social channels"
              >
                {socials.map((s) => (
                  <motion.li key={s.name} variants={socialItem}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="cf-social-pill"
                    >
                      <span className={`cf-social-pill-icon ${s.tone}`}>
                        {s.icon}
                      </span>
                      <span className="cf-social-pill-label">{s.name}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* RIGHT — form card with animated gradient border */}
          <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1 }}
          className="cf-form-wrap lg:col-span-7"
        >
          <motion.form
            variants={formStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            onSubmit={handleSubmit}
            className="cf-form"
          >
            <div className="cf-grid">
              <motion.label variants={fieldFade} className="cf-field">
                <input
                  className="cf-input"
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="cf-label">Full Name</span>
              </motion.label>

              <motion.label variants={fieldFade} className="cf-field">
                <input
                  className="cf-input"
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="cf-label">Email Address</span>
              </motion.label>

              <motion.label variants={fieldFade} className="cf-field">
                <input
                  className="cf-input"
                  type="tel"
                  name="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                />
                <span className="cf-label">Mobile No.</span>
              </motion.label>

              <motion.label variants={fieldFade} className="cf-field">
                <input
                  className="cf-input"
                  type="text"
                  name="subject"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <span className="cf-label">Subject</span>
              </motion.label>

              <motion.label variants={fieldFade} className="cf-field cf-field--full">
                <textarea
                  className="cf-input cf-textarea"
                  name="message"
                  rows="5"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <span className="cf-label">Your Message</span>
              </motion.label>
            </div>

            <motion.div
              variants={fieldFade}
              className="mt-4 flex flex-wrap items-center justify-between gap-3"
            >
              <span className="cf-form-hint">
                I&apos;ll never share your details. Promise.
              </span>
              <button type="submit" className="cf-submit group">
                <span>Send Message</span>
                <HiOutlinePaperAirplane
                  className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </motion.div>
          </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
