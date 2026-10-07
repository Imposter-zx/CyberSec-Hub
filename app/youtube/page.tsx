'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { YouTubeCard } from '@/components/ui/YouTubeCard';
import { youtubeChannels } from '@/data/youtube';
import { filterYouTubeChannels } from '@/lib/filters';
import { Search, RefreshCw, Video } from 'lucide-react';

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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E58A4E] dark:text-[#EDA574] mb-1.5">
          <Video className="w-4 h-4" />
          <span>Video Instruction Channels</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Recommended Cybersecurity Video Channels
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Curated directory of top-tier cybersecurity educators, exploit researchers, digital forensics experts, and walkthrough creators on YouTube.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-[#FFFFFF] dark:bg-[#262E28] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search channels by creator (e.g. John Hammond, IppSec, Professor Messer) or topic..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] placeholder-[#68736B]/70 dark:placeholder-[#A0AFA5]/70 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-xs focus:outline-none focus:ring-2 focus:ring-[#3F7D5A]/40 transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex-1 min-w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
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
              className="p-2 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#68736B] hover:text-[#18221C] dark:text-[#A0AFA5] dark:hover:text-[#E8F0EA] bg-[#EEF3EE] dark:bg-[#202722] transition-colors"
              title="Reset filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold text-[#68736B] dark:text-[#A0AFA5]">
          Showing <span className="text-[#3F7D5A] dark:text-[#6AAF8A]">{filteredChannels.length}</span> verified channels
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
