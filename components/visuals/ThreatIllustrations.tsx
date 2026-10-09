'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 01. Phishing (Deceptive Email / Hook)
export const PhishingIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#D9A441" fillOpacity="0.08" />

    {/* Email Envelope */}
    <rect x="65" y="60" width="110" height="70" rx="6" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
    <path d="M65 64l55 36 55-36" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Fake Password / Urgent Warning inside Email */}
    <rect x="80" y="98" width="50" height="8" rx="2" fill="#050705" />
    <rect x="80" y="112" width="30" height="6" rx="2" fill="#D9A441" fillOpacity="0.4" />
    <circle cx="150" cy="105" r="8" fill="#FF3B30" />
    <text x="150" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">!</text>

    {/* Malicious Fishing Hook Dropping from Above */}
    <path d="M120 10v45c0 14 12 16 12 4s-4-6-6-6" stroke="#FF3B30" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <polygon points="126,53 124,47 130,49" fill="#FF3B30" />

    {/* Warning Badge */}
    <g transform="translate(164, 30)">
      <circle cx="16" cy="16" r="16" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
      <path d="M12 16h8M16 12v8" stroke="#D9A441" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 02. Ransomware (File Encryption & Locked System)
export const RansomwareIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#FF3B30" fillOpacity="0.10" />

    {/* Computer Screen */}
    <rect x="60" y="44" width="120" height="76" rx="6" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <rect x="100" y="120" width="40" height="12" fill="#0E1510" stroke="#1B2A1F" />
    <rect x="85" y="132" width="70" height="4" rx="2" fill="#1B2A1F" />

    {/* Binary encrypted backdrop */}
    <text x="70" y="62" fill="#00FF66" fontSize="8" fontFamily="monospace" opacity="0.6">01001100 1101001</text>
    <text x="70" y="74" fill="#00FF66" fontSize="8" fontFamily="monospace" opacity="0.6">11100010 0101101</text>

    {/* Large Central Padlock */}
    <rect x="104" y="74" width="32" height="26" rx="4" fill="#FF3B30" />
    <path d="M112 74V64a8 8 0 0116 0v10" stroke="#FF3B30" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="120" cy="85" r="3" fill="#FFFFFF" />
    <path d="M120 88v5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

    {/* Ransom Extortion Note Label */}
    <rect x="80" y="105" width="80" height="10" rx="2" fill="#271211" stroke="#FF3B30" strokeWidth="0.8" />
    <text x="120" y="113" textAnchor="middle" fill="#FF3B30" fontSize="7" fontWeight="bold" fontFamily="monospace">FILES ENCRYPTED</text>
  </svg>
);

// 03. DDoS (Distributed Denial of Service)
export const DdosIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#FF3B30" fillOpacity="0.08" />

    {/* Victim Central Web Server */}
    <rect x="95" y="60" width="50" height="60" rx="6" fill="#0E1510" stroke="#FF3B30" strokeWidth="2" />
    <rect x="105" y="70" width="30" height="4" rx="1" fill="#FF3B30" />
    <rect x="105" y="78" width="30" height="4" rx="1" fill="#FF3B30" />
    <rect x="105" y="86" width="30" height="4" rx="1" fill="#FF3B30" />
    <circle cx="120" cy="104" r="5" fill="#FF3B30" className="animate-pulse" />

    {/* 4 Converging Botnet Packet Streams */}
    <path d="M30 40l60 25M30 120l60-25M210 40l-60 25M210 120l-60-25" stroke="#FF3B30" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
    
    {/* Botnet Node Indicators */}
    <circle cx="30" cy="40" r="8" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
    <circle cx="30" cy="120" r="8" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
    <circle cx="210" cy="40" r="8" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
    <circle cx="210" cy="120" r="8" fill="#0E1510" stroke="#FF3B30" strokeWidth="1.5" />
  </svg>
);

// 04. SQL Injection (Database Query Poisoning)
export const SqlInjectionIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#00FF66" fillOpacity="0.08" />

    {/* SQL Database Cylinder */}
    <ellipse cx="120" cy="55" rx="35" ry="10" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M85 55v40c0 5.5 15.7 10 35 10s35-4.5 35-10V55" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M85 75c0 5.5 15.7 10 35 10s35-4.5 35-10" stroke="#00FF66" strokeWidth="1.5" />
    <path d="M85 95c0 5.5 15.7 10 35 10s35-4.5 35-10" stroke="#00FF66" strokeWidth="1.5" />

    {/* Injected String Callout */}
    <rect x="55" y="112" width="130" height="24" rx="4" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <text x="120" y="127" textAnchor="middle" fill="#FF3B30" fontSize="8" fontWeight="bold" fontFamily="monospace">
      &apos; OR 1=1; -- DROP TABLE
    </text>
  </svg>
);

