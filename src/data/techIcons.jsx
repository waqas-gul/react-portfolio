import { SiNextdotjs, SiRedux, SiJavascript, SiExpress, SiMongodb, SiCloudinary, SiTypescript } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBootstrap, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoFigma, IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

// Icons live here, not in projects.js, so the project data stays plain
// serialisable values and could be swapped for JSON later.
export const techIcons = {
  figma: <IoLogoFigma className="text-pink-500" />,
  react: <FaReact className="text-cyan-400" />,
  next: <SiNextdotjs className="text-slate-100" />,
  express: <SiExpress className="text-slate-200" />,
  node: <IoLogoNodejs className="text-emerald-500" />,
  mongodb: <SiMongodb className="text-emerald-600" />,
  postgres: <BiLogoPostgresql className="text-sky-400" />,
  redux: <SiRedux className="text-violet-400" />,
  mui: <GiMaterialsScience className="text-blue-400" />,
  tailwind: <RiTailwindCssFill className="text-sky-400" />,
  javascript: <SiJavascript className="text-amber-300" />,
  typescript: <SiTypescript className="text-sky-400" />,
  cloudinary: <SiCloudinary className="text-sky-400" />,
  html: <FaHtml5 className="text-orange-500" />,
  bootstrap: <FaBootstrap className="text-violet-500" />,
};

export const getTechIcon = (key) => techIcons[key] ?? null;
