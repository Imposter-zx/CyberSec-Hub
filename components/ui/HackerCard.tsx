import React from 'react';
import { HackerType } from '@/types';
import { Shield, Briefcase, Terminal, Scale } from 'lucide-react';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';

interface HackerCardProps {
  hacker: HackerType;
  className?: string;
}

export const HackerCard: React.FC<HackerCardProps> = ({ hacker, className }) => {
  const isAuthorized = ['white-hat', 'ethical-hacker', 'security-researcher', 'bug-bounty-hunter', 'blue-team', 'purple-team', 'red-team', 'green-hat', 'blue-hat'].includes(hacker.id);
  const isMalicious = ['black-hat', 'cybercriminal', 'state-sponsored-hacker', 'red-hat', 'insider-threat'].includes(hacker.id);

  return (
    <div
      id={hacker.id}
      className={cn(
        'group bg-[#0E1510] rounded-2xl border border-[#1B2A1F] p-5 hover:border-[#00FF66] hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] transition-all duration-200 flex flex-col justify-between scroll-mt-24 font-mono shadow-xs',
        className
      )}
    >
      <div>
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#1B2A1F]">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider',
              isAuthorized && 'bg-[#0D2214] text-[#00FF66] border-[#1B2A1F]',
              isMalicious && 'bg-[#271211] text-[#FF3B30] border-[#441E1C]',
              !isAuthorized && !isMalicious && 'bg-[#241C0E] text-[#D9A441] border-[#382B17]'
            )}
          >
            <Shield className="w-3 h-3" />
            <span>{isAuthorized ? 'AUTHORIZED DEFENSE' : isMalicious ? 'ADVERSARY / THREAT' : 'UNSANCTIONED / GREY'}</span>
          </span>
          {hacker.number && (
            <span className="text-[10px] font-bold text-[#00FF66] bg-[#050705] px-2 py-0.5 rounded border border-[#1B2A1F]">
              #{hacker.number}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#E8F5E9] mb-1 group-hover:text-[#00FF66] transition-colors">
          {hacker.name}
        </h3>
        {hacker.subtitle && (
          <p className="text-[11px] text-[#00FF66] mb-3">
            // {hacker.subtitle}
          </p>
        )}

        {/* Definition */}
        <p className="text-xs text-[#91A596] mb-4 leading-relaxed font-sans">
          {hacker.definition}
        </p>

        {/* Objectives & Activities Grid */}
        <div className="grid grid-cols-1 gap-2 p-3 rounded-xl bg-[#050705] border border-[#1B2A1F] mb-4 text-xs">
          <div>
            <span className="font-bold text-[#00FF66] block mb-0.5 text-[10px] uppercase">
              // TYPICAL OBJECTIVES
            </span>
            <span className="text-[#91A596] text-[11px] leading-relaxed font-sans">
              {hacker.objectives}
            </span>
          </div>
          <div className="pt-2 border-t border-[#1B2A1F]">
            <span className="font-bold text-[#00FF66] block mb-0.5 text-[10px] uppercase">
              // TYPICAL ACTIVITIES
            </span>
            <span className="text-[#91A596] text-[11px] leading-relaxed font-sans">
              {hacker.activities}
            </span>
          </div>
        </div>

        {/* Common Techniques */}
        {hacker.commonTechniques && hacker.commonTechniques.length > 0 && (
          <div className="mb-4">
            <div className="text-[10px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#00FF66]" />
              <span>COMMON TTPs</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {hacker.commonTechniques.map((tech, idx) => (
                <Tag key={idx} label={tech} />
              ))}
            </div>
          </div>
        )}

        {/* Legal & Ethical Context */}
        <div className="p-2.5 rounded-xl bg-[#050705] border border-[#1B2A1F] mb-4 text-[11px]">
          <span className="font-bold text-[#E8F5E9] flex items-center gap-1.5 mb-1 text-[10px] uppercase">
            <Scale className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>LEGAL / ETHICAL BOUNDARY:</span>
          </span>
          <p className="text-[#91A596] leading-relaxed font-sans text-xs">
            {hacker.legalEthicalContext}
          </p>
        </div>
      </div>

      {/* Career Roles Footer */}
      {hacker.careerRoles && hacker.careerRoles.length > 0 && (
        <div className="pt-3 border-t border-[#1B2A1F]">
          <div className="text-[10px] font-bold text-[#91A596] uppercase tracking-wider mb-1 flex items-center gap-1">
            <Briefcase className="w-3 h-3 text-[#00FF66]" />
            <span>INDUSTRY ROLE ALIGNMENT</span>
          </div>
          <p className="text-xs text-[#00FF66] font-sans">
            {hacker.careerRoles.join(' • ')}
          </p>
        </div>
      )}
    </div>
  );
};
