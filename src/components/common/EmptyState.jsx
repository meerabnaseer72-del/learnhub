import React from 'react';
import { Button } from './Button';

/**
 * Reusable EmptyState component for search results, empty dashboard, or missing items.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  actionIcon,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white rounded-2xl border border-slate-200/80 shadow-xs ${className}`}>
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 mb-4 shadow-xs">
          <Icon className="w-8 h-8" strokeWidth={1.75} />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 mb-1.5">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button
          variant="primary"
          onClick={onAction}
          icon={actionIcon}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
