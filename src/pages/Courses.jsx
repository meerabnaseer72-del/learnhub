import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX, RotateCcw, Filter } from 'lucide-react';
import { courses, categories } from '../data/courses';
import { filterCourses } from '../utils/helpers';
import { CourseCard } from '../components/courses/CourseCard';
import { SearchBar } from '../components/courses/SearchBar';
import { FilterPanel } from '../components/courses/FilterPanel';
import { CourseCardSkeleton } from '../components/common/Spinner';
import { EmptyState } from '../components/common/EmptyState';

/**
 * Course Catalog & Discovery Page (/courses).
 * Features real-time multi-criteria filtering, URL sync, loading skeleton, and dynamic result counter.
 */
export function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL params or fallback to defaults
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';
  const initialLevel = searchParams.get('level') || 'All Levels';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [isLoading, setIsLoading] = useState(true);

  // Sync state if URL search parameters change externally
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || 'All');
    setSelectedLevel(searchParams.get('level') || 'All Levels');
  }, [searchParams]);

  // Simulate loading state on initial page mount (Section 6.J)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Update URL search parameters when filters change
  const updateUrlParams = (newSearch, newCategory, newLevel) => {
    const params = new URLSearchParams();
    if (newSearch) params.set('search', newSearch);
    if (newCategory && newCategory !== 'All' && newCategory !== 'All Categories') {
      params.set('category', newCategory);
    }
    if (newLevel && newLevel !== 'All Levels') {
      params.set('level', newLevel);
    }
    setSearchParams(params, { replace: true });
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    updateUrlParams(val, selectedCategory, selectedLevel);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    updateUrlParams(searchQuery, cat, selectedLevel);
  };

  const handleLevelChange = (lvl) => {
    setSelectedLevel(lvl);
    updateUrlParams(searchQuery, selectedCategory, lvl);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All Levels');
    setSearchParams({}, { replace: true });
  };

  // Derived filtered courses computed directly during render (Section 6.E)
  const filteredCourses = useMemo(() => {
    return filterCourses(courses, {
      search: searchQuery,
      category: selectedCategory,
      level: selectedLevel,
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  const totalCourseCount = courses.length;
  const filteredCount = filteredCourses.length;
  const isFiltered = Boolean(
    searchQuery ||
    (selectedCategory !== 'All' && selectedCategory !== 'All Categories') ||
    selectedLevel !== 'All Levels'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="border-b border-slate-200/80 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Courses
        </h1>
        <p className="mt-2 text-base text-slate-600 max-w-2xl">
          Discover comprehensive, hands-on courses taught by experienced industry practitioners. Enroll for free and track your lesson progress at your own pace.
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-2xl">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            onSearch={handleSearchChange}
            size="lg"
            placeholder="Search by course title, topic, instructor, or keywords..."
          />
        </div>
      </div>

      {/* Filter Controls Panel */}
      <FilterPanel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
        onResetFilters={handleResetFilters}
        isFiltered={isFiltered}
      />

      {/* Course Result Count (Section 6.G) */}
      <div className="flex items-center justify-between text-sm text-slate-600">
        <p className="font-medium">
          Showing <span className="font-bold text-slate-900">{filteredCount}</span> of{' '}
          <span className="font-bold text-slate-900">{totalCourseCount}</span> courses
        </p>
        {isFiltered && (
          <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-100 font-medium">
            Active filters applied
          </span>
        )}
      </div>

      {/* Main Course Content: Loading Skeleton, Grid, or Empty State */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <EmptyState
          icon={SearchX}
          title="No courses found"
          description="We couldn't find any courses matching your current search and filter combination. Try adjusting your keyword or reset filters to view all available courses."
          actionLabel="Reset All Filters"
          onAction={handleResetFilters}
          actionIcon={RotateCcw}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;
