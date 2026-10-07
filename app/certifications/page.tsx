'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { certifications } from '@/data/certifications';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty } from '@/types';
import { filterCertifications } from '@/lib/filters';
import { Search, RefreshCw, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function CertificationsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Difficulty | 'all'>('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [practicalOnly, setPracticalOnly] = useState(false);
  const [comparedCerts, setComparedCerts] = useState<string[]>([]);

  const domains = useMemo(() => {
    const set = new Set(certifications.map((c) => c.domain));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredCerts = useMemo(() => {
    return filterCertifications(certifications, {
      query: searchQuery,
      level: selectedLevel,
      domain: selectedDomain,
      practicalOnly,
    });
  }, [searchQuery, selectedLevel, selectedDomain, practicalOnly]);

  const toggleCompare = (certId: string) => {
    if (comparedCerts.includes(certId)) {
      setComparedCerts(comparedCerts.filter((id) => id !== certId));
    } else {
      if (comparedCerts.length < 4) {
        setComparedCerts([...comparedCerts, certId]);
      } else {
        alert('You can compare a maximum of 4 certifications simultaneously.');
      }
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedDomain('all');
    setPracticalOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Certifications' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
            Cybersecurity Certification Explorer
          </h1>
          <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-2xl leading-relaxed">
            Unbiased technical directory of verified industry certifications across OffSec, CompTIA, (ISC)², GIAC/SANS, Cisco, and Cloud providers.
          </p>
        </div>

        {/* Quick link to OffSec hub or comparison */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/certifications/offsec"
            className="px-4 py-2 rounded-lg bg-[#B56F4A] hover:bg-[#9E5C39] text-[#FFFDF8] text-xs font-semibold transition-colors shadow-sm"
          >
            Dedicated OffSec Hub
          </Link>
          <Link
            href={`/certifications/compare${comparedCerts.length > 0 ? `?ids=${comparedCerts.join(',')}` : ''}`}
            className="px-4 py-2 rounded-lg bg-[#66705A] hover:bg-[#56604b] dark:bg-[#A5AD8C] dark:hover:bg-[#929c78] text-[#FFFDF8] dark:text-[#1F1E1B] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Compare Selected ({comparedCerts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
            placeholder="Search certifications by name (e.g. OSCP+, Security+, CISSP, eJPT) or provider..."
            className="w-full pl-10 pr-4 py-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] text-[#242424] dark:text-[#F1EDE4] placeholder-[#68645D]/60 dark:placeholder-[#B8B1A5]/60 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-xs focus:outline-none focus:ring-2 focus:ring-[#66705A]/40"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Domain */}
          <div>
            <label className="block text-[11px] font-semibold text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1">
              Domain / Specialization
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full p-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
            >
              {domains.map((dom) => (
                <option key={dom} value={dom}>
                  {dom === 'all' ? 'All Domains' : dom}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-[11px] font-semibold text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider mb-1">
              Experience Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Entry Level / Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced / Expert</option>
            </select>
          </div>

          {/* Practical Exam Filter & Reset */}
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => setPracticalOnly(!practicalOnly)}
              className={cn(
                'flex-1 p-2 rounded-lg border text-xs font-semibold transition-colors',
                practicalOnly
                  ? 'bg-[#B56F4A] text-[#FFFDF8] border-[#B56F4A]'
                  : 'bg-[#F5F1E8] dark:bg-[#1F1E1B] text-[#68645D] dark:text-[#B8B1A5] border-[#D8D0C2] dark:border-[#454139]'
              )}
            >
              Practical Exams Only
            </button>
            {(searchQuery || selectedLevel !== 'all' || selectedDomain !== 'all' || practicalOnly) && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#68645D] hover:text-[#242424] dark:text-[#B8B1A5] dark:hover:text-[#F1EDE4] transition-colors"
                title="Reset filters"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <CertificationCard
            key={cert.id}
            certification={cert}
            onCompareToggle={toggleCompare}
            isCompared={comparedCerts.includes(cert.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68645D]">Loading certifications...</div>}>
      <CertificationsContent />
    </Suspense>
  );
}
