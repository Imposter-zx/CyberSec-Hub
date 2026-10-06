'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { certifications } from '@/data/certifications';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty } from '@/types';
import { filterCertifications } from '@/lib/filters';
import { Search, Award, RefreshCw, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
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
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Cybersecurity Certification Explorer
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Unbiased technical directory of verified industry certifications across OffSec, CompTIA, (ISC)², GIAC/SANS, Cisco, and Cloud providers.
          </p>
        </div>

        {/* Quick link to OffSec hub or comparison */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/certifications/offsec"
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors"
          >
            Dedicated OffSec Hub
          </Link>
          <Link
            href={`/certifications/compare${comparedCerts.length > 0 ? `?ids=${comparedCerts.join(',')}` : ''}`}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>Compare Selected ({comparedCerts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 space-y-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search certifications by name (e.g. OSCP+, Security+, CISSP, eJPT) or provider..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Domain */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Domain / Specialization
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
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
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Experience Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
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
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800'
              )}
            >
              Practical Exams Only
            </button>
            {(searchQuery || selectedLevel !== 'all' || selectedDomain !== 'all' || practicalOnly) && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
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
    <Suspense fallback={<div className="p-8 text-center text-xs">Loading certifications...</div>}>
      <CertificationsContent />
    </Suspense>
  );
}
