'use client';

import React from 'react';
import { Certification } from '@/types';
import { ExternalLink } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface CertificationCardProps {
  certification: Certification;
  onCompareToggle?: (certId: string) => void;
  isCompared?: boolean;
  className?: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  onCompareToggle,
  isCompared = false,
  className,
}) => {
  const { t, isRTL } = useI18n();

  return (
    <div
      className={cn(
        'group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] p-5 hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_20px_rgba(38,119,71,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all duration-200 font-mono shadow-xs',
        isCompared && 'ring-2 ring-[#267747] dark:ring-[#00FF66] border-[#267747] dark:border-[#00FF66]',
        className
      )}
    >
      <div>
        {/* Credential Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#267747] dark:text-[#00FF66] uppercase tracking-wider">
              {certification.provider}
            </span>
            <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">
              // {certification.domain}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border',
                certification.practical
                  ? 'bg-[#FFEBEE] text-[#C62828] border-[#FFCDD2] dark:bg-[#271211] dark:text-[#FF3B30] dark:border-[#441E1C]'
                  : 'bg-[#E8F5EE] text-[#267747] border-[#C4E1CF] dark:bg-[#0D2214] dark:text-[#00FF66] dark:border-[#1B2A1F]'
              )}
            >
              {certification.practical ? t('practical_exam') : t('mcq_exam')}
            </span>
            <DifficultyBadge difficulty={certification.level} />
          </div>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
            {certification.name}
          </h3>
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5F6B62] hover:text-[#267747] dark:text-[#91A596] dark:hover:text-[#00FF66] transition-colors p-1"
            title="Open official certification syllabus"
            aria-label={`Open official syllabus for ${certification.name}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Target Audience / Scope */}
        <p className="text-xs text-[#5F6B62] dark:text-[#91A596] leading-relaxed mb-3.5 font-sans">
          {certification.targetAudience}
        </p>

        {/* Exam Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-3.5 text-[11px] text-[#5F6B62] dark:text-[#91A596]">
          <div>
            <span className="text-[9px] text-[#5F6B62] dark:text-[#91A596] uppercase block">{t('duration')}</span>
            <span className="text-[#18221C] dark:text-[#E8F5E9] font-bold">{certification.duration}</span>
          </div>
          <div>
            <span className="text-[9px] text-[#5F6B62] dark:text-[#91A596] uppercase block">{t('type')}</span>
            <span className="text-[#18221C] dark:text-[#E8F5E9] font-bold truncate block">{certification.examType}</span>
          </div>
          <div>
            <span className="text-[9px] text-[#5F6B62] dark:text-[#91A596] uppercase block">{t('cost')}</span>
            <span className="text-[#D97745] dark:text-[#D9A441] font-bold">{certification.cost}</span>
          </div>
          <div>
            <span className="text-[9px] text-[#5F6B62] dark:text-[#91A596] uppercase block">{t('validity')}</span>
            <span className="text-[#18221C] dark:text-[#E8F5E9] font-bold">{certification.validityPeriod}</span>
          </div>
        </div>

        {/* Skills Tested */}
        {certification.skillsTested && certification.skillsTested.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {certification.skillsTested.slice(0, 4).map((skill, idx) => (
              <Tag key={idx} label={skill} />
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between gap-2">
        {onCompareToggle && (
          <button
            type="button"
            onClick={() => onCompareToggle(certification.id)}
            className={cn(
              'px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border',
              isCompared
                ? 'bg-[#267747] dark:bg-[#00FF66] text-white dark:text-[#050705] border-[#267747] dark:border-[#00FF66]'
                : 'bg-[#EEF3EE] dark:bg-[#050705] text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-[#DDE5DE] dark:border-[#1B2A1F]'
            )}
          >
            {isCompared ? '[COMPARED]' : '+ COMPARE'}
          </button>
        )}

        <a
          href={certification.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#267747] dark:text-[#00FF66] group-hover:text-[#34965C] dark:group-hover:text-[#5CFF9B] flex items-center gap-1 hover:underline ml-auto"
        >
          <span>{isRTL ? '< عرض التفاصيل' : '> VIEW CREDENTIAL'}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
