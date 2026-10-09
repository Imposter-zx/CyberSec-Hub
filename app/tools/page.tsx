'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ToolCard } from '@/components/ui/ToolCard';
import { tools } from '@/data/tools';
import { filterTools } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw, AlertTriangle, Terminal } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: 'Security Tools Arsenal' }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#00FF66]" />
          <span>// SECURITY_ARSENAL // CLI_AND_UTILITIES</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          Essential Cybersecurity Tools Directory
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed">
          Curated directory of industry-standard tools for network enumeration, web application auditing, active directory assessment, memory forensics, and binary reverse engineering.
        </p>
      </div>

      {/* Safety & Ethics Alert Box */}
      <div className="p-4.5 rounded-2xl bg-[#0E1510] border border-[#D9A441]/40 mb-8 text-xs text-[#E8F5E9] flex items-start gap-3.5 leading-relaxed shadow-xs font-mono">
        <AlertTriangle className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#D9A441] block mb-1 uppercase tracking-wider">
            [ETHICAL TOOL USAGE &amp; LEGAL SAFETY PROTOCOL]
          </span>
          <span className="text-[#91A596] font-sans">
            These software tools are documented strictly for defense, authorized auditing, vulnerability assessment, and educational research in isolated lab environments. Never execute active reconnaissance or offensive payloads against systems or networks without explicit, documented written authorization from the asset owner.
          </span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#0E1510] p-5 rounded-2xl border border-[#1B2A1F] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#00FF66]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools by name (e.g. Nmap, Burp Suite, Ghidra, Volatility, Hashcat)..."
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
                  {c === 'all' ? 'All Tool Categories' : c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-48">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none focus:border-[#00FF66] text-xs"
            >
              <option value="all" className="bg-[#0E1510] text-[#E8F5E9]">All Difficulties</option>
              <option value="beginner" className="bg-[#0E1510] text-[#E8F5E9]">Beginner</option>
              <option value="intermediate" className="bg-[#0E1510] text-[#E8F5E9]">Intermediate</option>
              <option value="advanced" className="bg-[#0E1510] text-[#E8F5E9]">Advanced</option>
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
              className="p-2 rounded-xl border border-[#1B2A1F] text-[#91A596] hover:text-[#00FF66] hover:border-[#00FF66] bg-[#050705] transition-colors"
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
