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
          ? 'bg-[#66705A] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] font-medium shadow-sm'
          : 'bg-[#EAE3D5]/70 dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] hover:bg-[#D8D0C2] dark:hover:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139]',
        className
      )}
    >
      {label}
    </span>
  );
};
