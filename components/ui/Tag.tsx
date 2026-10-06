import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ label, onClick, active, className }) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs transition-colors',
        onClick && 'cursor-pointer select-none',
        active
          ? 'bg-blue-600 text-white font-medium shadow-sm'
          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60',
        className
      )}
    >
      {label}
    </span>
  );
};
