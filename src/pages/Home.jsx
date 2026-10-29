import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Compass,
  Award,
  Layers
} from 'lucide-react';
import { courses, categories } from '../data/courses';
import { instructors } from '../data/instructors';
import { CourseCard } from '../components/courses/CourseCard';
import { CategoryCard } from '../components/courses/CategoryCard';
import { InstructorCard } from '../components/courses/InstructorCard';

/**
 * Home page component.
 * Features the hero section with course search, featured courses, popular categories,
 * genuine platform highlights, and instructor spotlight.
 */
export function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchKeyword.trim())}`);
    } else {
      navigate('/courses');
    }
  };

  // Get 4 featured courses from local data
  const featuredCourses = courses.filter((c) => c.featured).slice(0, 4);

  // Platform highlights describing genuine functionality
  const platformHighlights = [
    {
      icon: Clock,
      title: 'Learn at Your Own Pace',
      description: 'Stream structured video lessons with zero time limits, rigid deadlines, or subscription lock-ins.'
    },
    {
      icon: CheckCircle,
      title: 'Track Your Progress',
      description: 'Every completed lesson is safely saved in your browser localStorage for seamless return.'
    },
    {
      icon: Layers,
      title: 'Structured Learning Paths',
      description: 'Progress logically from introductory fundamentals to intermediate patterns and full projects.'
    },
    {
      icon: BookOpen,
      title: 'Practical Learning Resources',
      description: 'Each lesson connects directly to authoritative documentation, articles, and interactive exercises.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200 bg-linear-to-b from-white via-indigo-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Search */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free Self-Paced Courses</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Your Next Skill <span className="text-indigo-600">Starts Here.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Discover practical courses, learn at your own pace, and turn your curiosity into real-world skills. No accounts or credit cards required.
              </p>

              {/* Search Form */}
              <form onSubmit={handleHeroSearch} className="max-w-lg">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="What do you want to learn today?"
                      aria-label="Search courses"
                      className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Try searching for <span className="text-indigo-600 font-medium">React</span>, <span className="text-indigo-600 font-medium">Python</span>, or <span className="text-indigo-600 font-medium">UI/UX</span>.
                </p>
              </form>

              {/* Learning stats preview */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{courses.length} Comprehensive Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span>Browser-Saved Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <span>Curated Open Resources</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute -inset-1.5 bg-linear-to-r from-indigo-500 to-teal-400 rounded-3xl blur-xl opacity-25" />
                
                {/* Main Hero Card */}
                <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-xl border border-slate-200/80 overflow-hidden">
                  <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      alt="Students collaborating and learning together"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-xs font-semibold tracking-wide uppercase text-indigo-300">
                        Interactive Learning Environment
                      </span>
                      <p className="text-sm font-bold sm:text-base mt-1">
                        Turn Curiosity into Tangible Projects
                      </p>
                    </div>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-800">Track Each Lesson</p>
                        <p className="text-[11px] text-slate-500">Zero backend needed</p>
                      </div>
                    </div>
                    <Link
                      to="/courses"
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      Browse &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              <Award className="w-4 h-4" />
              <span>Hand-Picked By Educators</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Courses
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Start with our most popular, highly recommended practical courses designed to take you from beginner to confident practitioner.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Course Grid (4 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
            <Compass className="w-4 h-4" />
            <span>Discover by Discipline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Popular Categories
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Explore diverse subjects tailored to modern industry disciplines and technology stacks.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      {/* Platform Highlights Section */}
      <section className="bg-white border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Learn with LearnHub?
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Everything you need to master new topics without friction, paywalls, or artificial limits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformHighlights.map((highlight, idx) => {
              const IconComp = highlight.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Learn From Industry Practitioners
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Our courses are structured by engineers and designers with real world production experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.slice(0, 4).map((inst) => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      </section>

      {/* Ready to start banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-r from-indigo-700 to-indigo-900 p-8 sm:p-12 text-white text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Upgrade Your Skillset?
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Explore our complete course catalog, enroll in minutes, and track your lesson progress completely free.
            </p>
            <div className="pt-2">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Browse All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
