'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { resources } from '@/data/resources';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Difficulty, Pricing } from '@/types';
import { FlaskConical, Search, Filter, RefreshCw, Terminal, Shield, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LabsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedPricing, setSelectedPricing] = useState<Pricing | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Filter resources to those that are interactive labs, platforms, or CTFs
  const labResources = useMemo(() => {
    return resources.filter(
      (r) =>
        r.resourceType === 'lab' ||
        r.resourceType === 'platform' ||
        r.resourceType === 'ctf' ||
        r.resourceType === 'academy'
    );
  }, []);

  const filteredLabs = useMemo(() => {
    return labResources.filter((r) => {
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const match =
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.skills.some((s) => s.toLowerCase().includes(q));
        if (!match) return false;
      }

      if (selectedDifficulty !== 'all' && r.difficulty !== selectedDifficulty) {
        return false;
      }

      if (selectedPricing !== 'all' && r.pricing !== selectedPricing) {
        return false;
      }

      if (selectedTag !== 'all') {
        const matchesSkill = r.skills.some((s) => s.toLowerCase().includes(selectedTag.toLowerCase()));
        const matchesCat = r.category.toLowerCase().includes(selectedTag.toLowerCase());
        if (!matchesSkill && !matchesCat) return false;
      }

      return true;
    });
  }, [labResources, searchQuery, selectedDifficulty, selectedPricing, selectedTag]);

  const quickTags = [
    { id: 'all', label: 'All Labs' },
    { id: 'web', label: 'Web Security' },
    { id: 'linux', label: 'Linux & SSH' },
    { id: 'blue team', label: 'Blue Team & SOC' },
    { id: 'active directory', label: 'Active Directory' },
    { id: 'ctf', label: 'CTF Challenges' },
    { id: 'forensics', label: 'DFIR & Forensics' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Labs & Hands-on Practice' }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Hands-on Cybersecurity Labs & Practice Platforms
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          The core philosophy of cybersecurity mastery is deliberate practical execution. Browse verified virtual labs, vulnerable wargames, Capture The Flag (CTF) environments, and SOC defense simulators.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 space-y-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lab environments by skill, platform, or vulnerability type..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {quickTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setSelectedTag(tag.id)}
              className={cn(
                'px-3 py-1 rounded-lg text-xs font-semibold transition-colors',
                selectedTag === tag.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Labs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <ResourceCard key={lab.id} resource={lab} />
        ))}
      </div>
    </div>
  );
}
