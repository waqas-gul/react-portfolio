import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineArrowTopRightOnSquare, HiOutlineArrowRight } from "react-icons/hi2";
import { getTechIcon } from "../data/techIcons";

export const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const MAX_TAGS = 4;

export default function ProjectCard({ project, layout = false }) {
  const navigate = useNavigate();
  const to = `/projects/${project.slug}`;

  const visibleTechs = project.techStack.slice(0, MAX_TAGS);
  const extraCount = project.techStack.length - visibleTechs.length;

  // The whole card is a click target for pointer users. Keyboard users get
  // the real link on the title, which avoids nesting <a> inside <a>.
  const openDetails = (e) => {
    if (e.target.closest("a")) return;
    navigate(to);
  };

  return (
    <motion.article
      layout={layout}
      variants={cardVariants}
      onClick={openDetails}
      className="project-card project-card--clickable group"
    >
      <div className="project-image-wrap">
        <motion.img
          layoutId={`project-cover-${project.slug}`}
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="project-image"
        />
        <div aria-hidden="true" className="project-image-overlay" />
        {/* Visual cue only — keyboard/screen-reader users reach details via the title link. */}
        <span aria-hidden="true" className="project-view-hint">
          <span>View Details</span>
          <HiOutlineArrowRight className="project-view-hint-arrow" />
        </span>
        {project.status && (
          <span className={`project-status project-status--${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
            {project.status}
          </span>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">
          <Link to={to} className="project-title-link">
            {project.title}
          </Link>
        </h3>
        <p className="project-tagline">{project.tagline}</p>

        <ul className="project-tags">
          {visibleTechs.map((tech) => (
            <li key={tech.name} className="project-tag">
              <span className="project-tag-icon">{getTechIcon(tech.icon)}</span>
              <span>{tech.name}</span>
            </li>
          ))}
          {extraCount > 0 && (
            <li className="project-tag project-tag--more">+{extraCount}</li>
          )}
        </ul>

        <div className="project-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-btn-ghost"
              aria-label={`${project.title} on GitHub`}
            >
              <FaGithub className="text-[15px]" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-btn-primary group/btn"
              aria-label={`Visit ${project.title}`}
            >
              <span>Visit</span>
              <HiOutlineArrowTopRightOnSquare
                className="text-[15px] transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
