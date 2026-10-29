import React from 'react';

/**
 * Reusable ProgressBar component with smooth animation and accessible ARIA attributes.
 */
export function ProgressBar({
  progress = 0,
  showLabel = true,
  labelPrefix = '',
  size = 'md',
  color = 'indigo',
  className = ''
}) {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colorStyles = {
    indigo: 'bg-indigo-600',
    teal: 'bg-teal-500',
    emerald: 'bg-emerald-600',
  };

  const activeColor = clampedProgress === 100 ? 'bg-emerald-600' : (colorStyles[color] || colorStyles.indigo);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-1.5">
          <span>{labelPrefix || 'Course Progress'}</span>
          <span className="font-semibold text-slate-800">{clampedProgress}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress"
        className={`w-full bg-slate-200 rounded-full overflow-hidden ${heights[size] || heights.md}`}
      >
        <div
          className={`${activeColor} h-full rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
