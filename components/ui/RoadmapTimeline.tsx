'use client';

import React, { useState } from 'react';
import { Roadmap } from '@/types';
import { Terminal, Award, ChevronDown, ChevronUp, CheckCircle, Flame } from 'lucide-react';
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
    <div className={cn('relative font-sans', className)}>
      {/* Overview Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] mb-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#050705] text-[#00FF66] border border-[#1B2A1F]">
            {roadmap.category}
          </span>
          <DifficultyBadge difficulty={roadmap.difficulty} />
        </div>
        <h2 className="text-2xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {roadmap.title}
        </h2>
        <p className="text-sm text-[#91A596] mb-5 leading-relaxed">
          {roadmap.description}
        </p>
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-xs font-mono flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div>
            <span className="text-[#91A596]">TARGET ROLE: </span>
            <span className="text-[#00FF66] font-bold">{roadmap.targetRole}</span>
          </div>
          <div className="text-[#91A596] text-[11px] bg-[#0E1510] px-3 py-1 rounded-lg border border-[#1B2A1F]">
            SEQUENCE: {roadmap.estimatedSequence}
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-[#1B2A1F] space-y-6">
        {roadmap.steps.map((step, idx) => {
          const isExpanded = expandedStep === step.id;

          return (
            <div key={step.id} className="relative group">
              {/* Step Circle Node */}
              <div
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                className={cn(
                  'absolute -left-[31px] md:-left-[39px] top-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2 transition-all cursor-pointer select-none',
                  isExpanded
                    ? 'bg-[#00FF66] text-[#050705] border-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.4)] ring-4 ring-[#00FF66]/20'
                    : 'bg-[#0E1510] text-[#91A596] border-[#1B2A1F] hover:border-[#00FF66]'
                )}
              >
                {idx + 1}
              </div>

              {/* Step Card */}
              <div
                className={cn(
                  'rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs',
                  isExpanded
                    ? 'bg-[#0E1510] border-[#00FF66]/60 shadow-[0_4px_24px_rgba(0,255,102,0.08)] ring-1 ring-[#00FF66]/20'
                    : 'bg-[#0E1510]/70 border-[#1B2A1F] hover:border-[#00FF66]/40'
                )}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="p-4.5 cursor-pointer flex items-center justify-between gap-3 select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#00FF66] bg-[#050705] border border-[#1B2A1F] px-2 py-0.5 rounded">
                      PHASE {idx + 1}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-[#E8F5E9] font-mono group-hover:text-[#00FF66] transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <DifficultyBadge difficulty={step.difficulty} />
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#00FF66]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#91A596]" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#1B2A1F] space-y-4 text-xs animate-in fade-in-50 duration-150">
                    <p className="text-[#91A596] leading-relaxed text-xs">
                      {step.description}
                    </p>

                    {/* Key Skills */}
                    {step.skills && step.skills.length > 0 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#91A596] uppercase tracking-wider block mb-1.5">
                          CORE COMPETENCIES:
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
                        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
                          <span className="font-bold text-[#00FF66] flex items-center gap-1.5 mb-1.5 text-xs">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>RECOMMENDED LABS / CTFS</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#91A596] space-y-0.5 font-sans">
                            {step.labs.map((lab, lIdx) => (
                              <li key={lIdx}>{lab}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.certifications && step.certifications.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
                          <span className="font-bold text-[#D9A441] flex items-center gap-1.5 mb-1.5 text-xs">
                            <Award className="w-3.5 h-3.5" />
                            <span>TARGET MILESTONES &amp; CREDENTIALS</span>
                          </span>
                          <ul className="list-disc list-inside text-[11px] text-[#91A596] space-y-0.5 font-sans">
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
