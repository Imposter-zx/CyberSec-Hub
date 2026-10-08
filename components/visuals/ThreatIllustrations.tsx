'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 01. Phishing (Deceptive Email / Hook)
export const PhishingIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF4EE" className="dark:fill-[#261E1A]" />
    <circle cx="120" cy="80" r="54" fill="#E58A4E" fillOpacity="0.10" />

    {/* Email Envelope */}
    <rect x="65" y="60" width="110" height="70" rx="6" fill="#FFFFFF" stroke="#E58A4E" strokeWidth="2" className="dark:fill-[#262E28]" />
    <path d="M65 64l55 36 55-36" stroke="#E58A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Fake Password / Urgent Warning inside Email */}
    <rect x="80" y="98" width="50" height="8" rx="2" fill="#EEF3EE" className="dark:fill-[#3A4840]" />
    <rect x="80" y="112" width="30" height="6" rx="2" fill="#E58A4E" fillOpacity="0.4" />
    <circle cx="150" cy="105" r="8" fill="#B84040" />
    <text x="150" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">!</text>

    {/* Malicious Fishing Hook Dropping from Above */}
    <path d="M120 10v45c0 14 12 16 12 4s-4-6-6-6" stroke="#B84040" strokeWidth="3" strokeLinecap="round" fill="none" />
    <polygon points="126,53 124,47 130,49" fill="#B84040" />

    {/* Warning Badge */}
    <g transform="translate(164, 30)">
      <circle cx="16" cy="16" r="16" fill="#E58A4E" />
      <path d="M12 16h8M16 12v8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 02. Ransomware (File Encryption & Locked System)
export const RansomwareIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3F3" className="dark:fill-[#281A1A]" />
    <circle cx="120" cy="80" r="54" fill="#B84040" fillOpacity="0.12" />

    {/* Computer Screen */}
    <rect x="60" y="44" width="120" height="76" rx="6" fill="#181C1A" stroke="#B84040" strokeWidth="2" />
    <rect x="100" y="120" width="40" height="12" fill="#3A4840" />
    <rect x="85" y="132" width="70" height="4" rx="2" fill="#3A4840" />

    {/* Binary encrypted backdrop */}
    <text x="70" y="62" fill="#6AAF8A" fontSize="8" fontFamily="monospace" opacity="0.4">01001100 1101001</text>
    <text x="70" y="74" fill="#6AAF8A" fontSize="8" fontFamily="monospace" opacity="0.4">11100010 0101101</text>

    {/* Large Central Padlock */}
    <rect x="104" y="74" width="32" height="26" rx="4" fill="#B84040" />
    <path d="M112 74V64a8 8 0 0116 0v10" stroke="#B84040" strokeWidth="4" fill="none" strokeLinecap="round" />
    <circle cx="120" cy="85" r="3" fill="#FFFFFF" />
    <path d="M120 88v5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

    {/* Ransom Extortion Note Label */}
    <rect x="80" y="105" width="80" height="10" rx="2" fill="#B84040" fillOpacity="0.3" />
    <text x="120" y="113" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">FILES ENCRYPTED</text>
  </svg>
);

// 03. DDoS (Distributed Denial of Service)
export const DdosIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3EE" className="dark:fill-[#261E1A]" />
    <circle cx="150" cy="80" r="48" fill="#B84040" fillOpacity="0.10" />

    {/* Swarm of Attacking Botnet Nodes on Left */}
    <g transform="translate(35, 30)">
      <circle cx="10" cy="20" r="8" fill="#E58A4E" />
      <circle cx="10" cy="50" r="8" fill="#E58A4E" />
      <circle cx="10" cy="80" r="8" fill="#E58A4E" />
      <circle cx="30" cy="35" r="8" fill="#C97438" />
      <circle cx="30" cy="65" r="8" fill="#C97438" />

      {/* Traffic Arrows Flooding Center */}
      <path d="M20 20l80 20" stroke="#B84040" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M20 50l80 0" stroke="#B84040" strokeWidth="2.5" strokeDasharray="4 2" />
      <path d="M20 80l80-20" stroke="#B84040" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M40 35l60 10M40 65l60-10" stroke="#B84040" strokeWidth="2" />
    </g>

    {/* Overloaded Web Server Rack on Right */}
    <rect x="140" y="44" width="60" height="76" rx="4" fill="#181C1A" stroke="#B84040" strokeWidth="2" />
    <rect x="148" y="54" width="44" height="12" rx="2" fill="#3A4840" />
    <circle cx="154" cy="60" r="2" fill="#B84040" />
    <rect x="148" y="72" width="44" height="12" rx="2" fill="#3A4840" />
    <circle cx="154" cy="78" r="2" fill="#B84040" />
    <rect x="148" y="90" width="44" height="12" rx="2" fill="#3A4840" />
    <circle cx="154" cy="96" r="2" fill="#B84040" />

    {/* Error 503 / Smoke Burst */}
    <g transform="translate(145, 20)">
      <rect x="0" y="0" width="50" height="18" rx="4" fill="#B84040" />
      <text x="25" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">503 DOWN</text>
    </g>
  </svg>
);

// 04. SQL Injection (Database Query Tampering)
export const SqlInjectionIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F3" className="dark:fill-[#1A261D]" />

    {/* Input Form Box on Left */}
    <rect x="30" y="60" width="85" height="42" rx="4" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
    <rect x="36" y="68" width="73" height="14" rx="2" fill="#EEF3EE" className="dark:fill-[#181C1A]" />
    <text x="40" y="78" fill="#B84040" fontSize="7" fontFamily="monospace" fontWeight="bold">&apos; OR 1=1--</text>
    <rect x="36" y="88" width="30" height="8" rx="2" fill="#3F7D5A" />
    <text x="51" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="6">SUBMIT</text>

    {/* Injection Piercing Pipeline */}
    <path d="M115 81h25" stroke="#B84040" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="144,81 138,77 138,85" fill="#B84040" />

    {/* Database Cylinder Stack on Right */}
    <g transform="translate(150, 48)">
      {/* Top Cylinder */}
      <ellipse cx="30" cy="12" rx="30" ry="8" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" className="dark:fill-[#262E28]" />
      <path d="M0 12v18c0 5 13 8 30 8s30-3 30-8V12" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" className="dark:fill-[#262E28]" />
      {/* Middle Cylinder */}
      <path d="M0 30v18c0 5 13 8 30 8s30-3 30-8V30" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" className="dark:fill-[#262E28]" />
      {/* Cracked / Leaking Database Symbol */}
      <path d="M22 28l12 12-6 6" stroke="#B84040" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="52" r="3" fill="#B84040" />
      <circle cx="56" cy="58" r="2" fill="#B84040" />
    </g>
  </svg>
);

// 05. Cross-Site Scripting (XSS Browser DOM Injection)
export const XssIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF8EE" className="dark:fill-[#26221A]" />
    
    {/* Browser Window Frame */}
    <rect x="45" y="40" width="150" height="85" rx="6" fill="#FFFFFF" stroke="#D7A84B" strokeWidth="2" className="dark:fill-[#262E28]" />
    <rect x="45" y="40" width="150" height="16" fill="#EEF3EE" className="dark:fill-[#202722]" />
    <circle cx="55" cy="48" r="2.5" fill="#B84040" />
    <circle cx="63" cy="48" r="2.5" fill="#D7A84B" />
    <circle cx="71" cy="48" r="2.5" fill="#3F7D5A" />
    <rect x="85" y="44" width="90" height="8" rx="2" fill="#FFFFFF" className="dark:fill-[#181C1A]" />

    {/* Injected Script Alert Modal */}
    <g transform="translate(75, 68)">
      <rect x="0" y="0" width="90" height="46" rx="4" fill="#FFFFFF" stroke="#B84040" strokeWidth="2" className="dark:fill-[#181C1A]" />
      <rect x="0" y="0" width="90" height="14" fill="#B84040" />
      <text x="8" y="10" fill="#FFFFFF" fontSize="7" fontWeight="bold">&lt;script&gt;alert(1)&lt;/script&gt;</text>
      
      {/* Cookie Exfiltration Tag */}
      <text x="8" y="26" fill="#B84040" fontSize="7" fontFamily="monospace">document.cookie</text>
      <path d="M68 28l12-8" stroke="#B84040" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 06. Man-in-the-Middle (MitM Network Interception)
export const MitmIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#EEF6F8" className="dark:fill-[#1A2528]" />

    {/* Client Laptop on Left */}
    <rect x="30" y="80" width="46" height="28" rx="3" fill="#FFFFFF" stroke="#4C9A91" strokeWidth="1.5" className="dark:fill-[#262E28]" />
    <rect x="25" y="108" width="56" height="4" rx="1" fill="#3A4840" />
    <text x="53" y="96" textAnchor="middle" fill="#4C9A91" fontSize="7" fontWeight="bold">USER</text>

    {/* Server on Right */}
    <rect x="165" y="75" width="45" height="38" rx="3" fill="#FFFFFF" stroke="#4C9A91" strokeWidth="1.5" className="dark:fill-[#262E28]" />
    <circle cx="173" cy="83" r="2" fill="#4C9A91" />
    <circle cx="173" cy="91" r="2" fill="#4C9A91" />
    <text x="187" y="104" textAnchor="middle" fill="#4C9A91" fontSize="7" fontWeight="bold">SERVER</text>

    {/* Intercepted Cable Flow */}
    <path d="M76 94h24l20-30 20 30h25" stroke="#4C9A91" strokeWidth="2" strokeDasharray="3 3" />

    {/* Malicious Interceptor in Center */}
    <g transform="translate(100, 40)">
      <circle cx="20" cy="20" r="18" fill="#181C1A" stroke="#B84040" strokeWidth="2" />
      {/* Mask / Headphones */}
      <circle cx="20" cy="18" r="9" fill="#FCEAD4" />
      <path d="M12 18c0-5 3-9 8-9s8 4 8 9" stroke="#B84040" strokeWidth="3" fill="none" />
      <rect x="10" y="16" width="3" height="6" rx="1" fill="#B84040" />
      <rect x="27" y="16" width="3" height="6" rx="1" fill="#B84040" />
    </g>
  </svg>
);

// 07. Malware / Trojan Horse (Hidden Malicious Payload)
export const MalwareIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3F3" className="dark:fill-[#281A1A]" />
    <circle cx="120" cy="80" r="54" fill="#B84040" fillOpacity="0.10" />

    {/* Gift / Download Box Shell (Trojan disguise) */}
    <rect x="65" y="70" width="55" height="50" rx="4" fill="#FFFFFF" stroke="#D7A84B" strokeWidth="2" className="dark:fill-[#262E28]" />
    <rect x="60" y="62" width="65" height="12" rx="3" fill="#D7A84B" />
    <path d="M92.5 62v58" stroke="#D7A84B" strokeWidth="3" />
    <path d="M85 55c0-5 7-5 7 0M100 55c0-5-7-5-7 0" stroke="#D7A84B" strokeWidth="2" fill="none" />

    {/* Evil Bug / Payload Emerging */}
    <g transform="translate(130, 65)">
      <circle cx="25" cy="25" r="16" fill="#B84040" />
      {/* Bug Eyes */}
      <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
      <circle cx="30" cy="20" r="2.5" fill="#FFFFFF" />
      {/* Bug Antennae */}
      <path d="M18 12c-4-4-8-2-10 0M32 12c4-4 8-2 10 0" stroke="#B84040" strokeWidth="2" strokeLinecap="round" />
      {/* Bug Legs */}
      <path d="M10 25h-5M40 25h5M12 34l-5 5M38 34l5 5" stroke="#B84040" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 08. Zero-Day Vulnerability (Ticking Clock & Unknown Flaw)
export const ZeroDayIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF3EE" className="dark:fill-[#261E1A]" />
    
    {/* Ticking Stop Clock */}
    <circle cx="120" cy="80" r="46" fill="#FFFFFF" stroke="#E58A4E" strokeWidth="3" className="dark:fill-[#262E28]" />
    <circle cx="120" cy="80" r="4" fill="#B84040" />
    <line x1="120" y1="80" x2="120" y2="52" stroke="#B84040" strokeWidth="3" strokeLinecap="round" />
    <line x1="120" y1="80" x2="142" y2="80" stroke="#E58A4E" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Top Clock Button */}
    <rect x="115" y="26" width="10" height="8" rx="2" fill="#E58A4E" />

    {/* Day 0 Badge */}
    <g transform="translate(150, 40)">
      <circle cx="18" cy="18" r="18" fill="#B84040" />
      <text x="18" y="23" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="black">0d</text>
    </g>
  </svg>
);

// Helper function to pick the right illustration based on threat ID
export const getThreatIllustration = (id: string): React.ReactNode => {
  switch (id) {
    case 'phishing':
    case 'spear-phishing':
      return <PhishingIllustration />;
    case 'ransomware':
      return <RansomwareIllustration />;
    case 'ddos':
      return <DdosIllustration />;
    case 'sql-injection':
      return <SqlInjectionIllustration />;
    case 'xss':
      return <XssIllustration />;
    case 'man-in-the-middle':
      return <MitmIllustration />;
    case 'malware':
    case 'trojan':
      return <MalwareIllustration />;
    case 'zero-day':
      return <ZeroDayIllustration />;
    default:
      return <PhishingIllustration />;
  }
};
