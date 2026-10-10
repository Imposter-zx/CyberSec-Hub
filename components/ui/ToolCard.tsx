'use client';

import React from 'react';
import { Tool } from '@/types';
import { ExternalLink, Terminal, ShieldAlert } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, className }) => {
  const { t, isRTL } = useI18n();
  const cliCommand = tool.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] p-5 hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_20px_rgba(38,119,71,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all duration-200 font-mono shadow-xs',
        className
      )}
    >
      <div>
        {/* CLI Module Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#EEF3EE] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#267747] dark:text-[#00FF66]">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] font-bold text-[#267747] dark:text-[#00FF66] uppercase tracking-wider">
              {tool.category}
            </span>
          </div>
          <DifficultyBadge difficulty={tool.difficulty} />
        </div>

        {/* Title and CLI Command Callout */}
        <div className="mb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
              {tool.name}
            </h3>
            <a
              href={tool.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5F6B62] hover:text-[#267747] dark:text-[#91A596] dark:hover:text-[#00FF66] transition-colors p-1"
              title="Open tool documentation"
              aria-label={`Official website for ${tool.name}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-1 px-2.5 py-1 rounded-lg bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[11px] text-[#267747] dark:text-[#00FF66] font-bold flex items-center gap-1.5" dir="ltr">
            <span className="text-[#5F6B62] dark:text-[#91A596]">&gt;</span>
            <span>{cliCommand}</span>
          </div>
        </div>

        {/* Purpose */}
        <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-3.5 leading-relaxed line-clamp-3 font-sans">
          {tool.purpose}
        </p>

        {/* Supported Platforms & License */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3.5 text-[10px]">
          <span className="text-[#5F6B62] dark:text-[#91A596] uppercase">{t('environment')}:</span>
          {tool.platform.map((plat, idx) => (
            <span key={idx} className="px-1.5 py-0.5 rounded bg-[#EEF3EE] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9]">
              {plat}
            </span>
          ))}
          <span className="ml-auto text-[#267747] dark:text-[#00FF66] font-bold">
            [{tool.license}]
          </span>
        </div>

        {/* Safety Note Alert */}
        {tool.safetyNote && (
          <div className="p-2.5 rounded-xl bg-[#FFF3E0] dark:bg-[#241C0E] border border-[#FBD7B5] dark:border-[#382B17] text-[10px] text-[#D97745] dark:text-[#D9A441] flex items-start gap-2 mb-3.5 leading-relaxed">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <p className="font-sans">{tool.safetyNote}</p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between">
        <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">CLI ARSENAL</span>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#267747] dark:text-[#00FF66] group-hover:text-[#34965C] dark:group-hover:text-[#5CFF9B] flex items-center gap-1 hover:underline ml-auto"
        >
          <span>{isRTL ? '< فتح الأداة' : t('open_tool_btn')}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
