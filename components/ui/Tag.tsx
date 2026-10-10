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
        'inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono transition-all duration-150',
        onClick && 'cursor-pointer select-none',
        active
          ? 'bg-[#267747] dark:bg-[#00FF66] text-white dark:text-[#050705] font-bold shadow-xs'
          : 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] hover:bg-[#E2EAE3] dark:hover:bg-[#121B14] border border-[#DDE5DE] dark:border-[#1B2A1F]',
        className
      )}
    >
      #{label}
    </span>
  );
};
