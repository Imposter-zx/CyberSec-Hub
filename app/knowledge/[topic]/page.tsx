import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { knowledgeTopics } from '@/data/knowledge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Tag } from '@/components/ui/Tag';
import { BookOpen, Shield, Award, ArrowLeft, Layers, CheckCircle2 } from 'lucide-react';

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return knowledgeTopics.map((t) => ({
    topic: t.id,
  }));
}

export default async function KnowledgeTopicPage({ params }: TopicPageProps) {
  const { topic: topicSlug } = await params;
  const topic = knowledgeTopics.find((t) => t.id === topicSlug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: topic.title },
        ]}
      />

      <div className="my-6">
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Knowledge Base</span>
        </Link>

        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            {topic.category}
          </span>
          <DifficultyBadge difficulty={topic.difficulty} />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
          {topic.title}
        </h1>

        {/* Definition Lead */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
          {topic.definition}
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Detailed Explanation */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>Technical Explanation</span>
            </h2>
            <p className="leading-relaxed whitespace-pre-line">{topic.explanation}</p>
          </div>

          {/* Why it Matters */}
          <div className="p-5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60">
            <h3 className="text-sm font-bold text-blue-900 dark:text-blue-200 mb-2">
              Why It Matters in Enterprise Security
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {topic.whyItMatters}
            </p>
          </div>

          {/* Real-World Examples */}
          {topic.examples && topic.examples.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Practical Real-World Scenarios
              </h2>
              <ul className="space-y-2">
                {topic.examples.map((ex, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Attacks or Defenses */}
          {topic.commonAttacksOrDefenses && topic.commonAttacksOrDefenses.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Common Attack Vectors & Defensive Controls
              </h2>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm space-y-2">
                {topic.commonAttacksOrDefenses.map((ad, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {ad}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Certifications */}
          {topic.relatedCertifications && topic.relatedCertifications.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Related Industry Certifications
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {topic.relatedCertifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
