import React from 'react';
import Link from 'next/link';
import { Shield, GitBranch, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-600 text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                CyberSec Hub
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An open, centralized cybersecurity learning and knowledge platform designed to organize free education, structured roadmaps, threat intelligence, and industry certifications.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              "Learn. Practice. Secure."
            </div>
          </div>

          {/* Learning Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Learning & Labs
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="hover:text-white transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-white transition-colors">
                  Hands-on Labs & CTFs
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Cybersecurity Tools
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="hover:text-white transition-colors">
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-white transition-colors">
                  Recommended YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Knowledge Base
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/knowledge/hackers" className="hover:text-white transition-colors">
                  Types of Hackers & Roles
                </Link>
              </li>
              <li>
                <Link href="/knowledge/threats" className="hover:text-white transition-colors">
                  Security Threats & MITRE
                </Link>
              </li>
              <li>
                <Link href="/knowledge/authentication" className="hover:text-white transition-colors">
                  Authentication & AAA
                </Link>
              </li>
              <li>
                <Link href="/knowledge/encryption" className="hover:text-white transition-colors">
                  Encryption & Cryptography
                </Link>
              </li>
              <li>
                <Link href="/knowledge/firewalls" className="hover:text-white transition-colors">
                  Firewalls & Network Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Certifications & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  Certification Explorer
                </Link>
              </li>
              <li>
                <Link href="/certifications/compare" className="hover:text-white transition-colors">
                  Compare Certifications
                </Link>
              </li>
              <li>
                <Link href="/certifications/offsec" className="hover:text-white transition-colors">
                  OffSec Certifications Hub
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="text-center md:text-left leading-relaxed">
            CyberSec Hub is an educational project. External resources belong to their respective owners.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-slate-300">
              Privacy & Disclaimer
            </Link>
            <span>•</span>
            <span>Production Ready</span>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} CyberSec Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
