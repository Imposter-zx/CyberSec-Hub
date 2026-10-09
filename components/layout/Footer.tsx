'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, GitBranch, ArrowUpRight, Terminal, Activity, Wifi, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050705] text-[#91A596] border-t border-[#1B2A1F] text-xs mt-auto font-mono relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="p-2 rounded-xl bg-[#0E1510] border border-[#1B2A1F] group-hover:border-[#00FF66] text-[#00FF66] shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-[#E8F5E9] tracking-wider group-hover:text-[#00FF66] transition-colors">
                  CyberSec Hub
                </span>
                <span className="text-[10px] text-[#00FF66]">
                  &gt; UNDERGROUND SEC LAB
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#91A596] leading-relaxed max-w-sm font-sans">
              An open structured cybersecurity learning and research platform organizing verified resources, threat taxonomies, terminal labs, and certification roadmaps.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#0E1510] border border-[#1B2A1F] text-[11px] text-[#00FF66]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span>STATUS: ALL SUBSYSTEMS NOMINAL</span>
            </div>
          </div>

          {/* Learning Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8F5E9] mb-3 flex items-center gap-1.5">
              <span className="text-[#00FF66]">&gt;</span>
              <span>LEARNING & LABS</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/learn" className="hover:text-[#00FF66] transition-colors">
                  • Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-[#00FF66] transition-colors">
                  • Hands-on Labs & CTFs
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#00FF66] transition-colors">
                  • Security Toolkit (CLI)
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="hover:text-[#00FF66] transition-colors">
                  • Career Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-[#00FF66] transition-colors">
                  • Signal Channels
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8F5E9] mb-3 flex items-center gap-1.5">
              <span className="text-[#00FF66]">&gt;</span>
              <span>KNOWLEDGE_BASE</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/knowledge/hackers" className="hover:text-[#00FF66] transition-colors">
                  • Hacker Archetypes (01-10+)
                </Link>
              </li>
              <li>
                <Link href="/knowledge/threats" className="hover:text-[#00FF66] transition-colors">
                  • Threat Taxonomy & MITRE
                </Link>
              </li>
              <li>
                <Link href="/knowledge/authentication" className="hover:text-[#00FF66] transition-colors">
                  • Authentication & AAA
                </Link>
              </li>
              <li>
                <Link href="/knowledge/encryption" className="hover:text-[#00FF66] transition-colors">
                  • Encryption & Cryptography
                </Link>
              </li>
              <li>
                <Link href="/knowledge/firewalls" className="hover:text-[#00FF66] transition-colors">
                  • Firewalls & Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Credentials & System info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8F5E9] mb-3 flex items-center gap-1.5">
              <span className="text-[#00FF66]">&gt;</span>
              <span>SYSTEM</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/certifications" className="hover:text-[#00FF66] transition-colors">
                  • Security Certifications
                </Link>
              </li>
              <li>
                <Link href="/certifications/compare" className="hover:text-[#00FF66] transition-colors">
                  • Compare Credentials
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00FF66] transition-colors">
                  • Manifesto & Architecture
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Imposter-zx/CyberSec-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF66] transition-colors flex items-center gap-1"
                >
                  <span>• GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00FF66]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Console Line */}
        <div className="pt-6 border-t border-[#1B2A1F] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#91A596]">
          <div className="flex items-center gap-2">
            <span className="text-[#00FF66] font-bold">CYBERSEC_HUB</span>
            <span>// OPEN SOURCE SECURITY KNOWLEDGE MATRIX</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-[#00FF66] bg-[#0E1510] px-2.5 py-0.5 rounded border border-[#1B2A1F]">
              ZERO SPONSORED BIAS
            </span>
            <span>&copy; {new Date().getFullYear()} CyberSec Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
