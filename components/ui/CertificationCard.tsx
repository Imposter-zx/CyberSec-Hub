import React from 'react';
import { Certification } from '@/types';
import { ExternalLink, Clock, DollarSign, Award } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { VerificationBadge } from './VerificationBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

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
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-5.5 hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-xs',
        isCompared && 'ring-2 ring-[#3F7D5A] border-[#3F7D5A] dark:ring-[#6AAF8A] dark:border-[#6AAF8A]',
        className
      )}
    >
      <div>
        {/* Top Header Provider & Domain */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="p-1 rounded bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 text-[#3F7D5A] dark:text-[#6AAF8A]">
              <Award className="w-3.5 h-3.5" />
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
              {certification.provider}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border',
                certification.practical
                  ? 'bg-[#FDF2EA] text-[#C97438] dark:bg-[#E58A4E]/20 dark:text-[#EDA574] border-[#F8DCB8] dark:border-[#583925]'
                  : 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border-[#DDE5DE] dark:border-[#3A4840]'
              )}
            >
              {certification.practical ? 'Hands-on Lab' : 'Knowledge / PBQ'}
            </span>
            <DifficultyBadge difficulty={certification.level} />
          </div>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
            {certification.name}
          </h3>
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68736B] hover:text-[#3F7D5A] dark:text-[#A0AFA5] dark:hover:text-[#6AAF8A] transition-colors p-1"
            title="Open official certification page"
            aria-label={`Official page for ${certification.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Target Audience & Domain */}
        <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-3 line-clamp-2">
          {certification.targetAudience}
        </p>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-xs">
          <div className="flex items-center gap-1.5 text-[#68736B] dark:text-[#A0AFA5]">
            <Clock className="w-3.5 h-3.5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0" />
            <span className="truncate">{certification.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#68736B] dark:text-[#A0AFA5]">
            <DollarSign className="w-3.5 h-3.5 text-[#E58A4E] shrink-0" />
            <span className="truncate font-semibold text-[#18221C] dark:text-[#E8F0EA]">{certification.cost}</span>
          </div>
        </div>

        {/* Skills Tested */}
        {certification.skillsTested && certification.skillsTested.length > 0 && (
          <div className="mb-4">
            <div className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Tested Domains & Skills
            </div>
            <div className="flex flex-wrap gap-1">
              {certification.skillsTested.slice(0, 3).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
              {certification.skillsTested.length > 3 && (
                <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] self-center ml-1">
                  +{certification.skillsTested.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between gap-2">
        <VerificationBadge status="verified" date={certification.lastVerified} />
        <div className="flex items-center gap-2">
          {onCompareToggle && (
            <button
              type="button"
              onClick={() => onCompareToggle(certification.id)}
              className={cn(
                'px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors',
                isCompared
                  ? 'bg-[#3F7D5A] text-white border-[#3F7D5A] dark:bg-[#6AAF8A] dark:text-[#181C1A]'
                  : 'bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border-[#DDE5DE] dark:border-[#3A4840] hover:bg-[#DDE5DE]'
              )}
            >
              {isCompared ? 'Comparing' : '+ Compare'}
            </button>
          )}
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 text-[#3F7D5A] dark:text-[#6AAF8A] hover:bg-[#3F7D5A] hover:text-white dark:hover:bg-[#6AAF8A] dark:hover:text-[#181C1A] border border-[#DDE5DE] dark:border-[#3A4840] inline-flex items-center gap-1 transition-all"
          >
            <span>Official Guide</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
