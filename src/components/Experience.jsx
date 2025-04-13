import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { GiRingmaster } from "react-icons/gi";
import { BsBuildingsFill } from "react-icons/bs";
const experiences = [
  {
    company: "ITSolera Pvt. Ltd.",
    location: "Islamabad, G12, Pakistan",
    position: "MERN Stack Developer (Employee)",
    duration: "JAN 2025 - PRESENT",
    tasks: [
      "Designed and developed over 15 complete React and NextJS full theme templates, showcasing proficiency in front-end design and development.",
      "Led the development of the Wired Academy project, a full-stack ReactJS application.",
      "Managed both front-end and back-end aspects, utilizing RecatJS API Routes for seamless integration.",
      "Integrated Stripe Payment Gateway for seamless and secure transactions.",
      "Successfully deployed the application on Vercel for optimal performance and accessibility.",
    ],
  },
  {
    company: "Markit Brain Ltd.",
    location: "Rawalpindi, Pakisatn",
    position: "Back End Developer (Intern)",
    duration: "Mar 2022 - May 2022 ",
    tasks: [
      "Worked on a variety of projects, including Epiko Market, CricTracker, and SportsBuzz.",
      "Collaborated in teams of developers, UI designers, and backend developers.",
      "Demonstrated expertise in designing and building reusable components and pages, ensuring responsiveness and adherence to design specifications.",
      "Proficiently handled API integrations, ensuring seamless data exchange, and played an integral role in reviewing and approving/rejecting junior developers' pull requests on GitHub.",
      "Played a crucial role in project deployment and debugging across different environments, including Development, Staging, and Production.",
    ],
  },
  {
    company: "ITSolera",
    location: "Islamabad, G12, Pakistan",
    position: "Web Developer (intern)",
    duration: "FEB 2024 - Aug 2024 ",
    tasks: [
      "Designed numerous responsive themes using HTML/CSS and ReactJS, ensuring user-friendly and visually appealing web interfaces.",
      "Successfully integrated REST APIs, enhancing website functionality and user experience.",
      "Proficiently worked with PHP and MySQL, handling CRUD operations using PHP to manage and manipulate data effectively.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-16 px-4">
      <h2 className="text-center text-4xl font-bold flex items-center justify-center gap-3  mb-8 bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        <GiRingmaster className="text-orange-500 font-extrabold text-6xl animate-bounce font-mono transition-all duration-300 ease-in-out group-hover:translate-y-1 " />
        Experience
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6  ">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-yellow-500  shadow-gray-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="lg:text-xl  text-[0.6rem]   font-sans lg:px-3 mr-2 px-2 py-1 rounded-full  font-bold dark:bg-gray-700 bg-gray-200  text-yellow-400 flex items-center ">
                <BsBuildingsFill className="mr-2 text-orange-400 " />{" "}
                {exp.company}
              </h3>
              <span className="lg:text-sm text-[0.6rem] flex items-center text-gray-600 dark:text-gray-300  font-sans px-3 py-1 rounded-full  font-bold dark:bg-gray-700 bg-gray-200  ">
                <FaCalendarCheck className="mr-2 text-orange-400" />{" "}
                {exp.duration}
              </span>
            </div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center">
              {exp.position}
            </h4>
            <p className="text-sm flex items-center text-gray-500 dark:text-gray-400 mt-1">
              <FaMapMarkerAlt className="mr-2 text-orange-400" /> {exp.location}
            </p>
            <ul className="mt-4 space-y-2">
              {exp.tasks.map((task, i) => (
                <li
                  key={i}
                  className="text-gray-600 flex dark:text-gray-300 text-sm"
                >
                  <p className="text-orange-400 mr-2">➤ </p> {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
