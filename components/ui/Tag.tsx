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
        'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150',
        onClick && 'cursor-pointer select-none',
        active
          ? 'bg-[#3F7D5A] text-white shadow-xs'
          : 'bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#DDE5DE] dark:hover:bg-[#2D3630] border border-[#DDE5DE] dark:border-[#3A4840]',
        className
      )}
    >
      {label}
    </span>
  );
};
