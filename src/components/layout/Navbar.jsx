import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GraduationCap, Menu, X, BookOpen, LayoutDashboard } from 'lucide-react';

/**
 * Main application navigation bar.
 * Features brand logo, desktop navigation, display-only user profile avatar, and accessible mobile menu.
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
      isActive
        ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3.5 py-2.5 text-base font-medium rounded-lg transition-colors ${
      isActive
        ? 'text-indigo-600 bg-indigo-50 font-semibold'
        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
            aria-label="LearnHub Home"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:bg-indigo-700 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Learn<span className="text-indigo-600">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/courses" className={navLinkClasses}>
              Courses
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClasses}>
              My Learning
            </NavLink>
          </nav>

          {/* User Profile (Display-only) & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Display-only user avatar */}
            <div
              className="flex items-center gap-2.5 pl-2 py-1 pr-3 rounded-full bg-slate-50 border border-slate-200/80"
              title="Student Profile: Alex Morgan (Display-only)"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold text-xs flex items-center justify-center shadow-xs">
                AM
              </div>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-700">
                Alex Morgan
              </span>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            <NavLink to="/" end onClick={closeMobileMenu} className={mobileNavLinkClasses}>
              <BookOpen className="w-5 h-5 text-slate-500" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/courses" onClick={closeMobileMenu} className={mobileNavLinkClasses}>
              <GraduationCap className="w-5 h-5 text-slate-500" />
              <span>Courses</span>
            </NavLink>
            <NavLink to="/dashboard" onClick={closeMobileMenu} className={mobileNavLinkClasses}>
              <LayoutDashboard className="w-5 h-5 text-slate-500" />
              <span>My Learning</span>
            </NavLink>
          </nav>

          {/* Mobile Profile Notice */}
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-semibold text-xs flex items-center justify-center">
              AM
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Alex Morgan</p>
              <p className="text-xs text-slate-500">Student Account (Active)</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
