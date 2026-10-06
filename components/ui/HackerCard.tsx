import React from 'react';
import { HackerType } from '@/types';
import { Shield, AlertCircle, Briefcase, Award, Terminal, Scale } from 'lucide-react';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface HackerCardProps {
  hacker: HackerType;
  className?: string;
}

export const HackerCard: React.FC<HackerCardProps> = ({ hacker, className }) => {
  const isAuthorized = ['white-hat', 'ethical-hacker', 'security-researcher', 'bug-bounty-hunter', 'blue-team', 'purple-team', 'red-team'].includes(hacker.id);
  const isMalicious = ['black-hat', 'cybercriminal', 'state-sponsored-hacker'].includes(hacker.id);

  return (
    <div
      id={hacker.id}
      className={cn(
        'group bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between scroll-mt-24',
        className
      )}
    >
      <div>
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold border',
              isAuthorized && 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
              isMalicious && 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900/40',
              !isAuthorized && !isMalicious && 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
            )}
          >
            <Shield className="w-3 h-3" />
            <span>{isAuthorized ? 'Defensive & Authorized Role' : isMalicious ? 'Adversary & Threat Profile' : 'Ambiguous / Amateur Profile'}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
          {hacker.name}
        </h3>

        {/* Definition */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {hacker.definition}
        </p>

        {/* Objectives & Activities Grid */}
        <div className="grid grid-cols-1 gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 mb-4 text-xs">
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">
              Typical Objectives:
            </span>
            <span className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              {hacker.objectives}
            </span>
          </div>
          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
            <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">
              Typical Activities:
            </span>
            <span className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              {hacker.activities}
            </span>
          </div>
        </div>

        {/* Common Techniques */}
        {hacker.commonTechniques && hacker.commonTechniques.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              <span>Common Techniques</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {hacker.commonTechniques.map((tech, idx) => (
                <Tag key={idx} label={tech} />
              ))}
            </div>
          </div>
        )}

        {/* Legal & Ethical Context */}
        <div className="p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 mb-4 text-[11px]">
          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1 mb-1">
            <Scale className="w-3 h-3 text-blue-500" />
            <span>Legal & Ethical Context:</span>
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {hacker.legalEthicalContext}
          </p>
        </div>
      </div>

      {/* Career Roles Footer */}
      {hacker.careerRoles && hacker.careerRoles.length > 0 && (
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Briefcase className="w-3 h-3" />
            <span>Associated Industry Career Roles</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {hacker.careerRoles.map((role, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-xs bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-medium border border-blue-200 dark:border-blue-800"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
