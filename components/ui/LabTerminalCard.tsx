'use client';

import React from 'react';
import { Resource } from '@/types';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { PricingBadge } from './PricingBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface LabTerminalCardProps {
  resource: Resource;
  className?: string;
}

export const LabTerminalCard: React.FC<LabTerminalCardProps> = ({ resource, className }) => {
  const { t, isRTL } = useI18n();

  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] p-5 hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(38,119,71,0.1)] dark:hover:shadow-[0_4px_24px_rgba(0,255,102,0.12)] hover:-translate-y-1 transition-all duration-200 font-mono shadow-xs',
        className
      )}
    >
      <div>
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#267747] dark:bg-[#00FF66] animate-pulse" />
            <span className="text-[11px] font-bold text-[#18221C] dark:text-[#E8F5E9] tracking-wider uppercase">
              {resource.name}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <PricingBadge pricing={resource.pricing} />
            <DifficultyBadge difficulty={resource.difficulty} />
          </div>
        </div>

        {/* Access Specs Grid */}
        <div className="p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-3.5 space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-[#5F6B62] dark:text-[#91A596]">{t('category')}:</span>
            <span className="text-[#18221C] dark:text-[#E8F5E9] font-bold">{resource.category}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#5F6B62] dark:text-[#91A596]">{t('environment')}:</span>
            <span className="text-[#267747] dark:text-[#00FF66] font-bold">{resource.platform}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#5F6B62] dark:text-[#91A596]">{t('status')}:</span>
            <span className="text-[#267747] dark:text-[#00FF66] font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{t('status_available')}</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-[#5F6B62] dark:text-[#91A596] leading-relaxed line-clamp-2 mb-4 font-sans">
          {resource.description}
        </p>

        {/* Target Skills / Rooms */}
        {resource.skills && resource.skills.length > 0 && (
          <div className="mb-4">
            <span className="text-[9px] font-mono text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider block mb-1.5">
              {t('rooms_vectors')}:
            </span>
            <div className="flex flex-wrap gap-1">
              {resource.skills.slice(0, 4).map((skill, idx) => (
                <Tag key={idx} label={skill} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Trigger Footer */}
      <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between">
        <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">
          {t('type')}: {resource.resourceType.toUpperCase()}
        </span>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#267747] dark:text-[#00FF66] group-hover:text-[#34965C] dark:group-hover:text-[#5CFF9B] flex items-center gap-1 hover:underline ml-auto"
        >
          <span>{isRTL ? '< دخول المختبر' : t('enter_lab_btn')}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
