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
  BookOpen,
  Layers,
  Shield,
  Cpu,
  Eye,
  FileText
} from 'lucide-react';
import { knowledgeTopics } from '@/data/knowledge';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Tag } from '@/components/ui/Tag';

export default function KnowledgeBaseOverviewPage() {
  const sections = [
    {
      title: 'Types of Hackers & Security Roles',
      description: 'Comprehensive breakdown of 14 security profiles: White Hat, Black Hat, Gray Hat, Script Kiddies, State-Sponsored, Red/Blue/Purple Teams, and career paths.',
      href: '/knowledge/hackers',
      icon: <Users className="w-6 h-6 text-blue-500" />,
      count: '14 Profiles',
    },
    {
      title: 'Security Threats & MITRE ATT&CK',
      description: 'Encyclopedic directory of 35+ malware strains, web injection flaws (SQLi, XSS, SSRF), network attacks (DDoS, MitM), credential attacks, and cloud misconfigurations.',
      href: '/knowledge/threats',
      icon: <ShieldAlert className="w-6 h-6 text-rose-500" />,
      count: '35+ Threats',
    },
    {
      title: 'Authentication & Access Control',
      description: 'The AAA framework (Authentication vs Authorization vs Accounting), Knowledge, Possession, Biometric factors, and modern protocols (OAuth 2.0, OIDC, SAML, Passkeys, FIDO2).',
      href: '/knowledge/authentication',
      icon: <KeyRound className="w-6 h-6 text-emerald-500" />,
      count: '20+ Concepts',
    },
    {
      title: 'Encryption & Cryptography',
      description: 'Symmetric (AES, ChaCha20), Asymmetric (RSA, ECC, Diffie-Hellman), Hashing (SHA-256, Argon2id, bcrypt), Digital Signatures, and why SHA-256 fails for password storage.',
      href: '/knowledge/encryption',
      icon: <Lock className="w-6 h-6 text-purple-500" />,
      count: '20+ Algorithms',
    },
    {
      title: 'Firewalls & Network Defense Architecture',
      description: 'Packet filtering, Stateful inspection, Proxy gateways, Web Application Firewalls (WAF), Next-Generation Firewalls (NGFW), Host-based, and Cloud FWaaS.',
      href: '/knowledge/firewalls',
      icon: <Network className="w-6 h-6 text-amber-500" />,
      count: '10 Architectures',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Knowledge Base' }]} />

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Cybersecurity Knowledge Encyclopedia
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Structured reference documentation detailing technical concepts, threat taxonomies, defensive controls, cryptographic algorithms, and identity standards.
        </p>
      </div>

      {/* Core Pillar Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sections.map((sec, idx) => (
          <Link
            key={idx}
            href={sec.href}
            className="group flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 group-hover:scale-105 transition-transform">
                  {sec.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {sec.count}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                {sec.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {sec.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Open Encyclopedia Section</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Core Security Concept Articles */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Core Foundations
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Specialized Concept Deep Dives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {knowledgeTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {topic.category}
                  </span>
                  <DifficultyBadge difficulty={topic.difficulty} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  {topic.definition}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {topic.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {topic.relatedTopics.map((rt, idx) => (
                    <Tag key={idx} label={rt} />
                  ))}
                </div>
                <Link
                  href={`/knowledge/${topic.id}`}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
