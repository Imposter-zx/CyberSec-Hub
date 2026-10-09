'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 01. White Hat Hacker (Ethical Security Specialist)
export const WhiteHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    {/* Background Grid Accent */}
    <circle cx="120" cy="80" r="56" fill="#00FF66" fillOpacity="0.08" />
    <path d="M60 140h120" stroke="#1B2A1F" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    
    {/* Laptop base */}
    <rect x="75" y="112" width="90" height="10" rx="3" fill="#0E1510" stroke="#1B2A1F" strokeWidth="1.5" />
    <rect x="98" y="118" width="44" height="2" rx="1" fill="#00FF66" />
    <rect x="85" y="80" width="70" height="34" rx="4" fill="#0A0F0B" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M93 92l6 4-6 4M104 100h12" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Ethical Hacker Character */}
    {/* Body / Shoulders */}
    <path d="M96 78c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#0E1510" stroke="#1B2A1F" strokeWidth="1.5" />
    {/* Head */}
    <circle cx="120" cy="56" r="14" fill="#1B2A1F" />
    {/* Glasses */}
    <rect x="110" y="52" width="8" height="6" rx="2" fill="#00FF66" />
    <rect x="122" y="52" width="8" height="6" rx="2" fill="#00FF66" />
    <path d="M118 55h4" stroke="#00FF66" strokeWidth="1.5" />
    {/* Distinct White Fedora/Hat with Green Band */}
    <path d="M100 48c0-10 8-16 20-16s20 6 20 16" fill="#E8F5E9" stroke="#00FF66" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="28" ry="5" fill="#E8F5E9" stroke="#00FF66" strokeWidth="1.5" />
    <rect x="108" y="44" width="24" height="3" fill="#00FF66" />

    {/* Floating Verification Shield with Checkmark */}
    <g transform="translate(162, 38)">
      <circle cx="18" cy="18" r="18" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
      <path d="M18 7l9 4v7c0 7-5 12-9 14-4-2-9-7-9-14v-7l9-4z" fill="#0D2214" stroke="#00FF66" strokeWidth="1.5" />
      <path d="M14 18l3 3 6-6" stroke="#00FF66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 02. Black Hat Hacker (Malicious Cybercriminal)
export const BlackHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#FF3B30" fillOpacity="0.08" />

    {/* Dark Terminal Screen */}
    <rect x="80" y="78" width="80" height="42" rx="4" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <circle cx="88" cy="85" r="2" fill="#FF3B30" />
    <circle cx="94" cy="85" r="2" fill="#D9A441" />
    <circle cx="100" cy="85" r="2" fill="#00FF66" />
    <path d="M88 96l4 3-4 3M96 102h12" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" />
    {/* Glitch lines */}
    <line x1="88" y1="110" x2="148" y2="110" stroke="#FF3B30" strokeWidth="1" strokeDasharray="6 2" opacity="0.8" />

    {/* Malicious Hacker Figure (Hoodie & Black Hat) */}
    <path d="M94 76c0-10 11-16 26-16s26 6 26 16v6H94v-6z" fill="#0E1510" stroke="#1B2A1F" strokeWidth="1.5" />
    {/* Shadowed Face */}
    <circle cx="120" cy="54" r="14" fill="#050705" stroke="#FF3B30" strokeWidth="1" />
    <circle cx="115" cy="54" r="2" fill="#FF3B30" />
    <circle cx="125" cy="54" r="2" fill="#FF3B30" />
    {/* Dark Fedora Hat with Red Ribbon */}
    <path d="M102 46c0-12 8-18 18-18s18 6 18 18" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <ellipse cx="120" cy="46" rx="28" ry="5" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <rect x="108" y="42" width="24" height="3" fill="#FF3B30" />

    {/* Warning Triangle Symbol */}
    <g transform="translate(162, 36)">
      <polygon points="18,4 34,32 2,32" fill="#271211" stroke="#FF3B30" strokeWidth="2" />
      <rect x="16.5" y="14" width="3" height="9" rx="1.5" fill="#FF3B30" />
      <circle cx="18" cy="27" r="1.5" fill="#FF3B30" />
    </g>
  </svg>
);

