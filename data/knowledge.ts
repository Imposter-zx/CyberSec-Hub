import { KnowledgeTopic } from '@/types';

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    id: 'zero-trust',
    title: 'Zero Trust Architecture (ZTA)',
    category: 'Security Architecture',
    definition: 'A cybersecurity paradigm based on the principle of "Never Trust, Always Verify," requiring all users and devices to be continuously authenticated, authorized, and validated before being granted access to applications and data.',
    explanation: 'Traditional security relied on perimeter castle-and-moat security where anyone inside the internal network was implicitly trusted. Zero Trust assumes the internal network is already hostile (assumed breach). Access decisions are evaluated dynamically based on user identity, device posture, location, and data classification.',
    whyItMatters: 'With remote work and cloud migration, enterprise perimeters no longer exist. Zero Trust prevents lateral movement after an initial compromise.',
    examples: [
      'Requiring device health verification before allowing an employee laptop to access corporate cloud apps',
      'Micro-segmenting data center workloads so web servers cannot talk to arbitrary database servers'
    ],
    commonAttacksOrDefenses: [
      'Defense against: Ransomware lateral movement, compromised VPN credentials',
      'Key Technologies: Software-Defined Perimeter (SDP), Continuous Adaptive Risk and Trust Assessment (CARTA), Conditional Access'
    ],
    relatedTopics: ['identity-and-access-management', 'cloud-security'],
    difficulty: 'intermediate',
    relatedResources: ['microsoft-learn-security', 'nist-cybersecurity-framework'],
    relatedCertifications: ['CISSP', 'SC-900']
  },
  {
    id: 'active-directory-security',
    title: 'Active Directory & Enterprise Identity Security',
    category: 'Identity & Enterprise',
    definition: 'The security principles, protocols (Kerberos, LDAP, NTLM), and architectures required to defend Microsoft Active Directory Domain Services (AD DS) and hybrid Entra ID environments.',
    explanation: 'Active Directory is the central identity store for 90% of Fortune 500 enterprises. If an adversary compromises the Domain Controller or obtains Domain Admin privileges, they control every workstation, server, and user account in the organization.',
    whyItMatters: 'Virtually all enterprise ransomware attacks and targeted APT intrusions involve Active Directory privilege escalation and lateral movement.',
    examples: [
      'Kerberoasting: Requesting service tickets for accounts with Service Principal Names (SPNs) and cracking the ticket offline',
      'AS-REP Roasting: Exploiting accounts with Kerberos preauthentication disabled'
    ],
    commonAttacksOrDefenses: [
      'Attacks: Pass-the-Hash, Kerberoasting, Golden Ticket, AD CS Certificate Escalation',
      'Defenses: Tiered Administrative Model, Privileged Access Workstations (PAWs), disabling NTLM, monitoring event ID 4768/4769'
    ],
    relatedTopics: ['authentication', 'threats'],
    difficulty: 'advanced',
    relatedResources: ['the-cyber-mentor', 'hacktricks'],
    relatedCertifications: ['OSCP+', 'OSEP', 'PNPT']
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Software Supply Chain Security',
    category: 'Application Security',
    definition: 'The practice of integrating automated security testing, vulnerability scanning, and compliance policies into every stage of the modern continuous integration and continuous deployment (CI/CD) software development lifecycle.',
    explanation: 'Shifts security left by moving vulnerability discovery from late-stage manual penetration tests to automated code commits. Incorporates SAST (Static Application Security Testing), DAST (Dynamic Application Security Testing), and SCA (Software Composition Analysis).',
    whyItMatters: 'Finding and fixing a security vulnerability during development costs 10x less than fixing it after production deployment or dealing with a public breach.',
    examples: [
      'Running automated secret scanning in GitHub Actions to block commits containing hardcoded API keys',
      'Generating Software Bill of Materials (SBOM) to track open-source dependencies and CVEs'
    ],
    commonAttacksOrDefenses: [
      'Attacks: Dependency confusion, malicious npm packages, CI/CD pipeline poisoning',
      'Defenses: Branch protection rules, signed Git commits, automated container image scanning (Trivy)'
    ],
    relatedTopics: ['owasp-top-10', 'cloud-security'],
    difficulty: 'intermediate',
    relatedResources: ['owasp'],
    relatedCertifications: ['CISSP', 'AWS Security Specialty']
  },
  {
    id: 'threat-intelligence',
    title: 'Cyber Threat Intelligence (CTI)',
    category: 'Security Operations',
    definition: 'Evidence-based knowledge, including context, mechanisms, indicators, implications, and actionable advice about existing or emerging threats to enterprise assets.',
    explanation: 'Structured across three distinct operational tiers: Strategic CTI (high-level trends for executive leaders), Operational CTI (adversary capabilities and intent), and Tactical CTI (specific technical Indicators of Compromise - IOCs, like IP addresses, domains, and file hashes, and MITRE TTPs).',
    whyItMatters: 'Transforms security from reactive alert cleanup to proactive hunting and defense alignment against specific adversaries targeting your industry.',
    examples: [
      'Consuming STIX/TAXII threat feeds into a Security Information and Event Management (SIEM) platform',
      'Analyzing adversary infrastructure using Passive DNS and WHOIS historical pivots'
    ],
    commonAttacksOrDefenses: [
      'Frameworks: The Cyber Kill Chain (Lockheed Martin), Diamond Model of Intrusion Analysis, MITRE ATT&CK',
      'Platforms: MISP (Malware Information Sharing Platform), OpenCTI'
    ],
    relatedTopics: ['soc-operations', 'digital-forensics'],
    difficulty: 'intermediate',
    relatedResources: ['mitre-attack', 'sans-institute'],
    relatedCertifications: ['CySA+', 'OSDA', 'GCIH']
  },
  {
    id: 'incident-response',
    title: 'Incident Response & Breach Containment',
    category: 'Security Operations',
    definition: 'The organized approach and systematic methodology an organization takes to prepare for, detect, contain, investigate, and recover from cyber security incidents.',
    explanation: 'Standardized by NIST SP 800-61 and SANS into 6 key phases: Preparation -> Identification -> Containment (Short-term/Long-term) -> Eradication -> Recovery -> Lessons Learned.',
    whyItMatters: 'Effective incident response minimizes downtime, financial losses, regulatory penalties, and prevents an active attacker from regaining access.',
    examples: [
      'Isolating an infected endpoint from the corporate VLAN via EDR network isolation',
      'Conducting post-incident table-top exercises with executive leadership'
    ],
    commonAttacksOrDefenses: [
      'Tools: EDR (CrowdStrike, Defender for Endpoint), SIEM, Memory Dumps, Live Forensics',
      'Crucial Actions: Preserving volatile RAM memory before rebooting or powering down'
    ],
    relatedTopics: ['digital-forensics', 'soc-operations'],
    difficulty: 'intermediate',
    relatedResources: ['cyberdefenders', 'letsdefend'],
    relatedCertifications: ['GCIH', 'GCFA', 'CySA+']
  },
  {
    id: 'vulnerability-management',
    title: 'Vulnerability Management & CVSS Scoring',
    category: 'Governance & Operations',
    definition: 'The continuous cycle of identifying, classifying, prioritizing, remediating, and mitigating software security vulnerabilities in an enterprise computing environment.',
    explanation: 'Vulnerabilities are assigned Common Vulnerabilities and Exposures (CVE) identifiers and scored using the Common Vulnerability Scoring System (CVSS v3.1/v4.0) based on Base, Temporal, and Environmental metrics.',
    whyItMatters: 'Most successful enterprise breaches exploit known vulnerabilities for which public patches were available months prior.',
    examples: [
      'Scanning corporate IP ranges weekly using authenticated Tenable Nessus / Qualys scanners',
      'Prioritizing remediation of CVEs listed on CISA Known Exploited Vulnerabilities (KEV) catalog'
    ],
    commonAttacksOrDefenses: [
      'Metrics: CVSS Base Score (Attack Vector, Complexity, Privileges Required, User Interaction, Scope, CIA Impact)',
      'Best Practices: Risk-based vulnerability management (RBVM) factoring in active threat exploitation'
    ],
    relatedTopics: ['risk-management', 'devsecops'],
    difficulty: 'beginner',
    relatedResources: ['nist-cybersecurity-framework'],
    relatedCertifications: ['Security+', 'CySA+']
  },
  {
    id: 'linux-security',
    title: 'Linux Operating System Hardening',
    category: 'Operating System Security',
    definition: 'The technical process of securing and locking down Linux server distributions by eliminating unnecessary software, restricting user privileges, enforcing mandatory access controls, and enabling audit logging.',
    explanation: 'Covers core Linux defense mechanisms including SSH key-only authentication, disabling root login, configuring UFW/iptables firewalls, configuring Mandatory Access Control (SELinux / AppArmor), and tracking system calls via auditd.',
    whyItMatters: 'The vast majority of public internet cloud servers, containers, and web infrastructure run on Linux.',
    examples: [
      'Enforcing SELinux in Enforcing mode on Red Hat Enterprise Linux to confine web server daemon actions',
      'Setting `/etc/ssh/sshd_config` with `PermitRootLogin no` and `PasswordAuthentication no`'
    ],
    commonAttacksOrDefenses: [
      'Security Controls: CIS Linux Benchmarks, Lynis security auditing tool, Fail2ban',
      'Key Directories: `/var/log/auth.log`, `/etc/shadow`, `/etc/sudoers`'
    ],
    relatedTopics: ['operating-systems', 'firewalls'],
    difficulty: 'intermediate',
    relatedResources: ['kali-linux-docs', 'overthewire'],
    relatedCertifications: ['KLCP', 'Security+']
  },
  {
    id: 'api-security',
    title: 'API Security & OWASP API Top 10',
    category: 'Application Security',
    definition: 'The security principles and defensive controls required to protect Application Programming Interfaces (REST, GraphQL, gRPC) from unauthorized access, data leakage, and automated abuse.',
    explanation: 'Modern web and mobile applications rely almost entirely on backend APIs. The OWASP API Security Top 10 outlines unique API vulnerabilities including Broken Object Level Authorization (BOLA), Broken Authentication, Unrestricted Resource Consumption, and Server-Side Request Forgery.',
    whyItMatters: 'APIs expose direct access to database records and backend logic, making them prime targets for mass automated data harvesting and business logic exploitation.',
    examples: [
      'Broken Object Level Authorization (BOLA): Changing `/api/v1/users/123/profile` to `/api/v1/users/124/profile` to view another user private data',
      'Excessive Data Exposure: An API returning full user password hashes or sensitive personal data in the JSON response, relying on the frontend to filter it out'
    ],
    commonAttacksOrDefenses: [
      'Defenses: Enforcing authorization at the controller/object level, rate limiting with Redis token buckets, input schema validation'
    ],
    relatedTopics: ['web-attacks', 'authentication'],
    difficulty: 'intermediate',
    relatedResources: ['owasp', 'insiderphd'],
    relatedCertifications: ['OSWA', 'OSWE']
  }
];
