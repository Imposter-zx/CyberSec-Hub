import React from 'react';
import Link from 'next/link';
import { Shield, GitBranch, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1F1E1B] text-[#B8B1A5] border-t border-[#454139] text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#66705A] dark:bg-[#A5AD8C] text-[#FFFDF8] dark:text-[#1F1E1B]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-[#F1EDE4] tracking-tight">
                CyberSec Hub
              </span>
            </Link>
            <p className="text-xs text-[#B8B1A5] leading-relaxed max-w-sm font-normal">
              An open, structured cybersecurity knowledge journal and technical repository organizing verified learning resources, threat taxonomies, and clear career roadmaps.
            </p>
            <div className="text-[11px] text-[#A5AD8C] font-mono tracking-wider">
              "Learn. Practice. Secure."
            </div>
          </div>

          {/* Learning Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F1EDE4] mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56F4A]" />
              <span>Learning & Labs</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/learn" className="hover:text-[#A5AD8C] transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-[#A5AD8C] transition-colors">
                  Hands-on Labs & CTFs
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#A5AD8C] transition-colors">
                  Cybersecurity Tools
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="hover:text-[#A5AD8C] transition-colors">
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-[#A5AD8C] transition-colors">
                  Recommended YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F1EDE4] mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66705A]" />
              <span>Knowledge Base</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/knowledge/hackers" className="hover:text-[#A5AD8C] transition-colors">
                  Types of Hackers & Roles
                </Link>
              </li>
              <li>
                <Link href="/knowledge/threats" className="hover:text-[#A5AD8C] transition-colors">
                  Security Threats & MITRE
                </Link>
              </li>
              <li>
                <Link href="/knowledge/authentication" className="hover:text-[#A5AD8C] transition-colors">
                  Authentication & AAA
                </Link>
              </li>
              <li>
                <Link href="/knowledge/encryption" className="hover:text-[#A5AD8C] transition-colors">
                  Encryption & Cryptography
                </Link>
              </li>
              <li>
                <Link href="/knowledge/firewalls" className="hover:text-[#A5AD8C] transition-colors">
                  Firewalls & Network Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F1EDE4] mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B62]" />
              <span>Certifications & Legal</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/certifications" className="hover:text-[#A5AD8C] transition-colors">
                  Certification Explorer
                </Link>
              </li>
              <li>
                <Link href="/certifications/compare" className="hover:text-[#A5AD8C] transition-colors">
                  Compare Certifications
                </Link>
              </li>
              <li>
                <Link href="/certifications/offsec" className="hover:text-[#A5AD8C] transition-colors">
                  OffSec Certifications Hub
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A5AD8C] transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Imposter-zx/CyberSec-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#A5AD8C] transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-[#454139] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#888277]">
          <p className="text-center md:text-left leading-relaxed">
            CyberSec Hub is an educational project. External resources belong to their respective owners.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:text-[#F1EDE4] transition-colors">
              Privacy & Disclaimer
            </Link>
            <span>•</span>
            <span className="text-[#A5AD8C]">Warm Editorial Identity</span>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} CyberSec Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
