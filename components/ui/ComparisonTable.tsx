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
      <div className="p-10 text-center rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono">
        <Award className="w-12 h-12 mx-auto text-[#00FF66] mb-3 opacity-60" />
        <h4 className="text-base font-bold text-[#E8F5E9]">
          NO CERTIFICATIONS SELECTED FOR MATRIX
        </h4>
        <p className="text-xs text-[#91A596] mt-1.5 max-w-md mx-auto font-sans">
          Select 2 to 4 certifications using the "+ Compare" button to view side-by-side technical differences, costs, and formats.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-[#1B2A1F] shadow-sm', className)}>
      <table className="w-full text-left text-xs border-collapse bg-[#0E1510]">
        <thead>
          <tr className="border-b border-[#1B2A1F] bg-[#050705]">
            <th className="p-4.5 w-44 font-mono font-bold text-[#00FF66] uppercase tracking-wider text-[11px] sticky left-0 bg-[#050705] z-10 border-r border-[#1B2A1F]">
              METRIC / FEATURE
            </th>
            {certifications.map((c) => (
              <th key={c.id} className="p-4.5 min-w-[240px] align-top border-r border-[#1B2A1F] last:border-r-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#00FF66] uppercase tracking-wider block mb-0.5">
                      {c.provider}
                    </span>
                    <h4 className="text-sm font-bold text-[#E8F5E9] font-mono">
                      {c.name}
                    </h4>
                  </div>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(c.id)}
                      className="text-[#91A596] hover:text-[#FF3B30] p-1 rounded-md transition-colors"
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
        <tbody className="divide-y divide-[#1B2A1F]">
          {/* Difficulty */}
          <tr>
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#0E1510] z-10 border-r border-[#1B2A1F]">
              Level / Difficulty
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#1B2A1F] last:border-r-0">
                <DifficultyBadge difficulty={c.level} />
              </td>
            ))}
          </tr>

          {/* Exam Style */}
          <tr className="bg-[#050705]/50">
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#050705] z-10 border-r border-[#1B2A1F]">
              Exam Style
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#1B2A1F] last:border-r-0">
                <span
                  className={cn(
                    'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold',
                    c.practical
                      ? 'bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30'
                      : 'bg-[#121B14] text-[#91A596] border border-[#1B2A1F]'
                  )}
                >
                  {c.practical ? 'Hands-on Practical Lab' : 'Multiple-Choice & PBQs'}
                </span>
                <div className="text-[11px] text-[#91A596] mt-1 font-mono">{c.examType}</div>
              </td>
            ))}
          </tr>

          {/* Duration */}
          <tr>
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#0E1510] z-10 border-r border-[#1B2A1F]">
              Exam Duration
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono font-medium text-[#E8F5E9] border-r border-[#1B2A1F] last:border-r-0">
                {c.duration}
              </td>
            ))}
          </tr>

          {/* Cost */}
          <tr className="bg-[#050705]/50">
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#050705] z-10 border-r border-[#1B2A1F]">
              Estimated Cost
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 font-mono font-bold text-[#00FF66] border-r border-[#1B2A1F] last:border-r-0">
                {c.cost}
              </td>
            ))}
          </tr>

          {/* Prerequisites */}
          <tr>
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#0E1510] z-10 border-r border-[#1B2A1F]">
              Prerequisites &amp; Prep
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#91A596] border-r border-[#1B2A1F] last:border-r-0">
                <ul className="list-disc list-inside space-y-1 text-xs">
                  {c.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Validity & Renewal */}
          <tr className="bg-[#050705]/50">
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#050705] z-10 border-r border-[#1B2A1F]">
              Renewal Policy
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 text-[#91A596] border-r border-[#1B2A1F] last:border-r-0">
                <div className="font-bold text-[#E8F5E9] mb-0.5 font-mono">
                  {c.validityPeriod}
                </div>
                <div className="text-[11px] leading-relaxed">{c.renewalRequirements}</div>
              </td>
            ))}
          </tr>

          {/* Tested Skills */}
          <tr>
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#0E1510] z-10 border-r border-[#1B2A1F]">
              Tested Competencies
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#1B2A1F] last:border-r-0">
                <div className="flex flex-wrap gap-1">
                  {c.skillsTested.map((s, idx) => (
                    <Tag key={idx} label={s} />
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* Official Link */}
          <tr className="bg-[#050705]/50">
            <td className="p-4 font-mono font-bold text-[#E8F5E9] sticky left-0 bg-[#050705] z-10 border-r border-[#1B2A1F]">
              Official Guide
            </td>
            {certifications.map((c) => (
              <td key={c.id} className="p-4 border-r border-[#1B2A1F] last:border-r-0 font-mono">
                <a
                  href={c.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#00FF66] hover:underline"
                >
                  <span>&gt; OFFICIAL GUIDE</span>
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
