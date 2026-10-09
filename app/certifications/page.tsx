'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { certifications } from '@/data/certifications';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty } from '@/types';
import { filterCertifications } from '@/lib/filters';
import { Search, RefreshCw, ArrowRight, Award, Terminal } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: 'Security Certifications' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66] mb-2">
            <Terminal className="w-4 h-4 text-[#00FF66]" />
            <span>// CREDENTIAL_MATRIX // VERIFIED_EXAMS</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-2.5">
            Cybersecurity Certification Explorer
          </h1>
          <p className="text-sm text-[#91A596] max-w-2xl leading-relaxed">
            Unbiased technical directory of verified industry certifications across OffSec, CompTIA, (ISC)², GIAC/SANS, Cisco, and Cloud providers.
          </p>
        </div>

        {/* Quick link to OffSec hub or comparison */}
        <div className="flex items-center gap-2.5 shrink-0 font-mono">
          <Link
            href="/certifications/offsec"
            className="px-4 py-2.5 rounded-xl bg-[#0E1510] hover:bg-[#121B14] border border-[#1B2A1F] hover:border-[#00FF66] text-[#E8F5E9] text-xs font-bold transition-all shadow-xs"
          >
            [OFFSEC HUB]
          </Link>
          <Link
            href={`/certifications/compare${comparedCerts.length > 0 ? `?ids=${comparedCerts.join(',')}` : ''}`}
            className="px-4 py-2.5 rounded-xl bg-[#00FF66] hover:bg-[#5CFF9B] text-[#050705] text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)]"
          >
            <span>&gt; COMPARE MATRIX ({comparedCerts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
            placeholder="Search certifications by name (e.g. OSCP+, Security+, CISSP, eJPT) or provider..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#050705] text-[#E8F5E9] placeholder-[#91A596]/50 rounded-xl border border-[#1B2A1F] text-xs font-mono focus:outline-none focus:border-[#00FF66] focus:ring-1 focus:ring-[#00FF66]/30 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          {/* Domain */}
          <div>
            <label className="block text-[11px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5">
              Domain / Specialization
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none focus:border-[#00FF66] text-xs"
            >
              {domains.map((dom) => (
                <option key={dom} value={dom} className="bg-[#0E1510] text-[#E8F5E9]">
                  {dom === 'all' ? 'All Domains' : dom}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-[11px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5">
              Experience Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none focus:border-[#00FF66] text-xs"
            >
              <option value="all" className="bg-[#0E1510] text-[#E8F5E9]">All Levels</option>
              <option value="beginner" className="bg-[#0E1510] text-[#E8F5E9]">Entry Level / Beginner</option>
              <option value="intermediate" className="bg-[#0E1510] text-[#E8F5E9]">Intermediate</option>
              <option value="advanced" className="bg-[#0E1510] text-[#E8F5E9]">Advanced / Expert</option>
            </select>
          </div>

          {/* Practical Exam Filter & Reset */}
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => setPracticalOnly(!practicalOnly)}
              className={cn(
                'flex-1 p-2 rounded-xl border text-xs font-mono font-bold transition-all',
                practicalOnly
                  ? 'bg-[#00FF66] text-[#050705] border-[#00FF66]'
                  : 'bg-[#050705] text-[#91A596] border-[#1B2A1F] hover:border-[#00FF66] hover:text-[#E8F5E9]'
              )}
            >
              {practicalOnly ? '[PRACTICAL LABS ONLY]' : 'Filter Practical Labs'}
            </button>
            {(searchQuery || selectedLevel !== 'all' || selectedDomain !== 'all' || practicalOnly) && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-xl border border-[#1B2A1F] text-[#91A596] hover:text-[#00FF66] hover:border-[#00FF66] bg-[#050705] transition-colors"
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
    <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#91A596]">Loading certifications...</div>}>
      <CertificationsContent />
    </Suspense>
  );
}
