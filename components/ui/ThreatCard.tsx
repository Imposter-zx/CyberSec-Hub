'use client';

import React, { useState } from 'react';
import { Threat } from '@/types';
import { ChevronDown, ChevronUp, Shield, Activity, Lock, Target, AlertTriangle } from 'lucide-react';
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

  // Compute realistic threat severity
  const getThreatSeverity = () => {
    if (threat.difficulty === 'advanced' || ['ransomware', 'zero-day', 'supply-chain'].includes(threat.id)) {
      return { level: 'CRITICAL', color: 'bg-[#271211] text-[#FF3B30] border-[#441E1C]' };
    }
    if (threat.difficulty === 'intermediate' || ['phishing', 'sql-injection', 'ssrf', 'xss'].includes(threat.id)) {
      return { level: 'HIGH', color: 'bg-[#241C0E] text-[#D9A441] border-[#382B17]' };
    }
    return { level: 'MEDIUM', color: 'bg-[#0D2214] text-[#00FF66] border-[#1B2A1F]' };
  };

  const severity = getThreatSeverity();

  return (
    <div
      id={threat.id}
      className={cn(
        'group bg-[#0E1510] rounded-2xl border border-[#1B2A1F] p-5 hover:border-[#00FF66] hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] transition-all duration-200 scroll-mt-24 font-mono shadow-xs flex flex-col justify-between',
        expanded && 'ring-1 ring-[#00FF66] border-[#00FF66]',
        severity.level === 'CRITICAL' && 'hover:border-[#FF3B30] hover:shadow-[0_4px_24px_rgba(255,59,48,0.12)]',
        className
      )}
    >
      <div>
        {/* Threat Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#1B2A1F]">
          <div className="flex items-center gap-2">
            <span className={cn('px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider', severity.color)}>
              [{severity.level}]
            </span>
            <span className="text-[10px] text-[#91A596]">
              {threat.category}
            </span>
          </div>
          <DifficultyBadge difficulty={threat.difficulty} />
        </div>

        {/* Visual Illustration Banner */}
        <div className="w-full h-36 rounded-xl bg-[#050705] border border-[#1B2A1F] p-2.5 mb-3.5 flex items-center justify-center overflow-hidden group-hover:scale-[1.01] transition-transform duration-200">
          {getThreatIllustration(threat.id)}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#E8F5E9] group-hover:text-[#00FF66] transition-colors mb-2">
          {threat.name}
        </h3>

        {/* Definition */}
        <p className="text-xs text-[#91A596] mb-3.5 leading-relaxed font-sans">
          {threat.definition}
        </p>

        {/* Attack Objective & Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 rounded-xl bg-[#050705] border border-[#1B2A1F] mb-3.5 text-xs">
          <div>
            <span className="font-bold text-[#00FF66] block mb-0.5 text-[10px] uppercase">
              // ATTACK OBJECTIVE
            </span>
            <span className="text-[#91A596] text-[11px] leading-relaxed font-sans">
              {threat.attackObjective}
            </span>
          </div>
          <div>
            <span className="font-bold text-[#FF3B30] block mb-0.5 text-[10px] uppercase">
              // BUSINESS IMPACT
            </span>
            <span className="text-[#91A596] text-[11px] leading-relaxed font-sans">
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
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#050705] text-[#00FF66] border border-[#1B2A1F]"
              >
                <Target className="w-3 h-3 text-[#00FF66]" />
                <span>MITRE {tech}</span>
              </span>
            ))}
          {threat.owaspCategory && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#050705] text-[#D9A441] border border-[#1B2A1F]">
              <Shield className="w-3 h-3 text-[#D9A441]" />
              <span>{threat.owaspCategory}</span>
            </span>
          )}
        </div>

        {/* Expandable Deep Dive Sections */}
        {expanded && (
          <div className="mt-3.5 pt-3.5 border-t border-[#1B2A1F] space-y-3 text-xs animate-in fade-in-50 duration-200">
            <div>
              <span className="font-bold text-[#E8F5E9] flex items-center gap-1.5 mb-1 text-xs">
                <Activity className="w-3.5 h-3.5 text-[#00FF66]" />
                <span>ATTACK SURFACE &amp; LIFECYCLE:</span>
              </span>
              <p className="text-[#91A596] text-[11px] leading-relaxed bg-[#050705] p-3 rounded-xl border border-[#1B2A1F] font-sans">
                {threat.attackLifecycle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#050705] border border-[#1B2A1F]">
                <span className="font-bold text-[#00FF66] flex items-center gap-1.5 mb-1 text-xs">
                  <Shield className="w-3.5 h-3.5 text-[#00FF66]" />
                  <span>DETECTION STRATEGY:</span>
                </span>
                <p className="text-[#91A596] text-[11px] leading-relaxed font-sans">
                  {threat.detection}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#050705] border border-[#1B2A1F]">
                <span className="font-bold text-[#00FF66] flex items-center gap-1.5 mb-1 text-xs">
                  <Lock className="w-3.5 h-3.5 text-[#00FF66]" />
                  <span>PREVENTION &amp; HARDENING:</span>
                </span>
                <p className="text-[#91A596] text-[11px] leading-relaxed font-sans">
                  {threat.prevention}
                </p>
              </div>
            </div>

            {threat.securityControls && threat.securityControls.length > 0 && (
              <div>
                <span className="text-[10px] font-bold text-[#91A596] uppercase tracking-wider block mb-1.5">
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
        className="w-full mt-3 pt-2 text-xs font-bold text-[#00FF66] hover:text-[#5CFF9B] flex items-center justify-center gap-1.5 border-t border-[#1B2A1F] transition-colors"
      >
        <span>{expanded ? '[ - HIDE SPECS ]' : '[ + EXPAND THREAT SPECS ]'}</span>
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
