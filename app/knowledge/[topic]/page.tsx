import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { knowledgeTopics } from '@/data/knowledge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';

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
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#66705A] dark:text-[#A5AD8C] hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Knowledge Base</span>
        </Link>

        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
            {topic.category}
          </span>
          <DifficultyBadge difficulty={topic.difficulty} />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#242424] dark:text-[#F1EDE4] mb-4 leading-tight">
          {topic.title}
        </h1>

        {/* Definition Lead */}
        <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] text-sm font-medium text-[#242424] dark:text-[#F1EDE4] leading-relaxed mb-8 shadow-sm">
          {topic.definition}
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-sm text-[#242424] dark:text-[#F1EDE4] leading-relaxed">
          {/* Detailed Explanation */}
          <div>
            <h2 className="text-lg font-bold text-[#242424] dark:text-[#F1EDE4] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#66705A] dark:text-[#A5AD8C]" />
              <span>Technical Explanation</span>
            </h2>
            <p className="leading-relaxed whitespace-pre-line text-[#68645D] dark:text-[#B8B1A5]">{topic.explanation}</p>
          </div>

          {/* Why it Matters */}
          <div className="p-5 rounded-xl bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2] dark:border-[#454139]">
            <h3 className="text-sm font-bold text-[#66705A] dark:text-[#A5AD8C] mb-2">
              Why It Matters in Enterprise Security
            </h3>
            <p className="text-[#68645D] dark:text-[#B8B1A5] text-xs sm:text-sm leading-relaxed">
              {topic.whyItMatters}
            </p>
          </div>

          {/* Real-World Examples */}
          {topic.examples && topic.examples.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#242424] dark:text-[#F1EDE4] mb-3">
                Practical Real-World Scenarios
              </h2>
              <ul className="space-y-2">
                {topic.examples.map((ex, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] flex items-start gap-2.5 text-xs sm:text-sm shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#657A58] dark:text-[#A5AD8C] shrink-0 mt-0.5" />
                    <span className="text-[#68645D] dark:text-[#B8B1A5]">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Attacks or Defenses */}
          {topic.commonAttacksOrDefenses && topic.commonAttacksOrDefenses.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#242424] dark:text-[#F1EDE4] mb-3">
                Common Attack Vectors & Defensive Controls
              </h2>
              <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] text-xs sm:text-sm space-y-2 shadow-sm">
                {topic.commonAttacksOrDefenses.map((ad, idx) => (
                  <div key={idx} className="leading-relaxed text-[#68645D] dark:text-[#B8B1A5]">
                    {ad}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Certifications */}
          {topic.relatedCertifications && topic.relatedCertifications.length > 0 && (
            <div className="pt-6 border-t border-[#D8D0C2] dark:border-[#454139]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#68645D] dark:text-[#B8B1A5] mb-2">
                Related Industry Certifications
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {topic.relatedCertifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#B89B62]/15 text-[#82662c] dark:text-[#D1B87F] border border-[#B89B62]/30"
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