// 05. XSS (Cross-Site Scripting)
export const XssIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#D9A441" fillOpacity="0.08" />

    {/* Browser Window */}
    <rect x="55" y="35" width="130" height="90" rx="6" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
    <line x1="55" y1="52" x2="185" y2="52" stroke="#1B2A1F" strokeWidth="1" />
    <circle cx="65" cy="43" r="2.5" fill="#FF3B30" />
    <circle cx="72" cy="43" r="2.5" fill="#D9A441" />
    <circle cx="79" cy="43" r="2.5" fill="#00FF66" />
    
    {/* Script Tag Box */}
    <rect x="68" y="65" width="104" height="42" rx="4" fill="#050705" stroke="#FF3B30" strokeWidth="1.5" />
    <text x="120" y="82" textAnchor="middle" fill="#00FF66" fontSize="8" fontWeight="bold" fontFamily="monospace">
      &lt;script&gt;
    </text>
    <text x="120" y="94" textAnchor="middle" fill="#FF3B30" fontSize="7" fontWeight="bold" fontFamily="monospace">
      steal(document.cookie)
    </text>
    <text x="120" y="103" textAnchor="middle" fill="#00FF66" fontSize="8" fontWeight="bold" fontFamily="monospace">
      &lt;/script&gt;
    </text>
  </svg>
);

// 06. Man-in-the-Middle (MitM Interception)
export const MitmIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#FF3B30" fillOpacity="0.08" />

    {/* Client Node */}
    <circle cx="45" cy="80" r="16" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <text x="45" y="84" textAnchor="middle" fill="#00FF66" fontSize="7" fontWeight="bold" fontFamily="monospace">CLIENT</text>

    {/* Server Node */}
    <circle cx="195" cy="80" r="16" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <text x="195" y="84" textAnchor="middle" fill="#00FF66" fontSize="7" fontWeight="bold" fontFamily="monospace">SERVER</text>

    {/* Interceptor Adversary in Middle */}
    <circle cx="120" cy="80" r="22" fill="#271211" stroke="#FF3B30" strokeWidth="2" />
    <path d="M112 80c0-4 4-8 8-8s8 4 8 8" stroke="#FF3B30" strokeWidth="2" fill="none" />
    <circle cx="120" cy="74" r="3" fill="#FF3B30" />

    {/* Tapped connection lines */}
    <path d="M61 80h37M142 80h37" stroke="#FF3B30" strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

// 07. Malware & Trojan Analysis
export const MalwareIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#FF3B30" fillOpacity="0.08" />

    {/* Infected binary bug */}
    <g transform="translate(120, 80)">
      <circle cx="0" cy="0" r="22" fill="#0E1510" stroke="#FF3B30" strokeWidth="2" />
      <circle cx="-7" cy="-4" r="3" fill="#FF3B30" />
      <circle cx="7" cy="-4" r="3" fill="#FF3B30" />
      <path d="M-10 10c4 4 16 4 20 0" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
      {/* Bug legs */}
      <line x1="-22" y1="-10" x2="-32" y2="-18" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
      <line x1="-22" y1="0" x2="-34" y2="0" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
      <line x1="-22" y1="10" x2="-32" y2="18" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="-10" x2="32" y2="-18" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="0" x2="34" y2="0" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="10" x2="32" y2="18" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 08. Zero-Day Vulnerability
export const ZeroDayIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#FF3B30" fillOpacity="0.08" />

    {/* Unpatched Shield with Cracks */}
    <g transform="translate(120, 80)">
      <path d="M0-36l30 12v22c0 22-16 38-30 44-14-6-30-22-30-44v-22l30-12z" fill="#0E1510" stroke="#FF3B30" strokeWidth="2" />
      {/* Lightning crack through shield */}
      <path d="M-6-20l12 18h-10l8 24" stroke="#FF3B30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>

    {/* Zero Day Badge */}
    <g transform="translate(150, 35)">
      <rect x="0" y="0" width="46" height="20" rx="4" fill="#271211" stroke="#FF3B30" strokeWidth="1.5" />
      <text x="23" y="13" textAnchor="middle" fill="#FF3B30" fontSize="8" fontWeight="bold" fontFamily="monospace">
        0-DAY
      </text>
    </g>
  </svg>
);

export const getThreatIllustration = (id: string): React.ReactNode => {
  switch (id) {
    case 'phishing':
    case 'spear-phishing':
      return <PhishingIllustration />;
    case 'ransomware':
    case 'trojan':
      return <RansomwareIllustration />;
    case 'ddos':
    case 'botnet':
      return <DdosIllustration />;
    case 'sql-injection':
      return <SqlInjectionIllustration />;
    case 'xss':
      return <XssIllustration />;
    case 'mitm':
      return <MitmIllustration />;
    case 'malware':
      return <MalwareIllustration />;
    case 'zero-day':
      return <ZeroDayIllustration />;
    default:
      return <MalwareIllustration />;
  }
};
