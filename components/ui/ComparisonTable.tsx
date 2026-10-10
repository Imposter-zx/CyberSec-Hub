'use client';

import React from 'react';
import { Certification } from '@/types';
import { ExternalLink, X, Award } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface ComparisonTableProps {
  certifications: Certification[];
  onRemove?: (id: string) => void;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  certifications,
  onRemove,
  className,
}) => {
  const { t, isRTL } = useI18n();

  if (!certifications || certifications.length === 0) {
    return (
      <div className="p-10 text-center rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] font-mono shadow-xs">
        <Award className="w-12 h-12 mx-auto text-[#267747] dark:text-[#00FF66] mb-3 opacity-60" />
        <h4 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9]">
          {t('no_certs_selected')}
        </h4>
        <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mt-1.5 max-w-md mx-auto font-sans">
          {t('no_certs_hint')}
        </p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-sm', className)}>
      <table className="w-full text-left text-xs border-collapse bg-[#FFFFFF] dark:bg-[#0E1510]">
        <thead>
          <tr className="border-b border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE] dark:bg-[#050705]">
            <th className={cn(
              'p-4.5 w-44 font-mono font-bold text-[#267747] dark:text-[#00FF66] uppercase tracking-wider text-[11px] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE] dark:bg-[#050705]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('metric_header')}
            </th>
            {certifications.map((c) => (
              <th key={c.id} className="p-4.5 min-w-[240px] align-top border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#267747] dark:text-[#00FF66] uppercase tracking-wider block mb-0.5">
                      {c.provider}
                    </span>
                    <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F5E9] font-mono">
                      {c.name}
                    </h4>
                  </div>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(c.id)}
                      className="text-[#5F6B62] hover:text-[#C62828] dark:text-[#91A596] dark:hover:text-[#FF3B30] p-1 rounded-md transition-colors"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#DDE5DE] dark:divide-[#1B2A1F]">
          {/* Difficulty */}
          <tr>
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#FFFFFF] dark:bg-[#0E1510]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('level')} / {t('difficulty')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                <DifficultyBadge difficulty={c.level} />
              </td>
            ))}
          </tr>

          {/* Exam Style */}
          <tr className="bg-[#F7F9F6] dark:bg-[#050705]/50">
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#F7F9F6] dark:bg-[#050705]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('type')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                <span
                  className={cn(
                    'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold',
                    c.practical
                      ? 'bg-[#E8F5EE] text-[#267747] border border-[#C4E1CF] dark:bg-[#00FF66]/10 dark:text-[#00FF66] dark:border-[#00FF66]/30'
                      : 'bg-[#EEF3EE] text-[#5F6B62] border border-[#DDE5DE] dark:bg-[#121B14] dark:text-[#91A596] dark:border-[#1B2A1F]'
                  )}
                >
                  {c.practical ? t('practical_exam') : t('mcq_exam')}
                </span>
                <div className="text-[11px] text-[#5F6B62] dark:text-[#91A596] mt-1 font-mono">{c.examType}</div>
              </td>
            ))}
          </tr>

          {/* Duration */}
          <tr>
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#FFFFFF] dark:bg-[#0E1510]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('duration')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono font-medium text-[#18221C] dark:text-[#E8F5E9] border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                {c.duration}
              </td>
            ))}
          </tr>

          {/* Cost */}
          <tr className="bg-[#F7F9F6] dark:bg-[#050705]/50">
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#F7F9F6] dark:bg-[#050705]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('cost')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono font-bold text-[#267747] dark:text-[#00FF66] border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                {c.cost}
              </td>
            ))}
          </tr>

          {/* Prerequisites */}
          <tr>
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#FFFFFF] dark:bg-[#0E1510]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('prerequisites')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#5F6B62] dark:text-[#91A596] border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                <ul className="list-disc list-inside space-y-1 text-xs">
                  {c.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Validity & Renewal */}
          <tr className="bg-[#F7F9F6] dark:bg-[#050705]/50">
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#F7F9F6] dark:bg-[#050705]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('validity')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#5F6B62] dark:text-[#91A596] border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                <div className="font-bold text-[#18221C] dark:text-[#E8F5E9] mb-0.5 font-mono">
                  {c.validityPeriod}
                </div>
                <div className="text-[11px] leading-relaxed">{c.renewalRequirements}</div>
              </td>
            ))}
          </tr>

          {/* Tested Skills */}
          <tr>
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#FFFFFF] dark:bg-[#0E1510]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('tested_skills')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0">
                <div className="flex flex-wrap gap-1">
                  {c.skillsTested.map((s, idx) => (
                    <Tag key={idx} label={s} />
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* Official Link */}
          <tr className="bg-[#F7F9F6] dark:bg-[#050705]/50">
            <td className={cn(
              'p-4 font-mono font-bold text-[#18221C] dark:text-[#E8F5E9] sticky z-10 border-r border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#F7F9F6] dark:bg-[#050705]',
              isRTL ? 'right-0 text-right' : 'left-0 text-left'
            )}>
              {t('official_guide')}
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#DDE5DE] dark:border-[#1B2A1F] last:border-r-0 font-mono">
                <a
                  href={c.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:underline"
                >
                  <span>{isRTL ? '< الدليل الرسمي' : '> OFFICIAL GUIDE'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
