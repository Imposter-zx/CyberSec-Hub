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
          'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]',
          className
        )}
        title={date ? `Verified on ${date}` : 'Verified official reference'}
      >
        <CheckCircle2 className="w-3 h-3 text-[#3F7D5A] dark:text-[#6AAF8A]" />
        <span>Verified {date ? `(${date})` : ''}</span>
      </span>
    );
  }

  if (status === 'needs-verification') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#FDF6E7] text-[#A67B2E] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] border border-[#F2E5C9] dark:border-[#524426]',
          className
        )}
      >
        <AlertCircle className="w-3 h-3 text-[#D7A84B]" />
        <span>Needs Verification</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EEF3EE] text-[#68736B] dark:bg-[#202722] dark:text-[#A0AFA5] border border-[#DDE5DE] dark:border-[#3A4840]',
        className
      )}
    >
      <Archive className="w-3 h-3 text-[#68736B]" />
      <span>Archived</span>
    </span>
  );
};
