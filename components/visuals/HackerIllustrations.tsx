'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 01. White Hat Hacker (Ethical Security Specialist)
export const WhiteHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F3" className="dark:fill-[#1E2822]" />
    {/* Background Grid Accent */}
    <circle cx="120" cy="80" r="56" fill="#3F7D5A" fillOpacity="0.12" />
    <path d="M60 140h120" stroke="#3F7D5A" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
    
    {/* Laptop base */}
    <rect x="75" y="112" width="90" height="10" rx="3" fill="#DDE5DE" className="dark:fill-[#3A4840]" />
    <rect x="98" y="118" width="44" height="2" rx="1" fill="#3F7D5A" />
    <rect x="85" y="80" width="70" height="34" rx="4" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" className="dark:fill-[#262E28]" />
    <path d="M93 92l6 4-6 4M104 100h12" stroke="#3F7D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Ethical Hacker Character */}
    {/* Body / Shoulders */}
    <path d="M96 78c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#3F7D5A" />
    {/* Head */}
    <circle cx="120" cy="56" r="14" fill="#FCEAD4" />
    {/* Glasses */}
    <rect x="110" y="52" width="8" height="6" rx="2" fill="#3F7D5A" />
    <rect x="122" y="52" width="8" height="6" rx="2" fill="#3F7D5A" />
    <path d="M118 55h4" stroke="#3F7D5A" strokeWidth="1.5" />
    {/* Distinct White Fedora/Hat with Green Band */}
    <path d="M100 48c0-10 8-16 20-16s20 6 20 16" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" />
    <ellipse cx="120" cy="48" rx="28" ry="5" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" />
    <rect x="108" y="44" width="24" height="3" fill="#3F7D5A" />

    {/* Floating Verification Shield with Checkmark */}
    <g transform="translate(162, 38)">
      <circle cx="18" cy="18" r="18" fill="#3F7D5A" />
      <path d="M18 7l9 4v7c0 7-5 12-9 14-4-2-9-7-9-14v-7l9-4z" fill="#FFFFFF" />
      <path d="M14 18l3 3 6-6" stroke="#3F7D5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 02. Black Hat Hacker (Malicious Cybercriminal)
export const BlackHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3F3" className="dark:fill-[#261C1C]" />
    <circle cx="120" cy="80" r="56" fill="#B84040" fillOpacity="0.10" />

    {/* Dark Terminal Screen */}
    <rect x="80" y="78" width="80" height="42" rx="4" fill="#181C1A" stroke="#B84040" strokeWidth="2" />
    <circle cx="88" cy="85" r="2" fill="#B84040" />
    <circle cx="94" cy="85" r="2" fill="#E58A4E" />
    <circle cx="100" cy="85" r="2" fill="#6AAF8A" />
    <path d="M88 96l4 3-4 3M96 102h12" stroke="#B84040" strokeWidth="1.5" strokeLinecap="round" />
    {/* Glitch lines */}
    <line x1="88" y1="110" x2="148" y2="110" stroke="#B84040" strokeWidth="1" strokeDasharray="6 2" opacity="0.6" />

    {/* Malicious Hacker Figure (Hoodie & Black Hat) */}
    <path d="M94 76c0-10 11-16 26-16s26 6 26 16v6H94v-6z" fill="#242424" />
    {/* Shadowed Face */}
    <circle cx="120" cy="54" r="14" fill="#3A3835" />
    <circle cx="115" cy="54" r="2" fill="#B84040" />
    <circle cx="125" cy="54" r="2" fill="#B84040" />
    {/* Dark Fedora Hat with Red Ribbon */}
    <path d="M102 46c0-12 8-18 18-18s18 6 18 18" fill="#181C1A" stroke="#B84040" strokeWidth="1.5" />
    <ellipse cx="120" cy="46" rx="28" ry="5" fill="#181C1A" stroke="#B84040" strokeWidth="1.5" />
    <rect x="108" y="42" width="24" height="3" fill="#B84040" />

    {/* Warning Triangle Symbol */}
    <g transform="translate(162, 36)">
      <polygon points="18,4 34,32 2,32" fill="#B84040" />
      <rect x="16.5" y="14" width="3" height="9" rx="1.5" fill="#FFFFFF" />
      <circle cx="18" cy="27" r="1.5" fill="#FFFFFF" />
    </g>
  </svg>
);

// 03. Gray Hat Hacker (Ambiguous / Independent)
export const GrayHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F4F5F7" className="dark:fill-[#1F2226]" />
    <circle cx="120" cy="80" r="56" fill="#68736B" fillOpacity="0.12" />

    {/* Split Background Indicator */}
    <path d="M120 24v112" stroke="#68736B" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />

    {/* Laptop */}
    <rect x="80" y="86" width="80" height="38" rx="4" fill="#FFFFFF" stroke="#68736B" strokeWidth="2" className="dark:fill-[#262E28]" />
    <rect x="74" y="122" width="92" height="6" rx="2" fill="#DDE5DE" className="dark:fill-[#3A4840]" />
    {/* Split display: Green / Amber */}
    <rect x="86" y="94" width="30" height="22" fill="#EBF4EF" className="dark:fill-[#3F7D5A]/20" />
    <rect x="124" y="94" width="30" height="22" fill="#FDF2EA" className="dark:fill-[#E58A4E]/20" />

    {/* Character with Split Hat */}
    <path d="M96 82c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#7A847D" />
    <circle cx="120" cy="58" r="14" fill="#F0DFC9" />
    
    {/* Dual-tone Fedora Hat: Left White, Right Dark */}
    <path d="M102 50c0-10 6-16 18-16v16h-18z" fill="#FFFFFF" stroke="#68736B" strokeWidth="1.5" />
    <path d="M120 34c12 0 18 6 18 16h-18V34z" fill="#242424" stroke="#68736B" strokeWidth="1.5" />
    <ellipse cx="120" cy="50" rx="26" ry="5" fill="#7A847D" stroke="#68736B" strokeWidth="1.5" />

    {/* Scale of Justice Symbol */}
    <g transform="translate(160, 34)">
      <circle cx="18" cy="18" r="18" fill="#D7A84B" />
      <path d="M18 10v16M11 15h14M11 15l-3 6h6l-3-6zM25 15l-3 6h6l-3-6z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 04. Red Hat Hacker (Vigilante / Aggressive Defense)
export const RedHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF4F0" className="dark:fill-[#291E1A]" />
    <circle cx="120" cy="80" r="56" fill="#C97438" fillOpacity="0.12" />

    {/* Red Battle Barrier / Firewall Shield */}
    <path d="M85 75l35-15 35 15v35c0 20-35 30-35 30s-35-10-35-30V75z" fill="#FFFFFF" stroke="#C97438" strokeWidth="2.5" className="dark:fill-[#262E28]" />
    <path d="M120 70v56M95 90h50" stroke="#C97438" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

    {/* Heroic Red Hat Character */}
    <circle cx="120" cy="46" r="13" fill="#F2DEC7" />
    <path d="M102 38c0-10 8-16 18-16s18 6 18 16" fill="#C97438" stroke="#8C4A28" strokeWidth="1.5" />
    <ellipse cx="120" cy="38" rx="25" ry="5" fill="#C97438" stroke="#8C4A28" strokeWidth="1.5" />
    <rect x="110" y="34" width="20" height="3" fill="#FFFFFF" />

    {/* Crossed Swords / Strike Vector */}
    <g transform="translate(164, 38)">
      <circle cx="16" cy="16" r="16" fill="#C97438" />
      <path d="M10 10l12 12M22 10L10 22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 05. Blue Hat Hacker (Authorized External Bug Hunter / Vendor Invitee)
export const BlueHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#EEF6F8" className="dark:fill-[#1A2528]" />
    <circle cx="120" cy="80" r="56" fill="#4C9A91" fillOpacity="0.12" />

    {/* Workstation Target Board */}
    <rect x="80" y="80" width="80" height="42" rx="4" fill="#FFFFFF" stroke="#4C9A91" strokeWidth="2" className="dark:fill-[#262E28]" />
    <circle cx="120" cy="101" r="12" stroke="#4C9A91" strokeWidth="2" fill="none" />
    <circle cx="120" cy="101" r="5" fill="#4C9A91" />
    <line x1="120" y1="84" x2="120" y2="118" stroke="#4C9A91" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="103" y1="101" x2="137" y2="101" stroke="#4C9A91" strokeWidth="1" strokeDasharray="2 2" />

    {/* Blue Hat Figure */}
    <path d="M96 78c0-8 10-14 24-14s24 6 24 14v4H96v-4z" fill="#3A7B74" />
    <circle cx="120" cy="56" r="14" fill="#FCEAD4" />
    <path d="M102 48c0-10 8-16 18-16s18 6 18 16" fill="#4C9A91" stroke="#2F6660" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="26" ry="5" fill="#4C9A91" stroke="#2F6660" strokeWidth="1.5" />

    {/* Magnifying Glass Symbol */}
    <g transform="translate(162, 36)">
      <circle cx="16" cy="16" r="16" fill="#4C9A91" />
      <circle cx="14" cy="14" r="6" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <line x1="18.5" y1="18.5" x2="24" y2="24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 06. Green Hat Hacker (Eager Cybersecurity Learner / Novice)
export const GreenHatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F1" className="dark:fill-[#1A261D]" />
    <circle cx="120" cy="80" r="56" fill="#6AAF8A" fillOpacity="0.14" />

    {/* Open Study Books & Terminal */}
    <path d="M85 110c12-4 24-1 35 4v16c-11-5-23-8-35-4v-16z" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
    <path d="M155 110c-12-4-24-1-35 4v16c11-5 23-8 35-4v-16z" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
    
    {/* Terminal Window with Learning Prompt */}
    <rect x="85" y="78" width="70" height="30" rx="4" fill="#18221C" stroke="#6AAF8A" strokeWidth="1.5" />
    <path d="M92 88l4 3-4 3M102 94h14" stroke="#6AAF8A" strokeWidth="1.5" strokeLinecap="round" />

    {/* Green Hat Student Figure */}
    <circle cx="120" cy="56" r="13" fill="#FCEAD4" />
    <path d="M104 48c0-10 7-15 16-15s16 5 16 15" fill="#6AAF8A" stroke="#3F7D5A" strokeWidth="1.5" />
    <ellipse cx="120" cy="48" rx="24" ry="5" fill="#6AAF8A" stroke="#3F7D5A" strokeWidth="1.5" />
    {/* Sprout / Seedling Icon on Hat */}
    <path d="M120 33c0-6 4-9 8-7-1 4-4 7-8 7z" fill="#3F7D5A" />
    <path d="M120 33c0-6-4-9-8-7 1 4 4 7 8 7z" fill="#3F7D5A" />

    {/* Question / Learning Badge */}
    <g transform="translate(162, 36)">
      <circle cx="16" cy="16" r="16" fill="#6AAF8A" />
      <text x="16" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">?</text>
    </g>
  </svg>
);

// 07. Script Kiddie (Amateur Tool User)
export const ScriptKiddieIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF8EE" className="dark:fill-[#26221A]" />
    <circle cx="120" cy="80" r="56" fill="#D7A84B" fillOpacity="0.12" />

    {/* Laptop with Big "Pwn / Run Script" Button */}
    <rect x="75" y="80" width="90" height="46" rx="4" fill="#FFFFFF" stroke="#D7A84B" strokeWidth="2" className="dark:fill-[#262E28]" />
    <rect x="70" y="126" width="100" height="6" rx="2" fill="#DDE5DE" className="dark:fill-[#3A4840]" />
    {/* Huge prominent Red Run Button */}
    <rect x="95" y="92" width="50" height="20" rx="4" fill="#B84040" />
    <text x="120" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">EXECUTE</text>
    <path d="M84 94l4 3-4 3" stroke="#D7A84B" strokeWidth="1.5" />

    {/* Figure with Backward Cap */}
    <circle cx="120" cy="54" r="13" fill="#FCEAD4" />
    <path d="M106 48c0-8 6-12 14-12s14 4 14 12" fill="#E58A4E" />
    <path d="M134 46l8 3-8 3" fill="#E58A4E" />

    {/* Tool Box / Puzzle Symbol */}
    <g transform="translate(162, 34)">
      <circle cx="16" cy="16" r="16" fill="#D7A84B" />
      <rect x="9" y="11" width="14" height="11" rx="2" fill="#FFFFFF" />
      <path d="M13 11V9a3 3 0 016 0v2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

// 08. State-Sponsored Hacker (Advanced Persistent Threat - APT)
export const StateSponsoredIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F4F6" className="dark:fill-[#1A2226]" />
    <circle cx="120" cy="80" r="56" fill="#3B5360" fillOpacity="0.12" />

    {/* Government Capitol / Embassy Silhouette Columns */}
    <path d="M60 126h120v4H60v-4z" fill="#3B5360" opacity="0.3" />
    <rect x="74" y="90" width="8" height="36" fill="#3B5360" opacity="0.25" />
    <rect x="94" y="90" width="8" height="36" fill="#3B5360" opacity="0.25" />
    <rect x="138" y="90" width="8" height="36" fill="#3B5360" opacity="0.25" />
    <rect x="158" y="90" width="8" height="36" fill="#3B5360" opacity="0.25" />
    <polygon points="120,62 68,88 172,88" fill="#3B5360" opacity="0.25" />

    {/* Server Stack & Satellite Dish */}
    <rect x="105" y="86" width="30" height="38" rx="3" fill="#18221C" stroke="#3F7D5A" strokeWidth="1.5" />
    <circle cx="112" cy="94" r="1.5" fill="#6AAF8A" />
    <circle cx="112" cy="102" r="1.5" fill="#6AAF8A" />
    <circle cx="112" cy="110" r="1.5" fill="#E58A4E" />

    {/* Satellite Dish Orbiting */}
    <g transform="translate(160, 32)">
      <circle cx="18" cy="18" r="18" fill="#3B5360" />
      <path d="M12 24c6-6 12-4 15 2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="20" y1="16" x2="26" y2="10" stroke="#FFFFFF" strokeWidth="2" />
    </g>
  </svg>
);

// 09. Hacktivist (Ideological / Social Activist)
export const HacktivistIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3ED" className="dark:fill-[#261E1A]" />
    <circle cx="120" cy="80" r="56" fill="#E58A4E" fillOpacity="0.12" />

    {/* Megaphone / Broadcast Waves */}
    <path d="M70 100l25-14v28l-25-14z" fill="#E58A4E" />
    <rect x="62" y="95" width="8" height="10" rx="2" fill="#C97438" />
    <path d="M102 92c4 4 4 12 0 16M108 86c8 8 8 24 0 32" stroke="#E58A4E" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Guy Fawkes / Mask Figure */}
    <circle cx="130" cy="68" r="18" fill="#FFFFFF" stroke="#242424" strokeWidth="1.5" />
    <path d="M122 66c2 2 5 2 7 0M131 66c2 2 5 2 7 0" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" />
    {/* Mustache curve */}
    <path d="M120 74c5 3 10-1 10-1s5 4 10 1" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Dark Hood */}
    <path d="M110 56c0-12 9-18 20-18s20 6 20 18" stroke="#242424" strokeWidth="3" fill="none" />

    {/* Globe Network Badge */}
    <g transform="translate(162, 34)">
      <circle cx="16" cy="16" r="16" fill="#E58A4E" />
      <circle cx="16" cy="16" r="10" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="5" ry="10" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <line x1="6" y1="16" x2="26" y2="16" stroke="#FFFFFF" strokeWidth="1.5" />
    </g>
  </svg>
);

// 10. Insider Threat (Authorized Employee Privilege Abuse)
export const InsiderThreatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3F3" className="dark:fill-[#261C1C]" />
    <circle cx="120" cy="80" r="56" fill="#B84040" fillOpacity="0.10" />

    {/* Office Corporate Workstation */}
    <rect x="70" y="80" width="80" height="42" rx="4" fill="#FFFFFF" stroke="#3A4840" strokeWidth="2" className="dark:fill-[#262E28]" />
    <rect x="65" y="122" width="90" height="6" rx="2" fill="#DDE5DE" className="dark:fill-[#3A4840]" />
    
    {/* USB Drive Exfiltrating Data */}
    <rect x="145" y="98" width="16" height="8" rx="2" fill="#B84040" />
    <rect x="161" y="100" width="4" height="4" fill="#DDE5DE" />
    <path d="M120 95l14 6-14 6" stroke="#B84040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Employee Badge Lanyard */}
    <rect x="108" y="52" width="24" height="28" rx="3" fill="#FFFFFF" stroke="#B84040" strokeWidth="1.5" />
    <circle cx="120" cy="62" r="4" fill="#68736B" />
    <rect x="113" y="70" width="14" height="4" rx="1" fill="#B84040" />
    {/* Lanyard straps */}
    <path d="M120 34v18M116 34l4 18M124 34l-4 18" stroke="#B84040" strokeWidth="1.5" />

    {/* Exclamation Badge */}
    <g transform="translate(164, 34)">
      <circle cx="16" cy="16" r="16" fill="#B84040" />
      <rect x="14.5" y="8" width="3" height="10" rx="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="22" r="1.5" fill="#FFFFFF" />
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
