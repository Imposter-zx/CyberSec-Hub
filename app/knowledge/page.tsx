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
      icon: <Users className="w-6 h-6 text-[#66705A] dark:text-[#A5AD8C]" />,
      count: '14 Profiles',
    },
    {
      title: 'Security Threats & MITRE ATT&CK',
      description: 'Encyclopedic directory of 35+ malware strains, web injection flaws (SQLi, XSS, SSRF), network attacks (DDoS, MitM), credential attacks, and cloud misconfigurations.',
      href: '/knowledge/threats',
      icon: <ShieldAlert className="w-6 h-6 text-[#B56F4A] dark:text-[#C58A68]" />,
      count: '35+ Threats',
    },
    {
      title: 'Authentication & Access Control',
      description: 'The AAA framework (Authentication vs Authorization vs Accounting), Knowledge, Possession, Biometric factors, and modern protocols (OAuth 2.0, OIDC, SAML, Passkeys, FIDO2).',
      href: '/knowledge/authentication',
      icon: <KeyRound className="w-6 h-6 text-[#657A58] dark:text-[#A5AD8C]" />,
      count: '20+ Concepts',
    },
    {
      title: 'Encryption & Cryptography',
      description: 'Symmetric (AES, ChaCha20), Asymmetric (RSA, ECC, Diffie-Hellman), Hashing (SHA-256, Argon2id, bcrypt), Digital Signatures, and why SHA-256 fails for password storage.',
      href: '/knowledge/encryption',
      icon: <Lock className="w-6 h-6 text-[#B89B62]" />,
      count: '20+ Algorithms',
    },
    {
      title: 'Firewalls & Network Defense Architecture',
      description: 'Packet filtering, Stateful inspection, Proxy gateways, Web Application Firewalls (WAF), Next-Generation Firewalls (NGFW), Host-based, and Cloud FWaaS.',
      href: '/knowledge/firewalls',
      icon: <Network className="w-6 h-6 text-[#66705A] dark:text-[#A5AD8C]" />,
      count: '10 Architectures',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Knowledge Base' }]} />

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Cybersecurity Knowledge Encyclopedia
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Structured reference documentation detailing technical concepts, threat taxonomies, defensive controls, cryptographic algorithms, and identity standards.
        </p>
      </div>

      {/* Core Pillar Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sections.map((sec, idx) => (
          <Link
            key={idx}
            href={sec.href}
            className="group flex flex-col justify-between p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#EAE3D5] dark:bg-[#292722] transition-transform">
                  {sec.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAE3D5] dark:bg-[#292722] text-[#68645D] dark:text-[#B8B1A5]">
                  {sec.count}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors mb-2">
                {sec.title}
              </h3>
              <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] leading-relaxed">
                {sec.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between text-xs font-semibold text-[#66705A] dark:text-[#A5AD8C]">
              <span>Open Encyclopedia Section</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Core Security Concept Articles */}
      <div className="border-t border-[#D8D0C2] dark:border-[#454139] pt-12">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#66705A] dark:text-[#A5AD8C]">
            Core Foundations
          </span>
          <h2 className="text-2xl font-bold text-[#242424] dark:text-[#F1EDE4]">
            Specialized Concept Deep Dives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {knowledgeTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
                    {topic.category}
                  </span>
                  <DifficultyBadge difficulty={topic.difficulty} />
                </div>
                <h3 className="text-base font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#242424] dark:text-[#F1EDE4] font-medium mb-3 leading-relaxed">
                  {topic.definition}
                </p>
                <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed line-clamp-3">
                  {topic.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {topic.relatedTopics.map((rt, idx) => (
                    <Tag key={idx} label={rt} />
                  ))}
                </div>
                <Link
                  href={`/knowledge/${topic.id}`}
                  className="text-xs font-semibold text-[#66705A] dark:text-[#A5AD8C] hover:underline flex items-center gap-1 shrink-0 ml-2"
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
