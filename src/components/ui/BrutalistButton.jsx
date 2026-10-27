import React from 'react';

export const BrutalistButton = ({
  variant = 'primary',
  href,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 select-none cursor-pointer rounded-none active:translate-x-[2px] active:translate-y-[2px]';

  const variantClasses = {
    primary:
      'bg-cobalt text-white border-2 border-cobalt hover:bg-black hover:border-black hover:shadow-brutalist',
    secondary:
      'bg-white text-ink border-2 border-ink hover:bg-black hover:text-white hover:shadow-brutalist',
    outline:
      'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        data-cursor="morph"
      >
        {icon && <span className="inline-flex">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      data-cursor="morph"
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
