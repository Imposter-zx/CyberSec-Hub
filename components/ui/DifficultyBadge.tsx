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
      bg: 'bg-[#657A58]/15 text-[#445638] dark:text-[#A5AD8C] border-[#657A58]/30',
    },
    intermediate: {
      label: 'Intermediate',
      bg: 'bg-[#B89B62]/15 text-[#82662c] dark:text-[#D1B87F] border-[#B89B62]/30',
    },
    advanced: {
      label: 'Advanced',
      bg: 'bg-[#B56F4A]/15 text-[#8C4A28] dark:text-[#E09873] border-[#B56F4A]/30',
    },
  }[difficulty] || {
    label: difficulty,
    bg: 'bg-[#68645D]/10 text-[#68645D] dark:text-[#B8B1A5] border-[#D8D0C2] dark:border-[#454139]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border tracking-wide uppercase',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
