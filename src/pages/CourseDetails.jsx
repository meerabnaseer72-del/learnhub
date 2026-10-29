import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  BookOpen,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  User,
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import { courses } from '../data/courses';
import { instructors } from '../data/instructors';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProgressBar } from '../components/common/ProgressBar';
import { calculateProgress, getFirstIncompleteLesson } from '../utils/helpers';

/**
 * Course Details Page (/courses/:courseId).
 * Shows syllabus, outcomes, instructor details, enrollment actions, and curriculum.
 */
export function CourseDetails({
  enrolledCourseIds = [],
  progressData = {},
  onEnrollCourse
}) {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Find course from dataset
  const course = courses.find((c) => c.id === courseId);

  // If course does not exist, render friendly Course Not Found page (Section 7.F)
  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-10 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-100">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Course Not Found</h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            The course with ID <code className="bg-slate-100 text-indigo-700 px-1.5 py-0.5 rounded text-xs">{courseId}</code> does not exist or may have been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" onClick={() => navigate('/courses')} icon={ArrowLeft}>
              Back to Courses
            </Button>
            <Button variant="primary" onClick={() => navigate('/')}>
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Instructor profile match
  const instructor = instructors.find((inst) => inst.id === course.instructorId) || {
    name: course.instructor,
    role: 'Course Instructor',
    bio: 'Dedicated educator specializing in high-impact curriculum design.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  };

  const isEnrolled = enrolledCourseIds.includes(course.id);
  const completedLessonIds = progressData[course.id] || [];
  const progressPercent = calculateProgress(completedLessonIds, course.lessons.length);
  const firstIncompleteLesson = getFirstIncompleteLesson(course, completedLessonIds);

  const handleEnrollClick = () => {
    if (onEnrollCourse) {
      onEnrollCourse(course.id, course.title);
    }
  };

  const handleStartLearning = () => {
    if (firstIncompleteLesson) {
      navigate(`/learn/${course.id}/${firstIncompleteLesson.id}`);
    } else if (course.lessons.length > 0) {
      navigate(`/learn/${course.id}/${course.lessons[0].id}`);
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </Link>
      </div>

      {/* Hero Course Overview Banner */}
      <section className="bg-white border-y border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Course Details & Outcomes */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary" size="md">
                  {course.category}
                </Badge>
                <Badge variant={course.level.toLowerCase()} size="md">
                  {course.level}
                </Badge>
                <span className="text-xs text-slate-400">&bull;</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  100% Free
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                {course.description}
              </p>

              {/* Course Meta Specs */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  <span>Instructor: <strong className="text-slate-800">{course.instructor}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>Duration: <strong className="text-slate-800">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>Lessons: <strong className="text-slate-800">{course.lessons.length}</strong></span>
                </div>
              </div>

              {/* Enrollment action (Mobile/Tablet view) */}
              <div className="lg:hidden pt-4">
                {isEnrolled ? (
                  <div className="space-y-3 bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-900">
                      <span className="flex items-center gap-1.5 text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" /> Enrolled in this course
                      </span>
                      <span>{progressPercent}% Complete</span>
                    </div>
                    <ProgressBar progress={progressPercent} size="sm" showLabel={false} />
                    <Button
                      variant="primary"
                      onClick={handleStartLearning}
                      className="w-full"
                      icon={PlayCircle}
                    >
                      {progressPercent === 100 ? 'Review Lessons' : 'Continue Learning'}
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleEnrollClick}
                    className="w-full"
                    icon={Sparkles}
                  >
                    Enroll Now — Free
                  </Button>
                )}
              </div>
            </div>

            {/* Right Column: Course Visual & Action Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-lg sticky top-24">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>

                <div className="p-6 space-y-5">
                  {/* Desktop Enrollment Status & Actions */}
                  {isEnrolled ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <span className="flex items-center gap-1.5 text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> You are enrolled
                        </span>
                        <span className="text-indigo-600 font-bold">{progressPercent}% Completed</span>
                      </div>
                      <ProgressBar progress={progressPercent} size="sm" showLabel={false} />

                      <Button
                        variant="primary"
                        size="lg"
                        onClick={handleStartLearning}
                        className="w-full"
                        icon={PlayCircle}
                      >
                        {progressPercent === 100 ? 'Review Course Lessons' : 'Continue Learning'}
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-slate-900">Free</span>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          Lifetime Access
                        </span>
                      </div>

                      <Button
                        variant="primary"
                        size="lg"
                        onClick={handleEnrollClick}
                        className="w-full"
                        icon={Sparkles}
                      >
                        Enroll Now — Free
                      </Button>
                      <p className="text-[11px] text-center text-slate-400">
                        Zero fees, instant browser storage access.
                      </p>
                    </div>
                  )}

                  {/* Course Quick Highlights Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{course.lessons.length} self-paced video lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Direct external documentation & reading guides</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Browser-saved progress tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>No sign-up or login wall required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Learning Outcomes & Curriculum */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* Section B: What You'll Learn (Learning Outcomes) */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section C: Course Curriculum */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Course Curriculum
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {course.lessons.length} lessons &bull; {course.duration} total length
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 border border-slate-200/70 rounded-xl overflow-hidden">
              {course.lessons.map((lesson, index) => {
                const isCompleted = completedLessonIds.includes(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className="p-4 sm:p-4.5 flex items-center justify-between hover:bg-slate-50/80 transition-colors gap-3"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center">
                            {index + 1}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {lesson.title}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {lesson.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 text-xs text-slate-500">
                      <span className="hidden sm:inline-flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {lesson.duration}
                      </span>
                      {isEnrolled && (
                        <Link
                          to={`/learn/${course.id}/${lesson.id}`}
                          className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white font-semibold transition-colors"
                        >
                          {isCompleted ? 'Review' : 'Open'}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Instructor Bio Section */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
              About the Instructor
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-indigo-100 shadow-xs">
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base font-bold text-slate-900">{instructor.name}</h3>
                <p className="text-xs text-indigo-600 font-semibold mb-2">{instructor.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{instructor.bio}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Space for related actions / details */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
              Prerequisites & Tools
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              All you need is a modern web browser and a code editor. All lessons provide accessible explanations suitable for learners at the {course.level.toLowerCase()} level.
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Difficulty:</span>
              <strong className="text-slate-800">{course.level}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
