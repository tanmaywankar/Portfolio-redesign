import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="flex flex-col group"
      data-purpose="project-card"
    >
      {/* 1:1 Aspect Ratio Canvas Box on TOP — 2px Border & Neutral Grey Canvas */}
      <div
        className="mb-6 cursor-pointer aspect-square w-full border-2 border-black dark:border-white bg-[#666666]/10 dark:bg-[#666666]/20 relative overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 brutalist-card-shadow transition-colors duration-250"
        data-cursor="card"
        onClick={() => {
          const destination = project.liveUrl || project.githubUrl;
          if (destination) window.open(destination, '_blank', 'noopener,noreferrer');
        }}
      >
        {/* Technical Stamp Header — Plain typography, no box or borders */}
        <div className="flex justify-between items-center font-mono text-[10px] text-ink/80 dark:text-neutral-400 z-10 select-none tracking-widest uppercase">
          <span className="font-bold">{project.schematicNumber}</span>
          <span className="font-semibold">{project.schematicLabel}</span>
        </div>

        {/* Inner Viewport Frame with Dedicated 2px Border & Paper Manga Grayscale */}
        <div className="relative w-full flex-1 my-2 border-2 border-black dark:border-white bg-white/40 dark:bg-black/30 overflow-hidden flex items-center justify-center p-3">
          {project.imageSrc && !imageError ? (
            <img
              src={project.imageSrc}
              alt={project.title}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain filter grayscale contrast-[1.25] brightness-[1.08] dark:brightness-[0.92] group-hover:filter-none group-hover:brightness-100 transition-[filter] duration-300 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-subtle/40 dark:border-white/30 p-4 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-subtle dark:text-neutral-400 font-bold">
                [{project.title}]
              </span>
              <span className="font-mono text-[10px] text-subtle dark:text-neutral-500 mt-2">
                1:1 VIEWPORT PREVIEW
              </span>
            </div>
          )}
        </div>

        {/* Technical Stamp Footer — Plain typography, no box or borders */}
        <div className="flex justify-between items-center font-mono text-[9px] text-ink/80 dark:text-neutral-400 z-10 select-none tracking-wider uppercase">
          <span className="font-semibold">{project.status}</span>
          <span className="font-medium">{project.portOrClock}</span>
        </div>
      </div>

      {/* Title & Category Badge */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        {/* Project Heading Text — OPEN Cursor Trigger */}
        <h3
          data-cursor="card"
          onClick={() => {
            const destination = project.liveUrl || project.githubUrl;
            if (destination) window.open(destination, '_blank', 'noopener,noreferrer');
          }}
          className="font-serif text-2xl sm:text-3xl max-w-80 text-ink dark:text-white font-bold group-hover:text-cobalt dark:group-hover:text-cobaltAccent transition-colors cursor-pointer inline-block"
        >
          {project.title}
        </h3>
        <span
          data-cursor="morph"
          className="font-mono text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 border border-ink dark:border-white bg-white dark:bg-charcoalCard text-ink dark:text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors cursor-pointer select-none"
        >
          {project.category}
        </span>
      </div>

      {/* Timestamp */}
      <p className="font-mono text-xs text-subtle dark:text-neutral-400 mb-3 font-semibold">
        {project.period}
      </p>

      {/* Description */}
      <p className="text-sm text-black/85 dark:text-neutral-300 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Stack Tags & Action Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-2">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              data-cursor="morph"
              className="font-mono text-[11px] px-2 py-0.5 border border-ink dark:border-white/70 bg-white dark:bg-charcoalCard text-ink dark:text-white font-medium hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors cursor-pointer select-none"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 border border-ink dark:border-white text-ink dark:text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors"
              data-cursor="morph"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="p-1.5 border border-ink dark:border-white text-ink dark:text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors"
              data-cursor="morph"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
