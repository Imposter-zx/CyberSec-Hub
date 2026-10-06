import React from 'react';
import { Certification } from '@/types';
import { ExternalLink, Award, Clock, DollarSign, CheckCircle2, BookOpen } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { VerificationBadge } from './VerificationBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CertificationCardProps {
  certification: Certification;
  onCompareToggle?: (certId: string) => void;
  isCompared?: boolean;
  className?: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  onCompareToggle,
  isCompared = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-200',
        isCompared && 'ring-2 ring-blue-500 border-blue-500',
        className
      )}
    >
      <div>
        {/* Top Header Provider & Domain */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {certification.provider}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'px-2 py-0.5 rounded text-xs font-medium border',
                certification.practical
                  ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
                  : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
              )}
            >
              {certification.practical ? 'Practical Exam' : 'Knowledge / PBQ Exam'}
            </span>
            <DifficultyBadge difficulty={certification.level} />
          </div>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {certification.name}
          </h3>
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            title="Open official certification page"
            aria-label={`Official page for ${certification.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Target Audience & Domain */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
          {certification.targetAudience}
        </p>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 mb-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="truncate">{certification.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
            <DollarSign className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate">{certification.cost}</span>
          </div>
        </div>

        {/* Skills Tested */}
        {certification.skillsTested && certification.skillsTested.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
              Tested Domains & Skills
            </div>
            <div className="flex flex-wrap gap-1">
              {certification.skillsTested.slice(0, 3).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
              {certification.skillsTested.length > 3 && (
                <span className="text-[11px] text-slate-400 self-center">
                  +{certification.skillsTested.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <VerificationBadge status="verified" date={certification.lastVerified} />
        <div className="flex items-center gap-2">
          {onCompareToggle && (
            <button
              type="button"
              onClick={() => onCompareToggle(certification.id)}
              className={cn(
                'px-2.5 py-1 rounded text-xs font-medium border transition-colors',
                isCompared
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
              )}
            >
              {isCompared ? 'Comparing' : '+ Compare'}
            </button>
          )}
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 inline-flex items-center gap-1"
          >
            <span>Official Guide</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
