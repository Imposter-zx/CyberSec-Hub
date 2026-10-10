'use client';

import React from 'react';
import { Difficulty } from '@/types';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className }) => {
  const { t } = useI18n();

  const config = {
    beginner: {
      label: t('difficulty_beginner').toUpperCase(),
      bg: 'bg-[#E8F5EE] text-[#267747] border-[#C4E1CF] dark:bg-[#0D2214] dark:text-[#00FF66] dark:border-[#1B2A1F]',
    },
    intermediate: {
      label: t('difficulty_intermediate').toUpperCase(),
      bg: 'bg-[#FFF3E0] text-[#D97745] border-[#FBD7B5] dark:bg-[#241C0E] dark:text-[#D9A441] dark:border-[#382B17]',
    },
    advanced: {
      label: t('difficulty_advanced').toUpperCase(),
      bg: 'bg-[#FFEBEE] text-[#C62828] border-[#FFCDD2] dark:bg-[#271211] dark:text-[#FF3B30] dark:border-[#441E1C]',
    },
  }[difficulty] || {
    label: difficulty.toUpperCase(),
    bg: 'bg-[#EEF3EE] text-[#5F6B62] border-[#DDE5DE] dark:bg-[#0E1510] dark:text-[#91A596] dark:border-[#1B2A1F]',
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
