import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { roadmaps } from '@/data/roadmaps';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Compass, ArrowRight, CheckCircle2, Layers, Award } from 'lucide-react';

export default function RoadmapsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Roadmaps' }]} />

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Structured Cybersecurity Learning Roadmaps
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Step-by-step career and technical mastery paths. From absolute beginner foundations to specialized offensive, defensive, forensic, and cloud engineering roles.
        </p>
      </div>

      {/* Grid of 8 Roadmaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((rmap) => (
          <div
            key={rmap.id}
            className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {rmap.category}
                </span>
                <DifficultyBadge difficulty={rmap.difficulty} />
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {rmap.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                {rmap.description}
              </p>

              {/* Target Role & Sequence */}
              <div className="space-y-2 mb-6">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Target Role: </span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{rmap.targetRole}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                  {rmap.estimatedSequence}
                </div>
              </div>

              {/* Step count summary */}
              <div className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>{rmap.steps.length} Sequenced Learning Phases</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Interactive Guide</span>
              <Link
                href={`/roadmaps/${rmap.id}`}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
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
