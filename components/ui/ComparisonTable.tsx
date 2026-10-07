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
      <div className="p-8 text-center rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139]">
        <Award className="w-10 h-10 mx-auto text-[#68645D] dark:text-[#B8B1A5] mb-2 opacity-60" />
        <h4 className="text-sm font-semibold text-[#242424] dark:text-[#F1EDE4]">
          No certifications selected for comparison
        </h4>
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mt-1">
          Select 2 to 4 certifications using the "+ Compare" button to view side-by-side technical differences.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto rounded-xl border border-[#D8D0C2] dark:border-[#454139] shadow-sm', className)}>
      <table className="w-full text-left text-xs border-collapse bg-[#FFFDF8] dark:bg-[#302E29]">
        <thead>
          <tr className="border-b border-[#D8D0C2] dark:border-[#454139] bg-[#EAE3D5]/60 dark:bg-[#292722]">
            <th className="p-4 w-44 font-bold text-[#242424] dark:text-[#F1EDE4] uppercase tracking-wider text-[11px] sticky left-0 bg-[#EAE3D5] dark:bg-[#292722] z-10">
              Metric / Feature
            </th>
            {certifications.map((c) => (
              <th key={c.id} className="p-4 min-w-[240px] align-top">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-[#66705A] dark:text-[#A5AD8C]">
                      {c.provider}
                    </span>
                    <h4 className="text-sm font-bold text-[#242424] dark:text-[#F1EDE4]">
                      {c.name}
                    </h4>
                  </div>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(c.id)}
                      className="text-[#68645D] hover:text-[#A45143] dark:text-[#B8B1A5] dark:hover:text-[#E08A7C] p-1 rounded transition-colors"
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
        <tbody className="divide-y divide-[#D8D0C2]/50 dark:divide-[#454139]">
          {/* Difficulty */}
          <tr>
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#FFFDF8] dark:bg-[#302E29] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Level / Difficulty
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <DifficultyBadge difficulty={c.level} />
              </td>
            ))}
          </tr>

          {/* Exam Style */}
          <tr className="bg-[#EAE3D5]/30 dark:bg-[#292722]/40">
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#EAE3D5]/60 dark:bg-[#292722] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Exam Style
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <span
                  className={cn(
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold',
                    c.practical
                      ? 'bg-[#B56F4A]/15 text-[#8C4A28] dark:text-[#E09873]'
                      : 'bg-[#66705A]/15 text-[#4a553f] dark:text-[#A5AD8C]'
                  )}
                >
                  {c.practical ? 'Hands-on Practical' : 'Multiple-Choice & PBQs'}
                </span>
                <div className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] mt-1">{c.examType}</div>
              </td>
            ))}
          </tr>

          {/* Duration */}
          <tr>
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#FFFDF8] dark:bg-[#302E29] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Exam Duration
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono text-[#242424] dark:text-[#F1EDE4]">
                {c.duration}
              </td>
            ))}
          </tr>

          {/* Cost */}
          <tr className="bg-[#EAE3D5]/30 dark:bg-[#292722]/40">
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#EAE3D5]/60 dark:bg-[#292722] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Estimated Cost
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4]">
                {c.cost}
              </td>
            ))}
          </tr>

          {/* Prerequisites */}
          <tr>
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#FFFDF8] dark:bg-[#302E29] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Prerequisites & Experience
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#68645D] dark:text-[#B8B1A5]">
                <ul className="list-disc list-inside space-y-1">
                  {c.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Validity & Renewal */}
          <tr className="bg-[#EAE3D5]/30 dark:bg-[#292722]/40">
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#EAE3D5]/60 dark:bg-[#292722] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Validity & Renewal Policy
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#68645D] dark:text-[#B8B1A5]">
                <div className="font-semibold text-[#242424] dark:text-[#F1EDE4] mb-1">
                  {c.validityPeriod}
                </div>
                <div className="text-[11px] leading-relaxed">{c.renewalRequirements}</div>
              </td>
            ))}
          </tr>

          {/* Tested Skills */}
          <tr>
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#FFFDF8] dark:bg-[#302E29] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
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
          <tr className="bg-[#EAE3D5]/30 dark:bg-[#292722]/40">
            <td className="p-4 font-semibold text-[#242424] dark:text-[#F1EDE4] sticky left-0 bg-[#EAE3D5]/60 dark:bg-[#292722] z-10 border-r border-[#D8D0C2]/60 dark:border-[#454139]">
              Official Reference
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <a
                  href={c.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#66705A] dark:text-[#A5AD8C] hover:underline"
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
