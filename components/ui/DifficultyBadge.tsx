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
      label: 'LVL: BEGINNER',
      bg: 'bg-[#0D2214] text-[#00FF66] border-[#1B2A1F]',
    },
    intermediate: {
      label: 'LVL: INTERMEDIATE',
      bg: 'bg-[#241C0E] text-[#D9A441] border-[#382B17]',
    },
    advanced: {
      label: 'LVL: ADVANCED',
      bg: 'bg-[#271211] text-[#FF3B30] border-[#441E1C]',
    },
  }[difficulty] || {
    label: `LVL: ${difficulty.toUpperCase()}`,
    bg: 'bg-[#0E1510] text-[#91A596] border-[#1B2A1F]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border tracking-wider',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
