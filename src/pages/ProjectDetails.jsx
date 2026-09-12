import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineTrophy,
} from "react-icons/hi2";
import { getProjectBySlug, getNextProject } from "../data/projects";
import { getTechIcon } from "../data/techIcons";
import { scrollToSection } from "../lib/smoothScroll";
import Reveal from "../components/Reveal";

// Order here drives both the section numbers and the "On this page" menu.
const SECTIONS = [
  { id: "overview", label: "Overview", title: "The Problem" },
  { id: "role", label: "My Role", title: "Role & Responsibilities" },
  { id: "stack", label: "Tech Stack", title: "Tech Stack" },
  { id: "features", label: "Key Features", title: "Key Features" },
  { id: "challenge", label: "Challenge", title: "Challenge & Solution" },
  { id: "outcome", label: "Outcome", title: "Result & Outcome" },
];

const pad = (n) => String(n).padStart(2, "0");

const siteHost = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

function Stat({ label, value }) {
  return (
    <div className="pd-stat">
      <dt className="pd-stat-label">{label}</dt>
      <dd className="pd-stat-value">{value}</dd>
    </div>
  );
}

function Section({ id, children }) {
  const index = SECTIONS.findIndex((s) => s.id === id);
  const { label, title } = SECTIONS[index];
  return (
    <section id={id} className="pd-block" aria-labelledby={`${id}-title`}>
      <Reveal amount={0.1}>
        <div className="pd-block-head">
          <span className="pd-block-num">
            {pad(index + 1)} · {label}
          </span>
          <h2 id={`${id}-title`} className="pd-h2">
            {title}
          </h2>
        </div>
        {children}
      </Reveal>
    </section>
  );
}

