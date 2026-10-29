import React from 'react';
import { RotateCcw, Filter } from 'lucide-react';
import { Button } from '../common/Button';

/**
 * FilterPanel component for filtering courses by category and difficulty level.
 */
export function FilterPanel({
  categories = [],
  selectedCategory = 'All',
  onCategoryChange,
  selectedLevel = 'All Levels',
  onLevelChange,
  onResetFilters,
  isFiltered = false,
  className = ''
}) {
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className={`bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4 ${className}`}>
      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
        {/* Category Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="filter-category" className="text-xs font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
            Category:
          </label>
          <select
            id="filter-category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 cursor-pointer transition-colors"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.name || cat} value={cat.name || cat}>
                {cat.name || cat}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Level Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="filter-level" className="text-xs font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
            Level:
          </label>
          <select
            id="filter-level"
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 cursor-pointer transition-colors"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset Filters Button */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        {isFiltered && (
          <Button
            variant="outline"
            size="sm"
            onClick={onResetFilters}
            icon={RotateCcw}
            className="text-slate-600 hover:text-slate-900 border-dashed"
          >
            Reset Filters
          </Button>
        )}
      </div>
    </div>
  );
}

export default FilterPanel;
