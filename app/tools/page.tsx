'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ToolCard } from '@/components/ui/ToolCard';
import { tools } from '@/data/tools';
import { filterTools } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw, AlertTriangle } from 'lucide-react';

export default function ToolsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const categories = useMemo(() => {
    const set = new Set(tools.map((t) => t.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredTools = useMemo(() => {
    return filterTools(tools, {
      query: searchQuery,
      category: selectedCategory,
      difficulty: selectedDifficulty,
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Cybersecurity Tools' }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Essential Cybersecurity Tools Directory
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Curated directory of industry-standard tools for network enumeration, web application auditing, active directory assessment, memory forensics, and binary reverse engineering.
        </p>
      </div>

      {/* Safety & Ethics Alert Box */}
      <div className="p-4 rounded-xl bg-[#B89B62]/10 border border-[#B89B62]/30 mb-8 text-xs text-[#82662c] dark:text-[#D1B87F] flex items-start gap-3 leading-relaxed shadow-sm">
        <AlertTriangle className="w-5 h-5 text-[#B89B62] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1">Ethical Tool Usage & Legal Safety Standard</span>
          These software tools are documented strictly for defense, authorized auditing, vulnerability assessment, and educational research in isolated lab environments. Never execute active reconnaissance or offensive payloads against systems or networks without explicit, documented written authorization from the asset owner.
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFDF8] dark:bg-[#302E29] p-4 rounded-xl border border-[#D8D0C2] dark:border-[#454139] mb-8 space-y-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#68645D] dark:text-[#B8B1A5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools by name (e.g. Nmap, Burp Suite, Ghidra, Volatility, Hashcat)..."
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
                  {c === 'all' ? 'All Tool Categories' : c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-44">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="p-2 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#68645D] hover:text-[#242424] dark:text-[#B8B1A5] dark:hover:text-[#F1EDE4] transition-colors"
              title="Reset filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
