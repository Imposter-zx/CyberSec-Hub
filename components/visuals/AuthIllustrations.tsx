'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 01. Passwords & Passphrases (Knowledge Factor)
export const PasswordAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F3" className="dark:fill-[#1E2822]" />
    <circle cx="120" cy="80" r="54" fill="#3F7D5A" fillOpacity="0.10" />

    {/* Input Box Card */}
    <rect x="36" y="44" width="168" height="72" rx="12" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" className="dark:fill-[#262E28]" />
    <rect x="52" y="60" width="136" height="36" rx="8" fill="#EEF3EE" stroke="#DDE5DE" strokeWidth="1.5" className="dark:fill-[#202722] dark:stroke-[#3A4840]" />
    
    {/* Password Masked Dots */}
    <circle cx="68" cy="78" r="4.5" fill="#18221C" className="dark:fill-[#E8F0EA]" />
    <circle cx="82" cy="78" r="4.5" fill="#18221C" className="dark:fill-[#E8F0EA]" />
    <circle cx="96" cy="78" r="4.5" fill="#18221C" className="dark:fill-[#E8F0EA]" />
    <circle cx="110" cy="78" r="4.5" fill="#18221C" className="dark:fill-[#E8F0EA]" />
    <circle cx="124" cy="78" r="4.5" fill="#18221C" className="dark:fill-[#E8F0EA]" />
    <circle cx="138" cy="78" r="4.5" fill="#18221C" className="dark:fill-[#E8F0EA]" />

    {/* Lock icon on input */}
    <g transform="translate(162, 70)">
      <rect x="0" y="6" width="14" height="10" rx="2" fill="#3F7D5A" />
      <path d="M3 6V4a4 4 0 018 0v2" stroke="#3F7D5A" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Hashing Function Transformation Arrow */}
    <g transform="translate(68, 122)">
      <rect x="0" y="0" width="104" height="22" rx="6" fill="#3F7D5A" />
      <text x="52" y="15" fill="#FFFFFF" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">
        Argon2id Salted Hash
      </text>
    </g>
  </svg>
);

// 02. PIN / Local Device Auth
export const PinAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF6E7" className="dark:fill-[#25221B]" />
    <circle cx="120" cy="80" r="54" fill="#D7A84B" fillOpacity="0.12" />

    {/* Device Keypad Case */}
    <rect x="70" y="24" width="100" height="112" rx="14" fill="#FFFFFF" stroke="#D7A84B" strokeWidth="2" className="dark:fill-[#262E28]" />
    
    {/* PIN Input Slots */}
    <g transform="translate(84, 38)">
      <rect x="0" y="0" width="14" height="16" rx="4" fill="#EEF3EE" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#202722]" />
      <circle cx="7" cy="8" r="2.5" fill="#3F7D5A" />
      
      <rect x="18" y="0" width="14" height="16" rx="4" fill="#EEF3EE" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#202722]" />
      <circle cx="25" cy="8" r="2.5" fill="#3F7D5A" />

      <rect x="36" y="0" width="14" height="16" rx="4" fill="#EEF3EE" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#202722]" />
      <circle cx="43" cy="8" r="2.5" fill="#3F7D5A" />

      <rect x="54" y="0" width="14" height="16" rx="4" fill="#EEF3EE" stroke="#DDE5DE" strokeWidth="1.5" className="dark:fill-[#202722]" />
    </g>

    {/* Keypad Buttons (3x3 grid) */}
    <g transform="translate(84, 64)" fill="#EEF3EE" stroke="#DDE5DE" strokeWidth="1" className="dark:fill-[#202722] dark:stroke-[#3A4840]">
      {/* Row 1 */}
      <rect x="0" y="0" width="20" height="16" rx="4" />
      <rect x="26" y="0" width="20" height="16" rx="4" />
      <rect x="52" y="0" width="20" height="16" rx="4" />
      {/* Row 2 */}
      <rect x="0" y="20" width="20" height="16" rx="4" />
      <rect x="26" y="20" width="20" height="16" rx="4" />
      <rect x="52" y="20" width="20" height="16" rx="4" />
      {/* Row 3 */}
      <rect x="0" y="40" width="20" height="16" rx="4" />
      <rect x="26" y="40" width="20" height="16" rx="4" fill="#3F7D5A" stroke="#3F7D5A" />
      <rect x="52" y="40" width="20" height="16" rx="4" />
    </g>

    {/* Hardware Security Chip Badge */}
    <g transform="translate(176, 36)">
      <rect x="0" y="0" width="28" height="24" rx="4" fill="#D7A84B" />
      <text x="14" y="15" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        TPM
      </text>
    </g>
  </svg>
);

