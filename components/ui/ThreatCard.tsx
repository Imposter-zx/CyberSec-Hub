import React, { useState } from 'react';
import { Threat } from '@/types';
import { ShieldAlert, ChevronDown, ChevronUp, Shield, Activity, Lock, Target } from 'lucide-react';
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
        'group bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 scroll-mt-24',
        expanded && 'ring-1 ring-blue-500/50',
        className
      )}
    >
      {/* Category & Difficulty */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40">
          {threat.category}
        </span>
        <DifficultyBadge difficulty={threat.difficulty} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {threat.name}
      </h3>

      {/* Definition */}
      <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {threat.definition}
      </p>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 mb-4 text-xs">
        <div>
          <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">
            Attack Objective:
          </span>
          <span className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
            {threat.attackObjective}
          </span>
        </div>
        <div>
          <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">
            Impact:
          </span>
          <span className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
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
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              <Target className="w-3 h-3 text-blue-500" />
              <span>MITRE {tech}</span>
            </span>
          ))}
        {threat.owaspCategory && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <Shield className="w-3 h-3 text-amber-500" />
            <span>{threat.owaspCategory}</span>
          </span>
        )}
      </div>

      {/* Expandable Deep Dive Sections */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3.5 text-xs animate-in fade-in-50 duration-200">
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1 text-xs">
              <Activity className="w-3.5 h-3.5 text-blue-500" />
              <span>Attack Surface & General Lifecycle:</span>
            </span>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] pl-5 leading-relaxed bg-slate-50 dark:bg-slate-800/30 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              {threat.attackLifecycle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <span className="font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-1 text-xs">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Detection Strategy:</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                {threat.detection}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
              <span className="font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-1.5 mb-1 text-xs">
                <Lock className="w-3.5 h-3.5 text-blue-500" />
                <span>Prevention & Controls:</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                {threat.prevention}
              </p>
            </div>
          </div>

          {threat.securityControls && threat.securityControls.length > 0 && (
            <div>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1.5">
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
        className="w-full mt-3 pt-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-center gap-1 border-t border-slate-100 dark:border-slate-800/80 transition-colors"
      >
        <span>{expanded ? 'Hide Technical Analysis' : 'Expand Detection & Defense Analysis'}</span>
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
