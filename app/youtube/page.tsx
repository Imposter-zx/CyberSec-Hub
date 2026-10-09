'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { YouTubeCard } from '@/components/ui/YouTubeCard';
import { youtubeChannels } from '@/data/youtube';
import { filterYouTubeChannels } from '@/lib/filters';
import { Search, RefreshCw, Radio } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: 'Signal Broadcast Channels' }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66] mb-2">
          <Radio className="w-4 h-4 text-[#00FF66] animate-pulse" />
          <span>// SIGNAL_CHANNELS // VERIFIED_BROADCASTS</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          Recommended Cybersecurity Video Channels
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed">
          Curated directory of top-tier cybersecurity educators, exploit researchers, digital forensics experts, and walkthrough creators on YouTube.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-[#0E1510] p-5 rounded-2xl border border-[#1B2A1F] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#00FF66]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search channels by creator (e.g. John Hammond, IppSec, Professor Messer) or topic..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#050705] text-[#E8F5E9] placeholder-[#91A596]/50 rounded-xl border border-[#1B2A1F] text-xs font-mono focus:outline-none focus:border-[#00FF66] focus:ring-1 focus:ring-[#00FF66]/30 transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="flex-1 min-w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none focus:border-[#00FF66] text-xs"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-[#0E1510] text-[#E8F5E9]">
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
              className="p-2 rounded-xl border border-[#1B2A1F] text-[#91A596] hover:text-[#00FF66] hover:border-[#00FF66] bg-[#050705] transition-colors"
              title="Reset filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6 font-mono text-xs">
        <span className="text-[#91A596]">
          CHANNELS INDEXED: <span className="text-[#00FF66] font-bold">{filteredChannels.length}</span> VERIFIED BROADCASTERS
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
