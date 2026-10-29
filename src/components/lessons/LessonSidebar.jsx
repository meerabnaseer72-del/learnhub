import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Clock, PlayCircle } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { calculateProgress } from '../../utils/helpers';

/**
 * Reusable LessonSidebar component displaying the course curriculum,
 * completion checkmarks, active lesson state, and overall course progress.
 */
export function LessonSidebar({
  course,
  currentLessonId,
  completedLessonIds = []
}) {
  if (!course || !course.lessons) return null;

  const lessons = course.lessons;
  const progressPercent = calculateProgress(completedLessonIds, lessons.length);
  const completedSet = new Set(completedLessonIds);

  return (
    <aside className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col h-full">
      {/* Sidebar Header & Progress Bar */}
      <div className="pb-4 mb-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900 text-sm mb-1">
          Course Curriculum
        </h3>
        <p className="text-xs text-slate-500 mb-3">
          {completedLessonIds.length} of {lessons.length} lessons completed
        </p>
        <ProgressBar progress={progressPercent} size="sm" showLabel={false} />
      </div>

      {/* Lesson List */}
      <nav className="space-y-1.5 overflow-y-auto max-h-[520px] pr-1" aria-label="Course Lessons">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === currentLessonId;
          const isCompleted = completedSet.has(lesson.id);

          return (
            <Link
              key={lesson.id}
              to={`/learn/${course.id}/${lesson.id}`}
              className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group text-left ${
                isCurrent
                  ? 'bg-indigo-50/80 border border-indigo-200 shadow-xs'
                  : 'hover:bg-slate-50 border border-transparent'
              }`}
            >
              {/* Status Indicator Icon */}
              <div className="mt-0.5 shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-50" />
                ) : isCurrent ? (
                  <PlayCircle className="w-5 h-5 text-indigo-600 fill-indigo-100" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px] font-semibold text-slate-500">
                    {index + 1}
                  </div>
                )}
              </div>

              {/* Lesson Info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-xs font-semibold leading-snug line-clamp-2 ${
                    isCurrent
                      ? 'text-indigo-900 font-bold'
                      : isCompleted
                      ? 'text-slate-700'
                      : 'text-slate-800 group-hover:text-slate-900'
                  }`}
                >
                  {index + 1}. {lesson.title}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{lesson.duration}</span>
                  {isCompleted && (
                    <span className="ml-1 text-emerald-600 font-medium">&bull; Completed</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default LessonSidebar;
