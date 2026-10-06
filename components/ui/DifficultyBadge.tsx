import React from 'react';
import { Difficulty } from '@/types';
import { cn } from '@/lib/utils';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className }) => {
  const config = {
    beginner: {
      label: 'Beginner',
      bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    intermediate: {
      label: 'Intermediate',
      bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    advanced: {
      label: 'Advanced',
      bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    },
  }[difficulty] || {
    label: difficulty,
    bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border tracking-wide uppercase',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
