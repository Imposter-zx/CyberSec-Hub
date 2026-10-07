import React from 'react';
import { Tool } from '@/types';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, className }) => {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-5 hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-md transition-all duration-200',
        className
      )}
    >
      <div>
        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
            {tool.category}
          </span>
          <DifficultyBadge difficulty={tool.difficulty} />
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors">
            {tool.name}
          </h3>
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68645D] hover:text-[#66705A] dark:text-[#B8B1A5] dark:hover:text-[#A5AD8C] transition-colors p-1"
            title="Open official tool documentation"
            aria-label={`Official website for ${tool.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Purpose */}
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed line-clamp-3">
          {tool.purpose}
        </p>

        {/* Platforms & License */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] mr-1">Platforms:</span>
          {tool.platform.map((plat, idx) => (
            <Tag key={idx} label={plat} />
          ))}
          <span className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] ml-auto font-mono bg-[#EAE3D5] dark:bg-[#292722] px-2 py-0.5 rounded border border-[#D8D0C2] dark:border-[#454139]">
            {tool.license}
          </span>
        </div>

        {/* Safety Note Alert */}
        {tool.safetyNote && (
          <div className="p-2.5 rounded-lg bg-[#A9793A]/10 border border-[#A9793A]/30 text-[11px] text-[#7A531E] dark:text-[#E0B173] flex items-start gap-2 mb-4 leading-relaxed">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#A9793A]" />
            <span>{tool.safetyNote}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between">
        <span className="text-xs text-[#68645D] dark:text-[#B8B1A5]">Security Tool</span>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#66705A] dark:text-[#A5AD8C] hover:underline"
        >
          <span>Official Site & Docs</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
