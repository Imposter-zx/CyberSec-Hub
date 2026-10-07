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
        'group bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-5.5 hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between scroll-mt-24 shadow-xs',
        className
      )}
    >
      <div>
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border',
              isAuthorized && 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border-[#DDE5DE] dark:border-[#3A4840]',
              isMalicious && 'bg-[#FCEAEA] text-[#B84040] dark:bg-[#B84040]/20 dark:text-[#E07A7A] border-[#F7CDCD] dark:border-[#5C2424]',
              !isAuthorized && !isMalicious && 'bg-[#FDF6E7] text-[#A67B2E] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] border-[#F2E5C9] dark:border-[#524426]'
            )}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{isAuthorized ? 'Authorized Defensive Role' : isMalicious ? 'Adversary & Threat Actor' : 'Ambiguous / Grey Role'}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2 group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
          {hacker.name}
        </h3>

        {/* Definition */}
        <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed">
          {hacker.definition}
        </p>

        {/* Objectives & Activities Grid */}
        <div className="grid grid-cols-1 gap-2 p-3 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-xs">
          <div>
            <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-0.5">
              Typical Objectives:
            </span>
            <span className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
              {hacker.objectives}
            </span>
          </div>
          <div className="pt-2 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
            <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-0.5">
              Typical Activities:
            </span>
            <span className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
              {hacker.activities}
            </span>
          </div>
        </div>

        {/* Common Techniques */}
        {hacker.commonTechniques && hacker.commonTechniques.length > 0 && (
          <div className="mb-4">
            <div className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#3F7D5A] dark:text-[#6AAF8A]" />
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
        <div className="p-3 rounded-xl bg-[#EEF3EE]/50 dark:bg-[#202722]/50 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-[11px]">
          <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] flex items-center gap-1.5 mb-1">
            <Scale className="w-3.5 h-3.5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
            <span>Legal & Ethical Mandate:</span>
          </span>
          <p className="text-[#68645D] dark:text-[#A0AFA5] leading-relaxed">
            {hacker.legalEthicalContext}
          </p>
        </div>
      </div>

      {/* Career Roles Footer */}
      {hacker.careerRoles && hacker.careerRoles.length > 0 && (
        <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
          <div className="text-[10px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Briefcase className="w-3 h-3 text-[#3F7D5A] dark:text-[#6AAF8A]" />
            <span>Associated Industry Roles</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {hacker.careerRoles.map((role, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full text-xs bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] font-semibold border border-[#DDE5DE] dark:border-[#3A4840]"
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
