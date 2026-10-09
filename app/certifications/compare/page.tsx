'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { certifications } from '@/data/certifications';
import { RefreshCw, Award, Terminal } from 'lucide-react';

function CompareContent() {
  const searchParams = useSearchParams();
  const initialIds = searchParams.get('ids')?.split(',') || ['comptia-security-plus', 'comptia-cysa-plus'];

  const [selectedIds, setSelectedIds] = useState<string[]>(initialIds);

  const selectedCerts = certifications.filter((c) => selectedIds.includes(c.id));

  const addCert = (id: string) => {
    if (id && !selectedIds.includes(id)) {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      } else {
        alert('You can compare a maximum of 4 certifications simultaneously.');
      }
    }
  };

  const removeCert = (id: string) => {
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const loadPreset = (ids: string[]) => {
    setSelectedIds(ids);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs
        items={[
          { label: 'Certifications', href: '/certifications' },
          { label: 'Certification Comparison Matrix' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#00FF66]" />
          <span>// EVALUATION_MATRIX // BENCHMARK_COMPARISON</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          Cybersecurity Certification Comparison Tool
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed">
          Compare exam formats, practical vs theoretical styles, costs, duration, renewal policies, and required experience side-by-side to make informed career decisions.
        </p>
      </div>

      {/* Preset Comparisons */}
      <div className="p-5 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] mb-8 shadow-xs font-mono">
        <div className="text-xs font-bold uppercase tracking-wider text-[#91A596] mb-3">
          POPULAR BENCHMARK COMPARISONS:
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => loadPreset(['comptia-security-plus', 'comptia-cysa-plus'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#050705] border border-[#1B2A1F] hover:border-[#00FF66] font-bold text-[#E8F5E9] transition-all"
          >
            &gt; Security+ vs CySA+
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['ine-ejpt', 'tcm-pnpt', 'oscp-plus'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#050705] border border-[#1B2A1F] hover:border-[#00FF66] font-bold text-[#E8F5E9] transition-all"
          >
            &gt; eJPT vs PNPT vs OSCP+
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['oswa', 'oswe'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#050705] border border-[#1B2A1F] hover:border-[#00FF66] font-bold text-[#E8F5E9] transition-all"
          >
            &gt; OSWA (Black-Box) vs OSWE (White-Box Code Audit)
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['giac-gsec', 'isc2-cissp', 'isaca-cism'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#050705] border border-[#1B2A1F] hover:border-[#00FF66] font-bold text-[#E8F5E9] transition-all"
          >
            &gt; GSEC vs CISSP vs CISM
          </button>
        </div>
      </div>

      {/* Add Certification Dropdown */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 font-mono">
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-bold text-[#E8F5E9]">
            ADD TO MATRIX:
          </label>
          <select
            onChange={(e) => {
              addCert(e.target.value);
              e.target.value = '';
            }}
            className="p-2 text-xs rounded-xl bg-[#0E1510] border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none focus:border-[#00FF66] font-medium"
          >
            <option value="" className="bg-[#050705]">-- Choose a Certification --</option>
            {certifications
              .filter((c) => !selectedIds.includes(c.id))
              .map((c) => (
                <option key={c.id} value={c.id} className="bg-[#0E1510] text-[#E8F5E9]">
                  {c.name} ({c.provider})
                </option>
              ))}
          </select>
        </div>

        {selectedIds.length > 0 && (
          <button
            type="button"
            onClick={() => setSelectedIds([])}
            className="text-xs text-[#91A596] hover:text-[#FF3B30] flex items-center gap-1 font-bold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>CLEAR MATRIX</span>
          </button>
        )}
      </div>

      {/* Comparison Table Component */}
      <ComparisonTable certifications={selectedCerts} onRemove={removeCert} />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#91A596]">Loading comparison matrix...</div>}>
      <CompareContent />
    </Suspense>
  );
}
