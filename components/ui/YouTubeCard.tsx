import React from 'react';
import { YouTubeChannel } from '@/types';
import { ExternalLink, PlaySquare, Video } from 'lucide-react';
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
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-5.5 hover:border-[#E58A4E] dark:hover:border-[#EDA574] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-xs',
        className
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FDF2EA] text-[#C97438] dark:bg-[#E58A4E]/20 dark:text-[#EDA574] border border-[#F8DCB8] dark:border-[#583925]">
              <Video className="w-3.5 h-3.5" />
              <span>Video Channel</span>
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
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#E58A4E] dark:group-hover:text-[#EDA574] transition-colors">
            {channel.name}
          </h3>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68736B] hover:text-[#E58A4E] dark:text-[#A0AFA5] dark:hover:text-[#EDA574] transition-colors p-1"
            title="Open YouTube channel in new tab"
            aria-label={`Open ${channel.name} on YouTube`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-4 line-clamp-3 leading-relaxed">
          {channel.description}
        </p>

        {/* Main Topics */}
        {channel.mainTopics && channel.mainTopics.length > 0 && (
          <div className="mb-4">
            <div className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
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
      <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between">
        <VerificationBadge status="verified" date={channel.lastVerified} />
        <a
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#E58A4E] dark:text-[#EDA574] hover:underline"
        >
          <span>Visit Channel</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
