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
      bg: 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border-[#DDE5DE] dark:border-[#3A4840]',
    },
    intermediate: {
      label: 'Intermediate',
      bg: 'bg-[#FDF6E7] text-[#A67B2E] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] border-[#F2E5C9] dark:border-[#524426]',
    },
    advanced: {
      label: 'Advanced',
      bg: 'bg-[#FDF2EA] text-[#C97438] dark:bg-[#E58A4E]/20 dark:text-[#EDA574] border-[#F8DCB8] dark:border-[#583925]',
    },
  }[difficulty] || {
    label: difficulty,
    bg: 'bg-[#EEF3EE] text-[#68736B] dark:bg-[#202722] dark:text-[#A0AFA5] border-[#DDE5DE] dark:border-[#3A4840]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border tracking-wide uppercase',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
