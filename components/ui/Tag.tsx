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
          ? 'bg-[#00FF66] text-[#050705] font-bold shadow-xs'
          : 'bg-[#0E1510] text-[#91A596] hover:text-[#00FF66] hover:bg-[#121B14] border border-[#1B2A1F]',
        className
      )}
    >
      #{label}
    </span>
  );
};
