import React, { useState } from 'react';
import { Threat } from '@/types';
import { ChevronDown, ChevronUp, Shield, Activity, Lock, Target } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface ThreatCardProps {
  threat: Threat;
  className?: string;
}

export const ThreatCard: React.FC<ThreatCardProps> = ({ threat, className }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={threat.id}
      className={cn(
        'group bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-5 hover:border-[#66705A] dark:hover:border-[#A5AD8C] transition-all duration-200 scroll-mt-24 shadow-sm',
        expanded && 'ring-1 ring-[#66705A]/50 border-[#66705A] dark:ring-[#A5AD8C]/50 dark:border-[#A5AD8C]',
        className
      )}
    >
      {/* Category & Difficulty */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#B56F4A]/15 text-[#8C4A28] dark:text-[#E09873] border border-[#B56F4A]/30">
          {threat.category}
        </span>
        <DifficultyBadge difficulty={threat.difficulty} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] mb-2">
        {threat.name}
      </h3>

      {/* Definition */}
      <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed">
        {threat.definition}
      </p>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-xs">
        <div>
          <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-0.5">
            Attack Objective:
          </span>
          <span className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
            {threat.attackObjective}
          </span>
        </div>
        <div>
          <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-0.5">
            Impact:
          </span>
          <span className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
            {threat.impact}
          </span>
        </div>
      </div>

      {/* Framework References */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {threat.mitreAttackTechniques &&
          threat.mitreAttackTechniques.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-[#66705A]/10 text-[#4a553f] dark:text-[#A5AD8C] border border-[#66705A]/25"
            >
              <Target className="w-3 h-3 text-[#66705A] dark:text-[#A5AD8C]" />
              <span>MITRE {tech}</span>
            </span>
          ))}
        {threat.owaspCategory && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-[#B89B62]/15 text-[#82662c] dark:text-[#D1B87F] border border-[#B89B62]/30">
            <Shield className="w-3 h-3 text-[#B89B62]" />
            <span>{threat.owaspCategory}</span>
          </span>
        )}
      </div>

      {/* Expandable Deep Dive Sections */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-[#D8D0C2]/60 dark:border-[#454139]/80 space-y-3.5 text-xs animate-in fade-in-50 duration-200">
          <div>
            <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] flex items-center gap-1.5 mb-1 text-xs">
              <Activity className="w-3.5 h-3.5 text-[#66705A] dark:text-[#A5AD8C]" />
              <span>Attack Surface & General Lifecycle:</span>
            </span>
            <p className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] pl-5 leading-relaxed bg-[#EAE3D5]/40 dark:bg-[#292722]/50 p-2.5 rounded-lg border border-[#D8D0C2]/50 dark:border-[#454139]/60">
              {threat.attackLifecycle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-[#657A58]/10 border border-[#657A58]/25">
              <span className="font-semibold text-[#445638] dark:text-[#A5AD8C] flex items-center gap-1.5 mb-1 text-xs">
                <Shield className="w-3.5 h-3.5 text-[#657A58]" />
                <span>Detection Strategy:</span>
              </span>
              <p className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
                {threat.detection}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#66705A]/10 border border-[#66705A]/25">
              <span className="font-semibold text-[#4a553f] dark:text-[#A5AD8C] flex items-center gap-1.5 mb-1 text-xs">
                <Lock className="w-3.5 h-3.5 text-[#66705A]" />
                <span>Prevention & Controls:</span>
              </span>
              <p className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
                {threat.prevention}
              </p>
            </div>
          </div>

          {threat.securityControls && threat.securityControls.length > 0 && (
            <div>
              <span className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider block mb-1.5">
                Recommended Security Controls
              </span>
              <div className="flex flex-wrap gap-1">
                {threat.securityControls.map((ctrl, idx) => (
                  <Tag key={idx} label={ctrl} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Expand/Collapse Toggle Button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full mt-3 pt-2 text-xs font-semibold text-[#66705A] dark:text-[#A5AD8C] hover:text-[#56604b] dark:hover:text-[#FFFDF8] flex items-center justify-center gap-1 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 transition-colors"
      >
        <span>{expanded ? 'Hide Technical Analysis' : 'Expand Detection & Defense Analysis'}</span>
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
