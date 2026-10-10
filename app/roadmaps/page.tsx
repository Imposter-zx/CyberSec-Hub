'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { roadmaps } from '@/data/roadmaps';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ArrowRight, Layers, Terminal } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function RoadmapsIndexPage() {
  const { t, isRTL } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: t('nav_roadmaps') }]} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
          <span>// CAREER_TRAJECTORIES // SEQUENCED_PATHS</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {t('roadmaps_title')}
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed">
          {t('roadmaps_subtitle')}
        </p>
      </div>

      {/* Grid of 8 Roadmaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((rmap) => (
          <div
            key={rmap.id}
            className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] flex flex-col justify-between hover:border-[#267747] dark:hover:border-[#00FF66] hover:shadow-[0_4px_24px_rgba(38,119,71,0.08)] dark:hover:shadow-[0_4px_24px_rgba(0,255,102,0.08)] transition-all shadow-xs group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EEF3EE] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                  {rmap.category}
                </span>
                <DifficultyBadge difficulty={rmap.difficulty} />
              </div>

              <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F5E9] font-mono mb-2 group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
                {rmap.title}
              </h2>

              <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-4 leading-relaxed line-clamp-3">
                {rmap.description}
              </p>

              {/* Target Role & Sequence */}
              <div className="space-y-2 mb-6 font-mono">
                <div className="p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-xs">
                  <span className="text-[#5F6B62] dark:text-[#91A596] uppercase">{t('target_role')}: </span>
                  <span className="text-[#267747] dark:text-[#00FF66] font-bold">{rmap.targetRole}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[11px] text-[#5F6B62] dark:text-[#91A596]">
                  {t('sequence')}: {rmap.estimatedSequence}
                </div>
              </div>

              {/* Step count summary */}
              <div className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-4 flex items-center gap-1.5 font-mono">
                <Layers className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
                <span>{rmap.steps.length} SEQUENCED LEARNING PHASES</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between font-mono">
              <span className="text-xs text-[#5F6B62] dark:text-[#91A596]">INTERACTIVE GUIDE</span>
              <Link
                href={`/roadmaps/${rmap.id}`}
                className="px-4 py-2 rounded-xl bg-[#267747] hover:bg-[#1E6038] dark:bg-[#00FF66] dark:hover:bg-[#5CFF9B] text-white dark:text-[#050705] text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs dark:shadow-[0_0_12px_rgba(0,255,102,0.2)]"
              >
                <span>{isRTL ? '< فتح المسار' : '> OPEN ROADMAP'}</span>
                <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'rotate-180' : '')} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
