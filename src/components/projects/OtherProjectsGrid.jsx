import React from 'react';
import {
  OTHER_PROJECTS,
  OPEN_SOURCE_CONTRIBUTIONS,
} from '../../data/projects';
import { KeyRound, ExternalLink } from 'lucide-react';

const CompactCard = ({ project }) => {
  const renderThumbnail = () => {
    switch (project.thumbnailVisual) {
      case 'key':
        return (
          <div className="w-full sm:w-28 sm:h-28 h-24 border-2 border-ink dark:border-white bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 flex flex-col items-center justify-center p-2 relative overflow-hidden">
            <span className="font-mono text-[9px] text-ink/70 dark:text-neutral-400 absolute top-1 left-1">
              {project.thumbnailTag}
            </span>
            <div className="w-8 h-8 border-2 border-ink dark:border-white flex items-center justify-center font-mono text-[10px] font-bold bg-white dark:bg-black text-cobalt dark:text-cobaltAccent shadow-sm">
              <KeyRound className="w-4 h-4 text-cobalt dark:text-cobaltAccent" />
            </div>
            <div className="w-full border-t border-dashed border-ink dark:border-white/40 mt-2" />
            <span className="font-mono text-[8px] text-subtle dark:text-neutral-400 mt-1 font-semibold">
              {project.thumbnailDetail}
            </span>
          </div>
        );
      case 'serial':
        return (
          <div className="w-full sm:w-28 sm:h-28 h-24 border-2 border-ink dark:border-white bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 flex flex-col items-center justify-center p-2 relative overflow-hidden">
            <span className="font-mono text-[9px] text-ink/70 dark:text-neutral-400 absolute top-1 left-1">
              {project.thumbnailTag}
            </span>
            <div className="flex gap-1.5 items-end justify-center h-8">
              <span className="w-2.5 h-5 bg-ink dark:bg-white" />
              <span className="w-2.5 h-8 bg-cobalt dark:bg-cobaltAccent" />
              <span className="w-2.5 h-4 bg-ink dark:bg-white" />
            </div>
            <span className="font-mono text-[8px] text-subtle dark:text-neutral-400 mt-2 font-semibold">
              {project.thumbnailDetail}
            </span>
          </div>
        );
      case 'gantt':
        return (
          <div className="w-full sm:w-28 sm:h-28 h-24 border-2 border-ink dark:border-white bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 flex flex-col justify-center p-2 relative overflow-hidden">
            <span className="font-mono text-[9px] text-ink/70 dark:text-neutral-400 absolute top-1 left-1">
              {project.thumbnailTag}
            </span>
            <div className="space-y-1.5 w-full my-auto px-1">
              <div className="w-4/5 h-2 bg-ink dark:bg-white" />
              <div className="w-3/5 ml-3 h-2 bg-cobalt dark:bg-cobaltAccent" />
              <div className="w-1/2 ml-5 h-2 border border-ink dark:border-white bg-white dark:bg-black" />
            </div>
            <span className="font-mono text-[8px] text-subtle dark:text-neutral-400 text-right font-semibold">
              {project.thumbnailDetail}
            </span>
          </div>
        );
      case 'wave':
        return (
          <div className="w-full sm:w-28 sm:h-28 h-24 border-2 border-ink dark:border-white bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 flex flex-col items-center justify-center p-2 relative overflow-hidden">
            <span className="font-mono text-[9px] text-ink/70 dark:text-neutral-400 absolute top-1 left-1">
              {project.thumbnailTag}
            </span>
            <svg
              className="w-full h-8 stroke-ink dark:stroke-white mt-2"
              fill="none"
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 15 Q 12 3, 25 15 T 50 15 T 75 15 T 100 15"
                strokeWidth="1.5"
              />
              <path
                d="M 0 15 Q 8 8, 16 15 T 32 15 T 48 15"
                stroke="#002BFF"
                strokeDasharray="2 2"
                strokeWidth="1"
              />
            </svg>
            <span className="font-mono text-[8px] text-subtle dark:text-neutral-400 mt-1 font-semibold">
              {project.thumbnailDetail}
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article
      className="border-2 border-ink dark:border-white p-4 bg-white dark:bg-charcoalCard brutalist-card-shadow flex flex-col sm:flex-row gap-4 group"
      data-purpose="compact-project-card"
    >
      {/* Thumbnail Left — OPEN Cursor Trigger */}
      <div className="cursor-pointer" data-cursor="card">
        {renderThumbnail()}
      </div>

      {/* Info Right */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-baseline justify-between gap-1 mb-1">
            {/* Heading Text — OPEN Cursor Trigger */}
            <h4
              data-cursor="card"
              className="font-serif text-base sm:text-lg font-bold text-ink dark:text-white leading-snug group-hover:text-cobalt dark:group-hover:text-cobaltAccent transition-colors cursor-pointer inline-block"
            >
              {project.title}
            </h4>
            <span
              data-cursor="morph"
              className="font-mono text-[9px] uppercase px-1.5 py-0.5 border border-ink dark:border-white bg-white dark:bg-charcoalCard text-ink dark:text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors font-bold select-none cursor-pointer"
            >
              {project.category}
            </span>
          </div>
          {/* Description (Normal Cursor) */}
          <p className="text-xs text-black/85 dark:text-neutral-300 leading-relaxed mb-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-ink/10 dark:border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                data-cursor="morph"
                className="font-mono text-[10px] px-1.5 py-0.5 border border-ink dark:border-white/70 bg-white dark:bg-charcoalCard text-ink dark:text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors font-medium select-none cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.linkUrl && (
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="p-1 border border-ink dark:border-white text-ink dark:text-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors"
              data-cursor="morph"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const OtherProjectsGrid = () => {
  return (
    <section
      className="max-w-6xl mx-auto px-6 sm:px-10 pb-20 pt-4"
      data-purpose="other-projects-and-contributions"
      id="other-projects"
    >
      {/* Section Title */}
      <div className="border-b-2 border-ink dark:border-white pb-3 mb-10 flex justify-between items-baseline">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-black tracking-tight text-ink dark:text-white uppercase">
          OTHER PROJECTS &amp; CONTRIBUTIONS
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-subtle dark:text-neutral-400 font-semibold">
          [MANGA-GRID ARCHIVE]
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {/* LEFT COLUMN: OTHER PROJECTS */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 border-b-2 border-ink dark:border-white pb-2.5 mb-6">
            <span className="w-3 h-3 bg-cobalt inline-block" />
            <h3 className="font-mono text-lg font-bold tracking-tight text-ink dark:text-white uppercase">
              OTHER PROJECTS
            </h3>
          </div>
          <div className="space-y-6">
            {OTHER_PROJECTS.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: OPEN SOURCE CONTRIBUTIONS */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 border-b-2 border-ink dark:border-white pb-2.5 mb-6">
            <span className="w-3 h-3 bg-ink dark:bg-white inline-block" />
            <h3 className="font-mono text-lg font-bold tracking-tight text-ink dark:text-white uppercase">
              OPEN SOURCE CONTRIBUTIONS
            </h3>
          </div>
          <div className="space-y-6">
            {OPEN_SOURCE_CONTRIBUTIONS.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
