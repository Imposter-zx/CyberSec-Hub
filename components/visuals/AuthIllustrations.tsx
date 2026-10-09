'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
}

// 01. Passwords & Passphrases (Knowledge Factor)
export const PasswordAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#00FF66" fillOpacity="0.08" />

    {/* Input Box Card */}
    <rect x="36" y="44" width="168" height="72" rx="12" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <rect x="52" y="60" width="136" height="36" rx="8" fill="#050705" stroke="#1B2A1F" strokeWidth="1.5" />
    
    {/* Password Masked Dots */}
    <circle cx="68" cy="78" r="4.5" fill="#00FF66" />
    <circle cx="82" cy="78" r="4.5" fill="#00FF66" />
    <circle cx="96" cy="78" r="4.5" fill="#00FF66" />
    <circle cx="110" cy="78" r="4.5" fill="#00FF66" />
    <circle cx="124" cy="78" r="4.5" fill="#00FF66" />
    <circle cx="138" cy="78" r="4.5" fill="#00FF66" />

    {/* Lock icon on input */}
    <g transform="translate(162, 70)">
      <rect x="0" y="6" width="14" height="10" rx="2" fill="#00FF66" />
      <path d="M3 6V4a4 4 0 018 0v2" stroke="#00FF66" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Hashing Function Transformation Badge */}
    <g transform="translate(68, 122)">
      <rect x="0" y="0" width="104" height="22" rx="4" fill="#050705" stroke="#00FF66" strokeWidth="1" />
      <text x="52" y="15" fill="#00FF66" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="monospace">
        Argon2id Salted Hash
      </text>
    </g>
  </svg>
);

// 02. PIN / Local Device Auth
export const PinAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#D9A441" fillOpacity="0.08" />

    {/* Device Keypad Case */}
    <rect x="70" y="24" width="100" height="112" rx="12" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
    
    {/* PIN Input Slots */}
    <g transform="translate(84, 38)">
      <rect x="0" y="0" width="14" height="16" rx="3" fill="#050705" stroke="#00FF66" strokeWidth="1.5" />
      <circle cx="7" cy="8" r="2.5" fill="#00FF66" />
      
      <rect x="18" y="0" width="14" height="16" rx="3" fill="#050705" stroke="#00FF66" strokeWidth="1.5" />
      <circle cx="25" cy="8" r="2.5" fill="#00FF66" />

      <rect x="36" y="0" width="14" height="16" rx="3" fill="#050705" stroke="#00FF66" strokeWidth="1.5" />
      <circle cx="43" cy="8" r="2.5" fill="#00FF66" />

      <rect x="54" y="0" width="14" height="16" rx="3" fill="#050705" stroke="#1B2A1F" strokeWidth="1.5" />
    </g>

    {/* Keypad Digits */}
    <g transform="translate(84, 64)" fill="#050705" stroke="#1B2A1F" strokeWidth="1">
      <rect x="0" y="0" width="20" height="16" rx="3" />
      <rect x="26" y="0" width="20" height="16" rx="3" />
      <rect x="52" y="0" width="20" height="16" rx="3" />

      <rect x="0" y="20" width="20" height="16" rx="3" />
      <rect x="26" y="20" width="20" height="16" rx="3" />
      <rect x="52" y="20" width="20" height="16" rx="3" />

      <rect x="0" y="40" width="20" height="16" rx="3" />
      <rect x="26" y="40" width="20" height="16" rx="3" />
      <rect x="52" y="40" width="20" height="16" rx="3" />
    </g>
  </svg>
);

// 03. Multi-Factor Authentication (MFA / TOTP)
export const MfaAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#00FF66" fillOpacity="0.08" />

    {/* Primary Password Key Factor */}
    <rect x="36" y="55" width="64" height="60" rx="8" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <text x="68" y="75" fill="#00FF66" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">1. PASS</text>
    <circle cx="68" cy="92" r="10" stroke="#00FF66" strokeWidth="2" />
    <line x1="68" y1="92" x2="82" y2="92" stroke="#00FF66" strokeWidth="2" />

    {/* Plus sign */}
    <text x="110" y="88" fill="#00FF66" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+</text>

    {/* TOTP Authenticator Smartphone */}
    <rect x="125" y="40" width="76" height="90" rx="10" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <rect x="135" y="52" width="56" height="64" rx="4" fill="#050705" stroke="#1B2A1F" />
    <text x="163" y="70" fill="#91A596" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AUTHENTICATOR</text>
    <text x="163" y="90" fill="#00FF66" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="monospace">849 201</text>
    
    {/* Countdown 30s circle */}
    <circle cx="163" cy="104" r="5" stroke="#00FF66" strokeWidth="1.5" strokeDasharray="18 10" />
  </svg>
);

