'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import {
  Users,
  ShieldAlert,
  KeyRound,
  Lock,
  Network,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { knowledgeTopics } from '@/data/knowledge';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Tag } from '@/components/ui/Tag';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function KnowledgeBaseOverviewPage() {
  const { t, isRtl } = useI18n();

  const sections = [
    {
      title: 'Types of Hackers & Security Roles',
      description: 'Breakdown of 17 security archetypes: White Hat, Black Hat, Gray Hat, Script Kiddies, State-Sponsored, Red/Blue/Purple Teams, and career paths.',
      href: '/knowledge/hackers',
      icon: <Users className="w-6 h-6 text-[#267747] dark:text-[#00FF66]" />,
      count: '17 Profiles',
    },
    {
      title: 'Security Threats & MITRE ATT&CK',
      description: 'Encyclopedic directory of 35+ malware strains, web injection flaws (SQLi, XSS, SSRF), network attacks (DDoS, MitM), and credential exploits.',
      href: '/knowledge/threats',
      icon: <ShieldAlert className="w-6 h-6 text-[#C62828] dark:text-[#FF3B30]" />,
      count: '35+ Threats',
    },
    {
      title: 'Authentication & Access Control',
      description: 'The AAA framework (Authentication vs Authorization vs Accounting), Knowledge, Possession, Biometric factors, and modern protocols (OAuth 2.0, Passkeys, FIDO2).',
      href: '/knowledge/authentication',
      icon: <KeyRound className="w-6 h-6 text-[#267747] dark:text-[#00FF66]" />,
      count: '20+ Concepts',
    },
    {
      title: 'Encryption & Cryptography',
      description: 'Symmetric (AES, ChaCha20), Asymmetric (RSA, ECC, Diffie-Hellman), Hashing (SHA-256, Argon2id, bcrypt), Digital Signatures, and PKI standards.',
      href: '/knowledge/encryption',
      icon: <Lock className="w-6 h-6 text-[#D97745] dark:text-[#D9A441]" />,
      count: '20+ Algorithms',
    },
    {
      title: 'Firewalls & Network Defense Architecture',
      description: 'Packet filtering, Stateful inspection, Proxy gateways, Web Application Firewalls (WAF), Next-Generation Firewalls (NGFW), Host-based, and Cloud FWaaS.',
      href: '/knowledge/firewalls',
      icon: <Network className="w-6 h-6 text-[#267747] dark:text-[#00FF66]" />,
      count: '10 Architectures',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs items={[{ label: t('nav.knowledge') || 'Knowledge Base' }]} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1.5">
          <Terminal className="w-4 h-4" />
          <span>// TECHNICAL_ENCYCLOPEDIA</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Cybersecurity Knowledge Encyclopedia
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Structured reference documentation detailing technical concepts, threat taxonomies, defensive controls, cryptographic algorithms, and identity standards.
        </p>
      </div>

      {/* Core Pillar Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sections.map((sec, idx) => (
          <Link
            key={idx}
            href={sec.href}
            className="group flex flex-col justify-between p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
                <div className="p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] transition-transform">
                  {sec.icon}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#F7F9F6] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                  {sec.count}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors mb-2">
                {sec.title}
              </h3>
              <p className="text-xs text-[#5F6B62] dark:text-[#91A596] leading-relaxed font-sans">
                {sec.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between text-xs font-bold text-[#267747] dark:text-[#00FF66]">
              <span>{isRtl ? '<' : '>'} OPEN SUBSYSTEM</span>
              <ArrowRight className={cn('w-3.5 h-3.5 group-hover:translate-x-1 transition-transform', isRtl && 'rotate-180')} />
            </div>
          </Link>
        ))}
      </div>

      {/* Core Security Concept Articles */}
      <div className="border-t border-[#DDE5DE] dark:border-[#1B2A1F] pt-12">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66]">
            // SPECIALIZED_DEEP_DIVES
          </span>
          <h2 className="text-2xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider mt-1">
            Enterprise Architecture Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {knowledgeTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] flex flex-col justify-between shadow-xs hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F7F9F6] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                    {topic.category}
                  </span>
                  <DifficultyBadge difficulty={topic.difficulty} />
                </div>
                <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#18221C] dark:text-[#E8F5E9] font-semibold mb-3 leading-relaxed font-sans">
                  {topic.definition}
                </p>
                <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-4 leading-relaxed font-sans line-clamp-3">
                  {topic.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {topic.relatedTopics.map((rt, idx) => (
                    <Tag key={idx} label={rt} />
                  ))}
                </div>
                <Link
                  href={`/knowledge/${topic.id}`}
                  className="text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>{isRtl ? '<' : '>'} READ DEEP DIVE</span>
                  <ArrowRight className={cn('w-3 h-3', isRtl && 'rotate-180')} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
