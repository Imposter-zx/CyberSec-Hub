import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { knowledgeTopics } from '@/data/knowledge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { BookOpen, ArrowLeft, CheckCircle2, Terminal } from 'lucide-react';
import { TopicDiagramViewer } from '@/components/visuals/SecurityDiagrams';

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: topic.title },
        ]}
      />

      <div className="my-6">
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00FF66] hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&lt; Back to Knowledge Base</span>
        </Link>

        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#0E1510] text-[#00FF66] border border-[#1B2A1F]">
            {topic.category}
          </span>
          <DifficultyBadge difficulty={topic.difficulty} />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-[#E8F5E9] uppercase tracking-wider mb-4 leading-tight">
          {topic.title}
        </h1>

        {/* Definition Lead */}
        <div className="p-5 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] text-sm font-semibold text-[#E8F5E9] leading-relaxed mb-8 shadow-xs font-sans">
          {topic.definition}
        </div>

        {/* Specialized Interactive Diagram if Available */}
        <TopicDiagramViewer topicId={topic.id} className="mb-8" />

        {/* Article Body */}
        <div className="space-y-8 text-sm text-[#E8F5E9] leading-relaxed">
          {/* Detailed Explanation */}
          <div>
            <h2 className="text-base font-bold text-[#E8F5E9] mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00FF66]" />
              <span>// TECHNICAL_EXPLANATION</span>
            </h2>
            <p className="leading-relaxed whitespace-pre-line text-[#91A596] font-sans bg-[#0E1510] p-5 rounded-2xl border border-[#1B2A1F]">
              {topic.explanation}
            </p>
          </div>

          {/* Why it Matters */}
          <div className="p-6 rounded-2xl bg-[#0E1510] border border-[#1B2A1F]">
            <h3 className="text-xs font-bold text-[#00FF66] uppercase tracking-wider mb-2">
              // ENTERPRISE_SECURITY_IMPACT
            </h3>
            <p className="text-[#91A596] text-xs sm:text-sm leading-relaxed font-sans">
              {topic.whyItMatters}
            </p>
          </div>

          {/* Real-World Examples */}
          {topic.examples && topic.examples.length > 0 && (
            <div>
              <h2 className="text-base font-bold text-[#E8F5E9] mb-3">
                // REAL_WORLD_SCENARIOS
              </h2>
              <ul className="space-y-2.5">
                {topic.examples.map((ex, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0E1510] border border-[#1B2A1F] flex items-start gap-2.5 text-xs sm:text-sm shadow-xs font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                    <span className="text-[#91A596]">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Attacks or Defenses */}
          {topic.commonAttacksOrDefenses && topic.commonAttacksOrDefenses.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#050705] border border-[#1B2A1F]">
              <h3 className="text-xs font-bold text-[#00FF66] uppercase tracking-wider mb-3">
                // COMMON_ATTACKS_&amp;_DEFENSES
              </h3>
              <ul className="space-y-2 text-xs font-sans text-[#91A596]">
                {topic.commonAttacksOrDefenses.map((cad, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00FF66] font-bold font-mono">•</span>
                    <span>{cad}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
