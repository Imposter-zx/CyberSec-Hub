import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { certifications } from '@/data/certifications';
import { Shield, AlertCircle, ExternalLink, Award } from 'lucide-react';

export default function OffSecCertificationsPage() {
  const offsecCerts = certifications.filter((c) => c.provider === 'OffSec');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Certifications', href: '/certifications' },
          { label: 'OffSec Certifications Hub' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400 text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Authoritative OffSec Credentials Catalog</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          OffSec Cybersecurity Certifications
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          The complete portfolio of OffSec hands-on performance-based certifications, from the industry-benchmark OSCP+ to specialized Web (OSWA/OSWE), Red Teaming (OSEP), Defense (OSDA), and Exploit Development (OSED/OSEE).
        </p>
      </div>

      {/* Official Source & Verification Notice */}
      <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 mb-10 text-xs flex items-start gap-3 shadow-md">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed text-slate-300">
          <span className="font-bold text-white block mb-1">
            Authoritative Provider Notice & Policy Transparency
          </span>
          OffSec certification exam lengths, retake requirements, course access bundles (e.g. Learn One, Learn Unlimited), and renewal policies evolve. For current official pricing and active exam policies, consult the{' '}
          <a
            href="https://www.offsec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline font-semibold inline-flex items-center gap-0.5"
          >
            Official OffSec Portal
            <ExternalLink className="w-3 h-3" />
          </a>
          .
        </div>
      </div>

      {/* Grid of OffSec Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offsecCerts.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
}
