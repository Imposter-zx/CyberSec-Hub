'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface VisualConceptCardProps {
  number?: string | number;
  title: string;
  subtitle?: string;
  shortDescription: string;
  illustration: React.ReactNode;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  keyPoints?: string[];
  objective?: string;
  typicalActivity?: string;
  href?: string;
  actionLabel?: string;
  badgeVariant?: 'green' | 'amber' | 'gold' | 'teal' | 'red' | 'neutral';
  className?: string;
}

export const VisualConceptCard: React.FC<VisualConceptCardProps> = ({
  number,
  title,
  subtitle,
  shortDescription,
  illustration,
  category,
  difficulty,
  keyPoints,
  objective,
  typicalActivity,
  href,
  actionLabel = 'Explore Concept',
  badgeVariant = 'green',
  className,
}) => {
  const badgeColors = {
    green: 'bg-[#0D2214] text-[#00FF66] border-[#1B2A1F]',
    amber: 'bg-[#241C0E] text-[#D9A441] border-[#382B17]',
    gold: 'bg-[#241C0E] text-[#D9A441] border-[#382B17]',
    teal: 'bg-[#0F2220] text-[#42C2A8] border-[#173834]',
    red: 'bg-[#271211] text-[#FF3B30] border-[#441E1C]',
    neutral: 'bg-[#050705] text-[#91A596] border-[#1B2A1F]',
  };

  const cardContent = (
    <div
      className={cn(
        'group flex flex-col justify-between rounded-2xl bg-[#0E1510] border border-[#1B2A1F] p-6 hover:border-[#00FF66] hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden font-mono shadow-xs h-full',
        className
      )}
    >
      {/* Top Header Row: Number + Classification */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#1B2A1F]">
        {number !== undefined && (
          <span className="font-mono text-xs font-black tracking-widest px-2.5 py-0.5 rounded bg-[#050705] text-[#00FF66] border border-[#1B2A1F]">
            {typeof number === 'number' && number < 10 ? `0${number}` : number}
          </span>
        )}
        <div className="flex items-center gap-1.5 ml-auto">
          {category && (
            <span
              className={cn(
                'text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border font-mono',
                badgeColors[badgeVariant]
              )}
            >
              {category}
            </span>
          )}
          {difficulty && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#050705] text-[#91A596] border border-[#1B2A1F]">
              {difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Dominant Visual Illustration Container */}
      <div className="w-full h-44 sm:h-48 rounded-xl bg-[#050705] border border-[#1B2A1F] p-3 mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        {illustration}
      </div>

      {/* Concept Title & Subtitle */}
      <div className="mb-3">
        <h3 className="text-base sm:text-lg font-bold text-[#E8F5E9] group-hover:text-[#00FF66] transition-colors leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-semibold text-[#00FF66] mt-0.5">
            // {subtitle}
          </p>
        )}
      </div>

      {/* Short 1-2 sentence core definition */}
      <p className="text-xs text-[#91A596] leading-relaxed mb-4 font-sans">
        {shortDescription}
      </p>

      {/* Structured Technical Characteristics */}
      {(objective || typicalActivity) && (
        <div className="p-3 rounded-xl bg-[#050705] border border-[#1B2A1F] mb-4 space-y-2 text-xs">
          {objective && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF66] block mb-0.5">
                // OBJECTIVE
              </span>
              <span className="text-[11px] text-[#91A596] leading-relaxed font-sans block">
                {objective}
              </span>
            </div>
          )}
          {typicalActivity && (
            <div className="pt-2 border-t border-[#1B2A1F]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF66] block mb-0.5">
                // TYPICAL ACTIVITY
              </span>
              <span className="text-[11px] text-[#91A596] leading-relaxed font-sans block">
                {typicalActivity}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Tag pills */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {keyPoints.slice(0, 3).map((pt, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-[#050705] text-[#91A596] border border-[#1B2A1F]"
            >
              #{pt}
            </span>
          ))}
        </div>
      )}

      {/* Action Trigger */}
      {href ? (
        <div className="pt-3 border-t border-[#1B2A1F] flex items-center justify-between text-xs font-bold text-[#00FF66] group-hover:text-[#5CFF9B] transition-colors mt-auto">
          <span>&gt; {actionLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      ) : (
        <div className="pt-3 border-t border-[#1B2A1F] text-[10px] text-[#91A596] mt-auto">
          STATUS: CLASSIFIED ARCHETYPE
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};
