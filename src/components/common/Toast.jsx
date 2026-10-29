import React, { useEffect } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

/**
 * Toast component that displays short temporary feedback messages.
 */
export function Toast({
  message,
  type = 'success',
  onClose,
  duration = 3000
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const typeConfig = {
    success: {
      bg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      icon: CheckCircle2,
      iconColor: 'text-emerald-600',
    },
    info: {
      bg: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      icon: Info,
      iconColor: 'text-indigo-600',
    },
    warning: {
      bg: 'bg-amber-50 border-amber-200 text-amber-800',
      icon: AlertCircle,
      iconColor: 'text-amber-600',
    },
  };

  const config = typeConfig[type] || typeConfig.success;
  const IconComponent = config.icon;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-300 ease-out transform translate-y-0 opacity-100"
    >
      <div className={`flex items-start gap-3 p-4 rounded-xl border shadow-lg ${config.bg} backdrop-blur-xs`}>
        <IconComponent className={`w-5 h-5 shrink-0 mt-0.5 ${config.iconColor}`} />
        <div className="flex-1 text-sm font-medium leading-snug">
          {message}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 transition-colors rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Toast;
