import React from 'react';
import { YouTubeChannel } from '@/types';
import { ExternalLink, PlaySquare } from 'lucide-react';
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
        'group flex flex-col justify-between bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-5 hover:border-[#B56F4A] dark:hover:border-[#C58A68] hover:shadow-md transition-all duration-200',
        className
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-[#B56F4A]/10 text-[#8C4A28] dark:text-[#E09873] border border-[#B56F4A]/25">
              <PlaySquare className="w-3 h-3" />
              <span>Security Channel</span>
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
          <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#B56F4A] dark:group-hover:text-[#C58A68] transition-colors">
            {channel.name}
          </h3>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68645D] hover:text-[#B56F4A] dark:text-[#B8B1A5] dark:hover:text-[#C58A68] transition-colors p-1"
            title="Open YouTube channel in new tab"
            aria-label={`Open ${channel.name} on YouTube`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 line-clamp-3 leading-relaxed">
          {channel.description}
        </p>

        {/* Main Topics */}
        {channel.mainTopics && channel.mainTopics.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1.5">
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
      <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between">
        <VerificationBadge status="verified" date={channel.lastVerified} />
        <a
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#B56F4A] dark:text-[#C58A68] hover:underline"
        >
          <span>Visit Channel</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
