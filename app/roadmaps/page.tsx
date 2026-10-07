import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { roadmaps } from '@/data/roadmaps';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ArrowRight, Layers, Compass } from 'lucide-react';

export default function RoadmapsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Roadmaps' }]} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E58A4E] dark:text-[#EDA574] mb-1.5">
          <Compass className="w-4 h-4" />
          <span>Sequenced Career Trajectories</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Structured Cybersecurity Learning Roadmaps
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Step-by-step career and technical mastery paths. From absolute beginner foundations to specialized offensive, defensive, forensic, and cloud engineering roles.
        </p>
      </div>

      {/* Grid of 8 Roadmaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((rmap) => (
          <div
            key={rmap.id}
            className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex flex-col justify-between hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
                  {rmap.category}
                </span>
                <DifficultyBadge difficulty={rmap.difficulty} />
              </div>

              <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">
                {rmap.title}
              </h2>

              <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed line-clamp-3">
                {rmap.description}
              </p>

              {/* Target Role & Sequence */}
              <div className="space-y-2 mb-6">
                <div className="p-3 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 text-xs">
                  <span className="font-bold text-[#18221C] dark:text-[#E8F0EA]">Target Role: </span>
                  <span className="text-[#3F7D5A] dark:text-[#6AAF8A] font-bold">{rmap.targetRole}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 text-[11px] font-mono text-[#68645D] dark:text-[#A0AFA5]">
                  Sequence: {rmap.estimatedSequence}
                </div>
              </div>

              {/* Step count summary */}
              <div className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                <span>{rmap.steps.length} Sequenced Learning Phases</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between">
              <span className="text-xs text-[#68645D] dark:text-[#A0AFA5]">Interactive Guide</span>
              <Link
                href={`/roadmaps/${rmap.id}`}
                className="px-4 py-2 rounded-xl bg-[#3F7D5A] hover:bg-[#2E5E43] dark:bg-[#6AAF8A] dark:text-[#181C1A] dark:hover:bg-[#589E79] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
              >
                <span>View Complete Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
