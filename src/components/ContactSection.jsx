import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaTwitter,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  {
    name: "LinkedIn",
    color: "text-blue-600",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/waqas-gul-b7580826b/",
  },
  {
    name: "WhatsApp",
    color: "text-green-500",
    icon: <IoLogoWhatsapp />,
    link: `https://wa.me/+923488446186`, // Replace with your WhatsApp number
  },
  {
    name: "Facebook",
    color: "text-blue-700",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/WAQASI.369/",
  },
  {
    name: "Instagram",
    color: "text-pink-500",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/w_a_q_a_s_i/",
  },
  {
    name: "Telegram",
    color: "text-blue-400",
    icon: <FaTelegram />,
    link: "#",
  },
  {
    name: "Twitter",
    color: "text-black",
    icon: <FaTwitter />,
    link: "#",
  },
  {
    name: "Skype",
    color: "text-blue-500",
    icon: <FaSkype />,
    link: "#",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Animation controls
  const controlsTitle = useAnimation();
  const controlsSocial = useAnimation();
  const controlsForm = useAnimation();

  // Detect when elements are in view
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refSocial, inViewSocial] = useInView({ triggerOnce: true });
  const [refForm, inViewForm] = useInView({ triggerOnce: true });

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0 });
    }
    if (inViewSocial) {
      controlsSocial.start({ opacity: 1, x: 0 });
    }
    if (inViewForm) {
      controlsForm.start({ opacity: 1, x: 0 });
    }
  }, [
    controlsTitle,
    controlsSocial,
    controlsForm,
    inViewTitle,
    inViewSocial,
    inViewForm,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS credentials
    const serviceID = "service_88osjpn";
    const templateID = "template_zmddcab";
    const userID = "oGENuhiJqtOm9HIDW";

    // Send the form data using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        // Show SweetAlert2 success message
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully. I will get back to you shortly.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#FCA61F",
          background: "#1F2937",
          color: "#FFFFFF",
        });

        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);

        // Show SweetAlert2 error message
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#FCA61F",
          background: "#1F2937",
          color: "#FFFFFF",
        });
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 py-16 dark:bg-gray-800 px-6 overflow-x-hidden">
      {/* Title */}
      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, y: -60 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
        className="text-4xl flex items-center justify-center gap-3 font-extrabold font-sans mb-8 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent"
      >
        <MdConnectWithoutContact className="text-orange-500 font-extrabold text-4xl font-mono animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
        Contact Us
      </motion.h2>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden">
        {/* Social Media Section */}
        <motion.div
          ref={refSocial}
          initial={{ opacity: 0, x: -100 }}
          animate={controlsSocial}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex flex-col items-start space-y-4 px-10"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          {data.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg font-medium transition transform hover:scale-110 hover:rotate-12"
              whileHover={{ scale: 1.1 }}
            >
              <span className={`${item.color} text-2xl`}>{item.icon}</span>
              <span
                style={{ textShadow: "3px 3px 6px rgba(250, 250, 250, 0.5)" }}
                className={`${item.color}`}
              >
                {item.name}
              </span>
            </motion.a>
          ))}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=waqasgul369@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition hover:rotate-12"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope className="text-red-500 text-2xl" />
            <span
              className="text-gray-900 dark:text-red-500"
              style={{ textShadow: "2px 2px 20px rgba(250, 250, 250, 0.5)" }}
            >
              waqasgul369@gmail.com
            </span>
          </motion.a>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          ref={refForm}
          initial={{ opacity: 0, x: 100 }}
          animate={controlsForm}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg shadow-gray-500"
        >
          <h2 className="text-2xl font-bold font-sans text-center mb-6 bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 shadow-lg shadow-gray-500 bg-gray-200 border-yellow-500 dark:text-white"
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 shadow-lg shadow-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 shadow-lg shadow-gray-500 bg-gray-200 border-yellow-500 dark:text-white"
              type="tel"
              name="phone"
              placeholder="Mobile No."
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 shadow-lg shadow-gray-500 bg-gray-200 border-yellow-500 dark:text-white"
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="col-span-1 md:col-span-2 font-mono p-3 border shadow-lg shadow-gray-500 rounded-lg dark:bg-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
              rows="4"
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <motion.button
              type="submit"
              className="flex items-center justify-center px-6 py-3 cursor-pointer hover:shadow-yellow-500 gap-4 bg-yellow-400 rounded-lg relative overflow-hidden ease-in-out hover:bg-yellow-500 active:scale-95 font-mono bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group hover:rotate-3"
              whileHover={{ scale: 1.05 }}
            >
              Send{" "}
              <Send
                size={16}
                className="font-sans text-gray-700 animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1"
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
