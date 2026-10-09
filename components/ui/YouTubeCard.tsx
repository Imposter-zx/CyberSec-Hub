import React from 'react';
import { YouTubeChannel } from '@/types';
import { ExternalLink, Radio, Video } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
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
        'group flex flex-col justify-between bg-[#0E1510] rounded-2xl border border-[#1B2A1F] p-5 hover:border-[#00FF66] hover:bg-[#121B14] hover:shadow-[0_4px_20px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all duration-200 font-mono shadow-xs',
        className
      )}
    >
      <div>
        {/* Signal Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#1B2A1F]">
          <div className="flex items-center gap-1.5">
            <span className="p-1 rounded bg-[#050705] border border-[#1B2A1F] text-[#00FF66]">
              <Radio className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] font-bold text-[#00FF66] uppercase tracking-wider">
              {channel.categories?.[0] || 'SIGNAL STREAM'}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {channel.level.map((lvl, idx) => (
              <DifficultyBadge key={idx} difficulty={lvl} />
            ))}
          </div>
        </div>

        {/* Channel Name */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#E8F5E9] group-hover:text-[#00FF66] transition-colors line-clamp-1">
            {channel.name}
          </h3>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#91A596] hover:text-[#00FF66] transition-colors p-1"
            title="Open signal channel in new tab"
            aria-label={`Open ${channel.name} on YouTube`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-[#91A596] mb-3.5 line-clamp-3 leading-relaxed font-sans">
          {channel.description}
        </p>

        {/* Topics */}
        {channel.mainTopics && channel.mainTopics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3.5">
            {channel.mainTopics.slice(0, 4).map((topic, idx) => (
              <Tag key={idx} label={topic} />
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-[#1B2A1F] flex items-center justify-between">
        <span className="text-[10px] text-[#91A596] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
          <span>BROADCASTING</span>
        </span>
        <a
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#00FF66] group-hover:text-[#5CFF9B] flex items-center gap-1 hover:underline ml-auto"
        >
          <span>&gt; TUNE IN</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
