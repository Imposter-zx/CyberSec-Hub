'use client';

import React from 'react';
import { Certification } from '@/types';
import { ExternalLink, Check, X, Shield, Award, Clock, DollarSign, RefreshCw } from 'lucide-react';
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
      <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <Award className="w-10 h-10 mx-auto text-slate-400 mb-2 opacity-60" />
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          No certifications selected for comparison
        </h4>
        <p className="text-xs text-slate-500 mt-1">
          Select 2 to 4 certifications using the "+ Compare" button to view side-by-side technical differences.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm', className)}>
      <table className="w-full text-left text-xs border-collapse bg-white dark:bg-slate-900">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950">
            <th className="p-4 w-44 font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider text-[11px] sticky left-0 bg-slate-50 dark:bg-slate-950 z-10">
              Metric / Feature
            </th>
            {certifications.map((c) => (
              <th key={c.id} className="p-4 min-w-[240px] align-top">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                      {c.provider}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {c.name}
                    </h4>
                  </div>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(c.id)}
                      className="text-slate-400 hover:text-rose-500 p-1 rounded"
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
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {/* Difficulty */}
          <tr>
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-100 dark:border-slate-800">
              Level / Difficulty
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <DifficultyBadge difficulty={c.level} />
              </td>
            ))}
          </tr>

          {/* Exam Style */}
          <tr className="bg-slate-50/40 dark:bg-slate-950/40">
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-slate-50 dark:bg-slate-950 z-10 border-r border-slate-100 dark:border-slate-800">
              Exam Style
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <span
                  className={cn(
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium',
                    c.practical
                      ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                      : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                  )}
                >
                  {c.practical ? 'Hands-on Practical' : 'Multiple-Choice & PBQs'}
                </span>
                <div className="text-[11px] text-slate-500 mt-1">{c.examType}</div>
              </td>
            ))}
          </tr>

          {/* Duration */}
          <tr>
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-100 dark:border-slate-800">
              Exam Duration
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono text-slate-800 dark:text-slate-200">
                {c.duration}
              </td>
            ))}
          </tr>

          {/* Cost */}
          <tr className="bg-slate-50/40 dark:bg-slate-950/40">
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-slate-50 dark:bg-slate-950 z-10 border-r border-slate-100 dark:border-slate-800">
              Estimated Cost
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-semibold text-slate-900 dark:text-slate-100">
                {c.cost}
              </td>
            ))}
          </tr>

          {/* Prerequisites */}
          <tr>
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-100 dark:border-slate-800">
              Prerequisites & Experience
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-slate-600 dark:text-slate-400">
                <ul className="list-disc list-inside space-y-1">
                  {c.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Validity & Renewal */}
          <tr className="bg-slate-50/40 dark:bg-slate-950/40">
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-slate-50 dark:bg-slate-950 z-10 border-r border-slate-100 dark:border-slate-800">
              Validity & Renewal Policy
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-slate-600 dark:text-slate-400">
                <div className="font-medium text-slate-900 dark:text-slate-200 mb-1">
                  {c.validityPeriod}
                </div>
                <div className="text-[11px] leading-relaxed">{c.renewalRequirements}</div>
              </td>
            ))}
          </tr>

          {/* Tested Skills */}
          <tr>
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-100 dark:border-slate-800">
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
          <tr className="bg-slate-50/40 dark:bg-slate-950/40">
            <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 sticky left-0 bg-slate-50 dark:bg-slate-950 z-10 border-r border-slate-100 dark:border-slate-800">
              Official Reference
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4">
                <a
                  href={c.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
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
