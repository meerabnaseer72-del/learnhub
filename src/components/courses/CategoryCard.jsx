import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layout,
  LineChart,
  Terminal,
  Megaphone,
  Briefcase,
  ArrowRight
} from 'lucide-react';

// Icon mapping for supported categories
const ICON_MAP = {
  Code2: Code2,
  Layout: Layout,
  LineChart: LineChart,
  Terminal: Terminal,
  Megaphone: Megaphone,
  Briefcase: Briefcase,
};

/**
 * CategoryCard component for homepage popular category browsing.
 */
export function CategoryCard({ category }) {
  if (!category) return null;

  const { name, description, iconName, count = 0 } = category;
  const IconComponent = ICON_MAP[iconName] || Code2;

  return (
    <Link
      to={`/courses?category=${encodeURIComponent(name)}`}
      className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors text-base mb-1.5">
          {name}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">
        <span>{count} {count === 1 ? 'course' : 'courses'}</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default CategoryCard;