// 03. Multi-Factor Authentication (MFA / 2FA)
export const MfaAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F3" className="dark:fill-[#1E2822]" />
    <circle cx="120" cy="80" r="54" fill="#3F7D5A" fillOpacity="0.10" />

    {/* Factor 1: Password Key */}
    <g transform="translate(38, 48)">
      <rect x="0" y="0" width="48" height="64" rx="10" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <circle cx="24" cy="24" r="10" stroke="#3F7D5A" strokeWidth="2" />
      <path d="M24 34v16M24 42h6M24 48h4" stroke="#3F7D5A" strokeWidth="2" strokeLinecap="round" />
      <text x="24" y="60" fill="#3F7D5A" fontSize="7" fontWeight="700" textAnchor="middle">KNOW</text>
    </g>

    {/* Plus connector */}
    <text x="100" y="86" fill="#3F7D5A" fontSize="20" fontWeight="800" textAnchor="middle">+</text>

    {/* Factor 2: Smartphone Authenticator */}
    <g transform="translate(114, 38)">
      <rect x="0" y="0" width="48" height="84" rx="10" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <rect x="4" y="8" width="40" height="66" rx="4" fill="#EEF3EE" className="dark:fill-[#202722]" />
      <circle cx="24" cy="79" r="2.5" fill="#3F7D5A" />
      {/* Dynamic 6-digit rolling code */}
      <rect x="8" y="24" width="32" height="16" rx="4" fill="#3F7D5A" />
      <text x="24" y="35" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        849 201
      </text>
      {/* Countdown timer ring */}
      <circle cx="24" cy="54" r="8" stroke="#3F7D5A" strokeWidth="1.5" strokeDasharray="30 15" />
      <text x="24" y="57" fill="#3F7D5A" fontSize="7" fontWeight="800" textAnchor="middle">18s</text>
    </g>

    {/* Verification Badge */}
    <g transform="translate(176, 68)">
      <circle cx="16" cy="16" r="16" fill="#3F7D5A" />
      <path d="M11 16l4 4 7-8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 04. Biometrics (Fingerprint & Face Recognition)
export const BiometricAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#EBF5F4" className="dark:fill-[#1C2624]" />
    <circle cx="120" cy="80" r="54" fill="#4C9A91" fillOpacity="0.12" />

    {/* Scanner Pod */}
    <rect x="70" y="25" width="100" height="110" rx="20" fill="#FFFFFF" stroke="#4C9A91" strokeWidth="2" className="dark:fill-[#262E28]" />
    
    {/* Concentric Fingerprint Ridges */}
    <g transform="translate(120, 80)" stroke="#4C9A91" strokeWidth="2" strokeLinecap="round" fill="none">
      <path d="M-6 -2c0 -6 6 -6 6 -6s6 0 6 6v12c0 6 -6 6 -6 6" />
      <path d="M-14 4v-10c0 -10 10 -14 14 -14s14 4 14 14v8c0 8 -8 12 -14 12" />
      <path d="M-22 10v-16c0 -16 16 -20 22 -20s22 4 22 20v14" />
      <path d="M-30 18v-22c0 -20 20 -26 30 -26s30 6 30 26v8" />
    </g>

    {/* Laser scan line across fingerprint */}
    <line x1="75" y1="80" x2="165" y2="80" stroke="#E58A4E" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
    
    {/* Bio Verified Stamp */}
    <g transform="translate(156, 32)">
      <circle cx="14" cy="14" r="14" fill="#3F7D5A" />
      <path d="M9 14l3.5 3.5 6-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 05. Passkeys & FIDO2 WebAuthn (Public-Key Cryptography)
export const PasskeyAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F3" className="dark:fill-[#1E2822]" />
    <circle cx="120" cy="80" r="54" fill="#3F7D5A" fillOpacity="0.10" />

    {/* User Device (Local Private Key) */}
    <g transform="translate(35, 42)">
      <rect x="0" y="0" width="60" height="76" rx="10" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <text x="30" y="16" fill="#3F7D5A" fontSize="7" fontWeight="800" textAnchor="middle">DEVICE</text>
      {/* Private Key */}
      <circle cx="30" cy="38" r="9" stroke="#E58A4E" strokeWidth="2" />
      <path d="M30 47v14M30 54h4M30 59h3" stroke="#E58A4E" strokeWidth="2" strokeLinecap="round" />
      <text x="30" y="70" fill="#E58A4E" fontSize="7" fontWeight="800" textAnchor="middle">Private Key</text>
    </g>

    {/* Cryptographic Challenge / Response Tunnel */}
    <g transform="translate(102, 65)">
      <line x1="0" y1="10" x2="36" y2="10" stroke="#3F7D5A" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="36,10 30,6 30,14" fill="#3F7D5A" />
      <text x="18" y="5" fill="#3F7D5A" fontSize="6.5" fontWeight="700" textAnchor="middle">Signature</text>
      <text x="18" y="24" fill="#68736B" fontSize="6" textAnchor="middle">No Password</text>
    </g>

    {/* Relying Party Web Server (Public Key) */}
    <g transform="translate(145, 42)">
      <rect x="0" y="0" width="60" height="76" rx="10" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <text x="30" y="16" fill="#3F7D5A" fontSize="7" fontWeight="800" textAnchor="middle">SERVER</text>
      {/* Public Key */}
      <circle cx="30" cy="38" r="9" stroke="#3F7D5A" strokeWidth="2" />
      <path d="M30 47v14M30 54h4" stroke="#3F7D5A" strokeWidth="2" strokeLinecap="round" />
      <text x="30" y="70" fill="#3F7D5A" fontSize="7" fontWeight="800" textAnchor="middle">Public Key</text>
    </g>

    {/* FIDO2 Certified Badge */}
    <g transform="translate(95, 124)">
      <rect x="0" y="0" width="50" height="18" rx="6" fill="#3F7D5A" />
      <text x="25" y="12" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        FIDO2
      </text>
    </g>
  </svg>
);

// 06. Hardware Security Key (e.g., YubiKey)
export const HardwareKeyAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF2EA" className="dark:fill-[#261E1A]" />
    <circle cx="120" cy="80" r="54" fill="#E58A4E" fillOpacity="0.12" />

    {/* Physical Hardware Dongle (USB-C / USB-A) */}
    <g transform="translate(60, 60)">
      {/* USB connector tip */}
      <rect x="0" y="10" width="22" height="20" rx="2" fill="#DDE5DE" stroke="#68736B" strokeWidth="1.5" />
      <rect x="6" y="14" width="10" height="3" fill="#68736B" />
      <rect x="6" y="23" width="10" height="3" fill="#68736B" />

      {/* Main Key Body */}
      <rect x="22" y="0" width="98" height="40" rx="8" fill="#18221C" stroke="#E58A4E" strokeWidth="2" />
      
      {/* Keyhole / Lanyard cutout */}
      <circle cx="106" cy="20" r="6" fill="#FDF2EA" className="dark:fill-[#261E1A]" stroke="#68736B" strokeWidth="1.5" />

      {/* Gold Capacitive Touch Sensor */}
      <circle cx="56" cy="20" r="11" fill="#D7A84B" stroke="#B89B62" strokeWidth="1.5" />
      <path d="M52 20h8M56 16v8" stroke="#18221C" strokeWidth="2" strokeLinecap="round" />
      
      {/* Pulsing indicator ring */}
      <circle cx="56" cy="20" r="15" stroke="#E58A4E" strokeWidth="1" strokeDasharray="3 3" />
    </g>

    {/* Security Tag */}
    <g transform="translate(74, 118)">
      <rect x="0" y="0" width="92" height="20" rx="6" fill="#E58A4E" />
      <text x="46" y="13" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        Phishing-Resistant
      </text>
    </g>
  </svg>
);

// 07. Digital Certificates & PKI (X.509)
export const CertificateAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#F0F7F3" className="dark:fill-[#1E2822]" />
    <circle cx="120" cy="80" r="54" fill="#3F7D5A" fillOpacity="0.10" />

    {/* Certificate Parchment / Card */}
    <rect x="65" y="24" width="110" height="112" rx="10" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="2" className="dark:fill-[#262E28]" />
    
    {/* Certificate Border Line */}
    <rect x="71" y="30" width="98" height="100" rx="6" stroke="#DDE5DE" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-[#3A4840]" />
    
    {/* Title lines */}
    <rect x="85" y="40" width="70" height="6" rx="2" fill="#3F7D5A" />
    <rect x="95" y="52" width="50" height="4" rx="2" fill="#68736B" opacity="0.5" />

    {/* Body text lines */}
    <line x1="82" y1="68" x2="158" y2="68" stroke="#68736B" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <line x1="82" y1="76" x2="148" y2="76" stroke="#68736B" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <line x1="82" y1="84" x2="135" y2="84" stroke="#68736B" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

    {/* Official Golden CA Ribbon Stamp */}
    <g transform="translate(136, 94)">
      <circle cx="16" cy="16" r="14" fill="#D7A84B" />
      <polygon points="16,28 10,38 16,35 22,38" fill="#B89B62" />
      <path d="M12 16l3 3 5-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* X.509 Badge */}
    <g transform="translate(80, 102)">
      <rect x="0" y="0" width="46" height="18" rx="4" fill="#3F7D5A" />
      <text x="23" y="12" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        X.509
      </text>
    </g>
  </svg>
);

// 08. Single Sign-On & Identity Federation (SSO / OAuth / OIDC / SAML)
export const SsoAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="16" fill="#FDF6E7" className="dark:fill-[#25221B]" />
    <circle cx="120" cy="80" r="54" fill="#D7A84B" fillOpacity="0.10" />

    {/* Central Identity Provider (IdP) */}
    <g transform="translate(95, 52)">
      <circle cx="25" cy="25" r="25" fill="#3F7D5A" />
      <rect x="18" y="24" width="14" height="12" rx="2" fill="#FFFFFF" />
      <path d="M21 24v-4a4 4 0 018 0v4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <text x="25" y="44" fill="#FFFFFF" fontSize="6" fontWeight="800" textAnchor="middle">IdP</text>
    </g>

    {/* Connected Service Providers (Apps) */}
    {/* App 1: Top Left */}
    <g transform="translate(36, 26)">
      <rect x="0" y="0" width="36" height="28" rx="6" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <text x="18" y="17" fill="#18221C" fontSize="7" fontWeight="700" textAnchor="middle" className="dark:fill-[#E8F0EA]">Cloud</text>
      <line x1="36" y1="20" x2="95" y2="60" stroke="#3F7D5A" strokeWidth="1.5" strokeDasharray="3 3" />
    </g>

    {/* App 2: Bottom Left */}
    <g transform="translate(36, 106)">
      <rect x="0" y="0" width="36" height="28" rx="6" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <text x="18" y="17" fill="#18221C" fontSize="7" fontWeight="700" textAnchor="middle" className="dark:fill-[#E8F0EA]">Git</text>
      <line x1="36" y1="114" x2="95" y2="90" stroke="#3F7D5A" strokeWidth="1.5" strokeDasharray="3 3" />
    </g>

    {/* App 3: Right Center */}
    <g transform="translate(170, 66)">
      <rect x="0" y="0" width="38" height="28" rx="6" fill="#FFFFFF" stroke="#3F7D5A" strokeWidth="1.5" className="dark:fill-[#262E28]" />
      <text x="19" y="17" fill="#18221C" fontSize="7" fontWeight="700" textAnchor="middle" className="dark:fill-[#E8F0EA]">SaaS</text>
      <line x1="145" y1="77" x2="170" y2="77" stroke="#3F7D5A" strokeWidth="1.5" strokeDasharray="3 3" />
    </g>

    {/* Protocol Badge */}
    <g transform="translate(70, 126)">
      <rect x="0" y="0" width="100" height="20" rx="6" fill="#D7A84B" />
      <text x="50" y="13" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="monospace">
        OAuth 2.0 / SAML 2.0
      </text>
    </g>
  </svg>
);

// Helper function to pick the right illustration based on authentication concept ID
export const getAuthIllustration = (id: string): React.ReactNode => {
  switch (id) {
    case 'password':
      return <PasswordAuthIllustration />;
    case 'pin':
      return <PinAuthIllustration />;
    case 'mfa':
    case '2fa':
    case 'otp':
      return <MfaAuthIllustration />;
    case 'biometrics':
    case 'biometric':
      return <BiometricAuthIllustration />;
    case 'passkeys':
    case 'passkey':
    case 'fido2':
      return <PasskeyAuthIllustration />;
    case 'hardware-token':
    case 'security-key':
      return <HardwareKeyAuthIllustration />;
    case 'certificate':
    case 'pki':
      return <CertificateAuthIllustration />;
    case 'sso':
    case 'oauth-2':
    case 'saml':
    case 'oidc':
    case 'aaa-framework':
      return <SsoAuthIllustration />;
    default:
      return <PasswordAuthIllustration />;
  }
};
