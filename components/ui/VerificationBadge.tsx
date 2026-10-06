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
          'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
          className
        )}
        title={date ? `Verified on ${date}` : 'Verified resource'}
      >
        <CheckCircle2 className="w-3 h-3" />
        <span>Verified {date ? `(${date})` : ''}</span>
      </span>
    );
  }

  if (status === 'needs-verification') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
          className
        )}
      >
        <AlertCircle className="w-3 h-3" />
        <span>Needs Verification</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20',
        className
      )}
    >
      <Archive className="w-3 h-3" />
      <span>Archived</span>
    </span>
  );
};
