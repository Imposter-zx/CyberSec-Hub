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
  Sparkles,
  FlaskConical,
  Wrench,
  Video,
  CheckCircle2,
  Server,
  Layers,
  Zap,
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
  const featuredFreeResources = resources
    .filter((r) => r.pricing === 'free' || r.pricing === 'freemium')
    .slice(0, 6);

  const popularRoadmaps = roadmaps.slice(0, 4);
  const featuredCertifications = certifications.slice(0, 4);
  const featuredYouTube = youtubeChannels.slice(0, 4);
  const recentlyVerified = resources.slice(0, 4);

  const categories = [
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Core principles, CIA triad, security hygiene, and foundational computer architecture.',
      href: '/learn?cat=General+Cybersecurity',
      icon: <Shield className="w-5 h-5" />,
      count: 12,
      tags: ['CIA Triad', 'Threat Models', 'Security Controls'],
      difficulty: 'beginner' as const,
    },
    {
      title: 'Networking & Defense',
      description: 'TCP/IP protocols, subnetting, packet analysis, Wireshark, and firewall architectures.',
      href: '/learn?cat=Networking+%26+Defense',
      icon: <Network className="w-5 h-5" />,
      count: 8,
      tags: ['TCP/IP', 'Wireshark', 'Subnetting'],
      difficulty: 'beginner' as const,
    },
    {
      title: 'Linux & Fundamentals',
      description: 'Linux command line, permissions, process administration, hardening, and bash automation.',
      href: '/learn?cat=Linux+%26+Fundamentals',
      icon: <Terminal className="w-5 h-5" />,
      count: 10,
      tags: ['Bash', 'Permissions', 'SysAdmin'],
      difficulty: 'beginner' as const,
    },
    {
      title: 'Python for Cybersecurity',
      description: 'Security automation, exploit prototyping, log parsing, and custom tool development.',
      href: '/tools',
      icon: <Cpu className="w-5 h-5" />,
      count: 6,
      tags: ['Automation', 'Scapy', 'Sockets'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'Web Security',
      description: 'OWASP Top 10, SQLi, XSS, SSRF, CSRF, IDOR, and modern web application testing.',
      href: '/knowledge/threats',
      icon: <Globe className="w-5 h-5" />,
      count: 15,
      tags: ['OWASP Top 10', 'SQLi', 'XSS'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking methodology, enumeration, vulnerability validation, and reporting.',
      href: '/roadmaps/penetration-tester',
      icon: <Lock className="w-5 h-5" />,
      count: 14,
      tags: ['Nmap', 'Metasploit', 'PrivEsc'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'Red Team Operations',
      description: 'Adversary emulation, C2 infrastructure, EDR evasion, and active lateral movement.',
      href: '/roadmaps/red-team',
      icon: <Radio className="w-5 h-5" />,
      count: 9,
      tags: ['C2 Frameworks', 'Evasion', 'AD Pivot'],
      difficulty: 'advanced' as const,
    },
    {
      title: 'Blue Team & Defense',
      description: 'Defensive architecture, continuous telemetry monitoring, log analysis, and threat containment.',
      href: '/roadmaps/blue-team',
      icon: <Shield className="w-5 h-5" />,
      count: 11,
      tags: ['Hardening', 'Threat Hunting', 'Suricata'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'SOC Operations',
      description: 'Security Information and Event Management (SIEM), alert triaging, and EDR response.',
      href: '/learn?cat=SOC+Operations',
      icon: <Eye className="w-5 h-5" />,
      count: 7,
      tags: ['SIEM', 'Splunk', 'Triage'],
      difficulty: 'beginner' as const,
    },
    {
      title: 'DFIR (Forensics & IR)',
      description: 'Digital forensics, memory dump analysis with Volatility, and breach root cause analysis.',
      href: '/roadmaps/dfir',
      icon: <FileSearch className="w-5 h-5" />,
      count: 8,
      tags: ['Memory Analysis', 'Timeline', 'Autopsy'],
      difficulty: 'advanced' as const,
    },
    {
      title: 'Malware Analysis',
      description: 'Static/dynamic triage, sandboxing, behavioral dissection, and YARA signature writing.',
      href: '/knowledge/threats',
      icon: <Binary className="w-5 h-5" />,
      count: 10,
      tags: ['Ghidra', 'Sandboxing', 'YARA'],
      difficulty: 'advanced' as const,
    },
    {
      title: 'Reverse Engineering',
      description: 'Binary disassembly, Ghidra decompilation, x86/x64 assembly, and software debugging.',
      href: '/roadmaps/reverse-engineering',
      icon: <Terminal className="w-5 h-5" />,
      count: 7,
      tags: ['x86/x64', 'Ghidra', 'GDB'],
      difficulty: 'advanced' as const,
    },
    {
      title: 'Cryptography',
      description: 'Symmetric ciphers, public-key algorithms, hashing, password derivation, and key exchange.',
      href: '/knowledge/encryption',
      icon: <Lock className="w-5 h-5" />,
      count: 18,
      tags: ['AES-256', 'RSA', 'Diffie-Hellman'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'Cloud Security',
      description: 'AWS, Azure, and GCP IAM hardening, container security, Kubernetes, and CSPM posture.',
      href: '/roadmaps/cloud-security',
      icon: <Cloud className="w-5 h-5" />,
      count: 9,
      tags: ['AWS IAM', 'K8s', 'CSPM'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'Active Directory Security',
      description: 'Kerberos attacks, BloodHound graph analysis, privilege delegation, and domain defense.',
      href: '/knowledge/active-directory-security',
      icon: <Users className="w-5 h-5" />,
      count: 8,
      tags: ['Kerberoast', 'BloodHound', 'GPO'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'Bug Bounty Hunting',
      description: 'Reconnaissance automation, vulnerability triage, scoped testing, and responsible disclosure.',
      href: '/roadmaps/web-security',
      icon: <Bug className="w-5 h-5" />,
      count: 6,
      tags: ['Recon', 'Subdomain Enum', 'Bounty'],
      difficulty: 'intermediate' as const,
    },
    {
      title: 'CTF (Capture The Flag)',
      description: 'Competitive security challenges, wargames, exploit development, and crypto puzzles.',
      href: '/labs',
      icon: <Flag className="w-5 h-5" />,
      count: 10,
      tags: ['Jeopardy', 'Attack-Defense', 'Pwn'],
      difficulty: 'beginner' as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9F6] dark:bg-[#181C1A] text-[#18221C] dark:text-[#E8F0EA]">
      {/* =========================================================================
          HERO SECTION: Split Layout (Text + Interactive Domain Visualization)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#DDE5DE] dark:border-[#3A4840] bg-gradient-to-b from-[#EEF3EE]/60 via-[#F7F9F6] to-[#F7F9F6] dark:from-[#202722]/50 dark:via-[#181C1A] dark:to-[#181C1A]">
        {/* Subtle dot background grid */}
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Value Prop, Search, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] text-[#3F7D5A] dark:text-[#6AAF8A] text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#3F7D5A] dark:bg-[#6AAF8A] animate-pulse" />
                <span>Centralized Cybersecurity Learning Platform</span>
                <span className="text-[10px] bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 px-2 py-0.5 rounded-full font-mono text-[#3F7D5A] dark:text-[#6AAF8A]">v2.5</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18221C] dark:text-[#E8F0EA] leading-[1.15]">
                Learn Cybersecurity with{' '}
                <span className="text-[#3F7D5A] dark:text-[#6AAF8A] underline decoration-[#E58A4E] decoration-wavy decoration-2">
                  Structure & Depth
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#68736B] dark:text-[#A0AFA5] leading-relaxed max-w-2xl">
                Master cybersecurity from fundamentals to advanced security research. Explore vetted free resources, official certifications, interactive labs, and practical career roadmaps.
              </p>

              {/* Search Bar Component */}
              <div className="pt-2 max-w-xl">
                <SearchBar placeholder="Search topics (e.g. OWASP, OSCP, Wireshark, PortSwigger, SIEM)..." />
              </div>

              {/* Quick Action Badges / CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/learn"
                  className="px-5 py-3 rounded-xl bg-[#3F7D5A] hover:bg-[#2E5E43] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/roadmaps"
                  className="px-5 py-3 rounded-xl bg-[#FFFFFF] dark:bg-[#262E28] hover:bg-[#EEF3EE] dark:hover:bg-[#2D3630] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840] font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#E58A4E]" />
                  <span>Explore Roadmaps</span>
                </Link>
                <Link
                  href="/labs"
                  className="px-5 py-3 rounded-xl bg-[#FFFFFF] dark:bg-[#262E28] hover:bg-[#EEF3EE] dark:hover:bg-[#2D3630] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840] font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2"
                >
                  <FlaskConical className="w-4 h-4 text-[#4C9A91]" />
                  <span>Hands-on Labs</span>
                </Link>
              </div>

              {/* Quick Platform Metrics */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#68736B] dark:text-[#A0AFA5] border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                  <span><strong>100% Verified</strong> Official Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                  <span><strong>8 Complete</strong> Career Paths</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                  <span><strong>Zero Sponsored</strong> Bias</span>
                </div>
              </div>
            </div>

            {/* Right Column: Animated Cybersecurity Domain Topology Map */}
            <div className="lg:col-span-5">
              <div className="relative p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xl overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3F7D5A]/10 dark:bg-[#6AAF8A]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header label */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDE5DE] dark:border-[#3A4840]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3F7D5A] dark:bg-[#6AAF8A]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#18221C] dark:text-[#E8F0EA]">
                      Cybersecurity Domain Map
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EEF3EE] dark:bg-[#202722] text-[#3F7D5A] dark:text-[#6AAF8A] font-semibold">
                    INTERCONNECTED
                  </span>
                </div>

                {/* SVG Visual Network Graph */}
                <div className="relative w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Connecting Lines */}
                    <line x1="200" y1="200" x2="200" y2="70" stroke="#3F7D5A" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                    <line x1="200" y1="200" x2="320" y2="130" stroke="#E58A4E" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                    <line x1="200" y1="200" x2="310" y2="280" stroke="#4C9A91" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                    <line x1="200" y1="200" x2="200" y2="330" stroke="#D7A84B" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                    <line x1="200" y1="200" x2="90" y2="280" stroke="#3F7D5A" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                    <line x1="200" y1="200" x2="80" y2="130" stroke="#E58A4E" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />

                    {/* Outer Orbit Circle */}
                    <circle cx="200" cy="200" r="130" stroke="#DDE5DE" strokeWidth="1.5" className="dark:stroke-[#3A4840]" />
                    <circle cx="200" cy="200" r="80" stroke="#DDE5DE" strokeWidth="1" strokeDasharray="6 6" className="dark:stroke-[#3A4840]" />

                    {/* Central Shield Hub */}
                    <g className="cursor-pointer">
                      <circle cx="200" cy="200" r="38" fill="#3F7D5A" className="shadow-lg transition-transform hover:scale-105" />
                      <circle cx="200" cy="200" r="44" stroke="#3F7D5A" strokeWidth="2" className="opacity-30 node-pulse" />
                      <Shield className="w-8 h-8 text-white -translate-x-4 -translate-y-4" />
                    </g>

                    {/* Node 1: Web Security (Top) */}
                    <g className="cursor-pointer">
                      <circle cx="200" cy="70" r="24" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2.5" className="dark:fill-[#262E28]" />
                      <text x="200" y="74" textAnchor="middle" fill="#18221C" className="text-[10px] font-bold dark:fill-[#E8F0EA]">WEB</text>
                    </g>

                    {/* Node 2: Network Defense (Top Right) */}
                    <g className="cursor-pointer">
                      <circle cx="320" cy="130" r="24" fill="#FFFFFF" stroke="#E58A4E" strokeWidth="2.5" className="dark:fill-[#262E28]" />
                      <text x="320" y="134" textAnchor="middle" fill="#18221C" className="text-[10px] font-bold dark:fill-[#E8F0EA]">NET</text>
                    </g>

                    {/* Node 3: Cloud Sec (Bottom Right) */}
                    <g className="cursor-pointer">
                      <circle cx="310" cy="280" r="24" fill="#FFFFFF" stroke="#4C9A91" strokeWidth="2.5" className="dark:fill-[#262E28]" />
                      <text x="310" y="284" textAnchor="middle" fill="#18221C" className="text-[10px] font-bold dark:fill-[#E8F0EA]">CLOUD</text>
                    </g>

                    {/* Node 4: DFIR (Bottom) */}
                    <g className="cursor-pointer">
                      <circle cx="200" cy="330" r="24" fill="#FFFFFF" stroke="#D7A84B" strokeWidth="2.5" className="dark:fill-[#262E28]" />
                      <text x="200" y="334" textAnchor="middle" fill="#18221C" className="text-[10px] font-bold dark:fill-[#E8F0EA]">DFIR</text>
                    </g>

                    {/* Node 5: Red Team (Bottom Left) */}
                    <g className="cursor-pointer">
                      <circle cx="90" cy="280" r="24" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2.5" className="dark:fill-[#262E28]" />
                      <text x="90" y="284" textAnchor="middle" fill="#18221C" className="text-[10px] font-bold dark:fill-[#E8F0EA]">RED</text>
                    </g>

                    {/* Node 6: Binary / Reversing (Top Left) */}
                    <g className="cursor-pointer">
                      <circle cx="80" cy="130" r="24" fill="#FFFFFF" stroke="#E58A4E" strokeWidth="2.5" className="dark:fill-[#262E28]" />
                      <text x="80" y="134" textAnchor="middle" fill="#18221C" className="text-[10px] font-bold dark:fill-[#E8F0EA]">RE</text>
                    </g>
                  </svg>
                </div>

                {/* Subtext info */}
                <div className="pt-3 text-center">
                  <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
                    Comprehensive coverage across all 6 core technical security disciplines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUICK ACCESS SECTION: 6 Large Visual Hub Cards
          ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Card 1: Learn */}
          <Link
            href="/learn"
            className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 text-[#3F7D5A] dark:text-[#6AAF8A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
              Resources
            </h3>
            <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Courses & Docs</span>
          </Link>

          {/* Card 2: Labs */}
          <Link
            href="/labs"
            className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#4C9A91] dark:hover:border-[#7BB8B2] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EBF5F4] dark:bg-[#4C9A91]/20 text-[#4C9A91] dark:text-[#7BB8B2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
              Labs & CTFs
            </h3>
            <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Hands-on Arenas</span>
          </Link>

          {/* Card 3: Roadmaps */}
          <Link
            href="/roadmaps"
            className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#E58A4E] dark:hover:border-[#EDA574] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FDF2EA] dark:bg-[#E58A4E]/20 text-[#E58A4E] dark:text-[#EDA574] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
              Roadmaps
            </h3>
            <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">8 Step Guides</span>
          </Link>

          {/* Card 4: Certifications */}
          <Link
            href="/certifications"
            className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#D7A84B] dark:hover:border-[#E4BF74] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FDF6E7] dark:bg-[#D7A84B]/20 text-[#D7A84B] dark:text-[#E4BF74] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
              Certifications
            </h3>
            <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">CompTIA, OffSec</span>
          </Link>

          {/* Card 5: Tools */}
          <Link
            href="/tools"
            className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 text-[#3F7D5A] dark:text-[#6AAF8A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
              Security Tools
            </h3>
            <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Nmap, Burp, Ghidra</span>
          </Link>

          {/* Card 6: YouTube */}
          <Link
            href="/youtube"
            className="group p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#E58A4E] dark:hover:border-[#EDA574] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FDF2EA] dark:bg-[#E58A4E]/20 text-[#E58A4E] dark:text-[#EDA574] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
              YouTube
            </h3>
            <span className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Curated Channels</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          17 KNOWLEDGE CATEGORIES TAXONOMY
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
              <Layers className="w-4 h-4" />
              <span>Structured Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18221C] dark:text-[#E8F0EA]">
              Explore Cybersecurity Domains
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#68736B] dark:text-[#A0AFA5] max-w-md">
            Click into any domain to view guided concepts, definitions, tools, labs, and certification roadmaps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4.5">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              title={cat.title}
              description={cat.description}
              href={cat.href}
              icon={cat.icon}
              count={cat.count}
              tags={cat.tags}
              difficulty={cat.difficulty}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          FEATURED FREE RESOURCES SECTION
          ========================================================================= */}
      <section className="py-16 bg-[#EEF3EE]/50 dark:bg-[#202722]/50 border-y border-[#DDE5DE] dark:border-[#3A4840] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Cost Learning</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18221C] dark:text-[#E8F0EA]">
                Featured Free & Freemium Resources
              </h2>
            </div>
            <Link
              href="/learn?pricing=free"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline"
            >
              <span>View all free resources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFreeResources.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR LEARNING PATHS (ROADMAPS)
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E58A4E] dark:text-[#EDA574] mb-1">
              <Compass className="w-4 h-4" />
              <span>Step-by-Step Trajectories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18221C] dark:text-[#E8F0EA]">
              Structured Career Roadmaps
            </h2>
          </div>
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline"
          >
            <span>Explore all 8 roadmaps</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularRoadmaps.map((rmap) => (
            <div
              key={rmap.id}
              className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex flex-col justify-between hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
                    {rmap.category}
                  </span>
                  <span className="text-xs font-semibold text-[#3F7D5A] dark:text-[#6AAF8A] bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 px-2.5 py-0.5 rounded-full">
                    {rmap.steps.length} Learning Phases
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">
                  {rmap.title}
                </h3>
                <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-4 leading-relaxed line-clamp-2">
                  {rmap.description}
                </p>
                <div className="text-[11px] font-mono text-[#68736B] dark:text-[#A0AFA5] mb-5 bg-[#EEF3EE]/60 dark:bg-[#202722]/60 p-3 rounded-xl border border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
                  Estimated sequence: {rmap.estimatedSequence}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between">
                <span className="text-xs text-[#68736B] dark:text-[#A0AFA5]">
                  Role: <strong className="text-[#18221C] dark:text-[#E8F0EA]">{rmap.targetRole}</strong>
                </span>
                <Link
                  href={`/roadmaps/${rmap.id}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#3F7D5A] text-white hover:bg-[#2E5E43] dark:bg-[#6AAF8A] dark:text-[#181C1A] dark:hover:bg-[#589E79] flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Start Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CYBERSECURITY CERTIFICATIONS SHOWCASE
          ========================================================================= */}
      <section className="py-16 bg-[#EEF3EE]/50 dark:bg-[#202722]/50 border-y border-[#DDE5DE] dark:border-[#3A4840] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D7A84B] dark:text-[#E4BF74] mb-1">
                <Award className="w-4 h-4" />
                <span>Industry Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18221C] dark:text-[#E8F0EA]">
                Top Cybersecurity Certifications
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/certifications/compare"
                className="text-xs font-bold text-[#68736B] dark:text-[#A0AFA5] hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A]"
              >
                Side-by-Side Comparison
              </Link>
              <Link
                href="/certifications"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline"
              >
                <span>View all certifications</span>
                <ArrowRight className="w-4 h-4" />
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

      {/* =========================================================================
          RECOMMENDED YOUTUBE CHANNELS
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E58A4E] dark:text-[#EDA574] mb-1">
              <Video className="w-4 h-4" />
              <span>Video Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18221C] dark:text-[#E8F0EA]">
              Curated YouTube Security Creators
            </h2>
          </div>
          <Link
            href="/youtube"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline"
          >
            <span>View all channels</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredYouTube.map((ch) => (
            <YouTubeCard key={ch.id} channel={ch} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          RECENTLY VERIFIED RESOURCES (QUALITY ASSURANCE)
          ========================================================================= */}
      <section className="py-16 bg-[#EEF3EE]/50 dark:bg-[#202722]/50 border-t border-[#DDE5DE] dark:border-[#3A4840] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Audited External Content</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18221C] dark:text-[#E8F0EA]">
                Recently Audited References
              </h2>
            </div>
            <span className="text-xs text-[#68645D] dark:text-[#A0AFA5]">
              Every single URL is verified for live accessibility and official author attribution.
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
