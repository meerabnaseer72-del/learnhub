import React from 'react';

/**
 * Reusable InstructorCard component to spotlight course instructors.
 */
export function InstructorCard({ instructor }) {
  if (!instructor) return null;

  const { name, role, photo, bio } = instructor;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-sm transition-shadow flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-3.5 border-2 border-indigo-100 shadow-xs">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h4 className="font-semibold text-slate-900 text-base">{name}</h4>
      <p className="text-xs text-indigo-600 font-medium mb-2.5">{role}</p>
      <p className="text-xs text-slate-500 leading-relaxed max-w-xs">{bio}</p>
    </div>
  );
}

export default InstructorCard;
