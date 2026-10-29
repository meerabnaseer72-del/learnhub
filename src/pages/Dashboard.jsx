import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  PlayCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Clock,
  Compass
} from 'lucide-react';
import { courses } from '../data/courses';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProgressBar } from '../components/common/ProgressBar';
import { EmptyState } from '../components/common/EmptyState';
import {
  calculateProgress,
  getCompletedCount,
  getRemainingCount,
  getFirstIncompleteLesson
} from '../utils/helpers';

/**
 * Student Dashboard Page (/dashboard).
 * Personalized "My Learning" hub showing enrolled courses, completion percentages,
 * remaining counts, and intelligent Continue Learning links.
 */
export function Dashboard({
  enrolledCourseIds = [],
  progressData = {}
}) {
  const navigate = useNavigate();

  // Retrieve enrolled course objects preserving enrollment order
  const enrolledCourses = courses.filter((course) =>
    enrolledCourseIds.includes(course.id)
  );

  // Calculate dynamic dashboard stats across all enrolled courses
  const totalEnrolledCount = enrolledCourses.length;

  let totalCompletedLessonsCount = 0;
  enrolledCourses.forEach((course) => {
    const completedForCourse = progressData[course.id] || [];
    totalCompletedLessonsCount += completedForCourse.length;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Dashboard Header (Section 8.A) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Student Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Learning
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-xl">
            Keep up the momentum. Pick up right where you left off or explore new courses to expand your knowledge.
          </p>
        </div>

        {/* Dynamic Metric Stat Badges */}
        {totalEnrolledCount > 0 && (
          <div className="flex items-center gap-4 sm:gap-6 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6">
            <div>
              <p className="text-2xl font-bold text-slate-900">{totalEnrolledCount}</p>
              <p className="text-xs text-slate-500 font-medium">Enrolled Courses</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-indigo-600">{totalCompletedLessonsCount}</p>
              <p className="text-xs text-slate-500 font-medium">Lessons Finished</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content: Enrolled Course Cards or Empty State */}
      {totalEnrolledCount === 0 ? (
        <EmptyState
          icon={Compass}
          title="Your learning journey starts here."
          description="You haven't enrolled in any courses yet. Browse our comprehensive catalog of free web development, design, data science, and programming courses to get started."
          actionLabel="Browse Courses"
          onAction={() => navigate('/courses')}
          actionIcon={ArrowRight}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Active Courses ({totalEnrolledCount})
            </h2>
            <Link
              to="/courses"
              className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
            >
              <span>Explore More Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Grid of Enrolled Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => {
              const completedIds = progressData[course.id] || [];
              const totalLessons = course.lessons.length;
              const completedCount = getCompletedCount(completedIds);
              const remainingCount = getRemainingCount(completedIds, totalLessons);
              const progressPercent = calculateProgress(completedIds, totalLessons);
              const isCompleted = progressPercent === 100;
              const nextLesson = getFirstIncompleteLesson(course, completedIds);

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail & Badges */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="primary" size="sm" className="bg-white/95 backdrop-blur-xs font-semibold shadow-xs">
                          {course.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        {isCompleted ? (
                          <Badge variant="success" size="sm" className="bg-white/95 backdrop-blur-xs font-bold text-emerald-700 shadow-xs">
                            Completed
                          </Badge>
                        ) : (
                          <Badge variant={course.level.toLowerCase()} size="sm" className="bg-white/95 backdrop-blur-xs shadow-xs">
                            {course.level}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-4">
                      <div>
                        <h3 className="font-semibold text-slate-900 line-clamp-2 text-base leading-snug">
                          <Link to={`/courses/${course.id}`} className="hover:text-indigo-600 transition-colors">
                            {course.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          By {course.instructor}
                        </p>
                      </div>

                      {/* Progress Bar & Statistics */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <ProgressBar
                          progress={progressPercent}
                          size="md"
                          labelPrefix="Progress"
                        />
                        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                          <span>
                            {completedCount} of {totalLessons} lessons completed
                          </span>
                          <span>
                            {isCompleted ? 'All done' : `${remainingCount} remaining`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons (Continue Learning / Review Course) */}
                  <div className="p-5 pt-0">
                    {isCompleted ? (
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/learn/${course.id}/${course.lessons[0].id}`)}
                        className="w-full"
                        icon={RotateCcw}
                      >
                        Review Course
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => {
                          if (nextLesson) {
                            navigate(`/learn/${course.id}/${nextLesson.id}`);
                          }
                        }}
                        className="w-full"
                        icon={PlayCircle}
                      >
                        Continue Learning
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
