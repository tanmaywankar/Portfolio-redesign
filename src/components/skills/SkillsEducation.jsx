import React from 'react';
import { SKILL_CATEGORIES, EDUCATION_DATA } from '../../data/skills';
import { SkillCategory } from './SkillCategory';
import { EducationCard } from './EducationCard';

export const SkillsEducation = () => {
  return (
    <section
      className="bg-white dark:bg-charcoal text-ink dark:text-white py-20 px-6 sm:px-10 border-t-2 border-ink dark:border-white transition-colors duration-250"
      data-purpose="skills-and-credentials"
      id="skills-education"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title Header with Deep Cobalt Blue Accent Stamp */}
        <div className="border-b-2 border-ink dark:border-white pb-4 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 bg-cobalt" />
              <span className="font-mono text-xs text-subtle dark:text-neutral-400 uppercase tracking-widest font-semibold">
                TECHNICAL STACK &amp; ACADEMICS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-tight text-ink dark:text-white uppercase">
              LANGUAGES &amp; SKILLS
            </h2>
          </div>
          <span className="font-mono text-xs text-subtle dark:text-neutral-400 font-bold uppercase tracking-wider">
            [INDEXED ARCHIVE // 2026]
          </span>
        </div>

        {/* Skills Technical Categories in Crisp Manga Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>

        {/* Education Container with Technical Keyline Frame */}
        <div className="pt-4" id="education">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-2xl font-bold text-ink dark:text-white uppercase tracking-tight">
              EDUCATION
            </h3>
            <span className="font-mono text-xs text-subtle dark:text-neutral-400 font-semibold">
              INSTITUTIONAL RECORD
            </span>
          </div>
          <EducationCard education={EDUCATION_DATA} />
        </div>
      </div>
    </section>
  );
};