// 03. Gray Hat Hacker (Uncoordinated / Boundary Prober)
export const GrayHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#D9A441" fillOpacity="0.08" />

    {/* Dual split background line */}
    <line x1="120" y1="20" x2="120" y2="140" stroke="#1B2A1F" strokeWidth="1.5" strokeDasharray="4 4" />

    {/* Split character body */}
    <path d="M96 78c0-8 10-14 24-14v18H96v-4z" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M120 64c14 0 24 6 24 14v4h-24v-18z" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />

    {/* Face with dual eye color */}
    <circle cx="120" cy="54" r="14" fill="#0A0F0B" stroke="#1B2A1F" strokeWidth="1.5" />
    <circle cx="115" cy="54" r="2.5" fill="#00FF66" />
    <circle cx="125" cy="54" r="2.5" fill="#FF3B30" />

    {/* Split Fedora Hat (Light left, Dark right) */}
    <path d="M102 46c0-12 8-18 18-18v18h-18z" fill="#E8F5E9" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M120 28c10 0 18 6 18 18h-18v-18z" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <ellipse cx="120" cy="46" rx="28" ry="5" fill="#91A596" stroke="#D9A441" strokeWidth="1.5" />

    {/* Scales of Justice balance symbol */}
    <g transform="translate(164, 38)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="24" y2="12" stroke="#D9A441" strokeWidth="2" />
      <line x1="16" y1="8" x2="16" y2="24" stroke="#D9A441" strokeWidth="2" />
      <circle cx="9" cy="18" r="3" fill="#00FF66" />
      <circle cx="23" cy="18" r="3" fill="#FF3B30" />
    </g>
  </svg>
);

// 04. Red Hat Hacker (Aggressive Vigilante Defense)
export const RedHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#FF3B30" fillOpacity="0.08" />

    {/* Firewall Sword / Barrier Shield */}
    <path d="M120 74v46M106 102h28" stroke="#FF3B30" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Vigilante Character */}
    <path d="M96 78c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#271211" stroke="#FF3B30" strokeWidth="1.5" />
    <circle cx="120" cy="56" r="14" fill="#0A0F0B" stroke="#FF3B30" strokeWidth="1.5" />
    
    {/* Red Fedora Hat */}
    <path d="M102 48c0-10 8-16 18-16s18 6 18 16" fill="#FF3B30" stroke="#FF6B63" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="28" ry="5" fill="#FF3B30" stroke="#FF6B63" strokeWidth="1.5" />
    <rect x="108" y="44" width="24" height="3" fill="#050705" />

    {/* Counter-Exploit Target Symbol */}
    <g transform="translate(164, 38)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
      <line x1="16" y1="6" x2="16" y2="26" stroke="#FF3B30" strokeWidth="1.5" />
      <line x1="6" y1="16" x2="26" y2="16" stroke="#FF3B30" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5" stroke="#FF3B30" strokeWidth="1.5" />
    </g>
  </svg>
);

// 05. Blue Hat Hacker (Invited Vendor Bug Hunter)
export const BlueHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#42C2A8" fillOpacity="0.08" />

    {/* Target Grid / Magnifier */}
    <rect x="80" y="80" width="80" height="38" rx="4" fill="#0E1510" stroke="#42C2A8" strokeWidth="1.5" />
    <path d="M90 94l6 5-6 5M104 104h14" stroke="#42C2A8" strokeWidth="2" strokeLinecap="round" />

    {/* Blue Hat Character */}
    <path d="M96 78c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#0F2220" stroke="#42C2A8" strokeWidth="1.5" />
    <circle cx="120" cy="56" r="14" fill="#0A0F0B" stroke="#42C2A8" strokeWidth="1.5" />
    
    {/* Blue Fedora Hat */}
    <path d="M102 48c0-10 8-16 18-16s18 6 18 16" fill="#42C2A8" stroke="#7BB8B2" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="28" ry="5" fill="#42C2A8" stroke="#7BB8B2" strokeWidth="1.5" />
    <rect x="108" y="44" width="24" height="3" fill="#050705" />

    {/* Magnifying Glass Bug Finder */}
    <g transform="translate(164, 38)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#42C2A8" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="6" stroke="#42C2A8" strokeWidth="2" fill="none" />
      <line x1="18" y1="18" x2="24" y2="24" stroke="#42C2A8" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 06. Green Hat Hacker (Cybersecurity Learner / Apprentice)
