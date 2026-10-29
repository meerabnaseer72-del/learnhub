import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

/**
 * Reusable SearchBar component with submit button and clear button.
 */
export function SearchBar({
  value = '',
  onChange,
  onSearch,
  placeholder = 'Search courses by title, topic, instructor...',
  size = 'md',
  className = ''
}) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInternalValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(internalValue);
    }
  };

  const handleClear = () => {
    setInternalValue('');
    if (onChange) onChange('');
    if (onSearch) onSearch('');
  };

  const sizeClasses = {
    md: 'py-2.5 pl-10 pr-24 text-sm',
    lg: 'py-3.5 pl-12 pr-28 text-base',
  };

  const buttonSizeClasses = {
    md: 'px-3.5 py-1.5 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center w-full ${className}`}>
      <label htmlFor="course-search-input" className="sr-only">
        Search courses
      </label>
      <div className="absolute left-3.5 pointer-events-none text-slate-400">
        <Search className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      </div>

      <input
        id="course-search-input"
        type="text"
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-xs ${
          sizeClasses[size] || sizeClasses.md
        }`}
      />

      {internalValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-20 sm:right-24 text-slate-400 hover:text-slate-600 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Clear search input"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <button
        type="submit"
        className={`absolute right-1.5 font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
          buttonSizeClasses[size] || buttonSizeClasses.md
        }`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
