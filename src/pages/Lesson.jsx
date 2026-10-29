import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Lock,
  ExternalLink,
  BookOpen,
  FileText,
  Code2,
  Compass,
  Sparkles
} from 'lucide-react';
import { courses } from '../data/courses';
import { VideoPlayer } from '../components/lessons/VideoPlayer';
import { LessonSidebar } from '../components/lessons/LessonSidebar';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { calculateProgress } from '../utils/helpers';

/**
 * Interactive Lesson Page (/learn/:courseId/:lessonId).
 * Enforces enrollment validation, tracks lesson completions, renders HTML5 video,
 * and provides responsive sidebar & linear navigation.
 */
export function Lesson({
  enrolledCourseIds = [],
  progressData = {},
  onEnrollCourse,
  onCompleteLesson
}) {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  // Validate course existence (Section 9.I)
  const course = courses.find((c) => c.id === courseId);
  if (!course) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-10 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-100">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Course Not Found</h1>
          <p className="text-sm text-slate-600 mb-6">
            The course you are attempting to view does not exist or may have been moved.
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={() => navigate('/courses')}>
              Browse Courses
            </Button>
            <Button variant="primary" onClick={() => navigate('/')}>
              Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Validate lesson existence within this course (Section 9.I)
  const lessons = course.lessons || [];
  const currentLessonIndex = lessons.findIndex((l) => l.id === lessonId);
  const currentLesson = lessons[currentLessonIndex];

  if (!currentLesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-10 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-100">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Lesson Not Found</h1>
          <p className="text-sm text-slate-600 mb-6">
            We couldn't locate this specific lesson within <strong className="text-slate-800">{course.title}</strong>.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => navigate(`/courses/${course.id}`)}
              icon={ArrowLeft}
            >
              Course Overview
            </Button>
            {lessons.length > 0 && (
              <Button
                variant="primary"
                onClick={() => navigate(`/learn/${course.id}/${lessons[0].id}`)}
              >
                Go to First Lesson
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Enrollment Validation (Section 9.H)
  const isEnrolled = enrolledCourseIds.includes(course.id);
  if (!isEnrolled) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4 border border-indigo-100">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Enrollment Required
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
            You need to enroll in this course before accessing its lessons. Enrollment is completely free and saves your learning progress to your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (onEnrollCourse) {
                  onEnrollCourse(course.id, course.title);
                }
              }}
              icon={Sparkles}
              className="w-full sm:w-auto"
            >
              Enroll Now — Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate(`/courses/${course.id}`)}
              className="w-full sm:w-auto"
            >
              Course Details
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Progress Calculations
  const completedLessonIds = progressData[course.id] || [];
  const isCurrentCompleted = completedLessonIds.includes(currentLesson.id);
  const progressPercent = calculateProgress(completedLessonIds, lessons.length);

  // Linear Navigation (Section 9.G)
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === lessons.length - 1;
  const previousLesson = !isFirstLesson ? lessons[currentLessonIndex - 1] : null;
  const nextLesson = !isLastLesson ? lessons[currentLessonIndex + 1] : null;

  const handleMarkComplete = () => {
    if (onCompleteLesson) {
      onCompleteLesson(course.id, currentLesson.id, currentLesson.title);
    }
  };

  const handleNavigatePrevious = () => {
    if (previousLesson) {
      navigate(`/learn/${course.id}/${previousLesson.id}`);
    }
  };

  const handleNavigateNext = () => {
    if (nextLesson) {
      navigate(`/learn/${course.id}/${nextLesson.id}`);
    }
  };

  // Helper icon for resource types
  const getResourceIcon = (type) => {
    const lower = (type || '').toLowerCase();
    if (lower.includes('doc')) return BookOpen;
    if (lower.includes('article')) return FileText;
    return Code2;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Lesson Header (Section 9.A) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mb-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{course.title}</span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {currentLesson.title}
          </h1>
        </div>

        {/* Lesson Position & Progress Badge */}
        <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-6 shrink-0">
          <div className="text-left md:text-right">
            <p className="text-xs font-bold text-slate-800">
              Lesson {currentLessonIndex + 1} of {lessons.length}
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Course: <span className="text-indigo-600 font-bold">{progressPercent}% done</span>
            </p>
          </div>
          <Badge variant={isCurrentCompleted ? 'success' : 'default'} size="md">
            {isCurrentCompleted ? 'Completed' : 'In Progress'}
          </Badge>
        </div>
      </div>

      {/* Main Learning Workspace Layout: Video on Left, Sidebar on Right (desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Video, Navigation, Description, Resources) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Responsive 16:9 Video Player (Section 9.B) */}
          <VideoPlayer
            videoUrl={currentLesson.videoUrl}
            title={currentLesson.title}
            onEnded={() => {
              if (!isCurrentCompleted && onCompleteLesson) {
                onCompleteLesson(course.id, currentLesson.id, currentLesson.title);
              }
            }}
          />

          {/* Action Row: Mark as Complete + Linear Navigation */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Mark as Complete Button (Section 9.F) */}
            <div>
              {isCurrentCompleted ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Lesson Completed</span>
                </div>
              ) : (
                <Button
                  variant="success"
                  onClick={handleMarkComplete}
                  icon={CheckCircle2}
                >
                  Mark as Complete
                </Button>
              )}
            </div>

            {/* Previous & Next Buttons (Section 9.G) */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <Button
                variant="outline"
                size="md"
                disabled={isFirstLesson}
                onClick={handleNavigatePrevious}
                icon={ChevronLeft}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="md"
                disabled={isLastLesson}
                onClick={handleNavigateNext}
                icon={ChevronRight}
                iconPosition="right"
              >
                Next
              </Button>
            </div>
          </div>

          {/* Lesson Description (Section 9.C) */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-lg font-bold text-slate-900">
              Lesson Overview
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {currentLesson.description}
            </p>
          </section>

          {/* Learning Resources (Section 9.D) */}
          {currentLesson.resources && currentLesson.resources.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">
                  Supplementary Learning Resources
                </h2>
                <span className="text-xs text-slate-400 font-medium">Curated Links</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentLesson.resources.map((res) => {
                  const ResIcon = getResourceIcon(res.type);

                  return (
                    <a
                      key={res.id}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl border border-slate-200/70 hover:border-indigo-300 hover:bg-slate-50/60 transition-all flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <ResIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                            {res.title}
                          </p>
                          <span className="text-xs text-slate-500 font-medium">
                            {res.type}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Reusable Lesson Sidebar (Section 9.E) */}
        <div className="lg:col-span-4 sticky top-20">
          <LessonSidebar
            course={course}
            currentLessonId={currentLesson.id}
            completedLessonIds={completedLessonIds}
          />
        </div>
      </div>
    </div>
  );
}

export default Lesson;
