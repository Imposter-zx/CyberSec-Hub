import React from 'react';
import Link from 'next/link';
import { Shield, GitBranch, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#181C1A] text-[#A0AFA5] border-t border-[#3A4840] text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#3F7D5A] to-[#2E5E43] text-white shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-base font-extrabold text-[#E8F0EA] tracking-tight group-hover:text-[#6AAF8A] transition-colors">
                CyberSec Hub
              </span>
            </Link>
            <p className="text-xs text-[#A0AFA5] leading-relaxed max-w-sm font-normal">
              An open, structured cybersecurity learning and knowledge platform organizing verified educational resources, threat taxonomies, and career roadmaps.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202722] border border-[#3A4840] text-[11px] text-[#6AAF8A] font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF8A] animate-pulse" />
              <span>Learn. Practice. Secure.</span>
            </div>
          </div>

          {/* Learning Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8F0EA] mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E58A4E]" />
              <span>Learning & Labs</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/learn" className="hover:text-[#6AAF8A] transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-[#6AAF8A] transition-colors">
                  Hands-on Labs & CTFs
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#6AAF8A] transition-colors">
                  Cybersecurity Tools
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="hover:text-[#6AAF8A] transition-colors">
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-[#6AAF8A] transition-colors">
                  Recommended Channels
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8F0EA] mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3F7D5A]" />
              <span>Knowledge Base</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/knowledge/hackers" className="hover:text-[#6AAF8A] transition-colors">
                  Types of Hackers & Roles
                </Link>
              </li>
              <li>
                <Link href="/knowledge/threats" className="hover:text-[#6AAF8A] transition-colors">
                  Security Threats & MITRE
                </Link>
              </li>
              <li>
                <Link href="/knowledge/authentication" className="hover:text-[#6AAF8A] transition-colors">
                  Authentication & AAA
                </Link>
              </li>
              <li>
                <Link href="/knowledge/encryption" className="hover:text-[#6AAF8A] transition-colors">
                  Encryption & Cryptography
                </Link>
              </li>
              <li>
                <Link href="/knowledge/firewalls" className="hover:text-[#6AAF8A] transition-colors">
                  Firewalls & Network Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8F0EA] mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A84B]" />
              <span>Certifications & Info</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/certifications" className="hover:text-[#6AAF8A] transition-colors">
                  Certification Explorer
                </Link>
              </li>
              <li>
                <Link href="/certifications/compare" className="hover:text-[#6AAF8A] transition-colors">
                  Compare Certifications
                </Link>
              </li>
              <li>
                <Link href="/certifications/offsec" className="hover:text-[#6AAF8A] transition-colors">
                  OffSec Hub
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#6AAF8A] transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Imposter-zx/CyberSec-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#6AAF8A] transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-[#3A4840] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#68736B]">
          <p className="text-center md:text-left leading-relaxed">
            CyberSec Hub is an educational knowledge initiative. All registered trademarks and logos belong to their respective owners.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:text-[#E8F0EA] transition-colors">
              Privacy & Disclaimer
            </Link>
            <span>•</span>
            <span className="text-[#6AAF8A]">Modern Visual Edition</span>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} CyberSec Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
