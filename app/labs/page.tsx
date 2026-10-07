'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { resources } from '@/data/resources';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Difficulty, Pricing } from '@/types';
import { Search, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LabsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedPricing] = useState<Pricing | 'all'>('all');
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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4C9A91] dark:text-[#7BB8B2] mb-1.5">
          <FlaskConical className="w-4 h-4" />
          <span>Interactive Attack & Defense Environments</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Hands-on Cybersecurity Labs & Practice Platforms
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          The core philosophy of cybersecurity mastery is deliberate practical execution. Browse verified virtual labs, vulnerable wargames, Capture The Flag (CTF) environments, and SOC defense simulators.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#262E28] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lab environments by skill, platform, or vulnerability type..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] placeholder-[#68736B]/70 dark:placeholder-[#A0AFA5]/70 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-xs focus:outline-none focus:ring-2 focus:ring-[#3F7D5A]/40 transition-all"
          />
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {quickTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setSelectedTag(tag.id)}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
                selectedTag === tag.id
                  ? 'bg-[#3F7D5A] text-white shadow-xs'
                  : 'bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840] hover:bg-[#DDE5DE]'
              )}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold text-[#68736B] dark:text-[#A0AFA5]">
          Showing <span className="text-[#3F7D5A] dark:text-[#6AAF8A]">{filteredLabs.length}</span> verified lab environments
        </span>
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