export const GreenHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#00FF66" fillOpacity="0.08" />

    {/* Study books / Terminal */}
    <rect x="75" y="112" width="90" height="10" rx="3" fill="#0E1510" stroke="#1B2A1F" strokeWidth="1.5" />
    <rect x="85" y="80" width="70" height="34" rx="4" fill="#0A0F0B" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M92 90h16M92 96h24M92 102h12" stroke="#00FF66" strokeWidth="1.5" strokeLinecap="round" />

    {/* Apprentice Character */}
    <path d="M96 78c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#0D2214" stroke="#00FF66" strokeWidth="1.5" />
    <circle cx="120" cy="56" r="14" fill="#0A0F0B" stroke="#00FF66" strokeWidth="1.5" />
    
    {/* Green Fedora with Small Sprout / Seedling */}
    <path d="M102 48c0-10 8-16 18-16s18 6 18 16" fill="#00FF66" stroke="#5CFF9B" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="28" ry="5" fill="#00FF66" stroke="#5CFF9B" strokeWidth="1.5" />
    <rect x="108" y="44" width="24" height="3" fill="#050705" />
    {/* Sprout seedling */}
    <path d="M120 32c-2-6-8-6-8-6s0 6 8 6zM120 32c2-6 8-6 8-6s0 6-8 6z" fill="#5CFF9B" />

    {/* Question Mark / Discovery Badge */}
    <g transform="translate(164, 38)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
      <text x="16" y="22" fill="#00FF66" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">?</text>
    </g>
  </svg>
);

// 07. Script Kiddie (Unskilled / Public Tool User)
export const ScriptKiddieIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#D9A441" fillOpacity="0.08" />

    {/* One-Click Big "EXECUTE / RUN" button screen */}
    <rect x="75" y="74" width="90" height="46" rx="6" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
    <rect x="90" y="86" width="60" height="22" rx="4" fill="#241C0E" stroke="#D9A441" strokeWidth="1.5" />
    <text x="120" y="101" fill="#D9A441" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="monospace">
      [ EXECUTE ]
    </text>

    {/* Backward Baseball Cap Character */}
    <path d="M96 74c0-8 10-14 24-14s24 6 24 14v2H96v-2z" fill="#0A0F0B" stroke="#1B2A1F" strokeWidth="1.5" />
    <circle cx="120" cy="52" r="14" fill="#0A0F0B" stroke="#D9A441" strokeWidth="1.5" />
    {/* Cap visor pointing backwards */}
    <path d="M106 48c0-8 6-12 14-12s14 4 14 12" fill="#D9A441" stroke="#ECC06A" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="16" ry="4" fill="#D9A441" />
    <path d="M98 48h14" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />

    {/* Script Tag */}
    <g transform="translate(164, 38)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
      <text x="16" y="20" fill="#D9A441" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">.sh</text>
    </g>
  </svg>
);

// 08. State-Sponsored Hacker (APT / Geopolitical Operator)
export const StateSponsoredIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#00FF66" fillOpacity="0.08" />

    {/* Government / Capitol Building Pillars */}
    <g transform="translate(90, 78)" stroke="#1B2A1F" strokeWidth="1.5" fill="#0E1510">
      <polygon points="30,0 0,16 60,16" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
      <rect x="6" y="16" width="8" height="28" />
      <rect x="26" y="16" width="8" height="28" />
      <rect x="46" y="16" width="8" height="28" />
      <rect x="0" y="44" width="60" height="6" fill="#00FF66" stroke="#00FF66" />
    </g>

    {/* Strategic Satellite Network Link */}
    <line x1="50" y1="40" x2="90" y2="78" stroke="#00FF66" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="50" cy="40" r="12" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <line x1="42" y1="40" x2="58" y2="40" stroke="#00FF66" strokeWidth="2" />
    <line x1="50" y1="32" x2="50" y2="48" stroke="#00FF66" strokeWidth="2" />

    {/* Classified Stamp */}
    <g transform="translate(162, 36)">
      <rect x="0" y="0" width="34" height="24" rx="4" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
      <text x="17" y="16" fill="#FF3B30" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        APT
      </text>
    </g>
  </svg>
);

