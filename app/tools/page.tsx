'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ToolCard } from '@/components/ui/ToolCard';
import { tools } from '@/data/tools';
import { filterTools } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw, AlertTriangle, Wrench } from 'lucide-react';

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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Wrench className="w-4 h-4" />
          <span>Security Software Arsenal</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Essential Cybersecurity Tools Directory
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Curated directory of industry-standard tools for network enumeration, web application auditing, active directory assessment, memory forensics, and binary reverse engineering.
        </p>
      </div>

      {/* Safety & Ethics Alert Box */}
      <div className="p-4.5 rounded-2xl bg-[#FDF6E7] border border-[#F2E5C9] dark:bg-[#D7A84B]/10 dark:border-[#524426] mb-8 text-xs text-[#A67B2E] dark:text-[#E4BF74] flex items-start gap-3.5 leading-relaxed shadow-xs">
        <AlertTriangle className="w-5 h-5 text-[#D7A84B] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1">Ethical Tool Usage & Legal Safety Standard</span>
          These software tools are documented strictly for defense, authorized auditing, vulnerability assessment, and educational research in isolated lab environments. Never execute active reconnaissance or offensive payloads against systems or networks without explicit, documented written authorization from the asset owner.
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#262E28] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools by name (e.g. Nmap, Burp Suite, Ghidra, Volatility, Hashcat)..."
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
                  {c === 'all' ? 'All Tool Categories' : c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-48">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
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
              className="p-2 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#68736B] hover:text-[#18221C] dark:text-[#A0AFA5] dark:hover:text-[#E8F0EA] bg-[#EEF3EE] dark:bg-[#202722] transition-colors"
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
