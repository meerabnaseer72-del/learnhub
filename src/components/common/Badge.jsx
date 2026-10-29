import React from 'react';

/**
 * Reusable Badge component for categories, difficulty levels, and statuses.
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200/80',
    primary: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
    secondary: 'bg-teal-50 text-teal-700 border border-teal-100',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    // Difficulty specific helpers
    beginner: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    intermediate: 'bg-blue-50 text-blue-700 border border-blue-200',
    advanced: 'bg-purple-50 text-purple-700 border border-purple-200',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3 py-1.5 gap-2',
  };

  // Determine variant automatically if matching level keywords
  let activeVariant = variant;
  if (typeof children === 'string') {
    const lower = children.toLowerCase();
    if (lower === 'beginner') activeVariant = 'beginner';
    else if (lower === 'intermediate') activeVariant = 'intermediate';
    else if (lower === 'advanced') activeVariant = 'advanced';
    else if (lower === 'completed') activeVariant = 'success';
  }

  const variantClass = variants[activeVariant] || variants.default;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <span className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}>
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      {children}
    </span>
  );
}

export default Badge;