function ActionButtons({ project, compact = false }) {
  return (
    <>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "project-btn-primary" : "pd-cta-primary"}
        >
          <span>Live Demo</span>
          <HiOutlineArrowTopRightOnSquare className="text-[15px]" aria-hidden="true" />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "project-btn-ghost" : "pd-cta-ghost"}
        >
          <FaGithub className="text-[15px]" aria-hidden="true" />
          <span>Source Code</span>
        </a>
      )}
    </>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const next = getNextProject(slug);

  const heroEndRef = useRef(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  // Sentinel-based, so no scroll listener runs on every frame.
  useEffect(() => {
    const el = heroEndRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [slug]);

  // Highlight the section currently in the reading band.
  useEffect(() => {
    setActiveId(SECTIONS[0].id);
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!project) {
    return (
      <div className="pd-missing">
        <h1 className="projects-title">Project not found</h1>
        <p className="projects-subtitle mt-3">
          That project doesn&apos;t exist, or the link is out of date.
        </p>
        <Link to="/projects" className="pd-cta-primary mt-8">
          <HiOutlineArrowLeft className="text-[15px]" aria-hidden="true" />
          <span>Back to all projects</span>
        </Link>
      </div>
    );
  }

  const statusKey = project.status?.toLowerCase().replace(/\s+/g, "-");
  const host = siteHost(project.liveUrl) ?? project.title;
  const stackPreview =
    project.techStack.slice(0, 2).map((t) => t.name).join(", ") +
    (project.techStack.length > 2 ? ` +${project.techStack.length - 2}` : "");

  return (
    <article className="pd-root relative">
      <div aria-hidden="true" className="projects-ambient pointer-events-none absolute inset-0" />

      {/* Sticky CTA bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="pd-sticky-bar"
          >
            <span className="pd-sticky-title">{project.title}</span>
            <div className="pd-sticky-actions">
              <ActionButtons project={project} compact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:px-8">
        {/* ---------- Hero ---------- */}
        <Reveal as="header" amount={0.1}>
          <Link to="/projects" className="pd-back group/back">
            <HiOutlineArrowLeft
              className="text-[15px] transition-transform duration-300 group-hover/back:-translate-x-1"
              aria-hidden="true"
            />
            <span>All projects</span>
          </Link>

          <div className="pd-hero-grid">
            <div>
              <div className="pd-hero-meta">
                <span className="projects-eyebrow">{project.category}</span>
                {project.status && (
                  <span className={`pd-status pd-status--${statusKey}`}>
                    <span aria-hidden="true" className="pd-status-dot" />
                    {project.status}
                  </span>
                )}
              </div>
              <h1 className="pd-title">{project.title}</h1>
              <p className="pd-tagline">{project.tagline}</p>
            </div>

            <div className="pd-cta-row">
              <ActionButtons project={project} />
            </div>
          </div>
        </Reveal>

        {/* ---------- Cover in a browser frame ---------- */}
        <Reveal className="pd-cover-frame" amount={0.1}>
          <div className="pd-browser-bar" aria-hidden="true">
            <span className="pd-browser-dots">
              <span />
              <span />
              <span />
            </span>
            <span className="pd-browser-url">{host}</span>
            <span />
          </div>
          <div className="pd-cover">
            <motion.img
              layoutId={`project-cover-${project.slug}`}
              src={project.coverImage}
              alt={`${project.title} cover`}
              className="pd-cover-img"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal amount={0.1}>
          <dl className="pd-stats">
            <Stat label="Role" value={project.role} />
            <Stat label="Duration" value={project.duration} />
            <Stat label="Type" value={project.type} />
            <Stat label="Stack" value={stackPreview} />
          </dl>
        </Reveal>

        {/* Sentinel: sticky bar appears once this scrolls past the top */}
        <div ref={heroEndRef} aria-hidden="true" className="h-px w-full" />

        {/* ---------- Body: sticky menu + content ---------- */}
        <div className="pd-layout">
          <aside className="pd-aside">
            <nav className="pd-toc" aria-label="On this page">
              <p className="pd-toc-title">On this page</p>
              <ol className="pd-toc-list">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      // Clear the navbar plus the sticky action bar below it.
                      onClick={() => scrollToSection(s.id, { offset: -150 })}
                      className={`pd-toc-link ${activeId === s.id ? "is-active" : ""}`}
                      aria-current={activeId === s.id ? "true" : undefined}
                    >
                      <span className="pd-toc-num">{pad(i + 1)}</span>
                      <span>{s.label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="pd-main">
            <Section id="overview">
              <p className="pd-lead">{project.problem}</p>
            </Section>

            <Section id="role">
              <ul className="pd-resp-grid">
                {project.responsibilities.map((item) => (
                  <li key={item} className="pd-resp">
                    <HiOutlineCheckCircle className="pd-resp-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="stack">
              <ul className="pd-tech-grid">
                {project.techStack.map((tech) => (
                  <li key={tech.name} className="pd-tech-card">
                    <span className="pd-tech-icon" aria-hidden="true">
                      {getTechIcon(tech.icon)}
                    </span>
                    <div>
                      <p className="pd-tech-name">{tech.name}</p>
                      <p className="pd-tech-reason">{tech.reason}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="features">
              <div className="pd-features">
                {project.features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className={`pd-feature ${i % 2 === 1 ? "pd-feature--reverse" : ""}`}
                  >
                    <div className="pd-feature-media">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                        decoding="async"
                        className="pd-feature-img"
                      />
                    </div>
                    <div className="pd-feature-copy">
                      <span className="pd-feature-num">Feature {pad(i + 1)}</span>
                      <h3 className="pd-h3">{feature.title}</h3>
                      <p className="pd-body mt-3">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="challenge">
              <div className="pd-cs-grid">
                <div className="pd-cs-card">
                  <span className="pd-cs-icon pd-cs-icon--challenge" aria-hidden="true">
                    <HiOutlineExclamationTriangle />
                  </span>
                  <h3 className="pd-cs-label">The challenge</h3>
                  <p className="pd-body mt-2">{project.challenge}</p>
                </div>
                <div className="pd-cs-card pd-cs-card--solution">
                  <span className="pd-cs-icon pd-cs-icon--solution" aria-hidden="true">
                    <HiOutlineLightBulb />
                  </span>
                  <h3 className="pd-cs-label">How I solved it</h3>
                  <p className="pd-body mt-2">{project.solution}</p>
                </div>
              </div>
            </Section>

            <Section id="outcome">
              <div className="pd-outcome">
                <span className="pd-outcome-icon" aria-hidden="true">
                  <HiOutlineTrophy />
                </span>
                <p className="pd-body">{project.outcome}</p>
              </div>
            </Section>
          </div>
        </div>

        {/* ---------- Next project ---------- */}
        {next && next.slug !== project.slug && (
          <Reveal className="pd-next-wrap">
            <Link to={`/projects/${next.slug}`} className="pd-next-card">
              <div className="pd-next-copy">
                <span className="pd-next-label">Next project</span>
                <span className="pd-next-title">
                  {next.title}
                  <HiOutlineArrowRight className="pd-next-arrow" aria-hidden="true" />
                </span>
                <span className="pd-next-tagline">{next.tagline}</span>
              </div>
              <div className="pd-next-media">
                <img src={next.coverImage} alt="" loading="lazy" decoding="async" />
              </div>
            </Link>
          </Reveal>
        )}
      </div>
    </article>
  );
}
