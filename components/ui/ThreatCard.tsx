'use client';

import React, { useState } from 'react';
import { Threat } from '@/types';
import { ChevronDown, ChevronUp, Shield, Activity, Lock, Target } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import { getThreatIllustration } from '@/components/visuals/ThreatIllustrations';
import { useI18n } from '@/lib/i18n';

interface ThreatCardProps {
  threat: Threat;
  className?: string;
}

export const ThreatCard: React.FC<ThreatCardProps> = ({ threat, className }) => {
  const { t, isRTL } = useI18n();
  const [expanded, setExpanded] = useState(false);

  // Compute realistic threat severity
  const getThreatSeverity = () => {
    if (threat.difficulty === 'advanced' || ['ransomware', 'zero-day', 'supply-chain'].includes(threat.id)) {
      return {
        level: 'CRITICAL',
        color: 'bg-[#FFEBEE] text-[#C62828] border-[#FFCDD2] dark:bg-[#271211] dark:text-[#FF3B30] dark:border-[#441E1C]',
      };
    }
    if (threat.difficulty === 'intermediate' || ['phishing', 'sql-injection', 'ssrf', 'xss'].includes(threat.id)) {
      return {
        level: 'HIGH',
        color: 'bg-[#FFF3E0] text-[#D97745] border-[#FBD7B5] dark:bg-[#241C0E] dark:text-[#D9A441] dark:border-[#382B17]',
      };
    }
    return {
      level: 'MEDIUM',
      color: 'bg-[#E8F5EE] text-[#267747] border-[#C4E1CF] dark:bg-[#0D2214] dark:text-[#00FF66] dark:border-[#1B2A1F]',
    };
  };

  const severity = getThreatSeverity();

  return (
    <div
      id={threat.id}
      className={cn(
        'group bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] p-5 hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(38,119,71,0.1)] dark:hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] transition-all duration-200 scroll-mt-24 font-mono shadow-xs flex flex-col justify-between',
        expanded && 'ring-1 ring-[#267747] dark:ring-[#00FF66] border-[#267747] dark:border-[#00FF66]',
        severity.level === 'CRITICAL' && 'hover:border-[#C62828] dark:hover:border-[#FF3B30] hover:shadow-[0_4px_24px_rgba(198,40,40,0.12)] dark:hover:shadow-[0_4px_24px_rgba(255,59,48,0.12)]',
        className
      )}
    >
      <div>
        {/* Threat Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
          <div className="flex items-center gap-2">
            <span className={cn('px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider', severity.color)}>
              [{severity.level}]
            </span>
            <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">
              {threat.category}
            </span>
          </div>
          <DifficultyBadge difficulty={threat.difficulty} />
        </div>

        {/* Visual Illustration Banner */}
        <div className="w-full h-36 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] p-2.5 mb-3.5 flex items-center justify-center overflow-hidden group-hover:scale-[1.01] transition-transform duration-200">
          {getThreatIllustration(threat.id)}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors mb-2">
          {threat.name}
        </h3>

        {/* Definition */}
        <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-3.5 leading-relaxed font-sans">
          {threat.definition}
        </p>

        {/* Attack Objective & Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-3.5 text-xs">
          <div>
            <span className="font-bold text-[#267747] dark:text-[#00FF66] block mb-0.5 text-[10px] uppercase">
              // ATTACK OBJECTIVE
            </span>
            <span className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed font-sans">
              {threat.attackObjective}
            </span>
          </div>
          <div>
            <span className="font-bold text-[#C62828] dark:text-[#FF3B30] block mb-0.5 text-[10px] uppercase">
              // BUSINESS IMPACT
            </span>
            <span className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed font-sans">
              {threat.impact}
            </span>
          </div>
        </div>

        {/* Framework Tags (MITRE & OWASP) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
          {threat.mitreAttackTechniques &&
            threat.mitreAttackTechniques.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#EEF3EE] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]"
              >
                <Target className="w-3 h-3 text-[#267747] dark:text-[#00FF66]" />
                <span>MITRE {tech}</span>
              </span>
            ))}
          {threat.owaspCategory && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#FFF3E0] dark:bg-[#050705] text-[#D97745] dark:text-[#D9A441] border border-[#FBD7B5] dark:border-[#1B2A1F]">
              <Shield className="w-3 h-3 text-[#D97745] dark:text-[#D9A441]" />
              <span>{threat.owaspCategory}</span>
            </span>
          )}
        </div>

        {/* Expandable Deep Dive Sections */}
        {expanded && (
          <div className="mt-3.5 pt-3.5 border-t border-[#DDE5DE] dark:border-[#1B2A1F] space-y-3 text-xs animate-in fade-in-50 duration-200">
            <div>
              <span className="font-bold text-[#18221C] dark:text-[#E8F5E9] flex items-center gap-1.5 mb-1 text-xs">
                <Activity className="w-3.5 h-3.5 text-[#267747] dark:text-[#00FF66]" />
                <span>{t('attack_surface')}:</span>
              </span>
              <p className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed bg-[#F7F9F6] dark:bg-[#050705] p-3 rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] font-sans">
                {threat.attackLifecycle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                <span className="font-bold text-[#267747] dark:text-[#00FF66] flex items-center gap-1.5 mb-1 text-xs">
                  <Shield className="w-3.5 h-3.5 text-[#267747] dark:text-[#00FF66]" />
                  <span>{t('detection_strategy')}:</span>
                </span>
                <p className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed font-sans">
                  {threat.detection}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                <span className="font-bold text-[#267747] dark:text-[#00FF66] flex items-center gap-1.5 mb-1 text-xs">
                  <Lock className="w-3.5 h-3.5 text-[#267747] dark:text-[#00FF66]" />
                  <span>{t('mitigation_protocol')}:</span>
                </span>
                <p className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed font-sans">
                  {threat.prevention}
                </p>
              </div>
            </div>

            {threat.securityControls && threat.securityControls.length > 0 && (
              <div>
                <span className="text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider block mb-1.5">
                  RECOMMENDED CONTROLS:
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
        className="w-full mt-3 pt-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] flex items-center justify-center gap-1.5 border-t border-[#DDE5DE] dark:border-[#1B2A1F] transition-colors"
      >
        <span>{expanded ? '[ - HIDE SPECS ]' : '[ + EXPAND THREAT SPECS ]'}</span>
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
