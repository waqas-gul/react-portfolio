import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiTeamFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Waqas Gul",
    role: "MERN Stack Developer",
    img: "/waqas.png",
    description:
      "Expert in MERN Stack Development, specializing in React.js, MongoDB, Express.js, and Node.js, with a focus on building scalable and high-performance web applications.",
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

export default function TeamSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextMember = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  // Auto-scrolling effect with pause on hover
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextMember();
      }, 6000); // Change slide every 6 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, index]); // Reset timer on hover state or index change

  return (
    <div className="flex flex-col items-center justify-center lg:h-screen py-16 dark:bg-gray-800 bg-white text-white relative overflow-hidden">
      <h2 className="text-2xl flex items-center justify-center gap-3 mx-8 font-extrabold font-sans mb-8 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        <RiTeamFill className="text-orange-500 font-extrabold text-4xl font-mono animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
        Me and the Talented People Around Me
      </h2>

      {/* Slider Container with Hover Detection */}
      <div
        className="relative w-[800px] h-96 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {teamMembers.map((member, i) => {
          const position =
            (i - index + teamMembers.length) % teamMembers.length;
          let xOffset = 0;
          let scale = 0.8;
          let opacity = 0.5;
          let blur = "blur-sm";

          // Middle card (focused)
          if (position === 0) {
            xOffset = 0;
            scale = 1;
            opacity = 1;
            blur = "";
          }
          // Two cards to the left
          else if (position === 1) {
            xOffset = -200;
          } else if (position === 2) {
            xOffset = -400;
          }
          // Two cards to the right
          else if (position === teamMembers.length - 1) {
            xOffset = 200;
          } else if (position === teamMembers.length - 2) {
            xOffset = 400;
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: xOffset }}
              animate={{ opacity, scale, x: xOffset }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                zIndex:
                  position === 0
                    ? 10
                    : position === 1 || position === teamMembers.length - 1
                    ? 5
                    : 1,
              }}
              className={`absolute w-72 h-96 dark:bg-gray-900 bg-gray-400 rounded-xl shadow-lg shadow-gray-500 overflow-hidden cursor-pointer transition-all duration-500 ${blur} hover:shadow-yellow-500`}
            >
              <div
                className={`relative w-full h-full ${
                  position === 0 ? "group" : ""
                }`}
              >
                {/* Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-3/4 object-cover"
                />

                {/* Name and Description (always visible at the bottom) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-200 dark:bg-gray-600 bg-opacity-90 p-4 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-bold bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent font-sans">
                    {member.name}
                  </h3>
                  <p className="text-sm text-black dark:text-gray-100 font-mono">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 font-mono">
                    {member.description}
                  </p>
                </div>

                {/* Icons (appear on hover for the middle card) */}
                {position === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      {/* Facebook Icon */}
                      <a
                        href={member.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="cursor-pointer text-4xl text-blue-700 transition-all duration-300 hover:text-blue-600 hover:scale-110 hover:rotate-12" />
                      </a>

                      {/* Twitter Icon */}
                      <a
                        href={member.links.insta}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareInstagram className="cursor-pointer text-4xl transition-all duration-300 text-pink-900 hover:scale-110 hover:rotate-12 hover:text-pink-800" />
                      </a>

                      {/* LinkedIn Icon */}
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="cursor-pointer text-4xl transition-all duration-300 text-blue-800 hover:text-blue-700 hover:scale-110 hover:rotate-12" />
                      </a>

                      {/* WhatsApp Icon */}
                      <a
                        href={member.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="cursor-pointer text-4xl transition-all duration-300 text-green-700 hover:text-green-600 hover:scale-110 hover:rotate-12" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8  flex space-x-4">
        <button
          onClick={prevMember}
          className="p-3 bg-orange-500 hover:text-orange-500 rounded-full border border-orange-500 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={nextMember}
          className="p-3 bg-orange-500 hover:text-orange-500 rounded-full border border-orange-500 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
