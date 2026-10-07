import React from 'react';
import { Tool } from '@/types';
import { ExternalLink, AlertTriangle, Terminal } from 'lucide-react';
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
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-5.5 hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-xs',
        className
      )}
    >
      <div>
        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="p-1 rounded bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 text-[#3F7D5A] dark:text-[#6AAF8A]">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
              {tool.category}
            </span>
          </div>
          <DifficultyBadge difficulty={tool.difficulty} />
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
            {tool.name}
          </h3>
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68736B] hover:text-[#3F7D5A] dark:text-[#A0AFA5] dark:hover:text-[#6AAF8A] transition-colors p-1"
            title="Open official tool documentation"
            aria-label={`Official website for ${tool.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Purpose */}
        <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed line-clamp-3">
          {tool.purpose}
        </p>

        {/* Platforms & License */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] mr-1">Platforms:</span>
          {tool.platform.map((plat, idx) => (
            <Tag key={idx} label={plat} />
          ))}
          <span className="text-[11px] text-[#3F7D5A] dark:text-[#6AAF8A] ml-auto font-mono bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 px-2.5 py-0.5 rounded-full border border-[#DDE5DE] dark:border-[#3A4840] font-semibold">
            {tool.license}
          </span>
        </div>

        {/* Safety Note Alert */}
        {tool.safetyNote && (
          <div className="p-3 rounded-xl bg-[#FDF6E7] border border-[#F2E5C9] dark:bg-[#D7A84B]/10 dark:border-[#D7A84B]/30 text-[11px] text-[#A67B2E] dark:text-[#E4BF74] flex items-start gap-2 mb-4 leading-relaxed">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D7A84B]" />
            <span>{tool.safetyNote}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between">
        <span className="text-xs text-[#68736B] dark:text-[#A0AFA5] font-medium">Verified Tool</span>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline"
        >
          <span>Official Documentation</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
