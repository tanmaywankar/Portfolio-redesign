import React from 'react';
import { TOP_PROJECTS } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const TopProjects = () => {
  return (
    <section
      className="max-w-6xl mx-auto px-6 sm:px-10 py-16"
      data-purpose="top-projects"
      id="top-projects"
    >
      {/* Section Heading Banner */}
      <div className="border-b-2 border-ink dark:border-white pb-3 mb-12 flex justify-between items-baseline">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-tight text-ink dark:text-white uppercase">
          TOP PROJECTS
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-subtle dark:text-neutral-400 font-semibold">
          [01 — 02 / SELECTED WORK]
        </span>
      </div>

      {/* Premier Top 2 Projects in 2 Columns Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pb-14 border-b-2 border-ink dark:border-white">
        {TOP_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
