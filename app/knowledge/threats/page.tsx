'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ThreatCard } from '@/components/ui/ThreatCard';
import { threats } from '@/data/threats';
import { filterThreats } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw, ShieldAlert, GitBranch, LayoutGrid, Terminal } from 'lucide-react';
import { SqlInjectionAttackFlow, XssAttackFlow } from '@/components/visuals/SecurityDiagrams';
import { cn } from '@/lib/utils';

export default function ThreatsKnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'catalog' | 'diagrams'>('catalog');

  const categories = useMemo(() => {
    const set = new Set(threats.map((t) => t.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredThreats = useMemo(() => {
    return filterThreats(threats, {
      query: searchQuery,
      category: selectedCategory,
      difficulty: selectedDifficulty,
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Security Threats & MITRE ATT&CK' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B30] mb-1.5">
          <ShieldAlert className="w-4 h-4" />
          <span>// THREAT_DATABASE_&amp;_ATTACK_TAXONOMY</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Security Threats &amp; MITRE ATT&CK Taxonomy
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Technical encyclopedia of attack mechanisms, adversary vectors, detection telemetry, and defensive controls mapped to the MITRE ATT&amp;CK matrix and OWASP Top 10 standards.
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#1B2A1F] pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('catalog')}
          className={cn(
            'px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border',
            activeTab === 'catalog'
              ? 'bg-[#00FF66] text-[#050705] border-[#00FF66] shadow-xs'
              : 'bg-[#0E1510] text-[#91A596] hover:text-[#E8F5E9] border-[#1B2A1F]'
          )}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Visual Threat Catalog ({filteredThreats.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('diagrams')}
          className={cn(
            'px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border',
            activeTab === 'diagrams'
              ? 'bg-[#00FF66] text-[#050705] border-[#00FF66] shadow-xs'
              : 'bg-[#0E1510] text-[#91A596] hover:text-[#E8F5E9] border-[#1B2A1F]'
          )}
        >
          <GitBranch className="w-4 h-4" />
          <span>Interactive Attack Flow Diagrams</span>
        </button>
      </div>

      {/* Tab Content: Attack Flow Diagrams */}
      {activeTab === 'diagrams' && (
        <div className="space-y-8 animate-in fade-in-50 duration-200">
          <SqlInjectionAttackFlow />
          <XssAttackFlow />
        </div>
      )}

      {/* Tab Content: Threat Catalog Grid */}
      {activeTab === 'catalog' && (
        <>
          {/* Controls Bar */}
          <div className="bg-[#0E1510] p-5 rounded-2xl border border-[#1B2A1F] mb-8 space-y-4 shadow-xs">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#00FF66]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search threats by name (e.g. Ransomware, SQLi, Phishing, Zero-Day)..."
                className="w-full pl-11 pr-4 py-2.5 bg-[#050705] text-[#E8F5E9] placeholder-[#91A596]/60 rounded-xl border border-[#1B2A1F] text-xs focus:outline-none focus:border-[#00FF66] transition-all font-mono"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex-1 min-w-[200px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
                >
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-[#050705]">
                      {c === 'all' ? 'All Threat Categories' : c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-48">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
                  className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
                >
                  <option value="all" className="bg-[#050705]">All Difficulties</option>
                  <option value="beginner" className="bg-[#050705]">Beginner</option>
                  <option value="intermediate" className="bg-[#050705]">Intermediate</option>
                  <option value="advanced" className="bg-[#050705]">Advanced</option>
                </select>
              </div>

              {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="p-2 text-xs font-mono text-[#FF3B30] hover:underline flex items-center gap-1 shrink-0"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>[RESET_FILTERS]</span>
                </button>
              )}
            </div>
          </div>

          {/* Threats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThreats.map((threat) => (
              <ThreatCard key={threat.id} threat={threat} />
            ))}
          </div>

          {filteredThreats.length === 0 && (
            <div className="text-center py-16 bg-[#0E1510] rounded-2xl border border-[#1B2A1F]">
              <p className="text-sm text-[#91A596]">No security threats match your query.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-3 text-xs font-bold text-[#00FF66] hover:underline"
              >
                Reset query parameters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
