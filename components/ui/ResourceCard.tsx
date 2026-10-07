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
        'group flex flex-col justify-between bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-5 hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-md transition-all duration-200',
        className
      )}
    >
      <div>
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
              {resource.category}
            </span>
            {resource.official && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-[#657A58]/15 text-[#445638] dark:text-[#A5AD8C] border border-[#657A58]/30">
                <ShieldCheck className="w-3 h-3 text-[#657A58] dark:text-[#A5AD8C]" />
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
          <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors line-clamp-1">
            {resource.name}
          </h3>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68645D] hover:text-[#66705A] dark:text-[#B8B1A5] dark:hover:text-[#A5AD8C] transition-colors p-1"
            title="Open official resource in new tab"
            aria-label={`Open ${resource.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 line-clamp-3 leading-relaxed">
          {resource.description}
        </p>

        {/* Skills Tags */}
        {resource.skills && resource.skills.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1.5">
              Key Skills
            </div>
            <div className="flex flex-wrap gap-1">
              {resource.skills.slice(0, 4).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
              {resource.skills.length > 4 && (
                <span className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] self-center">
                  +{resource.skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Related Certifications */}
        {resource.relatedCertifications && resource.relatedCertifications.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-[#68645D] dark:text-[#B8B1A5] mb-3">
            <Award className="w-3.5 h-3.5 text-[#B89B62] shrink-0" />
            <span className="truncate">
              Prepares for: {resource.relatedCertifications.join(', ')}
            </span>
          </div>
        )}
      </div>

      {/* Footer Info & Verification */}
      <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between text-xs text-[#68645D] dark:text-[#B8B1A5]">
        <VerificationBadge status={resource.status} date={resource.lastVerified} />
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#66705A] dark:text-[#A5AD8C] font-semibold hover:underline"
        >
          <span>Access Platform</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
