import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { knowledgeTopics } from '@/data/knowledge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Knowledge Base</span>
        </Link>

        {/* Category & Difficulty */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
            {topic.category}
          </span>
          <DifficultyBadge difficulty={topic.difficulty} />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-4 leading-tight">
          {topic.title}
        </h1>

        {/* Definition Lead */}
        <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] text-sm font-semibold text-[#18221C] dark:text-[#E8F0EA] leading-relaxed mb-8 shadow-xs">
          {topic.definition}
        </div>

        {/* Specialized Interactive Diagram if Available */}
        <TopicDiagramViewer topicId={topic.id} className="mb-8" />

        {/* Article Body */}
        <div className="space-y-8 text-sm text-[#18221C] dark:text-[#E8F0EA] leading-relaxed">
          {/* Detailed Explanation */}
          <div>
            <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
              <span>Technical Explanation</span>
            </h2>
            <p className="leading-relaxed whitespace-pre-line text-[#68736B] dark:text-[#A0AFA5]">{topic.explanation}</p>
          </div>

          {/* Why it Matters */}
          <div className="p-6 rounded-2xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
            <h3 className="text-sm font-bold text-[#3F7D5A] dark:text-[#6AAF8A] mb-2">
              Why It Matters in Enterprise Security
            </h3>
            <p className="text-[#68736B] dark:text-[#A0AFA5] text-xs sm:text-sm leading-relaxed">
              {topic.whyItMatters}
            </p>
          </div>

          {/* Real-World Examples */}
          {topic.examples && topic.examples.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] mb-3">
                Practical Real-World Scenarios
              </h2>
              <ul className="space-y-2.5">
                {topic.examples.map((ex, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex items-start gap-2.5 text-xs sm:text-sm shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 mt-0.5" />
                    <span className="text-[#68736B] dark:text-[#A0AFA5]">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Attacks or Defenses */}
          {topic.commonAttacksOrDefenses && topic.commonAttacksOrDefenses.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] mb-3">
                Common Attack Vectors & Defensive Controls
              </h2>
              <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] text-xs sm:text-sm space-y-2 shadow-xs">
                {topic.commonAttacksOrDefenses.map((ad, idx) => (
                  <div key={idx} className="leading-relaxed text-[#68736B] dark:text-[#A0AFA5]">
                    {ad}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Certifications */}
          {topic.relatedCertifications && topic.relatedCertifications.length > 0 && (
            <div className="pt-6 border-t border-[#DDE5DE] dark:border-[#3A4840]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#68736B] dark:text-[#A0AFA5] mb-2.5">
                Related Industry Certifications
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {topic.relatedCertifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[#FDF6E7] text-[#A67B2E] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] border border-[#F2E5C9] dark:border-[#524426]"
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
