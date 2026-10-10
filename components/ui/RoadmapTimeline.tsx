'use client';

import React, { useState } from 'react';
import { Roadmap } from '@/types';
import { Terminal, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface RoadmapTimelineProps {
  roadmap: Roadmap;
  className?: string;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ roadmap, className }) => {
  const { t, isRTL } = useI18n();
  const [expandedStep, setExpandedStep] = useState<string | null>(roadmap.steps[0]?.id || null);

  return (
    <div className={cn('relative font-sans', className)}>
      {/* Overview Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EEF3EE] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
            {roadmap.category}
          </span>
          <DifficultyBadge difficulty={roadmap.difficulty} />
        </div>
        <h2 className="text-2xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {roadmap.title}
        </h2>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] mb-5 leading-relaxed">
          {roadmap.description}
        </p>
        <div className="p-4 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-xs font-mono flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div>
            <span className="text-[#5F6B62] dark:text-[#91A596] uppercase">{t('target_role')}: </span>
            <span className="text-[#267747] dark:text-[#00FF66] font-bold">{roadmap.targetRole}</span>
          </div>
          <div className="text-[#5F6B62] dark:text-[#91A596] text-[11px] bg-[#EEF3EE] dark:bg-[#0E1510] px-3 py-1 rounded-lg border border-[#DDE5DE] dark:border-[#1B2A1F]">
            {t('sequence')}: {roadmap.estimatedSequence}
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div
        className={cn(
          'relative space-y-6',
          isRTL
            ? 'pr-6 md:pr-8 border-r-2 border-[#DDE5DE] dark:border-[#1B2A1F]'
            : 'pl-6 md:pl-8 border-l-2 border-[#DDE5DE] dark:border-[#1B2A1F]'
        )}
      >
        {roadmap.steps.map((step, idx) => {
          const isExpanded = expandedStep === step.id;

          return (
            <div key={step.id} className="relative group">
              {/* Step Circle Node */}
              <div
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                className={cn(
                  'absolute top-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2 transition-all cursor-pointer select-none',
                  isRTL ? '-right-[31px] md:-right-[39px]' : '-left-[31px] md:-left-[39px]',
                  isExpanded
                    ? 'bg-[#267747] text-white border-[#267747] dark:bg-[#00FF66] dark:text-[#050705] dark:border-[#00FF66] shadow-md dark:shadow-[0_0_15px_rgba(0,255,102,0.4)] ring-4 ring-[#267747]/20 dark:ring-[#00FF66]/20'
                    : 'bg-[#FFFFFF] text-[#5F6B62] border-[#DDE5DE] dark:bg-[#0E1510] dark:text-[#91A596] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66]'
                )}
              >
                {idx + 1}
              </div>

              {/* Step Card */}
              <div
                className={cn(
                  'rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs',
                  isExpanded
                    ? 'bg-[#FFFFFF] dark:bg-[#0E1510] border-[#267747]/60 dark:border-[#00FF66]/60 shadow-md dark:shadow-[0_4px_24px_rgba(0,255,102,0.08)] ring-1 ring-[#267747]/20 dark:ring-[#00FF66]/20'
                    : 'bg-[#FFFFFF]/90 dark:bg-[#0E1510]/70 border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747]/40 dark:hover:border-[#00FF66]/40'
                )}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="p-4.5 cursor-pointer flex items-center justify-between gap-3 select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#267747] dark:text-[#00FF66] bg-[#EEF3EE] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] px-2 py-0.5 rounded">
                      PHASE {idx + 1}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-[#18221C] dark:text-[#E8F5E9] font-mono group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <DifficultyBadge difficulty={step.difficulty} />
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#5F6B62] dark:text-[#91A596]" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#DDE5DE] dark:border-[#1B2A1F] space-y-4 text-xs animate-in fade-in-50 duration-150">
                    <p className="text-[#5F6B62] dark:text-[#91A596] leading-relaxed text-xs">
                      {step.description}
                    </p>

                    {/* Key Skills */}
                    {step.skills && step.skills.length > 0 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider block mb-1.5">
                          {t('tested_skills')}:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {step.skills.map((skill, sIdx) => (
                            <Tag key={sIdx} label={skill} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Labs & Certs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 font-mono">
                      {step.labs && step.labs.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                          <span className="font-bold text-[#267747] dark:text-[#00FF66] flex items-center gap-1.5 mb-1.5 text-xs">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>RECOMMENDED LABS / CTFS</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#5F6B62] dark:text-[#91A596] space-y-0.5 font-sans">
                            {step.labs.map((lab, lIdx) => (
                              <li key={lIdx}>{lab}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.certifications && step.certifications.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                          <span className="font-bold text-[#D97745] dark:text-[#D9A441] flex items-center gap-1.5 mb-1.5 text-xs">
                            <Award className="w-3.5 h-3.5" />
                            <span>TARGET MILESTONES &amp; CREDENTIALS</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#5F6B62] dark:text-[#91A596] space-y-0.5 font-sans">
                            {step.certifications.map((cert, cIdx) => (
                              <li key={cIdx}>{cert}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
