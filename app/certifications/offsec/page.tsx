'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { certifications } from '@/data/certifications';
import { AlertCircle, ExternalLink, Terminal } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function OffSecCertificationsPage() {
  const { t } = useI18n();
  const offsecCerts = certifications.filter((c) => c.provider === 'OffSec');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs
        items={[
          { label: t('nav_certifications'), href: '/certifications' },
          { label: t('nav_offsec') },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
          <span>{t('offsec_badge')}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {t('offsec_title')}
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed">
          {t('offsec_subtitle')}
        </p>
      </div>

      {/* Official Source & Verification Notice */}
      <div className="p-4.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-10 text-xs flex items-start gap-3 shadow-xs font-mono">
        <AlertCircle className="w-5 h-5 text-[#D97745] dark:text-[#D9A441] shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[#5F6B62] dark:text-[#91A596] font-sans">
          <span className="font-bold text-[#D97745] dark:text-[#D9A441] block mb-1 font-mono uppercase tracking-wider">
            {t('offsec_notice_title')}
          </span>
          {t('offsec_notice_body')}{' '}
          <a
            href="https://www.offsec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#267747] dark:text-[#00FF66] underline font-bold inline-flex items-center gap-0.5 font-mono"
          >
            {t('official_portal')}
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