// 09. Hacktivist (Ideological Activist)
export const HacktivistIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#D9A441" fillOpacity="0.08" />

    {/* Activist Silhouette with Anonymity Guy Fawkes-style Mask */}
    <path d="M96 82c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#0E1510" stroke="#1B2A1F" strokeWidth="1.5" />
    <circle cx="120" cy="56" r="16" fill="#E8F5E9" stroke="#1B2A1F" strokeWidth="1.5" />
    {/* Stylized Moustache & Beard on mask */}
    <path d="M112 58c3 4 8 4 8 4s5 0 8-4" stroke="#050705" strokeWidth="2" strokeLinecap="round" />
    <polygon points="120,64 117,68 123,68" fill="#050705" />
    {/* Dark Hoodie */}
    <path d="M102 44c0-12 8-16 18-16s18 4 18 16v16h-36V44z" fill="#050705" opacity="0.4" />

    {/* Megaphone / Protest Broadcast Icon */}
    <g transform="translate(160, 36)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
      <path d="M10 14l10-4v12l-10-4v-4z" fill="#D9A441" />
      <rect x="8" y="14" width="4" height="4" fill="#D9A441" />
      <path d="M22 12c2 2 2 6 0 8" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 10. Insider Threat (Internal Malicious / Negligent Employee)
export const InsiderThreatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="56" fill="#FF3B30" fillOpacity="0.08" />

    {/* Office Desktop & Server */}
    <rect x="70" y="86" width="80" height="36" rx="4" fill="#0E1510" stroke="#1B2A1F" strokeWidth="1.5" />
    
    {/* USB Drive Exfiltrating Data */}
    <rect x="145" y="98" width="16" height="8" rx="2" fill="#FF3B30" />
    <rect x="161" y="100" width="4" height="4" fill="#E8F5E9" />
    <path d="M120 95l14 6-14 6" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Employee Badge Lanyard */}
    <rect x="108" y="52" width="24" height="28" rx="3" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
    <circle cx="120" cy="62" r="4" fill="#91A596" />
    <rect x="113" y="70" width="14" height="4" rx="1" fill="#FF3B30" />
    {/* Lanyard straps */}
    <path d="M120 34v18M116 34l4 18M124 34l-4 18" stroke="#FF3B30" strokeWidth="1.5" />

    {/* Exclamation Badge */}
    <g transform="translate(164, 34)">
      <circle cx="16" cy="16" r="16" fill="#271211" stroke="#FF3B30" strokeWidth="1.5" />
      <rect x="14.5" y="8" width="3" height="10" rx="1.5" fill="#FF3B30" />
      <circle cx="16" cy="22" r="1.5" fill="#FF3B30" />
    </g>
  </svg>
);

// Helper function to pick the right illustration based on hacker ID
export const getHackerIllustration = (id: string): React.ReactNode => {
  switch (id) {
    case 'white-hat':
    case 'ethical-hacker':
      return <WhiteHatIllustration />;
    case 'black-hat':
    case 'cybercriminal':
      return <BlackHatIllustration />;
    case 'gray-hat':
      return <GrayHatIllustration />;
    case 'red-hat':
    case 'red-team':
      return <RedHatIllustration />;
    case 'blue-hat':
    case 'blue-team':
      return <BlueHatIllustration />;
    case 'green-hat':
      return <GreenHatIllustration />;
    case 'script-kiddie':
      return <ScriptKiddieIllustration />;
    case 'state-sponsored-hacker':
      return <StateSponsoredIllustration />;
    case 'hacktivist':
      return <HacktivistIllustration />;
    case 'insider-threat':
      return <InsiderThreatIllustration />;
    default:
      return <WhiteHatIllustration />;
  }
};
