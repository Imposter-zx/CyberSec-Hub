'use client';

import React, { useState } from 'react';
import { Roadmap } from '@/types';
import { FlaskConical, Award, ChevronDown, ChevronUp } from 'lucide-react';
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
      <div className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] mb-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
            {roadmap.category}
          </span>
          <DifficultyBadge difficulty={roadmap.difficulty} />
        </div>
        <h2 className="text-xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          {roadmap.title}
        </h2>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed">
          {roadmap.description}
        </p>
        <div className="p-3.5 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/60 dark:border-[#454139]/60 text-xs flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-[#242424] dark:text-[#F1EDE4]">Target Role: </span>
            <span className="text-[#66705A] dark:text-[#A5AD8C] font-semibold">{roadmap.targetRole}</span>
          </div>
          <div className="text-[#68645D] dark:text-[#B8B1A5] font-mono text-[11px]">
            Sequence: {roadmap.estimatedSequence}
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-[#66705A]/30 dark:border-[#A5AD8C]/30 space-y-6">
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
                    ? 'bg-[#66705A] text-[#FFFDF8] border-[#66705A] shadow-md ring-4 ring-[#66705A]/20 dark:bg-[#A5AD8C] dark:text-[#1F1E1B] dark:border-[#A5AD8C]'
                    : 'bg-[#FFFDF8] dark:bg-[#302E29] text-[#68645D] dark:text-[#B8B1A5] border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A]'
                )}
              >
                {idx + 1}
              </div>

              {/* Step Card */}
              <div
                className={cn(
                  'rounded-xl border transition-all duration-200 overflow-hidden',
                  isExpanded
                    ? 'bg-[#FFFDF8] dark:bg-[#302E29] border-[#66705A]/60 shadow-md ring-1 ring-[#66705A]/20 dark:border-[#A5AD8C]/60'
                    : 'bg-[#FFFDF8]/70 dark:bg-[#302E29]/70 border-[#D8D0C2] dark:border-[#454139] hover:border-[#68645D]'
                )}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="p-4 cursor-pointer flex items-center justify-between gap-3 select-none"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#68645D] dark:text-[#B8B1A5]">Phase {idx + 1}</span>
                    <h4 className="text-sm md:text-base font-semibold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <DifficultyBadge difficulty={step.difficulty} />
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#68645D] dark:text-[#B8B1A5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#68645D] dark:text-[#B8B1A5]" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 space-y-3 text-xs animate-in fade-in-50 duration-150">
                    <p className="text-[#68645D] dark:text-[#B8B1A5] leading-relaxed text-xs">
                      {step.description}
                    </p>

                    {/* Key Skills */}
                    {step.skills && step.skills.length > 0 && (
                      <div>
                        <span className="text-[11px] font-semibold text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider block mb-1">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                      {step.labs && step.labs.length > 0 && (
                        <div className="p-2.5 rounded-lg bg-[#B56F4A]/10 border border-[#B56F4A]/20">
                          <span className="font-semibold text-[#8C4A28] dark:text-[#E09873] flex items-center gap-1.5 mb-1 text-[11px]">
                            <FlaskConical className="w-3.5 h-3.5 text-[#B56F4A]" />
                            <span>Recommended Labs</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#B8B1A5] space-y-0.5">
                            {step.labs.map((lab, lIdx) => (
                              <li key={lIdx}>{lab}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.certifications && step.certifications.length > 0 && (
                        <div className="p-2.5 rounded-lg bg-[#B89B62]/10 border border-[#B89B62]/20">
                          <span className="font-semibold text-[#82662c] dark:text-[#D1B87F] flex items-center gap-1.5 mb-1 text-[11px]">
                            <Award className="w-3.5 h-3.5 text-[#B89B62]" />
                            <span>Target Milestones & Certifications</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#B8B1A5] space-y-0.5">
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
