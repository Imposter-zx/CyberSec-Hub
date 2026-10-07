'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { YouTubeCard } from '@/components/ui/YouTubeCard';
import { youtubeChannels } from '@/data/youtube';
import { filterYouTubeChannels } from '@/lib/filters';
import { Search, RefreshCw } from 'lucide-react';

export default function YouTubeDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const set = new Set<string>();
    youtubeChannels.forEach((c) => c.categories.forEach((cat) => set.add(cat)));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredChannels = useMemo(() => {
    return filterYouTubeChannels(youtubeChannels, {
      query: searchQuery,
      category: selectedCategory,
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'YouTube Directory' }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Recommended Cybersecurity Video Channels
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Curated directory of top-tier cybersecurity educators, exploit researchers, digital forensics experts, and walkthrough creators on YouTube.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-[#FFFDF8] dark:bg-[#302E29] p-4 rounded-xl border border-[#D8D0C2] dark:border-[#454139] mb-8 space-y-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#68645D] dark:text-[#B8B1A5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search channels by creator (e.g. John Hammond, IppSec, Professor Messer) or topic..."
            className="w-full pl-10 pr-4 py-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] text-[#242424] dark:text-[#F1EDE4] placeholder-[#68645D]/60 dark:placeholder-[#B8B1A5]/60 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-xs focus:outline-none focus:ring-2 focus:ring-[#66705A]/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex-1 min-w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'all' ? 'All Content Topics' : c}
                </option>
              ))}
            </select>
          </div>

          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="p-2 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#68645D] hover:text-[#242424] dark:text-[#B8B1A5] dark:hover:text-[#F1EDE4] transition-colors"
              title="Reset filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold text-[#68645D] dark:text-[#B8B1A5]">
          Showing <span className="text-[#242424] dark:text-[#F1EDE4]">{filteredChannels.length}</span> verified channels
        </span>
      </div>

      {/* Grid of Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChannels.map((channel) => (
          <YouTubeCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
}
