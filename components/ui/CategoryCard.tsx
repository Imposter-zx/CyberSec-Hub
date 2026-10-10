'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  count?: number;
  icon?: React.ReactNode;
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  href,
  count,
  icon,
  tags,
  className,
}) => {
  const { isRTL } = useI18n();

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col justify-between p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_20px_rgba(38,119,71,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,255,102,0.12)] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden font-mono shadow-xs',
        className
      )}
    >
      {/* Top micro terminal indicator */}
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#DDE5DE] dark:border-[#1B2A1F] text-[10px] text-[#5F6B62] dark:text-[#91A596]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66] opacity-70 group-hover:opacity-100" />
          <span className="text-[#267747] dark:text-[#00FF66] font-bold">SEC_MOD</span>
        </div>
        {count !== undefined && (
          <span className="text-[#5F6B62] dark:text-[#91A596]">
            [{count} {count === 1 ? 'UNIT' : 'UNITS'}]
          </span>
        )}
      </div>

      <div>
        {/* Module Icon and Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-[#EEF3EE] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#267747] dark:text-[#00FF66] group-hover:border-[#267747] dark:group-hover:border-[#00FF66] group-hover:scale-105 transition-all shadow-xs">
            {icon}
          </div>
          <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors leading-snug">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-[#5F6B62] dark:text-[#91A596] leading-relaxed line-clamp-2 mb-4 font-sans">
          {description}
        </p>

        {/* Technical Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded bg-[#EEF3EE] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#5F6B62] dark:text-[#91A596] group-hover:text-[#18221C] dark:group-hover:text-[#E8F5E9]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between text-xs font-bold text-[#267747] dark:text-[#00FF66] group-hover:text-[#34965C] dark:group-hover:text-[#5CFF9B] transition-colors">
        <span className="flex items-center gap-1">
          <span>{isRTL ? '< دخول الوحدة' : '> ENTER MODULE'}</span>
        </span>
        <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
      </div>
    </Link>
  );
};
