import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { certifications } from '@/data/certifications';
import { AlertCircle, ExternalLink, Award } from 'lucide-react';

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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B56F4A]/15 border border-[#B56F4A]/30 text-[#8C4A28] dark:text-[#E09873] text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Authoritative OffSec Credentials Catalog</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#242424] dark:text-[#F1EDE4] mb-2">
          OffSec Cybersecurity Certifications
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          The complete portfolio of OffSec hands-on performance-based certifications, from the industry-benchmark OSCP+ to specialized Web (OSWA/OSWE), Red Teaming (OSEP), Defense (OSDA), and Exploit Development (OSED/OSEE).
        </p>
      </div>

      {/* Official Source & Verification Notice */}
      <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139] mb-10 text-xs flex items-start gap-3 shadow-sm">
        <AlertCircle className="w-5 h-5 text-[#B89B62] shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[#68645D] dark:text-[#B8B1A5]">
          <span className="font-bold text-[#242424] dark:text-[#F1EDE4] block mb-1">
            Authoritative Provider Notice & Policy Transparency
          </span>
          OffSec certification exam lengths, retake requirements, course access bundles (e.g. Learn One, Learn Unlimited), and renewal policies evolve. For current official pricing and active exam policies, consult the{' '}
          <a
            href="https://www.offsec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#66705A] dark:text-[#A5AD8C] underline font-semibold inline-flex items-center gap-0.5"
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
