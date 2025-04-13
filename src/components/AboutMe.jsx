import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SiSpotify, SiCashapp, SiGooglestreetview } from "react-icons/si";
import { FaMountain } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

// Interests array
const interests = [
  { label: "Listening to Music", icon: <SiSpotify className="text-2xl" /> },
  { label: "Travelling", icon: <SiGooglestreetview className="text-2xl" /> },
  { label: "Mountains", icon: <FaMountain className="text-2xl" /> },
  { label: "Money", icon: <SiCashapp className="text-2xl" /> },
];

export default function AboutMe() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [refStats, inViewStats] = useInView({ triggerOnce: true });
  const [refInterests, inViewInterests] = useInView({ triggerOnce: true });
  const [refDescription, inViewDescription] = useInView({ triggerOnce: true });
  const [refContact, inViewContact] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-16 text-gray-900 dark:text-white p-6 flex flex-col items-center">
      {/* Main Content Container */}
      <div className="w-full max-w-6xl flex flex-col gap-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-5xl font-bold font-sans flex gap-3 items-center justify-center my-4 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent"
        >
          <IoMdInformationCircle className="text-orange-500 animate-bounce font-mono transition-all duration-300 ease-in-out group-hover:translate-y-1" />
          About Me
        </motion.h2>

        {/* Top Section - Stats and Interests */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Experience Stats */}
          <motion.div
            ref={refStats}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewStats ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 flex-1"
          >
            {/* Years Experience */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-200 shadow-gray-500 font-sans dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center flex-1 flex flex-col items-center justify-center hover:shadow-yellow-500 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
                {inViewStats ? (
                  <CountUp start={0} end={3.9} duration={2.5} decimals={1} />
                ) : (
                  "0"
                )}
                +
              </h3>
              <p className="text-lg mt-2 font-extrabold font-sans text-gray-700 dark:text-gray-300">
                Years Experience
              </p>
            </motion.div>

            {/* Projects Completed */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-200 shadow-gray-500 hover:shadow-yellow-500 dark:bg-gray-900 font-sans p-6 rounded-xl shadow-lg text-center flex-1 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-6xl font-sans font-extrabold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                {inViewStats ? (
                  <CountUp start={0} end={20} duration={2.5} />
                ) : (
                  "0"
                )}
                +
              </h3>
              <p className="text-lg font-extrabold mt-2 text-gray-700 font-sans dark:text-gray-300">
                Projects Completed
              </p>
            </motion.div>
          </motion.div>

          {/* Interests */}
          <motion.div
            ref={refInterests}
            initial={{ opacity: 0, x: 100 }}
            animate={inViewInterests ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-200 dark:bg-gray-900 p-6 shadow-gray-500 rounded-xl shadow-lg flex-1 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-yellow-500"
          >
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-gray-300 font-sans">
              I Love
            </h3>
            <div className="grid lg:grid-cols-2 gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 font-mono bg-gray-300 dark:bg-gray-700 px-4 py-3 rounded-lg transition-transform duration-300 ease-in-out"
                >
                  <span
                    className={`text-2xl ${
                      index === 0
                        ? "text-orange-500"
                        : index === 1
                        ? "text-blue-500"
                        : index === 2
                        ? "text-green-500"
                        : "text-stone-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`font-mono font-bold ${
                      index === 0
                        ? "text-orange-500"
                        : index === 1
                        ? "text-blue-500"
                        : index === 2
                        ? "text-green-500"
                        : "text-stone-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          ref={refDescription}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewDescription ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-200 dark:bg-gray-900 p-8 shadow-gray-500 rounded-xl shadow-lg font-sans hover:scale-105 transition-transform duration-350 ease-in-out hover:shadow-yellow-500"
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            A passionate <strong>Software Engineer</strong> with over 3.9 years
            of experience in developing high-performance, scalable web
            applications. My expertise lies in leveraging modern technologies
            such as{" "}
            <strong>
              React.js, Next.js, Node.js, Express.js, MongoDB, RTK Query, React
              Query, and JavaScript
            </strong>
            , along with state management solutions like <strong>Redux</strong>.
            I specialize in crafting seamless user experiences with responsive
            and optimized designs.
            <br />
            <br />I have extensive experience working with UI frameworks
            including{" "}
            <strong>Tailwind CSS, Bootstrap, Material UI, and Chakra UI</strong>
            , ensuring visually appealing and user-friendly interfaces adaptable
            to any device.
            <br />
            <br />
            With a strong background in API development, integration, and clean,
            maintainable code, I have contributed to well-known platforms like{" "}
            <strong>CricTracker, SportsBuzz, and Epiko Market</strong>. My
            commitment to software engineering drives me to deliver efficient
            and scalable digital solutions.
          </p>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          ref={refContact}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewContact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-4 cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/in/waqas-gul-b7580826b/"
            target="_blank"
            className="px-8 py-4 cursor-pointer hover:shadow-yellow-500 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group hover:rotate-12"
          >
            <div className="flex items-center gap-2">
              <FaPaperPlane className="text-xl animate-bounce" />{" "}
              <span>Contact Me</span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
