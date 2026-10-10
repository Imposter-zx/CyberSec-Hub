'use client';

import React from 'react';
import Link from 'next/link';
import {
  Shield,
  Compass,
  Award,
  ArrowRight,
  Terminal,
  Network,
  Lock,
  Cpu,
  Globe,
  Radio,
  FileSearch,
  Binary,
  Cloud,
  Users,
  Bug,
  Flag,
  FlaskConical,
  Wrench,
  Layers,
  Activity,
  AlertTriangle,
} from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { YouTubeCard } from '@/components/ui/YouTubeCard';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ThreatCard } from '@/components/ui/ThreatCard';
import { ToolCard } from '@/components/ui/ToolCard';
import { LabTerminalCard } from '@/components/ui/LabTerminalCard';
import { HeroTerminalVisual } from '@/components/visuals/HeroTerminalVisual';
import { MatrixCodeBackground } from '@/components/visuals/MatrixCodeBackground';
import { resources } from '@/data/resources';
import { certifications } from '@/data/certifications';
import { youtubeChannels } from '@/data/youtube';
import { roadmaps } from '@/data/roadmaps';
import { threats } from '@/data/threats';
import { tools } from '@/data/tools';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const { t, isRTL } = useI18n();

  const labResources = resources.filter(
    (r) =>
      r.resourceType === 'lab' ||
      r.resourceType === 'platform' ||
      r.resourceType === 'ctf' ||
      r.resourceType === 'academy'
  );

  const featuredLabs = labResources.slice(0, 4);
  const featuredTools = tools.slice(0, 4);
  const featuredThreats = threats.slice(0, 4);
  const featuredCertifications = certifications.slice(0, 4);
  const featuredYouTube = youtubeChannels.slice(0, 4);
  const popularRoadmaps = roadmaps.slice(0, 4);

  const categories = [
    {
      title: 'Network Security',
      description: 'TCP/IP protocols, subnetting, Wireshark, stateful firewalls, and IDS/IPS architectures.',
      href: '/learn?cat=Networking+%26+Defense',
      icon: <Network className="w-5 h-5" />,
      count: 8,
      tags: ['TCP/IP', 'Wireshark', 'Subnetting', 'Firewalls'],
    },
    {
      title: 'Web Application Security',
      description: 'OWASP Top 10, SQLi, XSS, CSRF, SSRF, authentication flaws, and API vulnerabilities.',
      href: '/learn?cat=Web+Application+Security',
      icon: <Globe className="w-5 h-5" />,
      count: 14,
      tags: ['OWASP', 'SQLi', 'XSS', 'Burp Suite'],
    },
    {
      title: 'Ethical Hacking & Pentesting',
      description: 'Offensive methodologies, port scanning, exploitation frameworks, and privileged escalation.',
      href: '/learn?cat=Ethical+Hacking+%26+Pentesting',
      icon: <Terminal className="w-5 h-5" />,
      count: 12,
      tags: ['Nmap', 'Metasploit', 'Recon', 'Exploits'],
    },
    {
      title: 'SOC & Blue Team Defense',
      description: 'SIEM log correlation, threat hunting, detection engineering, and incident response.',
      href: '/learn?cat=SOC+%26+Defensive+Operations',
      icon: <Shield className="w-5 h-5" />,
      count: 10,
      tags: ['SIEM', 'EDR', 'Sigma', 'Zeek'],
    },
    {
      title: 'Digital Forensics & IR (DFIR)',
      description: 'Memory volatile acquisition, disk bit-stream imaging, super-timeline parsing, and root-cause analysis.',
      href: '/learn?cat=Digital+Forensics+%26+Incident+Response',
      icon: <FileSearch className="w-5 h-5" />,
      count: 8,
      tags: ['Volatility', 'Autopsy', 'Plaso', 'Timeline'],
    },
    {
      title: 'Malware Analysis & Reversing',
      description: 'Static/dynamic triage, disassembly, x64 assembly, Ghidra, and behavioral sandboxing.',
      href: '/learn?cat=Malware+Analysis+%26+Reverse+Engineering',
      icon: <Binary className="w-5 h-5" />,
      count: 8,
      tags: ['Ghidra', 'x64dbg', 'YARA', 'PE Header'],
    },
    {
      title: 'Cloud Security',
      description: 'AWS/Azure/GCP IAM policies, S3 misconfigurations, container isolation, and CSPM.',
      href: '/learn?cat=Cloud+Security',
      icon: <Cloud className="w-5 h-5" />,
      count: 7,
      tags: ['AWS IAM', 'Kubernetes', 'CSPM', 'Terraform'],
    },
    {
      title: 'Active Directory Security',
      description: 'Kerberoasting, BloodHound graph queries, AS-REP roasting, DCSync, and tiered architecture.',
      href: '/knowledge/active-directory-security',
      icon: <Users className="w-5 h-5" />,
      count: 8,
      tags: ['Kerberos', 'BloodHound', 'DCSync', 'GPO'],
    },
    {
      title: 'Bug Bounty Hunting',
      description: 'Asset discovery, scoped vulnerability triage, automation pipelines, and bounty disclosures.',
      href: '/roadmaps/web-security',
      icon: <Bug className="w-5 h-5" />,
      count: 6,
      tags: ['Subdomain Enum', 'HTTP Request Smuggling', 'IDOR'],
    },
    {
      title: 'Capture The Flag (CTF)',
      description: 'Hands-on wargames, exploit development, cryptographic puzzles, and jeopardy arenas.',
      href: '/labs',
      icon: <Flag className="w-5 h-5" />,
      count: 10,
      tags: ['OverTheWire', 'picoCTF', 'HTB', 'RootMe'],
    },
    {
      title: 'Cryptography & Ciphers',
      description: 'AES-256-GCM, RSA, ECC, Argon2id, digital certificates (X.509), and PKI architectures.',
      href: '/knowledge/encryption',
      icon: <Lock className="w-5 h-5" />,
      count: 9,
      tags: ['AES', 'RSA', 'Diffie-Hellman', 'Argon2id'],
    },
    {
      title: 'DevSecOps & Supply Chain',
      description: 'CI/CD automated secret scanning, SAST, DAST, SCA, dependency audits, and container hardening.',
      href: '/knowledge/devsecops',
      icon: <Cpu className="w-5 h-5" />,
      count: 6,
      tags: ['SAST', 'DAST', 'Trivy', 'SBOM'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9F6] dark:bg-[#050705] text-[#18221C] dark:text-[#E8F5E9] font-mono relative overflow-hidden transition-colors duration-150">
      {/* Subtle Matrix Code Background */}
      <MatrixCodeBackground />

      {/* =========================================================================
          1. HERO SECTION: Terminal Cybersecurity Laboratory
          ========================================================================= */}
      <section className="relative pt-12 pb-20 border-b border-[#DDE5DE] dark:border-[#1B2A1F] bg-gradient-to-b from-[#EEF3EE]/80 dark:from-[#0A0F0B]/80 via-[#F7F9F6] dark:via-[#050705] to-[#F7F9F6] dark:to-[#050705]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Terminal micro label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#267747] dark:text-[#00FF66] text-xs font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#267747] dark:bg-[#00FF66] animate-pulse" />
                <span className="font-bold">{t('hero_badge')}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-[#18221C] dark:text-[#E8F5E9] uppercase leading-[1.1]">
                  {t('hero_title')} <br />
                  <span className="text-[#267747] dark:text-[#00FF66] text-glow-green">
                    {t('hero_title_highlight')}
                  </span>
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#267747] dark:text-[#00FF66] font-mono tracking-widest uppercase">
                  // {t('site_tagline')}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5F6B62] dark:text-[#91A596] leading-relaxed max-w-2xl font-sans">
                {t('hero_subtitle')}
              </p>

              {/* Search Bar Component */}
              <div className="pt-2 max-w-xl">
                <SearchBar placeholder={t('search_placeholder')} />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/learn"
                  className="px-6 py-3 rounded-xl bg-[#267747] hover:bg-[#1E6038] dark:bg-[#00FF66] dark:hover:bg-[#00CC52] text-white dark:text-[#050705] font-black text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(38,119,71,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all flex items-center gap-2 group font-mono uppercase tracking-wider"
                >
                  <span>{t('hero_btn_explore')}</span>
                  <ArrowRight className={cn('w-4 h-4 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
                </Link>

                <Link
                  href="/labs"
                  className="px-6 py-3 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] hover:bg-[#EEF3EE] dark:hover:bg-[#121B14] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 font-mono uppercase tracking-wider shadow-xs"
                >
                  <span>{t('hero_btn_labs')}</span>
                  <FlaskConical className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick status trust notes */}
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#5F6B62] dark:text-[#91A596] pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66]" />
                  <span>100% Free &amp; Open Access</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66]" />
                  <span>Zero Sponsored Bias</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66]" />
                  <span>Interactive Threat Models</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Terminal Visual */}
            <div className="lg:col-span-5">
              <HeroTerminalVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SYSTEM STATUS SECTION: Real Project Data Metrics
          ========================================================================= */}
      <section className="py-12 border-b border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE]/80 dark:bg-[#0A0F0B]/90 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
            <span className="text-xs font-bold text-[#267747] dark:text-[#00FF66] uppercase tracking-wider">
              // {t('system_status_title')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* Status 1: Network */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs">
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block mb-1 uppercase tracking-wider">{t('network_status')}</span>
              <div className="text-xs font-bold text-[#267747] dark:text-[#00FF66] flex items-center justify-between">
                <span>[██████████]</span>
              </div>
              <span className="text-[10px] text-[#267747] dark:text-[#00FF66] font-bold block mt-1">ONLINE</span>
            </div>

            {/* Status 2: Firewall */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs">
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block mb-1 uppercase tracking-wider">{t('firewall_status')}</span>
              <div className="text-xs font-bold text-[#267747] dark:text-[#00FF66] flex items-center justify-between">
                <span>[██████████]</span>
              </div>
              <span className="text-[10px] text-[#267747] dark:text-[#00FF66] font-bold block mt-1">ACTIVE</span>
            </div>

            {/* Status 3: Threat Monitor */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs">
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block mb-1 uppercase tracking-wider">{t('threat_monitor')}</span>
              <div className="text-xs font-bold text-[#C62828] dark:text-[#FF3B30] flex items-center justify-between">
                <span>[███████░░░]</span>
              </div>
              <span className="text-[10px] text-[#C62828] dark:text-[#FF3B30] font-bold block mt-1">
                {threats.length} THREATS
              </span>
            </div>

            {/* Status 4: Labs Count */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs">
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block mb-1 uppercase tracking-wider">{t('nav_labs')}</span>
              <div className="text-lg font-black text-[#267747] dark:text-[#00FF66]">{labResources.length}</div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">{t('status_available')}</span>
            </div>

            {/* Status 5: Tools Count */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs">
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block mb-1 uppercase tracking-wider">{t('nav_tools')}</span>
              <div className="text-lg font-black text-[#267747] dark:text-[#00FF66]">{tools.length}</div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">INDEXED</span>
            </div>

            {/* Status 6: Certifications */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs">
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block mb-1 uppercase tracking-wider">{t('nav_certifications')}</span>
              <div className="text-lg font-black text-[#D97745] dark:text-[#D9A441]">{certifications.length}</div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">TRACKED</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CYBERSECURITY DOMAINS TAXONOMY
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1">
              <Layers className="w-4 h-4" />
              <span>// {t('domain_title')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
              {t('domain_title')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6B62] dark:text-[#91A596] max-w-md font-sans">
            {t('domain_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              title={cat.title}
              description={cat.description}
              href={cat.href}
              icon={cat.icon}
              count={cat.count}
              tags={cat.tags}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. VISUAL HACKER TYPES INFOGRAPHIC PREVIEW
          ========================================================================= */}
      <section className="py-16 border-y border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE]/80 dark:bg-[#0A0F0B]/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1">
                <Users className="w-4 h-4" />
                <span>// {t('archetypes_title')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
                {t('archetypes_title')}
              </h2>
            </div>
            <Link
              href="/knowledge/hackers"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
            >
              <span>{t('archetypes_view_all')}</span>
              <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { num: '01', name: 'White Hat', role: 'AUTHORIZED', color: '#267747', href: '/knowledge/hackers' },
              { num: '02', name: 'Black Hat', role: 'MALICIOUS', color: '#C62828', href: '/knowledge/hackers' },
              { num: '03', name: 'Gray Hat', role: 'UNSANCTIONED', color: '#D97745', href: '/knowledge/hackers' },
              { num: '04', name: 'Red Hat', role: 'COUNTER-OPS', color: '#C62828', href: '/knowledge/hackers' },
              { num: '05', name: 'Blue Hat', role: 'AUDITOR', color: '#00796B', href: '/knowledge/hackers' },
              { num: '06', name: 'Green Hat', role: 'APPRENTICE', color: '#267747', href: '/knowledge/hackers' },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] transition-all text-center flex flex-col items-center gap-2 shadow-xs"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black font-mono border"
                  style={{ backgroundColor: `${item.color}15`, borderColor: `${item.color}40`, color: item.color }}
                >
                  {item.num}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9] block group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[9px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider mt-0.5">
                    {item.role}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. THREAT INTELLIGENCE CONSOLE
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C62828] dark:text-[#FF3B30] mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>// {t('threats_title')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
              {t('threats_title')}
            </h2>
          </div>
          <Link
            href="/knowledge/threats"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
          >
            <span>{t('threats_view_all')}</span>
            <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredThreats.map((threat) => (
            <ThreatCard key={threat.id} threat={threat} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. ACCESS TERMINALS: Popular Labs
          ========================================================================= */}
      <section className="py-16 border-y border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE]/80 dark:bg-[#0A0F0B]/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1">
                <FlaskConical className="w-4 h-4" />
                <span>// {t('labs_title')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
                {t('labs_title')}
              </h2>
            </div>
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
            >
              <span>{t('labs_view_all')}</span>
              <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredLabs.map((lab) => (
              <LabTerminalCard key={lab.id} resource={lab} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SECURITY TOOLKIT: Essential CLI Tools
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1">
              <Wrench className="w-4 h-4" />
              <span>// {t('toolkit_title')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
              {t('toolkit_title')}
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
          >
            <span>{t('toolkit_view_all')}</span>
            <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. CERTIFICATIONS: Security Credentials
          ========================================================================= */}
      <section className="py-16 border-y border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE]/80 dark:bg-[#0A0F0B]/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D97745] dark:text-[#D9A441] mb-1">
                <Award className="w-4 h-4" />
                <span>// {t('certs_title')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
                {t('certs_title')}
              </h2>
            </div>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
            >
              <span>{t('certs_view_all')}</span>
              <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCertifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. SIGNAL CHANNELS: YouTube Directory
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1">
              <Radio className="w-4 h-4" />
              <span>// {t('channels_title')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
              {t('channels_title')}
            </h2>
          </div>
          <Link
            href="/youtube"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
          >
            <span>[ VIEW ALL {youtubeChannels.length} CHANNELS ]</span>
            <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredYouTube.map((channel) => (
            <YouTubeCard key={channel.id} channel={channel} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          10. ROADMAPS: Career Pathways
          ========================================================================= */}
      <section className="py-16 border-t border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#EEF3EE]/90 dark:bg-[#0A0F0B]/90 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1">
                <Compass className="w-4 h-4" />
                <span>// {t('roadmaps_title')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider">
                {t('roadmaps_title')}
              </h2>
            </div>
            <Link
              href="/roadmaps"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:text-[#1E6038] dark:hover:text-[#5CFF9B] group shrink-0 font-mono"
            >
              <span>{t('roadmaps_view_all')}</span>
              <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularRoadmaps.map((rm) => (
              <Link
                key={rm.id}
                href={`/roadmaps/${rm.id}`}
                className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_20px_rgba(38,119,71,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#5F6B62] dark:text-[#91A596] mb-2 pb-2 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
                    <span>{rm.category.toUpperCase()}</span>
                    <span className="text-[#267747] dark:text-[#00FF66] font-bold">[{rm.steps.length} STAGES]</span>
                  </div>
                  <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors mb-2">
                    {rm.title}
                  </h3>
                  <p className="text-xs text-[#5F6B62] dark:text-[#91A596] line-clamp-2 leading-relaxed mb-4 font-sans">
                    {rm.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between text-xs font-bold text-[#267747] dark:text-[#00FF66]">
                  <span>{isRTL ? '< عرض المسار' : '> VIEW ROADMAP'}</span>
                  <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1')} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
