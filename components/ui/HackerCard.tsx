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
  const isAuthorized = ['white-hat', 'ethical-hacker', 'security-researcher', 'bug-bounty-hunter', 'blue-team', 'purple-team', 'red-team'].includes(hacker.id);
  const isMalicious = ['black-hat', 'cybercriminal', 'state-sponsored-hacker'].includes(hacker.id);

  return (
    <div
      id={hacker.id}
      className={cn(
        'group bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-5 hover:border-[#66705A] dark:hover:border-[#A5AD8C] transition-all duration-200 flex flex-col justify-between scroll-mt-24 shadow-sm',
        className
      )}
    >
      <div>
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold border',
              isAuthorized && 'bg-[#657A58]/15 text-[#445638] dark:text-[#A5AD8C] border-[#657A58]/30',
              isMalicious && 'bg-[#A45143]/15 text-[#7A3428] dark:text-[#E08A7C] border-[#A45143]/30',
              !isAuthorized && !isMalicious && 'bg-[#B89B62]/15 text-[#82662c] dark:text-[#D1B87F] border-[#B89B62]/30'
            )}
          >
            <Shield className="w-3 h-3" />
            <span>{isAuthorized ? 'Defensive & Authorized Role' : isMalicious ? 'Adversary & Threat Profile' : 'Ambiguous / Amateur Profile'}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] mb-2">
          {hacker.name}
        </h3>

        {/* Definition */}
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed">
          {hacker.definition}
        </p>

        {/* Objectives & Activities Grid */}
        <div className="grid grid-cols-1 gap-2 p-3 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-xs">
          <div>
            <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-0.5">
              Typical Objectives:
            </span>
            <span className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
              {hacker.objectives}
            </span>
          </div>
          <div className="pt-2 border-t border-[#D8D0C2]/60 dark:border-[#454139]/60">
            <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-0.5">
              Typical Activities:
            </span>
            <span className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
              {hacker.activities}
            </span>
          </div>
        </div>

        {/* Common Techniques */}
        {hacker.commonTechniques && hacker.commonTechniques.length > 0 && (
          <div className="mb-4">
            <div className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#66705A] dark:text-[#A5AD8C]" />
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
        <div className="p-2.5 rounded-lg bg-[#EAE3D5]/40 dark:bg-[#292722]/50 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-[11px]">
          <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] flex items-center gap-1 mb-1">
            <Scale className="w-3 h-3 text-[#66705A] dark:text-[#A5AD8C]" />
            <span>Legal & Ethical Context:</span>
          </span>
          <p className="text-[#68645D] dark:text-[#B8B1A5] leading-relaxed">
            {hacker.legalEthicalContext}
          </p>
        </div>
      </div>

      {/* Career Roles Footer */}
      {hacker.careerRoles && hacker.careerRoles.length > 0 && (
        <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60">
          <div className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Briefcase className="w-3 h-3 text-[#66705A] dark:text-[#A5AD8C]" />
            <span>Associated Industry Career Roles</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {hacker.careerRoles.map((role, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-xs bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] font-medium border border-[#D8D0C2] dark:border-[#454139]"
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
