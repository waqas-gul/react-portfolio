import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaAws,
} from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiAdobexd,
  SiMaterialdesign,
  SiJquery,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiAmp,
  SiTailwindcss,
  SiChakraui,
  SiSemanticui,
  SiAntdesign,
  SiGraphql,
  SiApollographql,
  SiFramer,
  SiStyledcomponents,
  SiReactquery,
  SiPostman,
  SiNotion,
  SiRender,
  SiSupabase,
  SiNestjs,
  SiPostgresql,
  SiElectron,
  SiTerraform,
  SiFastapi,
  SiFlask,
  SiVuedotjs,
  SiPrisma,
  SiTypescript,
  SiPython,
  SiKotlin,
  SiCplusplus,
} from "react-icons/si";
import {
  HiOutlinePaintBrush,
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineArrowDownTray,
  HiOutlineCubeTransparent,
  HiOutlineSwatch,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

// Skill categories — content preserved
const skillGroups = [
  {
    key: "design",
    title: "Design Tools I Use",
    Icon: HiOutlinePaintBrush,
    items: [
      { name: "Adobe XD", icon: <SiAdobexd />, tone: "text-pink-500"   },
      { name: "Figma",    icon: <FaFigma />,    tone: "text-violet-400" },
    ],
  },
  {
    key: "tech",
    title: "Technologies I Use",
    Icon: HiOutlineCpuChip,
    items: [
      // ── Modern stack first ──
      { name: "ReactJS",             icon: <FaReact />,                  tone: "text-cyan-400"    },
      { name: "Next.js",             icon: <SiNextdotjs />,              tone: "text-slate-100"   },
      { name: "Node.js (Nest.js)",   icon: <SiNestjs />,                 tone: "text-rose-400"    },
      { name: "PostgreSQL",          icon: <SiPostgresql />,             tone: "text-sky-400"     },
      { name: "AWS",                 icon: <FaAws />,                    tone: "text-amber-400"   },
      { name: "TypeScript",          icon: <SiTypescript />,             tone: "text-sky-400"     },
      { name: "React Native",        icon: <FaReact />,                  tone: "text-cyan-400"    },
      { name: "Vue.js",              icon: <SiVuedotjs />,               tone: "text-emerald-400" },
      { name: "Python",              icon: <SiPython />,                 tone: "text-amber-300"   },
      { name: "FastAPI",             icon: <SiFastapi />,                tone: "text-emerald-400" },
      { name: "Flask",               icon: <SiFlask />,                  tone: "text-slate-100"   },
      { name: "Supabase",            icon: <SiSupabase />,               tone: "text-emerald-400" },
      { name: "Firebase",            icon: <SiFirebase />,               tone: "text-amber-400"   },
      { name: "Prisma / Migrations", icon: <SiPrisma />,                 tone: "text-slate-100"   },
      { name: "Electron",            icon: <SiElectron />,               tone: "text-sky-400"     },
      { name: "Render",              icon: <SiRender />,                 tone: "text-slate-100"   },
      { name: "Terraform",           icon: <SiTerraform />,              tone: "text-violet-400"  },
      { name: "Kotlin",              icon: <SiKotlin />,                 tone: "text-violet-400"  },
      { name: "C++",                 icon: <SiCplusplus />,              tone: "text-sky-400"     },

      // ── Styling & UI libraries ──
      { name: "Tailwind CSS",        icon: <SiTailwindcss />,            tone: "text-sky-400"     },
      { name: "shadcn/ui",           icon: <HiOutlineSwatch />,          tone: "text-slate-100"   },
      { name: "Tabler",              icon: <HiOutlineSquare3Stack3D />,  tone: "text-sky-400"     },
      { name: "Material UI",         icon: <SiMaterialdesign />,         tone: "text-blue-500"    },
      { name: "Chakra UI",           icon: <SiChakraui />,               tone: "text-teal-400"    },
      { name: "Ant Design",          icon: <SiAntdesign />,              tone: "text-rose-400"    },
      { name: "Semantic UI",         icon: <SiSemanticui />,             tone: "text-blue-500"    },

      // ── State / Data ──
      { name: "Redux",               icon: <SiRedux />,                  tone: "text-violet-400"  },
      { name: "Zustand",             icon: <HiOutlineCubeTransparent />, tone: "text-amber-300"   },
      { name: "React Query",         icon: <SiReactquery />,             tone: "text-rose-400"    },
      { name: "GraphQL",             icon: <SiGraphql />,                tone: "text-pink-500"    },
      { name: "Apollo GraphQL",      icon: <SiApollographql />,          tone: "text-violet-400"  },

      // ── UX & misc ──
      { name: "Framer Motion",       icon: <SiFramer />,                 tone: "text-sky-400"     },
      { name: "Styled Components",   icon: <SiStyledcomponents />,       tone: "text-pink-500"    },
      { name: "Git",                 icon: <FaGit />,                    tone: "text-orange-500"  },

      // ── Foundations (older / fundamental) ──
      { name: "JavaScript",          icon: <FaJs />,                     tone: "text-amber-300"   },
      { name: "HTML5",               icon: <FaHtml5 />,                  tone: "text-orange-500"  },
      { name: "CSS3",                icon: <FaCss3 />,                   tone: "text-blue-500"    },
      { name: "SCSS",                icon: <BsFiletypeScss />,           tone: "text-pink-500"    },
      { name: "Bootstrap",           icon: <FaBootstrap />,              tone: "text-violet-500"  },
      { name: "JQuery",              icon: <SiJquery />,                 tone: "text-blue-500"    },
      { name: "AMP",                 icon: <SiAmp />,                    tone: "text-blue-500"    },
    ],
  },
  {
    key: "tools",
    title: "Development & Productivity Tools I Use",
    Icon: HiOutlineWrenchScrewdriver,
    items: [
      { name: "VS Code", icon: <BiLogoVisualStudio />, tone: "text-sky-400"    },
      { name: "GitLab",  icon: <FaGitlab />,           tone: "text-orange-500" },
      { name: "GitHub",  icon: <FaGithub />,           tone: "text-slate-100"  },
      { name: "Notion",  icon: <SiNotion />,           tone: "text-slate-100"  },
      { name: "Postman", icon: <SiPostman />,          tone: "text-orange-400" },
    ],
  },
];

// Stagger variants
const groupContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};
const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const badgesContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
};
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <div className="skills-section relative overflow-hidden px-6 py-20 sm:px-8 lg:py-24">
      {/* Subtle ambient gradient wash */}
      <div aria-hidden="true" className="skills-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="skills-eyebrow">
            <HiOutlineSparkles className="text-[15px]" aria-hidden="true" />
            Skills
          </span>
          <h2 className="skills-title mt-4">
            <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="skills-subtitle mx-auto mt-4 max-w-xl">
            Tools and technologies I use to design, build, and ship reliable
            digital products.
          </p>
        </motion.div>

        {/* Skill groups — no boxes, just headings + floating pills */}
        <motion.div
          variants={groupContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 flex flex-col gap-10 sm:gap-11"
        >
          {skillGroups.map((group) => (
            <motion.section
              key={group.key}
              variants={groupVariants}
              className="skill-group"
            >
              {/* Soft radial glow behind the group */}
              <div aria-hidden="true" className="skill-group-glow" />

              {/* Heading row */}
              <div className="skill-group-head">
                <span className="skill-group-icon">
                  <group.Icon aria-hidden="true" />
                </span>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <span aria-hidden="true" className="skill-group-underline" />

              {/* Floating pill cloud */}
              <motion.ul
                variants={badgesContainer}
                className="skill-badges"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={badgeVariants}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="skill-badge"
                  >
                    <span className={`skill-badge-icon ${item.tone}`} aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          ))}
        </motion.div>

        {/* Resume CTA (preserved, cyan/blue) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/CV_waqasi.pdf"
            download="Waqas_Gul_Resume.pdf"
            className="skills-cta group"
          >
            <HiOutlineArrowDownTray
              className="text-[18px] transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
