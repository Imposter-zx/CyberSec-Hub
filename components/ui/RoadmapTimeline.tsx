'use client';

import React, { useState } from 'react';
import { Roadmap, RoadmapStep } from '@/types';
import { CheckCircle2, ChevronRight, BookOpen, FlaskConical, Award, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface RoadmapTimelineProps {
  roadmap: Roadmap;
  className?: string;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ roadmap, className }) => {
  const [expandedStep, setExpandedStep] = useState<string | null>(roadmap.steps[0]?.id || null);

  return (
    <div className={cn('relative', className)}>
      {/* Overview Banner */}
      <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            {roadmap.category}
          </span>
          <DifficultyBadge difficulty={roadmap.difficulty} />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {roadmap.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          {roadmap.description}
        </p>
        <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Target Role: </span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">{roadmap.targetRole}</span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            Sequence: {roadmap.estimatedSequence}
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/20 space-y-6">
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
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md ring-4 ring-blue-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-blue-500'
                )}
              >
                {idx + 1}
              </div>

              {/* Step Card */}
              <div
                className={cn(
                  'rounded-xl border transition-all duration-200 overflow-hidden',
                  isExpanded
                    ? 'bg-white dark:bg-slate-900 border-blue-500/40 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                )}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="p-4 cursor-pointer flex items-center justify-between gap-3 select-none"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-slate-400">Phase {idx + 1}</span>
                    <h4 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <DifficultyBadge difficulty={step.difficulty} />
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-xs animate-in fade-in-50 duration-150">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                      {step.description}
                    </p>

                    {/* Key Skills */}
                    {step.skills && step.skills.length > 0 && (
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
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
                        <div className="p-2.5 rounded-lg bg-purple-500/5 border border-purple-500/10">
                          <span className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-1.5 mb-1 text-[11px]">
                            <FlaskConical className="w-3.5 h-3.5" />
                            <span>Recommended Labs</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-0.5">
                            {step.labs.map((lab, lIdx) => (
                              <li key={lIdx}>{lab}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.certifications && step.certifications.length > 0 && (
                        <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/10">
                          <span className="font-semibold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1 text-[11px]">
                            <Award className="w-3.5 h-3.5" />
                            <span>Target Milestones & Certifications</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-0.5">
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
