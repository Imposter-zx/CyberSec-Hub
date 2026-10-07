'use client';

import React from 'react';
import { Certification } from '@/types';
import { ExternalLink, X, Award } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

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
  if (!certifications || certifications.length === 0) {
    return (
      <div className="p-10 text-center rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840]">
        <Award className="w-12 h-12 mx-auto text-[#3F7D5A] dark:text-[#6AAF8A] mb-3 opacity-60" />
        <h4 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA]">
          No certifications selected for comparison
        </h4>
        <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mt-1.5 max-w-md mx-auto">
          Select 2 to 4 certifications using the "+ Compare" button to view side-by-side technical differences, costs, and formats.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] shadow-sm', className)}>
      <table className="w-full text-left text-xs border-collapse bg-[#FFFFFF] dark:bg-[#262E28]">
        <thead>
          <tr className="border-b border-[#DDE5DE] dark:border-[#3A4840] bg-[#EEF3EE] dark:bg-[#202722]">
            <th className="p-4.5 w-44 font-bold text-[#18221C] dark:text-[#E8F0EA] uppercase tracking-wider text-[11px] sticky left-0 bg-[#EEF3EE] dark:bg-[#202722] z-10">
              Metric / Feature
            </th>
            {certifications.map((c) => (
              <th key={c.id} className="p-4.5 min-w-[240px] align-top">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#3F7D5A] dark:text-[#6AAF8A] uppercase tracking-wider">
                      {c.provider}
                    </span>
                    <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA]">
                      {c.name}
                    </h4>
                  </div>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(c.id)}
                      className="text-[#68736B] hover:text-[#B84040] dark:text-[#A0AFA5] dark:hover:text-[#E07A7A] p-1 rounded-md transition-colors"
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
        <tbody className="divide-y divide-[#DDE5DE]/60 dark:divide-[#3A4840]">
          {/* Difficulty */}
          <tr>
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#FFFFFF] dark:bg-[#262E28] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Level / Difficulty
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <DifficultyBadge difficulty={c.level} />
              </td>
            ))}
          </tr>

          {/* Exam Style */}
          <tr className="bg-[#EEF3EE]/30 dark:bg-[#202722]/40">
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#EEF3EE]/60 dark:bg-[#202722] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Exam Style
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <span
                  className={cn(
                    'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold',
                    c.practical
                      ? 'bg-[#FDF2EA] text-[#C97438] dark:bg-[#E58A4E]/20 dark:text-[#EDA574]'
                      : 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A]'
                  )}
                >
                  {c.practical ? 'Hands-on Practical Lab' : 'Multiple-Choice & PBQs'}
                </span>
                <div className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] mt-1">{c.examType}</div>
              </td>
            ))}
          </tr>

          {/* Duration */}
          <tr>
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#FFFFFF] dark:bg-[#262E28] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Exam Duration
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono font-medium text-[#18221C] dark:text-[#E8F0EA]">
                {c.duration}
              </td>
            ))}
          </tr>

          {/* Cost */}
          <tr className="bg-[#EEF3EE]/30 dark:bg-[#202722]/40">
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#EEF3EE]/60 dark:bg-[#202722] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Estimated Cost
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">
                {c.cost}
              </td>
            ))}
          </tr>

          {/* Prerequisites */}
          <tr>
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#FFFFFF] dark:bg-[#262E28] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Prerequisites & Prep
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#68736B] dark:text-[#A0AFA5]">
                <ul className="list-disc list-inside space-y-1">
                  {c.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Validity & Renewal */}
          <tr className="bg-[#EEF3EE]/30 dark:bg-[#202722]/40">
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#EEF3EE]/60 dark:bg-[#202722] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Renewal Policy
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#68736B] dark:text-[#A0AFA5]">
                <div className="font-bold text-[#18221C] dark:text-[#E8F0EA] mb-0.5">
                  {c.validityPeriod}
                </div>
                <div className="text-[11px] leading-relaxed">{c.renewalRequirements}</div>
              </td>
            ))}
          </tr>

          {/* Tested Skills */}
          <tr>
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#FFFFFF] dark:bg-[#262E28] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Tested Competencies
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <div className="flex flex-wrap gap-1">
                  {c.skillsTested.map((s, idx) => (
                    <Tag key={idx} label={s} />
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* Official Link */}
          <tr className="bg-[#EEF3EE]/30 dark:bg-[#202722]/40">
            <td className="p-4 font-bold text-[#18221C] dark:text-[#E8F0EA] sticky left-0 bg-[#EEF3EE]/60 dark:bg-[#202722] z-10 border-r border-[#DDE5DE]/60 dark:border-[#3A4840]">
              Official Guide
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <a
                  href={c.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline"
                >
                  <span>Official Guide</span>
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
