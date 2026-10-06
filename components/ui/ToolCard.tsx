import React from 'react';
import { Tool } from '@/types';
import { ExternalLink, Wrench, AlertTriangle, Terminal } from 'lucide-react';
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
        'group flex flex-col justify-between bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-200',
        className
      )}
    >
      <div>
        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {tool.category}
          </span>
          <DifficultyBadge difficulty={tool.difficulty} />
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {tool.name}
          </h3>
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            title="Open official tool documentation"
            aria-label={`Official website for ${tool.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Purpose */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
          {tool.purpose}
        </p>

        {/* Platforms & License */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="text-[11px] font-medium text-slate-400 mr-1">Platforms:</span>
          {tool.platform.map((plat, idx) => (
            <Tag key={idx} label={plat} />
          ))}
          <span className="text-[11px] text-slate-400 ml-auto font-mono bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded">
            {tool.license}
          </span>
        </div>

        {/* Safety Note Alert */}
        {tool.safetyNote && (
          <div className="p-2.5 rounded-lg bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-300 flex items-start gap-2 mb-4 leading-relaxed">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
            <span>{tool.safetyNote}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span className="text-xs text-slate-400">Security Tool</span>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Official Site & Docs</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
