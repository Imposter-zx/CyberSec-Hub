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
        'group flex flex-col justify-between bg-[#0E1510] rounded-2xl border border-[#1B2A1F] p-5 hover:border-[#00FF66] hover:bg-[#121B14] hover:shadow-[0_4px_20px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all duration-200 font-mono shadow-xs',
        className
      )}
    >
      <div>
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#1B2A1F]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#91A596] bg-[#050705] border border-[#1B2A1F]">
              {resource.category}
            </span>
            {resource.official && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-[#00FF66] bg-[#0D2214] border border-[#1B2A1F]">
                <ShieldCheck className="w-3 h-3 text-[#00FF66]" />
                <span>OFFICIAL</span>
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
          <h3 className="text-sm sm:text-base font-bold text-[#E8F5E9] group-hover:text-[#00FF66] transition-colors line-clamp-1 font-mono">
            {resource.name}
          </h3>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#91A596] hover:text-[#00FF66] transition-colors p-1"
            title="Open official resource in new tab"
            aria-label={`Open ${resource.name}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-[#91A596] leading-relaxed line-clamp-2 mb-4 font-sans">
          {resource.description}
        </p>

        {/* Platform & Language Indicators */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-[11px] text-[#91A596]">
          <span className="text-[#00FF66]">&gt; {resource.platform}</span>
          {resource.languages && resource.languages.length > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 bg-[#050705] border border-[#1B2A1F] rounded text-[#91A596]">
              {resource.languages.join(' / ')}
            </span>
          )}
        </div>

        {/* Skills Tags */}
        {resource.skills && resource.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.skills.slice(0, 4).map((skill, idx) => (
              <Tag key={idx} label={skill} />
            ))}
          </div>
        )}
      </div>

      {/* Footer Details */}
      <div className="pt-3 border-t border-[#1B2A1F] flex items-center justify-between text-[11px]">
        {resource.relatedCertifications && resource.relatedCertifications.length > 0 ? (
          <div className="flex items-center gap-1 text-[10px] text-[#D9A441]">
            <Award className="w-3 h-3" />
            <span>PREPS: {resource.relatedCertifications.slice(0, 2).join(', ')}</span>
          </div>
        ) : (
          <span className="text-[10px] text-[#91A596]">VERIFIED SOURCE</span>
        )}

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#00FF66] group-hover:text-[#5CFF9B] flex items-center gap-1 hover:underline ml-auto"
        >
          <span>&gt; ACCESS</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
