import React from 'react';

/**
 * Reusable loading spinner and skeleton placeholder components.
 */
export function Spinner({ size = 'md', className = '', message = 'Loading...' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 ${className}`} role="status">
      <div
        className={`${sizes[size] || sizes.md} border-slate-200 border-t-indigo-600 rounded-full animate-spin`}
      />
      {message && <p className="mt-3 text-sm font-medium text-slate-500">{message}</p>}
      <span className="sr-only">Loading</span>
    </div>
  );
}

/**
 * Skeleton card for course grid loading states
 */
export function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs animate-pulse">
      <div className="h-48 bg-slate-200 w-full" />
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-5 w-24 bg-slate-200 rounded-full" />
          <div className="h-5 w-16 bg-slate-200 rounded-full" />
        </div>
        <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
        <div className="h-4 w-full bg-slate-200 rounded-md" />
        <div className="h-4 w-2/3 bg-slate-200 rounded-md" />
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="h-4 w-20 bg-slate-200 rounded-md" />
          <div className="h-4 w-16 bg-slate-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