// 04. Biometrics (Fingerprint & Face ID)
export const BiometricAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#00FF66" fillOpacity="0.08" />

    {/* Fingerprint Scanner Box */}
    <rect x="65" y="30" width="110" height="100" rx="14" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />

    {/* Stylized Fingerprint Ridges */}
    <g transform="translate(120, 75)" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" fill="none">
      <path d="M-8 -18c5 -5 11 -5 16 0" />
      <path d="M-16 -10c9 -10 23 -10 32 0" />
      <path d="M-22 0c12 -16 32 -16 44 0c0 14 -8 24 -18 30" />
      <path d="M-22 14c4 12 12 20 22 20" />
      <path d="M-10 6c0 -8 10 -12 20 -6c0 12 -8 20 -16 26" />
      <path d="M0 16c0 -4 4 -6 8 -4c0 6 -4 10 -8 14" />
    </g>

    {/* Laser scan line across fingerprint */}
    <line x1="75" y1="78" x2="165" y2="78" stroke="#00FF66" strokeWidth="2" strokeDasharray="4 2" />

    {/* Verification Badge */}
    <g transform="translate(162, 34)">
      <circle cx="14" cy="14" r="14" fill="#0D2214" stroke="#00FF66" strokeWidth="1.5" />
      <path d="M9 14l4 4 7-7" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 05. Passkeys (FIDO2 / WebAuthn Asymmetric Credential)
export const PasskeyAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#00FF66" fillOpacity="0.08" />

    {/* Device (Private Key) */}
    <rect x="35" y="45" width="70" height="70" rx="10" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <text x="70" y="65" fill="#00FF66" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">USER DEVICE</text>
    <rect x="52" y="75" width="36" height="24" rx="4" fill="#050705" stroke="#00FF66" strokeWidth="1" />
    <text x="70" y="90" fill="#00FF66" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">PRIV KEY</text>

    {/* Cryptographic Challenge / Signature Line */}
    <path d="M106 80h28" stroke="#00FF66" strokeWidth="2" strokeDasharray="3 3" />
    <polygon points="134,80 128,76 128,84" fill="#00FF66" />

    {/* Relying Party Web Server (Public Key) */}
    <rect x="135" y="45" width="70" height="70" rx="10" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <text x="170" y="65" fill="#00FF66" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">WEB SERVER</text>
    <rect x="152" y="75" width="36" height="24" rx="4" fill="#050705" stroke="#00FF66" strokeWidth="1" />
    <text x="170" y="90" fill="#00FF66" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">PUB KEY</text>

    {/* FIDO2 Certified Badge */}
    <g transform="translate(90, 122)">
      <rect x="0" y="0" width="60" height="18" rx="4" fill="#050705" stroke="#00FF66" strokeWidth="1" />
      <text x="30" y="12" fill="#00FF66" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">FIDO2 / W3C</text>
    </g>
  </svg>
);

// 06. Hardware Security Keys (YubiKey / Smartcard)
export const HardwareKeyAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#D9A441" fillOpacity="0.08" />

    {/* USB YubiKey Body */}
    <rect x="75" y="45" width="90" height="70" rx="10" fill="#0E1510" stroke="#D9A441" strokeWidth="1.5" />
    {/* Keyhole hole */}
    <circle cx="95" cy="80" r="8" fill="#050705" stroke="#D9A441" strokeWidth="1.5" />
    {/* Golden Capacitive Sensor Touch Button */}
    <circle cx="135" cy="80" r="14" fill="#241C0E" stroke="#D9A441" strokeWidth="2" />
    <text x="135" y="84" fill="#D9A441" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Y</text>

    {/* USB Connector Plug */}
    <rect x="165" y="65" width="22" height="30" rx="2" fill="#050705" stroke="#D9A441" strokeWidth="1.5" />
    <rect x="175" y="73" width="6" height="4" fill="#D9A441" />
    <rect x="175" y="83" width="6" height="4" fill="#D9A441" />

    {/* Phishing Resistant Stamp */}
    <g transform="translate(68, 124)">
      <rect x="0" y="0" width="104" height="18" rx="4" fill="#050705" stroke="#00FF66" strokeWidth="1" />
      <text x="52" y="12" fill="#00FF66" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        PHISHING RESISTANT
      </text>
    </g>
  </svg>
);

