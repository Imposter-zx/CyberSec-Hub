import React from 'react';
import { Certification } from '@/types';
import { ExternalLink, Clock, DollarSign } from 'lucide-react';
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
        'group flex flex-col justify-between bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-5 hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-md transition-all duration-200',
        isCompared && 'ring-2 ring-[#66705A] border-[#66705A] dark:ring-[#A5AD8C] dark:border-[#A5AD8C]',
        className
      )}
    >
      <div>
        {/* Top Header Provider & Domain */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
            {certification.provider}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'px-2 py-0.5 rounded text-[11px] font-medium border',
                certification.practical
                  ? 'bg-[#B56F4A]/15 text-[#8C4A28] dark:text-[#E09873] border-[#B56F4A]/30'
                  : 'bg-[#66705A]/15 text-[#4a553f] dark:text-[#A5AD8C] border-[#66705A]/30'
              )}
            >
              {certification.practical ? 'Practical Exam' : 'Knowledge / PBQ Exam'}
            </span>
            <DifficultyBadge difficulty={certification.level} />
          </div>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors">
            {certification.name}
          </h3>
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68645D] hover:text-[#66705A] dark:text-[#B8B1A5] dark:hover:text-[#A5AD8C] transition-colors p-1"
            title="Open official certification page"
            aria-label={`Official page for ${certification.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Target Audience & Domain */}
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-3 line-clamp-2">
          {certification.targetAudience}
        </p>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-xs">
          <div className="flex items-center gap-1.5 text-[#68645D] dark:text-[#B8B1A5]">
            <Clock className="w-3.5 h-3.5 text-[#66705A] dark:text-[#A5AD8C] shrink-0" />
            <span className="truncate">{certification.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#68645D] dark:text-[#B8B1A5]">
            <DollarSign className="w-3.5 h-3.5 text-[#657A58] dark:text-[#A5AD8C] shrink-0" />
            <span className="truncate">{certification.cost}</span>
          </div>
        </div>

        {/* Skills Tested */}
        {certification.skillsTested && certification.skillsTested.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1.5">
              Tested Domains & Skills
            </div>
            <div className="flex flex-wrap gap-1">
              {certification.skillsTested.slice(0, 3).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
              {certification.skillsTested.length > 3 && (
                <span className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] self-center">
                  +{certification.skillsTested.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between gap-2">
        <VerificationBadge status="verified" date={certification.lastVerified} />
        <div className="flex items-center gap-2">
          {onCompareToggle && (
            <button
              type="button"
              onClick={() => onCompareToggle(certification.id)}
              className={cn(
                'px-2.5 py-1 rounded text-xs font-semibold border transition-colors',
                isCompared
                  ? 'bg-[#66705A] text-[#FFFDF8] border-[#66705A] dark:bg-[#A5AD8C] dark:text-[#1F1E1B]'
                  : 'bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border-[#D8D0C2] dark:border-[#454139] hover:bg-[#D8D0C2]'
              )}
            >
              {isCompared ? 'Comparing' : '+ Compare'}
            </button>
          )}
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#66705A] dark:text-[#A5AD8C] hover:bg-[#D8D0C2] dark:hover:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] inline-flex items-center gap-1 transition-colors"
          >
            <span>Official Guide</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
