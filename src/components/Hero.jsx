import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoDiamond } from "react-icons/io5";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
} from "react-icons/si";

const titles = [
  "I am Full Stack software Engineer",
  "I am Full Stack Developer",
  "I am full stack mobile app developer",
  "I am Frontend Specialist",
  "I am WordPress Developer",
  "I am Web Designer",
];

const skills = [
  { name: "MongoDB",      Icon: SiMongodb,    iconClass: "text-emerald-400",      pos: "top-0 lg:left-10 -left-3 sm:left-0",         delay: 0 },
  { name: "Express.js",   Icon: SiExpress,    iconClass: "text-slate-300",        pos: "top-16 lg:left-0 -left-10 sm:left-0",        delay: 0.2 },
  { name: "ReactJS",      Icon: SiReact,      iconClass: "text-cyan-400",         pos: "bottom-16 lg:left-0 -left-5 sm:left-0",      delay: 0.4 },
  { name: "Node.js",      Icon: SiNodedotjs,  iconClass: "text-emerald-500",      pos: "bottom-0 lg:left-10 -left-2 sm:left-0",      delay: 0.6 },
  { name: "Next.js",      Icon: SiNextdotjs,  iconClass: "text-slate-100",        pos: "top-0 lg:right-10 -right-5 sm:right-0",      delay: 0 },
  { name: "Redux",        Icon: SiRedux,      iconClass: "text-violet-400",       pos: "top-16 lg:right-0 -right-6 sm:right-0",      delay: 0.2 },
  { name: "Tailwind CSS", Icon: SiTailwindcss,iconClass: "text-sky-400",          pos: "bottom-16 lg:right-0 -right-8 sm:right-0",   delay: 0.4 },
  { name: "JavaScript",   Icon: SiJavascript, iconClass: "text-amber-300",        pos: "bottom-0 lg:right-10 -right-5 sm:right-0",   delay: 0.6 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDark, setIsDark] = useState(
    typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );
  const canvasRef = useRef(null);
  const isDarkRef = useRef(isDark);
  const prefersReducedMotion = useReducedMotion();

  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Keep ref in sync so the canvas RAF loop reads the latest theme without restart
  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  // Watch <html> class for dark-mode toggle so particles re-tint
  useEffect(() => {
    if (typeof document === "undefined") return;
    const target = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(target.classList.contains("dark"));
    });
    observer.observe(target, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Particle / network background — cyan + purple, theme-aware, subtle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const PALETTES = {
      dark: {
        dots: [
          "rgba(56, 189, 248, 0.55)",
          "rgba(167, 139, 250, 0.45)",
          "rgba(148, 163, 184, 0.35)",
        ],
        line: (alpha) => `rgba(148, 163, 184, ${alpha * 0.35})`,
      },
      light: {
        dots: [
          "rgba(37, 99, 235, 0.35)",
          "rgba(124, 58, 237, 0.30)",
          "rgba(100, 116, 139, 0.25)",
        ],
        line: (alpha) => `rgba(15, 23, 42, ${alpha * 0.18})`,
      },
    };

    const particleCount = 60;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.6;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.colorIndex = Math.floor(Math.random() * 3);
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
      draw(palette) {
        ctx.fillStyle = palette.dots[this.colorIndex];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const connectParticles = (palette) => {
      const maxDistance = 110;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.strokeStyle = palette.line(1 - dist / maxDistance);
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      const palette = isDarkRef.current ? PALETTES.dark : PALETTES.light;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.update();
        p.draw(palette);
      }
      connectParticles(palette);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (inViewLeft) controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    if (inViewRight) controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
  }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

  useEffect(() => {
    const currentTitle = titles[index];
    if (isDeleting) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (charIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + currentTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 1500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, index, isDeleting]);

  const floatAnim = prefersReducedMotion ? {} : { y: [0, -8, 0] };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-between overflow-hidden bg-[#F8FAFC] px-10 py-16 text-slate-900 dark:bg-[#0B1120] dark:text-slate-100 sm:flex-row md:h-[50vh] lg:h-[95vh] lg:px-20 lg:py-16"
    >
      {/* Network / particle background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full"
        style={{ background: "transparent" }}
      />

      {/* Soft ambient gradient wash to anchor the section over the global liquid bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-70 dark:opacity-90"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, color-mix(in srgb, var(--hero-accent, #38BDF8) 12%, transparent), transparent 70%), radial-gradient(50% 40% at 15% 85%, color-mix(in srgb, var(--hero-accent-2, #A78BFA) 12%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex h-[570px] w-full flex-col items-center justify-between sm:flex-row lg:h-[250px]">
        {/* Left Section */}
        <motion.div
          ref={refLeft}
          initial={{ x: -100, opacity: 0 }}
          animate={controlsLeft}
          className="my-8 mb-6 w-full space-y-5 text-left md:mb-0 md:w-1/2"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hello! I'm{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#A78BFA]">
              Engr Waqas Gul
            </span>
          </h1>

          <motion.h2
            className="min-h-[1.75rem] text-lg font-semibold text-slate-600 dark:text-slate-300 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-slate-700 dark:text-slate-200">{text}</span>
            <span
              aria-hidden="true"
              className="hero-cursor ml-0.5 text-[#2563EB] dark:text-[#38BDF8]"
            >
              |
            </span>
          </motion.h2>

          <p className="font-mono text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            With{" "}
            <span className="hero-pill inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold text-[#2563EB] dark:text-[#38BDF8]">
              3+ Years
            </span>{" "}
            of Experience
          </p>

          <div className="mt-8 mb-4 flex flex-wrap gap-4">
            <a
              href="/CV_waqasi.pdf"
              download="Waqas_Gul_Resume.pdf"
              className="hero-btn-primary group inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:px-6"
            >
              <FaDownload className="mr-2 transition-transform duration-300 group-hover:translate-y-0.5" />
              Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=waqasgul369@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-ghost group inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#7C3AED]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:focus-visible:ring-[#A78BFA]/60"
            >
              Hire Me
              <IoDiamond className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Section — Profile + floating skill badges */}
        <motion.div
          ref={refRight}
          initial={{ x: 0, opacity: 1 }}
          animate={controlsRight}
          className="relative mt-4 flex h-full w-full flex-col items-center font-mono md:mt-0 md:w-1/2 lg:mt-10"
        >
          {/* Soft cyan/purple glow behind the portrait */}
          <div
            aria-hidden="true"
            className="hero-portrait-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          {/* Gradient ring + portrait */}
          <div className="hero-portrait-ring relative z-10 mt-4 grid h-44 w-44 place-items-center rounded-full p-[2px] sm:mt-0 sm:h-64 sm:w-64">
            <img
              src="/waqas.png"
              alt="Portrait of Engr Waqas Gul, Full Stack Developer"
              className="h-full w-full rounded-full bg-slate-100 object-cover transition-transform duration-300 hover:scale-[1.04] dark:bg-[#111827]"
            />
          </div>

          {/* Floating Skill Badges */}
          {skills.map(({ name, Icon, iconClass, pos, delay }) => (
            <motion.div
              key={name}
              className={`hero-badge absolute z-10 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium ${pos}`}
              animate={floatAnim}
              transition={{ repeat: Infinity, duration: 2.4, delay, ease: "easeInOut" }}
            >
              <Icon className={`text-xl ${iconClass}`} aria-hidden="true" />
              <span>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