// 07. X.509 Certificates & PKI
export const CertificateAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#00FF66" fillOpacity="0.08" />

    {/* Certificate Parchment */}
    <rect x="65" y="30" width="110" height="100" rx="8" fill="#0E1510" stroke="#00FF66" strokeWidth="1.5" />
    <rect x="75" y="42" width="90" height="6" rx="2" fill="#00FF66" />
    <rect x="75" y="56" width="60" height="4" rx="1" fill="#1B2A1F" />
    <rect x="75" y="66" width="75" height="4" rx="1" fill="#1B2A1F" />
    <rect x="75" y="76" width="50" height="4" rx="1" fill="#1B2A1F" />
    <rect x="75" y="86" width="68" height="4" rx="1" fill="#1B2A1F" />

    {/* Golden CA Signature Stamp */}
    <g transform="translate(135, 95)">
      <circle cx="14" cy="14" r="14" fill="#241C0E" stroke="#D9A441" strokeWidth="2" />
      <circle cx="14" cy="14" r="8" stroke="#D9A441" strokeWidth="1" />
      {/* Ribbon tails */}
      <polygon points="10,26 14,22 18,26 18,34 14,30 10,34" fill="#D9A441" />
    </g>
  </svg>
);

// 08. SSO (Single Sign-On & OAuth / SAML)
export const SsoAuthIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" rx="14" fill="#050705" />
    <circle cx="120" cy="80" r="54" fill="#42C2A8" fillOpacity="0.08" />

    {/* Central IdP Hub */}
    <circle cx="120" cy="80" r="26" fill="#0E1510" stroke="#00FF66" strokeWidth="2" />
    <text x="120" y="78" fill="#00FF66" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">IDP</text>
    <text x="120" y="88" fill="#91A596" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="monospace">HUB</text>

    {/* 3 Service Providers (Apps) */}
    {/* App 1 Top */}
    <rect x="105" y="20" width="30" height="20" rx="4" fill="#0E1510" stroke="#42C2A8" strokeWidth="1.5" />
    <text x="120" y="32" fill="#42C2A8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">APP 1</text>
    <line x1="120" y1="40" x2="120" y2="54" stroke="#42C2A8" strokeWidth="1.5" strokeDasharray="2 2" />

    {/* App 2 Bottom Left */}
    <rect x="45" y="115" width="30" height="20" rx="4" fill="#0E1510" stroke="#42C2A8" strokeWidth="1.5" />
    <text x="60" y="127" fill="#42C2A8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">APP 2</text>
    <line x1="72" y1="115" x2="98" y2="95" stroke="#42C2A8" strokeWidth="1.5" strokeDasharray="2 2" />

    {/* App 3 Bottom Right */}
    <rect x="165" y="115" width="30" height="20" rx="4" fill="#0E1510" stroke="#42C2A8" strokeWidth="1.5" />
    <text x="180" y="127" fill="#42C2A8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">APP 3</text>
    <line x1="168" y1="115" x2="142" y2="95" stroke="#42C2A8" strokeWidth="1.5" strokeDasharray="2 2" />

    {/* Badge */}
    <g transform="translate(15, 25)">
      <rect x="0" y="0" width="60" height="18" rx="4" fill="#050705" stroke="#00FF66" strokeWidth="1" />
      <text x="30" y="12" fill="#00FF66" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">OAUTH / SAML</text>
    </g>
  </svg>
);

export const getAuthIllustration = (id: string): React.ReactNode => {
  switch (id) {
    case 'password':
      return <PasswordAuthIllustration />;
    case 'pin':
    case 'security-questions':
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
