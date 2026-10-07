import React from 'react';
import Link from 'next/link';
import {
  Shield,
  Compass,
  Award,
  BookOpen,
  ArrowRight,
  Terminal,
  Network,
  Lock,
  Cpu,
  Globe,
  Radio,
  Eye,
  FileSearch,
  Binary,
  Cloud,
  Users,
  Bug,
  Flag,
  CheckCircle2,
  ExternalLink,
  PlaySquare,
  Sparkles,
} from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { YouTubeCard } from '@/components/ui/YouTubeCard';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { resources } from '@/data/resources';
import { certifications } from '@/data/certifications';
import { youtubeChannels } from '@/data/youtube';
import { roadmaps } from '@/data/roadmaps';

export default function HomePage() {
  // Curated datasets for homepage showcases
  const featuredFreeResources = resources
    .filter((r) => r.pricing === 'free' || r.pricing === 'freemium')
    .slice(0, 6);

  const popularRoadmaps = roadmaps.slice(0, 4);
  const featuredCertifications = certifications.slice(0, 4);
  const featuredYouTube = youtubeChannels.slice(0, 4);
  const recentlyVerified = resources.slice(0, 4);

  const categories = [
    { title: 'Cybersecurity Fundamentals', description: 'Core principles, CIA triad, security hygiene, and foundational computer architecture.', href: '/learn?cat=General+Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 12 },
    { title: 'Networking', description: 'TCP/IP protocols, subnetting, packet analysis, Wireshark, and routing security.', href: '/learn?cat=Networking+%26+Defense', icon: <Network className="w-5 h-5" />, count: 8 },
    { title: 'Linux', description: 'Linux command line, permissions, process administration, hardening, and bash automation.', href: '/learn?cat=Linux+%26+Fundamentals', icon: <Terminal className="w-5 h-5" />, count: 10 },
    { title: 'Python for Cybersecurity', description: 'Security automation, exploit prototyping, log parsing, and custom tool development.', href: '/tools', icon: <Cpu className="w-5 h-5" />, count: 6 },
    { title: 'Web Security', description: 'OWASP Top 10, SQLi, XSS, SSRF, CSRF, IDOR, and modern web application testing.', href: '/knowledge/threats', icon: <Globe className="w-5 h-5" />, count: 15 },
    { title: 'Penetration Testing', description: 'Ethical hacking methodology, enumeration, vulnerability validation, and reporting.', href: '/roadmaps/penetration-tester', icon: <Lock className="w-5 h-5" />, count: 14 },
    { title: 'Red Team', description: 'Adversary emulation, C2 infrastructure, EDR evasion, and active lateral movement.', href: '/roadmaps/red-team', icon: <Radio className="w-5 h-5" />, count: 9 },
    { title: 'Blue Team', description: 'Defensive architecture, continuous telemetry monitoring, log analysis, and threat containment.', href: '/roadmaps/blue-team', icon: <Shield className="w-5 h-5" />, count: 11 },
    { title: 'SOC Operations', description: 'Security Information and Event Management (SIEM), alert triaging, and EDR response.', href: '/learn?cat=SOC+Operations', icon: <Eye className="w-5 h-5" />, count: 7 },
    { title: 'DFIR', description: 'Digital forensics, memory dump analysis with Volatility, and breach root cause analysis.', href: '/roadmaps/dfir', icon: <FileSearch className="w-5 h-5" />, count: 8 },
    { title: 'Malware Analysis', description: 'Static/dynamic triage, sandboxing, behavioral dissection, and YARA signature writing.', href: '/knowledge/threats', icon: <Binary className="w-5 h-5" />, count: 10 },
    { title: 'Reverse Engineering', description: 'Binary disassembly, Ghidra decompilation, x86/x64 assembly, and software debugging.', href: '/roadmaps/reverse-engineering', icon: <Terminal className="w-5 h-5" />, count: 7 },
    { title: 'Cryptography', description: 'Symmetric ciphers, public-key algorithms, hashing, password derivation, and key exchange.', href: '/knowledge/encryption', icon: <Lock className="w-5 h-5" />, count: 18 },
    { title: 'Cloud Security', description: 'AWS, Azure, and GCP IAM hardening, container security, Kubernetes, and CSPM posture.', href: '/roadmaps/cloud-security', icon: <Cloud className="w-5 h-5" />, count: 9 },
    { title: 'Active Directory', description: 'Kerberos attacks, BloodHound graph analysis, privilege delegation, and domain defense.', href: '/knowledge/active-directory-security', icon: <Users className="w-5 h-5" />, count: 8 },
    { title: 'Bug Bounty', description: 'Reconnaissance automation, vulnerability triage, scoped testing, and responsible disclosure.', href: '/roadmaps/web-security', icon: <Bug className="w-5 h-5" />, count: 6 },
    { title: 'CTF (Capture The Flag)', description: 'Competitive security challenges, wargames, exploit development, and crypto puzzles.', href: '/labs', icon: <Flag className="w-5 h-5" />, count: 10 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-slate-100/70 via-white to-slate-50 dark:from-slate-950 dark:via-[#0d1527] dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6">
              <Shield className="w-3.5 h-3.5" />
              <span>Structured Cybersecurity Knowledge & Resource Hub</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
              Cybersecurity Learning Hub
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Learn cybersecurity from fundamentals to advanced security research. Structured roadmaps, free learning resources, verified technical concepts, and industry certifications.
            </p>

            {/* Global Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 shadow-lg rounded-xl">
              <SearchBar placeholder="Search cybersecurity topics, certifications, labs, courses, or channels..." />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
              <Link
                href="/learn"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roadmaps"
                className="px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Roadmaps</span>
              </Link>
              <Link
                href="/certifications"
                className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-colors flex items-center gap-1.5"
              >
                <Award className="w-4 h-4" />
                <span>Explore Certifications</span>
              </Link>
              <Link
                href="/learn?pricing=free"
                className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Free Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 17 Major Knowledge Categories Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Structured Taxonomy
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Explore Knowledge Categories
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Organized learning domains spanning offensive, defensive, operational, and research specializations.
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
            />
          ))}
        </div>
      </section>

      {/* Featured Free Resources Section */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                100% Free & Freemium Access
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Featured Free Resources
              </h2>
            </div>
            <Link
              href="/learn?pricing=free"
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View all free resources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFreeResources.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Learning Paths Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Interactive Guidance
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Popular Learning Paths
            </h2>
          </div>
          <Link
            href="/roadmaps"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Explore all 8 roadmaps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularRoadmaps.map((rmap) => (
            <div
              key={rmap.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {rmap.category}
                  </span>
                  <span className="text-xs text-slate-400">{rmap.steps.length} Learning Phases</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {rmap.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {rmap.description}
                </p>
                <div className="text-[11px] font-mono text-slate-500 mb-4 bg-slate-50 dark:bg-slate-800/50 p-2 rounded">
                  {rmap.estimatedSequence}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Target: {rmap.targetRole}</span>
                <Link
                  href={`/roadmaps/${rmap.id}`}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Start Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cybersecurity Certifications Showcase */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Industry Credentials
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Cybersecurity Certifications
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/certifications/compare"
                className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600"
              >
                Compare Certifications
              </Link>
              <Link
                href="/certifications"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>View all certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCertifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended YouTube Channels */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Video Education
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Recommended YouTube Channels
            </h2>
          </div>
          <Link
            href="/youtube"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View all channels</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredYouTube.map((ch) => (
            <YouTubeCard key={ch.id} channel={ch} />
          ))}
        </div>
      </section>

      {/* Recently Verified Resources Section */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Quality Assurance
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Recently Verified Resources
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              All external references checked for active availability and official links.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyVerified.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
