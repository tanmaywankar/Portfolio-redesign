import React from 'react';

export const SkillCategory = ({ category }) => {
  return (
    <div className="border-2 border-ink dark:border-white bg-white dark:bg-charcoalCard p-6 brutalist-card-shadow">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-4 border-b-2 border-ink/20 dark:border-white/20 pb-3">
        <h3 className="font-serif text-xl text-ink dark:text-white font-bold">
          {category.title}
        </h3>
        <span
          data-cursor="morph"
          className="font-mono text-[10px] font-bold border border-cobalt bg-cobalt/5 dark:bg-cobalt/20 text-cobalt dark:text-cobaltAccent hover:bg-cobalt hover:text-white transition-colors px-2 py-0.5 uppercase tracking-wider select-none cursor-pointer"
        >
          {category.badge}
        </span>
      </div>

      {/* Skills Chips Grid */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            data-cursor="morph"
            className="group font-mono text-xs px-3 py-1.5 border border-ink dark:border-white/70 bg-white dark:bg-charcoalCard text-ink dark:text-white font-medium hover:bg-cobalt hover:border-cobalt hover:text-white transition-colors cursor-pointer select-none inline-flex items-center"
          >
            <span className="font-mono text-[10px] font-bold text-neutral-400 dark:text-neutral-500 group-hover:text-white transition-colors mr-1.5">
              &lt;/&gt;
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
