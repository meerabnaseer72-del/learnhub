import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, User } from 'lucide-react';
import { Badge } from '../common/Badge';

/**
 * Reusable CourseCard component used on Home featured list, Course Catalog, etc.
 */
export function CourseCard({ course }) {
  if (!course) return null;

  const {
    id,
    title,
    thumbnail,
    instructor,
    category,
    level,
    duration,
    lessons = []
  } = course;

  const lessonCount = lessons.length;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex flex-col h-full">
      {/* Thumbnail area with category tag */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="primary" size="sm" className="bg-white/95 backdrop-blur-xs font-semibold shadow-xs">
            {category}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge variant={level.toLowerCase()} size="sm" className="bg-white/95 backdrop-blur-xs shadow-xs font-medium">
            {level}
          </Badge>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 text-base leading-snug mb-2">
          <Link to={`/courses/${id}`} className="focus:outline-none focus:underline">
            {title}
          </Link>
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
          <User className="w-3.5 h-3.5 text-slate-400" />
          <span>{instructor}</span>
        </div>

        {/* Course Metadata (Duration & Lessons) */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>{lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <Link
            to={`/courses/${id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-slate-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-150 border border-indigo-100 group-hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
