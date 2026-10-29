import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Home, BookOpen } from 'lucide-react';
import { Button } from '../components/common/Button';

/**
 * 404 Not Found Page.
 * Handles unmatched routes and provides fast recovery paths back to Home and Courses.
 */
export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm text-center max-w-lg w-full">
        <div className="w-20 h-20 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-6 border border-indigo-100 shadow-xs">
          <Compass className="w-10 h-10" strokeWidth={1.75} />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          The page or lesson URL you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            onClick={() => navigate('/')}
            icon={Home}
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/courses')}
            icon={BookOpen}
            className="w-full sm:w-auto"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
