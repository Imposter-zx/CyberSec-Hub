import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { certifications } from '@/data/certifications';
import { AlertCircle, ExternalLink, Award, Terminal } from 'lucide-react';

export default function OffSecCertificationsPage() {
  const offsecCerts = certifications.filter((c) => c.provider === 'OffSec');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs
        items={[
          { label: 'Certifications', href: '/certifications' },
          { label: 'OffSec Certifications Hub' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#00FF66]" />
          <span>// OFFSEC_CATALOG // HANDS_ON_DEFENSE_AND_OFFENSE</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          OffSec Cybersecurity Certifications
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed">
          The complete portfolio of OffSec hands-on performance-based certifications, from the industry-benchmark OSCP+ to specialized Web (OSWA/OSWE), Red Teaming (OSEP), Defense (OSDA), and Exploit Development (OSED/OSEE).
        </p>
      </div>

      {/* Official Source & Verification Notice */}
      <div className="p-4.5 rounded-2xl bg-[#0E1510] text-[#E8F5E9] border border-[#1B2A1F] mb-10 text-xs flex items-start gap-3 shadow-xs font-mono">
        <AlertCircle className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[#91A596] font-sans">
          <span className="font-bold text-[#D9A441] block mb-1 font-mono uppercase tracking-wider">
            [AUTHORITATIVE PROVIDER NOTICE &amp; POLICY TRANSPARENCY]
          </span>
          OffSec certification exam lengths, retake requirements, course access bundles (e.g. Learn One, Learn Unlimited), and renewal policies evolve. For current official pricing and active exam policies, consult the{' '}
          <a
            href="https://www.offsec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF66] underline font-bold inline-flex items-center gap-0.5 font-mono"
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
