import React from 'react';
import { Resource } from '@/types';
import { ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { PricingBadge } from './PricingBadge';
import { VerificationBadge } from './VerificationBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className }) => {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-5.5 hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-xs',
        className
      )}
    >
      <div>
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
              {resource.category}
            </span>
            {resource.official && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]">
                <ShieldCheck className="w-3 h-3 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                <span>Official</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <DifficultyBadge difficulty={resource.difficulty} />
            <PricingBadge pricing={resource.pricing} />
          </div>
        </div>

        {/* Title & Link */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors line-clamp-1">
            {resource.name}
          </h3>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68736B] hover:text-[#3F7D5A] dark:text-[#A0AFA5] dark:hover:text-[#6AAF8A] transition-colors p-1"
            title="Open official resource in new tab"
            aria-label={`Open ${resource.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-4 line-clamp-3 leading-relaxed">
          {resource.description}
        </p>

        {/* Skills Tags */}
        {resource.skills && resource.skills.length > 0 && (
          <div className="mb-4">
            <div className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Target Skills
            </div>
            <div className="flex flex-wrap gap-1">
              {resource.skills.slice(0, 4).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
              {resource.skills.length > 4 && (
                <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] self-center ml-1">
                  +{resource.skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Related Certifications */}
        {resource.relatedCertifications && resource.relatedCertifications.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-[#68736B] dark:text-[#A0AFA5] mb-3 bg-[#EEF3EE]/50 dark:bg-[#202722]/50 p-2 rounded-lg border border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
            <Award className="w-3.5 h-3.5 text-[#D7A84B] shrink-0" />
            <span className="truncate">
              Prepares for: <strong className="text-[#18221C] dark:text-[#E8F0EA]">{resource.relatedCertifications.join(', ')}</strong>
            </span>
          </div>
        )}
      </div>

      {/* Footer Info & Verification */}
      <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between text-xs text-[#68736B] dark:text-[#A0AFA5]">
        <VerificationBadge status={resource.status} date={resource.lastVerified} />
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#3F7D5A] dark:text-[#6AAF8A] font-bold hover:underline"
        >
          <span>Access Platform</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
