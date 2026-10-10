import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { roadmaps } from '@/data/roadmaps';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { RoadmapTimeline } from '@/components/ui/RoadmapTimeline';
import { ArrowLeft } from 'lucide-react';

interface RoadmapDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return roadmaps.map((r) => ({
    id: r.id,
  }));
}

export default async function RoadmapDetailPage({ params }: RoadmapDetailPageProps) {
  const { id } = await params;
  const roadmap = roadmaps.find((r) => r.id === id);

  if (!roadmap) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs
        items={[
          { label: 'Roadmaps', href: '/roadmaps' },
          { label: roadmap.title },
        ]}
      />

      <div className="my-6">
        <Link
          href="/roadmaps"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] hover:underline mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&gt; BACK TO ALL ROADMAPS</span>
        </Link>

        {/* Roadmap Interactive Timeline */}
        <RoadmapTimeline roadmap={roadmap} />
      </div>
    </div>
  );
}
