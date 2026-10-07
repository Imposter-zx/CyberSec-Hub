import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { roadmaps } from '@/data/roadmaps';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ArrowRight, Layers } from 'lucide-react';

export default function RoadmapsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Roadmaps' }]} />

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Structured Cybersecurity Learning Roadmaps
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Step-by-step career and technical mastery paths. From absolute beginner foundations to specialized offensive, defensive, forensic, and cloud engineering roles.
        </p>
      </div>

      {/* Grid of 8 Roadmaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((rmap) => (
          <div
            key={rmap.id}
            className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] flex flex-col justify-between hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-md transition-all shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
                  {rmap.category}
                </span>
                <DifficultyBadge difficulty={rmap.difficulty} />
              </div>

              <h2 className="text-lg font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
                {rmap.title}
              </h2>

              <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed line-clamp-3">
                {rmap.description}
              </p>

              {/* Target Role & Sequence */}
              <div className="space-y-2 mb-6">
                <div className="p-2.5 rounded-lg bg-[#EAE3D5]/40 dark:bg-[#292722]/50 border border-[#D8D0C2]/60 dark:border-[#454139]/60 text-xs">
                  <span className="font-semibold text-[#242424] dark:text-[#F1EDE4]">Target Role: </span>
                  <span className="text-[#66705A] dark:text-[#A5AD8C] font-semibold">{rmap.targetRole}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#EAE3D5]/40 dark:bg-[#292722]/50 border border-[#D8D0C2]/60 dark:border-[#454139]/60 text-[11px] font-mono text-[#68645D] dark:text-[#B8B1A5]">
                  {rmap.estimatedSequence}
                </div>
              </div>

              {/* Step count summary */}
              <div className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#66705A] dark:text-[#A5AD8C]" />
                <span>{rmap.steps.length} Sequenced Learning Phases</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between">
              <span className="text-xs text-[#68645D] dark:text-[#B8B1A5]">Interactive Guide</span>
              <Link
                href={`/roadmaps/${rmap.id}`}
                className="px-4 py-2 rounded-lg bg-[#66705A] hover:bg-[#56604b] dark:bg-[#A5AD8C] dark:hover:bg-[#929c78] text-[#FFFDF8] dark:text-[#1F1E1B] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
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
