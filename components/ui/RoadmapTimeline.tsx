'use client';

import React, { useState } from 'react';
import { Roadmap } from '@/types';
import { FlaskConical, Award, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface RoadmapTimelineProps {
  roadmap: Roadmap;
  className?: string;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ roadmap, className }) => {
  const [expandedStep, setExpandedStep] = useState<string | null>(roadmap.steps[0]?.id || null);

  return (
    <div className={cn('relative', className)}>
      {/* Overview Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] mb-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
            {roadmap.category}
          </span>
          <DifficultyBadge difficulty={roadmap.difficulty} />
        </div>
        <h2 className="text-2xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          {roadmap.title}
        </h2>
        <p className="text-sm text-[#68736B] dark:text-[#A0AFA5] mb-5 leading-relaxed">
          {roadmap.description}
        </p>
        <div className="p-4 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 text-xs flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div>
            <span className="font-bold text-[#18221C] dark:text-[#E8F0EA]">Target Role: </span>
            <span className="text-[#3F7D5A] dark:text-[#6AAF8A] font-extrabold">{roadmap.targetRole}</span>
          </div>
          <div className="text-[#68736B] dark:text-[#A0AFA5] font-mono text-[11px] bg-[#FFFFFF] dark:bg-[#181C1A] px-3 py-1 rounded-lg border border-[#DDE5DE] dark:border-[#3A4840]">
            Sequence: {roadmap.estimatedSequence}
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-[#3F7D5A]/40 dark:border-[#6AAF8A]/40 space-y-6">
        {roadmap.steps.map((step, idx) => {
          const isExpanded = expandedStep === step.id;

          return (
            <div key={step.id} className="relative group">
              {/* Step Circle Node */}
              <div
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                className={cn(
                  'absolute -left-[31px] md:-left-[39px] top-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all cursor-pointer select-none',
                  isExpanded
                    ? 'bg-[#3F7D5A] text-white border-[#3F7D5A] shadow-md ring-4 ring-[#3F7D5A]/20 dark:bg-[#6AAF8A] dark:text-[#181C1A] dark:border-[#6AAF8A]'
                    : 'bg-[#FFFFFF] dark:bg-[#262E28] text-[#68736B] dark:text-[#A0AFA5] border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A]'
                )}
              >
                {idx + 1}
              </div>

              {/* Step Card */}
              <div
                className={cn(
                  'rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs',
                  isExpanded
                    ? 'bg-[#FFFFFF] dark:bg-[#262E28] border-[#3F7D5A]/60 shadow-md ring-1 ring-[#3F7D5A]/20 dark:border-[#6AAF8A]/60'
                    : 'bg-[#FFFFFF]/70 dark:bg-[#262E28]/70 border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A]'
                )}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="p-4.5 cursor-pointer flex items-center justify-between gap-3 select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#3F7D5A] dark:text-[#6AAF8A] bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 px-2 py-0.5 rounded">
                      Phase {idx + 1}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <DifficultyBadge difficulty={step.difficulty} />
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#68736B] dark:text-[#A0AFA5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#68736B] dark:text-[#A0AFA5]" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 space-y-4 text-xs animate-in fade-in-50 duration-150">
                    <p className="text-[#68645D] dark:text-[#A0AFA5] leading-relaxed text-xs">
                      {step.description}
                    </p>

                    {/* Key Skills */}
                    {step.skills && step.skills.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider block mb-1.5">
                          Core Competencies
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {step.skills.map((skill, sIdx) => (
                            <Tag key={sIdx} label={skill} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Labs & Certs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {step.labs && step.labs.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#FDF2EA] border border-[#F8DCB8] dark:bg-[#E58A4E]/10 dark:border-[#583925]">
                          <span className="font-bold text-[#C97438] dark:text-[#EDA574] flex items-center gap-1.5 mb-1.5 text-xs">
                            <FlaskConical className="w-3.5 h-3.5 text-[#E58A4E]" />
                            <span>Recommended Labs & CTFs</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#A0AFA5] space-y-0.5">
                            {step.labs.map((lab, lIdx) => (
                              <li key={lIdx}>{lab}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.certifications && step.certifications.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#FDF6E7] border border-[#F2E5C9] dark:bg-[#D7A84B]/10 dark:border-[#524426]">
                          <span className="font-bold text-[#A67B2E] dark:text-[#E4BF74] flex items-center gap-1.5 mb-1.5 text-xs">
                            <Award className="w-3.5 h-3.5 text-[#D7A84B]" />
                            <span>Target Milestones & Credentials</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#A0AFA5] space-y-0.5">
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
