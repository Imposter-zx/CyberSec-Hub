import React from 'react';
import { Resource } from '@/types';
import { ExternalLink, ShieldCheck, Layers, Award } from 'lucide-react';
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
        'group flex flex-col justify-between bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-200',
        className
      )}
    >
      <div>
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {resource.category}
            </span>
            {resource.official && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3 h-3" />
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
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {resource.name}
          </h3>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            title="Open official resource in new tab"
            aria-label={`Open ${resource.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
          {resource.description}
        </p>

        {/* Skills Tags */}
        {resource.skills && resource.skills.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
              Key Skills
            </div>
            <div className="flex flex-wrap gap-1">
              {resource.skills.slice(0, 4).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
              {resource.skills.length > 4 && (
                <span className="text-[11px] text-slate-400 self-center">
                  +{resource.skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Related Certifications */}
        {resource.relatedCertifications && resource.relatedCertifications.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">
              Prepares for: {resource.relatedCertifications.join(', ')}
            </span>
          </div>
        )}
      </div>

      {/* Footer Info & Verification */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <VerificationBadge status={resource.status} date={resource.lastVerified} />
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          <span>Access Platform</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
