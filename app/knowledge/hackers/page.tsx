'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { HackerCard } from '@/components/ui/HackerCard';
import { hackerTypes } from '@/data/hackers';
import { Shield, Scale, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HackersKnowledgePage() {
  const [filter, setFilter] = useState<'all' | 'authorized' | 'adversary'>('all');

  const filteredHackers = hackerTypes.filter((h) => {
    const isAuthorized = [
      'white-hat',
      'ethical-hacker',
      'security-researcher',
      'bug-bounty-hunter',
      'blue-team',
      'purple-team',
      'red-team',
    ].includes(h.id);

    if (filter === 'authorized') return isAuthorized;
    if (filter === 'adversary') return !isAuthorized;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Types of Hackers & Security Roles' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Types of Hackers & Cybersecurity Operational Roles
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Comprehensive taxonomy of technical threat actor profiles, ethical boundaries, and industry career pathways. Learn the distinct motivations, activities, and legal frameworks governing modern security.
        </p>
      </div>

      {/* Legal & Educational Notice Box */}
      <div className="p-4 rounded-xl bg-[#EAE3D5]/60 dark:bg-[#292722]/60 border border-[#D8D0C2] dark:border-[#454139] mb-8 text-xs text-[#242424] dark:text-[#F1EDE4] flex items-start gap-3 leading-relaxed shadow-sm">
        <Scale className="w-5 h-5 text-[#66705A] dark:text-[#A5AD8C] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1">
            Educational Scope & Legal Authority Notice
          </span>
          All technical descriptions presented here are strictly for educational and defense awareness purposes. Engaging in unauthorized system probing, penetration testing, or exploitation without written permission violates cybercrime laws (e.g., Computer Fraud and Abuse Act) and carries severe criminal penalties.
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#D8D0C2] dark:border-[#454139] pb-3">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
            filter === 'all'
              ? 'bg-[#66705A] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] shadow-sm'
              : 'text-[#68645D] dark:text-[#B8B1A5] hover:bg-[#EAE3D5] dark:hover:bg-[#292722]'
          )}
        >
          All Profiles ({hackerTypes.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('authorized')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5',
            filter === 'authorized'
              ? 'bg-[#657A58] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] shadow-sm'
              : 'text-[#68645D] dark:text-[#B8B1A5] hover:bg-[#EAE3D5] dark:hover:bg-[#292722]'
          )}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Defensive & Authorized Roles</span>
        </button>
        <button
          type="button"
          onClick={() => setFilter('adversary')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5',
            filter === 'adversary'
              ? 'bg-[#A45143] text-[#FFFDF8] shadow-sm'
              : 'text-[#68645D] dark:text-[#B8B1A5] hover:bg-[#EAE3D5] dark:hover:bg-[#292722]'
          )}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Threat Actor Profiles</span>
        </button>
      </div>

      {/* Grid of Hacker Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHackers.map((hacker) => (
          <HackerCard key={hacker.id} hacker={hacker} />
        ))}
      </div>
    </div>
  );
}
