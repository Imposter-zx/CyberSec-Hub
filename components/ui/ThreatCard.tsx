import React, { useState } from 'react';
import { Threat } from '@/types';
import { ChevronDown, ChevronUp, Shield, Activity, Lock, Target } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import { getThreatIllustration } from '@/components/visuals/ThreatIllustrations';

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
        'group bg-[#FFFFFF] dark:bg-[#262E28] rounded-3xl border border-[#DDE5DE] dark:border-[#3A4840] p-6 hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] transition-all duration-200 scroll-mt-24 shadow-xs flex flex-col justify-between',
        expanded && 'ring-2 ring-[#3F7D5A]/40 border-[#3F7D5A] dark:ring-[#6AAF8A]/40 dark:border-[#6AAF8A]',
        className
      )}
    >
      <div>
        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FDF2EA] text-[#C97438] dark:bg-[#E58A4E]/20 dark:text-[#EDA574] border border-[#F8DCB8] dark:border-[#583925]">
            {threat.category}
          </span>
          <DifficultyBadge difficulty={threat.difficulty} />
        </div>

        {/* Visual Illustration Banner */}
        <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-[#F7F9F6] to-[#EEF3EE] dark:from-[#202722] dark:to-[#181C1A] border border-[#DDE5DE]/80 dark:border-[#3A4840]/80 p-2.5 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-[1.01] transition-transform duration-200">
          {getThreatIllustration(threat.id)}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2 group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
          {threat.name}
        </h3>

      {/* Definition */}
      <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed">
        {threat.definition}
      </p>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-xs">
        <div>
          <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-0.5">
            Attack Objective:
          </span>
          <span className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
            {threat.attackObjective}
          </span>
        </div>
        <div>
          <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-0.5">
            Business Impact:
          </span>
          <span className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
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
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]"
            >
              <Target className="w-3 h-3 text-[#3F7D5A] dark:text-[#6AAF8A]" />
              <span>MITRE {tech}</span>
            </span>
          ))}
        {threat.owaspCategory && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#FDF6E7] text-[#A67B2E] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] border border-[#F2E5C9] dark:border-[#524426]">
            <Shield className="w-3 h-3 text-[#D7A84B]" />
            <span>{threat.owaspCategory}</span>
          </span>
        )}
      </div>

      {/* Expandable Deep Dive Sections */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/80 space-y-3.5 text-xs animate-in fade-in-50 duration-200">
          <div>
            <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] flex items-center gap-1.5 mb-1.5 text-xs">
              <Activity className="w-3.5 h-3.5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
              <span>Attack Surface & Execution Lifecycle:</span>
            </span>
            <p className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed bg-[#EEF3EE]/50 dark:bg-[#202722]/50 p-3 rounded-xl border border-[#DDE5DE]/50 dark:border-[#3A4840]/60">
              {threat.attackLifecycle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#EBF4EF]/80 dark:bg-[#3F7D5A]/15 border border-[#DDE5DE] dark:border-[#3A4840]">
              <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A] flex items-center gap-1.5 mb-1 text-xs">
                <Shield className="w-3.5 h-3.5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                <span>Detection Strategy:</span>
              </span>
              <p className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
                {threat.detection}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EBF5F4]/80 dark:bg-[#4C9A91]/15 border border-[#D3E8E6] dark:border-[#2F4D49]">
              <span className="font-bold text-[#3A7B74] dark:text-[#7BB8B2] flex items-center gap-1.5 mb-1 text-xs">
                <Lock className="w-3.5 h-3.5 text-[#3A7B74] dark:text-[#7BB8B2]" />
                <span>Prevention & Hardening:</span>
              </span>
              <p className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
                {threat.prevention}
              </p>
            </div>
          </div>

          {threat.securityControls && threat.securityControls.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider block mb-1.5">
                Recommended Controls
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
      </div>

      {/* Expand/Collapse Toggle Button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full mt-3 pt-2.5 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:text-[#2E5E43] dark:hover:text-white flex items-center justify-center gap-1.5 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 transition-colors"
      >
        <span>{expanded ? 'Hide Technical Analysis' : 'Expand Detection & Hardening Specs'}</span>
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
