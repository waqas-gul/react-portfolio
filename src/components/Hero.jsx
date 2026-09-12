import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaBriefcase,
  FaCode,
  FaUsers,
} from "react-icons/fa6";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineArrowDownTray,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiFastapi,
  SiRedux,
  SiNestjs,
  SiElectron,
} from "react-icons/si";
import RoleRotator from "./RoleRotator";

// Kept short (≤ 24 chars) so each fits on one line on small phones.
const titles = [
  "Full-Stack Engineer",
  "IoT Solutions Engineer",
  "Cloud & DevOps Engineer",
  "Cross-Platform Developer",
];

const socials = [
  { name: "GitHub",    Icon: FaGithub,    href: "https://github.com/" }, // TODO: replace with real handle
  { name: "LinkedIn",  Icon: FaLinkedin,  href: "https://www.linkedin.com/in/waqas-gul-b7580826b/" },
  { name: "Twitter",   Icon: FaXTwitter,  href: "https://x.com/" },       // TODO: replace with real handle
  { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/w_a_q_a_s_i/" },
];

// Badges orbit the portrait. `angle` is in degrees, 0° = top, clockwise.
// We skip the bottom 90° arc (135°→225°) so badges never collide with the
// stats card sitting under the portrait.
// 10 badges spread across the upper 270° arc (skipping the bottom 90°
// where the stats card sits). Step = 30° between badges. All visible
// at every breakpoint — orbit + pill sizes adapt via CSS.
const skills = [
  // LEFT half (top → bottom)
  { name: "AWS",          Icon: FaAws,        iconClass: "text-amber-400",   angle: 345, delay: 0.00 },
  { name: "React Native", Icon: SiReact,      iconClass: "text-cyan-400",    angle: 315, delay: 0.08 },
  { name: "ReactJS",      Icon: SiReact,      iconClass: "text-cyan-400",    angle: 285, delay: 0.16 },
  { name: "Nest.js",      Icon: SiNestjs,     iconClass: "text-rose-400",    angle: 255, delay: 0.24 },
  { name: "Node.js",      Icon: SiNodedotjs,  iconClass: "text-emerald-500", angle: 225, delay: 0.32 },
  // RIGHT half (top → bottom)
  { name: "Next.js",      Icon: SiNextdotjs,  iconClass: "text-slate-100",   angle: 15,  delay: 0.04 },
  { name: "Electron",     Icon: SiElectron,   iconClass: "text-sky-400",     angle: 45,  delay: 0.12 },
  { name: "Redux",        Icon: SiRedux,      iconClass: "text-violet-400",  angle: 75,  delay: 0.20 },
  { name: "PostgreSQL",   Icon: SiPostgresql, iconClass: "text-sky-400",     angle: 105, delay: 0.28 },
  { name: "FastAPI",      Icon: SiFastapi,    iconClass: "text-emerald-400", angle: 135, delay: 0.36 },
];

const stats = [
  { value: "3+",  label: "Years Experience",   Icon: FaBriefcase },
  { value: "20+", label: "Projects Completed", Icon: FaCode },
  { value: "10+", label: "Happy Clients",      Icon: FaUsers },
];

const Hero = () => {
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
    let animationFrameId = null;
    let width = 0;
    let height = 0;

    // Cap DPR at 2 — beyond that the cost doubles for no visible gain.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

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

    // Fewer particles on phones — the link pass is quadratic, so halving the
    // count quarters the work.
    const particleCount = width < 768 ? 28 : 60;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.6;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.colorIndex = Math.floor(Math.random() * 3);
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > height || this.y < 0) this.speedY = -this.speedY;
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const MAX_DIST = 110;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
    // Lines are bucketed by opacity so each bucket is one path and one
    // stroke() call, instead of a stroke() per connected pair.
    const BUCKETS = 4;

    const connectParticles = (palette) => {
      const paths = Array.from({ length: BUCKETS }, () => new Path2D());
      let drew = false;

      for (let a = 0; a < particles.length; a++) {
        const pa = particles[a];
        for (let b = a + 1; b < particles.length; b++) {
          const pb = particles[b];
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const distSq = dx * dx + dy * dy;
          // Compare squared distances — no Math.sqrt in the hot loop.
          if (distSq >= MAX_DIST_SQ) continue;

          const strength = 1 - distSq / MAX_DIST_SQ;
          const bucket = Math.min(BUCKETS - 1, (strength * BUCKETS) | 0);
          const path = paths[bucket];
          path.moveTo(pa.x, pa.y);
          path.lineTo(pb.x, pb.y);
          drew = true;
        }
      }

      if (!drew) return;
      ctx.lineWidth = 0.7;
      for (let i = 0; i < BUCKETS; i++) {
        ctx.strokeStyle = palette.line((i + 0.5) / BUCKETS);
        ctx.stroke(paths[i]);
      }
    };

    // The drift is slow enough that 30fps is indistinguishable from 60 —
    // and it halves the work during the exact scroll the Hero is visible for.
    const FRAME_MS = 1000 / 30;
    let lastFrame = 0;

    const animate = (now = 0) => {
      animationFrameId = requestAnimationFrame(animate);
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;

      const palette = isDarkRef.current ? PALETTES.dark : PALETTES.light;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) p.update();

      // Dots grouped by colour so fillStyle is set 3 times, not once per dot.
      for (let c = 0; c < palette.dots.length; c++) {
        ctx.fillStyle = palette.dots[c];
        ctx.beginPath();
        for (const p of particles) {
          if (p.colorIndex !== c) continue;
          ctx.moveTo(p.x + p.size, p.y);
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      connectParticles(palette);
    };

    const play = () => {
      if (animationFrameId === null) animationFrameId = requestAnimationFrame(animate);
    };
    const pause = () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    // Only run while the Hero is actually on screen and the tab is focused.
    let onScreen = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !document.hidden) play();
        else pause();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const onVisibility = () => {
      if (document.hidden || !onScreen) pause();
      else play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      pause();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (inViewLeft) controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    if (inViewRight) controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
  }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);


  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] px-5 pt-24 pb-12 text-slate-900 dark:bg-[#0B1120] dark:text-slate-100 sm:px-8 sm:pt-28 sm:pb-14 md:min-h-0 md:pt-36 md:pb-20 lg:min-h-[100svh] lg:px-12 lg:pb-16 lg:pt-28 xl:px-20"
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
        {/* Left Section */}
        <motion.div
          ref={refLeft}
          initial={{ x: -60, opacity: 0 }}
          animate={controlsLeft}
          className="mx-auto w-full max-w-[560px] text-left md:mx-0 md:w-1/2 md:max-w-[520px] lg:max-w-[560px]"
        >
          {/* Intro line */}
          <p className="text-[20px] font-semibold text-[#64748B] dark:text-[#94A3B8] sm:text-[22px]">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="mt-1 text-[44px] font-extrabold leading-[1.05] tracking-tight sm:text-[56px] lg:text-[64px]">
            {/* Professional title — smaller and muted so the name stays the focus */}
            <abbr
              title="Engineer"
              className="mr-2 align-baseline text-[0.5em] font-bold tracking-normal text-[#64748B] no-underline dark:text-[#94A3B8] sm:mr-3"
            >
              Engr.
            </abbr>
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#A78BFA]">
              Waqas Gul
            </span>
          </h1>

          {/* Role rotator */}
          <motion.h2
            className="mt-2 text-[20px] font-bold text-[#7C3AED] dark:text-[#A78BFA] sm:text-[24px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RoleRotator roles={titles} />
          </motion.h2>

          {/* Description */}
          <p className="mt-[18px] max-w-[520px] text-[15px] leading-[1.7] text-[#64748B] dark:text-[#94A3B8] sm:text-[17px]">
            I build end-to-end products, from web, mobile and desktop apps to
            scalable APIs, cloud infrastructure with automated CI/CD, and IoT
            platforms that decode device telemetry and ship OTA firmware
            updates.
          </p>

          {/* Experience */}
          <p className="mt-4 text-[15px] text-[#64748B] dark:text-[#94A3B8] sm:text-[16px]">
            <span className="hero-pill inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[13px] font-semibold text-[#2563EB] dark:text-[#38BDF8]">
              3+ Years
            </span>{" "}
            of production experience
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="/CV_waqasi.pdf"
              download="Waqas_Gul_Resume.pdf"
              className="hero-btn-primary group inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <HiOutlineArrowDownTray className="mr-2 text-[18px] transition-transform duration-300 group-hover:translate-y-0.5" />
              Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=engrwaqasgul@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-ghost group inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#7C3AED]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:focus-visible:ring-[#A78BFA]/60"
            >
              Hire Me
              <HiOutlinePaperAirplane className="ml-2 text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Social icons */}
          <ul className="mt-7 flex items-center gap-[22px]" aria-label="Social profiles">
            {socials.map(({ name, Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="hero-social inline-flex h-9 w-9 items-center justify-center rounded-md text-[20px] outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#2563EB]/60 dark:focus-visible:ring-[#38BDF8]/60"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section — Cutout portrait + soft halo + compact stats card + floating badges */}
        <motion.div
          ref={refRight}
          initial={{ x: 0, opacity: 1 }}
          animate={controlsRight}
          className="relative flex w-full flex-col items-center md:w-1/2"
        >
          <div className="hero-stage relative flex w-full max-w-[560px] flex-col items-center">
            {/* Portrait area — visible circle bg + halo + cutout + orbiting badges */}
            <div className="hero-portrait-area relative flex w-full justify-center">
              {/* Soft outer halo */}
              <div
                aria-hidden="true"
                className="hero-portrait-halo pointer-events-none absolute"
              />

              {/* Visible circular background behind the head/torso */}
              <div
                aria-hidden="true"
                className="hero-portrait-circle pointer-events-none absolute"
              />

              {/* Cutout portrait */}
              <img
                src="/waqas.webp"
                alt="Portrait of Engr. Waqas Gul, Full-Stack Engineer"
                width="500"
                height="500"
                fetchPriority="high"
                decoding="async"
                className="hero-portrait-cutout relative z-10 h-[220px] w-auto object-contain transition-transform duration-500 hover:scale-[1.02] sm:h-[330px] lg:h-[370px]"
              />

              {/* Orbiting Skill Badges — outer wrapper handles position, inner motion handles float */}
              {skills.map(({ name, Icon, iconClass, angle, delay }) => (
                <div
                  key={name}
                  className="hero-orbit absolute z-20"
                  style={{
                    top: "var(--orbit-cy, 58%)",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--orbit-r))) rotate(${-angle}deg)`,
                  }}
                >
                  {/* Float is a CSS keyframe, not a JS animation: ten Framer
                      Motion loops ran on the main thread every frame. */}
                  <div
                    className="hero-badge inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs"
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <Icon className={`text-sm sm:text-base ${iconClass}`} aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact stats glass card with icons — sits below the orbiting badges */}
            <div
              className="hero-stats relative z-30 mt-8 sm:mt-10 lg:mt-12"
              role="list"
              aria-label="Quick stats"
            >
              {stats.map(({ value, label, Icon }, i) => (
                <React.Fragment key={label}>
                  <div className="hero-stat" role="listitem">
                    <Icon className="hero-stat-icon" aria-hidden="true" />
                    <span className="hero-stat-value">{value}</span>
                    <span className="hero-stat-label">{label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <span aria-hidden="true" className="hero-stat-divider" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
