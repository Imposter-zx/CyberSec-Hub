'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    green: 'bg-[#EBF4EF] text-[#3F7D5A] border-[#DDE5DE] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] dark:border-[#3A4840]',
    amber: 'bg-[#FDF2EA] text-[#C97438] border-[#F8DCB8] dark:bg-[#E58A4E]/20 dark:text-[#EDA574] dark:border-[#583925]',
    gold: 'bg-[#FDF6E7] text-[#A67B2E] border-[#F2E5C9] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] dark:border-[#524426]',
    teal: 'bg-[#EBF5F4] text-[#3A7B74] border-[#D3E8E6] dark:bg-[#4C9A91]/20 dark:text-[#7BB8B2] dark:border-[#2F4D49]',
    red: 'bg-[#FCEAEA] text-[#B84040] border-[#F7CDCD] dark:bg-[#B84040]/20 dark:text-[#E07A7A] dark:border-[#5C2424]',
    neutral: 'bg-[#EEF3EE] text-[#68736B] border-[#DDE5DE] dark:bg-[#202722] dark:text-[#A0AFA5] dark:border-[#3A4840]',
  };

  const cardContent = (
    <div
      className={cn(
        'group flex flex-col justify-between rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] p-6 hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden shadow-xs h-full',
        className
      )}
    >
      {/* Top Header Row: Number + Category */}
      <div className="flex items-center justify-between gap-2 mb-4">
        {number !== undefined && (
          <span className="font-mono text-xs font-black tracking-widest px-2.5 py-1 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] text-[#3F7D5A] dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]">
            {typeof number === 'number' && number < 10 ? `0${number}` : number}
          </span>
        )}
        <div className="flex items-center gap-1.5 ml-auto">
          {category && (
            <span
              className={cn(
                'text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border',
                badgeColors[badgeVariant]
              )}
            >
              {category}
            </span>
          )}
          {difficulty && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EEF3EE] dark:bg-[#202722] text-[#68736B] dark:text-[#A0AFA5] border border-[#DDE5DE] dark:border-[#3A4840]">
              {difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Dominant Visual Illustration Area */}
      <div className="w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#F7F9F6] to-[#EEF3EE] dark:from-[#202722] dark:to-[#181C1A] border border-[#DDE5DE]/80 dark:border-[#3A4840]/80 p-3 mb-5 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        {illustration}
      </div>

      {/* Concept Title & Subtitle */}
      <div className="mb-3">
        <h3 className="text-lg font-black text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-semibold text-[#3F7D5A] dark:text-[#6AAF8A] mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      {/* Short 1-2 sentence core definition */}
      <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] leading-relaxed mb-4">
        {shortDescription}
      </p>

      {/* Structured Objective & Activity if provided */}
      {(objective || typicalActivity) && (
        <div className="mb-4 p-3 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 space-y-2 text-[11px]">
          {objective && (
            <div>
              <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block">
                Primary Objective:
              </span>
              <span className="text-[#68736B] dark:text-[#A0AFA5] leading-relaxed">
                {objective}
              </span>
            </div>
          )}
          {typicalActivity && (
            <div className="pt-1.5 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
              <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block">
                Typical Operation:
              </span>
              <span className="text-[#68736B] dark:text-[#A0AFA5] leading-relaxed">
                {typicalActivity}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Key characteristics tags */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {keyPoints.slice(0, 4).map((pt, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]"
            >
              <Sparkles className="w-2.5 h-2.5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
              <span>{pt}</span>
            </span>
          ))}
        </div>
      )}

      {/* Footer action link */}
      {href ? (
        <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">
          <span>{actionLabel}</span>
          <div className="w-6 h-6 rounded-full bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
