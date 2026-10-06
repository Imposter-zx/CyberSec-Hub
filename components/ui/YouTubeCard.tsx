import React from 'react';
import { YouTubeChannel } from '@/types';
import { ExternalLink, Video, CheckCircle2, PlaySquare } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { VerificationBadge } from './VerificationBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface YouTubeCardProps {
  channel: YouTubeChannel;
  className?: string;
}

export const YouTubeCard: React.FC<YouTubeCardProps> = ({ channel, className }) => {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-red-500/40 hover:shadow-lg transition-all duration-200',
        className
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40">
              <PlaySquare className="w-3 h-3" />
              <span>YouTube Channel</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            {channel.level.map((lvl, idx) => (
              <DifficultyBadge key={idx} difficulty={lvl} />
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
            {channel.name}
          </h3>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors p-1"
            title="Open YouTube channel in new tab"
            aria-label={`Open ${channel.name} on YouTube`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
          {channel.description}
        </p>

        {/* Main Topics */}
        {channel.mainTopics && channel.mainTopics.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
              Featured Coverage
            </div>
            <div className="flex flex-wrap gap-1">
              {channel.mainTopics.map((topic, idx) => (
                <Tag key={idx} label={topic} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer link */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <VerificationBadge status="verified" date={channel.lastVerified} />
        <a
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline"
        >
          <span>Visit Channel</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
