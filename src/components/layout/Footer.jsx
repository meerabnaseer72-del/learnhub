import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Layers, ShieldCheck } from 'lucide-react';

/**
 * Reusable Footer component across all main application pages.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:bg-indigo-700 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                Learn<span className="text-indigo-600">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Empowering learners with structured curriculum, interactive lessons, and browser-saved progress tracking. Build real-world skills at your own pace.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free open access &bull; Local browser storage persistence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Explore Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Explore Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  My Learning Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Focus */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Learning Tracks
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/courses?category=Web+Development" className="hover:text-indigo-600 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses?category=UI%2FUX+Design" className="hover:text-indigo-600 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Data+Science" className="hover:text-indigo-600 transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Programming" className="hover:text-indigo-600 transition-colors">
                  Programming
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} LearnHub LMS. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for curious minds and self-paced professional growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
