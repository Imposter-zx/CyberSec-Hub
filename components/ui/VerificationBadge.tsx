import React from 'react';
import { VerificationStatus } from '@/types';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle, Archive } from 'lucide-react';

interface VerificationBadgeProps {
  status: VerificationStatus;
  date?: string;
  className?: string;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ status, date, className }) => {
  if (status === 'verified') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#657A58]/15 text-[#445638] dark:text-[#A5AD8C] border border-[#657A58]/30',
          className
        )}
        title={date ? `Verified on ${date}` : 'Verified resource'}
      >
        <CheckCircle2 className="w-3 h-3 text-[#657A58] dark:text-[#A5AD8C]" />
        <span>Verified {date ? `(${date})` : ''}</span>
      </span>
    );
  }

  if (status === 'needs-verification') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#B89B62]/15 text-[#82662c] dark:text-[#D1B87F] border border-[#B89B62]/30',
          className
        )}
      >
        <AlertCircle className="w-3 h-3 text-[#B89B62]" />
        <span>Needs Verification</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#68645D]/10 text-[#68645D] dark:text-[#B8B1A5] border border-[#D8D0C2] dark:border-[#454139]',
        className
      )}
    >
      <Archive className="w-3 h-3 text-[#68645D]" />
      <span>Archived</span>
    </span>
  );
};
