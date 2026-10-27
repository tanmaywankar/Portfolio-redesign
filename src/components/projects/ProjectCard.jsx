import React from 'react';
import { SchematicGrobot } from './SchematicGrobot';
import { SchematicChip8 } from './SchematicChip8';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <article
      className="flex flex-col group"
      data-purpose="project-card"
    >
      {/* 1:1 Aspect Ratio Blueprint Canvas Box on TOP — OPEN Cursor Trigger */}
      <div className="mb-6 cursor-pointer" data-cursor="card">
        {project.schematicType === 'grobot' ? (
          <SchematicGrobot
            schematicNumber={project.schematicNumber}
            schematicLabel={project.schematicLabel}
            telemetryStream={project.telemetryStream}
            status={project.status}
            port={project.portOrClock}
          />
        ) : (
          <SchematicChip8
            schematicNumber={project.schematicNumber}
            schematicLabel={project.schematicLabel}
            telemetryStream={project.telemetryStream}
            status={project.status}
            clock={project.portOrClock}
          />
        )}
      </div>

      {/* Title & Category Badge */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        {/* Project Heading Text — OPEN Cursor Trigger */}
        <h3
          data-cursor="card"
          className="font-serif text-2xl sm:text-3xl text-ink dark:text-white font-bold group-hover:text-cobalt dark:group-hover:text-cobaltAccent transition-colors cursor-pointer inline-block"
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

      {/* 1-Line Description */}
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
