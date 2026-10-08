import { HackerType } from '@/types';

export const hackerTypes: HackerType[] = [
  // 01. White Hat Hacker
  {
    id: 'white-hat',
    number: '01',
    name: 'White Hat Hacker',
    subtitle: 'Ethical Security Specialist',
    definition: 'An authorized cybersecurity specialist who uses offensive methodologies to discover vulnerabilities and improve security posture with explicit permission.',
    objectives: 'Identify security flaws, strengthen organizational defenses, protect customer data, and comply with security regulations.',
    activities: 'Authorized penetration testing, vulnerability assessments, security architecture reviews, and defensive hardening.',
    commonTechniques: ['Port Scanning & Enumeration', 'Vulnerability Scanning', 'Exploit Verification in Test Labs', 'Code Auditing', 'Reporting and Remediation Advice'],
    legalEthicalContext: 'Operates with strict legal authorization (Rules of Engagement, Contracts, Written Permission). Adheres strictly to laws like CFAA and GDPR.',
    careerRoles: ['Penetration Tester', 'Security Consultant', 'Vulnerability Analyst', 'Application Security Engineer'],
    relatedSkills: ['Network Security', 'Web Application Security', 'Remediation Advisory', 'Technical Documentation'],
    relatedCertifications: ['OSCP+', 'Security+', 'GPEN', 'eJPT']
  },

  // 02. Black Hat Hacker
  {
    id: 'black-hat',
    number: '02',
    name: 'Black Hat Hacker',
    subtitle: 'Malicious Cyber Adversary',
    definition: 'An unauthorized malicious actor who breaches computer networks, steals data, or deploys destructive malware for personal financial gain, extortion, or damage.',
    objectives: 'Financial extortion, data theft, corporate espionage, service disruption, and unauthorized surveillance.',
    activities: 'Ransomware deployment, credential harvesting, unauthorized database exfiltration, and sale of stolen assets on dark markets.',
    commonTechniques: ['Phishing Campaigns', 'Zero-day Exploitation', 'Malware Authoring', 'Active Directory Lateral Movement', 'DDoS Extortion'],
    legalEthicalContext: 'Illegal. Violates criminal cyber laws worldwide (such as CFAA, CMA). Subject to federal felony prosecution.',
    careerRoles: ['No legal career role. Black hat activities lead directly to criminal prosecution.'],
    relatedSkills: ['Exploit Development', 'Stealth and Obfuscation', 'Social Engineering', 'Malware Engineering'],
    relatedCertifications: []
  },

  // 03. Gray Hat Hacker
  {
    id: 'gray-hat',
    number: '03',
    name: 'Gray Hat Hacker',
    subtitle: 'Unsanctioned Vulnerability Prober',
    definition: 'An individual who probes systems without prior authorization, but without malicious intent, often disclosing discovered flaws publicly or requesting bounties afterwards.',
    objectives: 'Discover vulnerabilities, gain recognition, explore systems, or prompt organizations to fix security issues.',
    activities: 'Unsolicited vulnerability scanning of public websites, discovering flaws, and alerting site owners before coordinated disclosure.',
    commonTechniques: ['Automated Web Scanning', 'Public Asset Enumeration', 'Uncoordinated Vulnerability Disclosure'],
    legalEthicalContext: 'Legally ambiguous or unlawful due to lack of prior authorization, even if no damage occurs.',
    careerRoles: ['Independent Security Enthusiasts (risks liability without formal Safe Harbor bug bounty programs)'],
    relatedSkills: ['Reconnaissance', 'Vulnerability Identification', 'Coordinated Disclosure Practices'],
    relatedCertifications: ['Security+', 'eJPT']
  },

  // 04. Red Hat Hacker
  {
    id: 'red-hat',
    number: '04',
    name: 'Red Hat Hacker',
    subtitle: 'Aggressive Defensive Vigilante',
    definition: 'A security operative who actively launches aggressive counter-attacks and offensive strikes against black hat attackers to disarm malicious infrastructure.',
    objectives: 'Halt malicious campaigns, dismantle adversary command & control servers, and disarm attacker malware.',
    activities: 'Hacking back against adversary servers, infecting malicious botnet C2s, and neutralizing criminal operation channels.',
    commonTechniques: ['Active Counter-Measures', 'Botnet Infiltration', 'Malicious C2 Neutralization', 'Aggressive Exploit Defense'],
    legalEthicalContext: '"Hacking back" is strictly unlawful for private citizens under international cyber laws; reserved exclusively for authorized military or intelligence commands.',
    careerRoles: ['Military Cyber Command', 'State Defense Taskforces', 'Threat Intelligence Interdiction'],
    relatedSkills: ['Reverse Engineering', 'Infrastructure Takeover', 'Network Interception', 'Offensive Counter-Operations'],
    relatedCertifications: ['OSCE', 'OSEE', 'CISSP']
  },

  // 05. Blue Hat Hacker
  {
    id: 'blue-hat',
    number: '05',
    name: 'Blue Hat Hacker',
    subtitle: 'Invited Security Auditor & Bug Hunter',
    definition: 'An invited external security contractor brought in by software vendors before product launch to discover zero-day bugs and assess defenses.',
    objectives: 'Stress-test pre-release enterprise software, discover zero-day bugs, and validate security boundaries before market deployment.',
    activities: 'Vendor pre-release testing conferences (e.g. Microsoft BlueHat), black-box beta auditing, and targeted exploit mitigation testing.',
    commonTechniques: ['Fuzzing APIs and Protocols', 'Authentication Bypass Testing', 'Crash Dump Analysis', 'Sandbox Escape Attempts'],
    legalEthicalContext: 'Fully authorized by contractual software vendor agreements with precise scope and pre-release non-disclosure protection.',
    careerRoles: ['Invited Security Researcher', 'Third-Party Product Auditor', 'Independent Verification Contractor'],
    relatedSkills: ['Fuzzing', 'Source Code Auditing', 'Software Architecture Validation'],
    relatedCertifications: ['OSWE', 'OSED', 'CRTP']
  },

  // 06. Green Hat Hacker
  {
    id: 'green-hat',
    number: '06',
    name: 'Green Hat Hacker',
    subtitle: 'Cybersecurity Apprentice & Learner',
    definition: 'An aspiring cybersecurity student or beginner dedicated to learning technical fundamentals, asking questions in forums, and building foundational skills.',
    objectives: 'Understand networking and security protocols, learn ethical methodologies, gain certifications, and transition into professional roles.',
    activities: 'Solving Capture The Flag (CTF) challenges, setting up home virtual labs, studying certification curricula, and practicing Python scripting.',
    commonTechniques: ['Virtual Lab Environment Setup', 'Basic Nmap Scanning', 'Wireshark Packet Inspection', 'Linux Shell Navigation'],
    legalEthicalContext: 'Lawful when confined to authorized learning platforms (Hack The Box, TryHackMe) and local virtualized lab environments.',
    careerRoles: ['Junior SOC Analyst', 'Cybersecurity Intern', 'Junior Pentester', 'IT Support Specialist'],
    relatedSkills: ['Linux Fundamentals', 'Networking (TCP/IP)', 'Basic Scripting (Python/Bash)', 'Virtualization'],
    relatedCertifications: ['CompTIA Security+', 'CompTIA Network+', 'eJPT']
  },

  // 07. Script Kiddie
  {
    id: 'script-kiddie',
    number: '07',
    name: 'Script Kiddie',
    subtitle: 'Unskilled Tool Consumer',
    definition: 'An unskilled individual who executes public scripts, tools, or exploits created by others without understanding how the underlying vulnerabilities work.',
    objectives: 'Show off to peers, deface websites, disrupt online gaming servers, or test downloaded exploits.',
    activities: 'Running automated DDoS tools, executing public exploit scripts blindly against arbitrary IP addresses, and forum bragging.',
    commonTechniques: ['Automated Low Orbit Ion Cannon (LOIC)', 'Uncalibrated SQLMAP Runs', 'Copy-Paste Exploit Execution'],
    legalEthicalContext: 'Often illegal. Noisy, unrefined tool execution makes script kiddies easily identified, logged, and apprehended by law enforcement.',
    careerRoles: ['Amateur entry level; requires fundamental computer science and ethical education to progress.'],
    relatedSkills: ['Networking Basics', 'Operating System Fundamentals', 'Python Scripting'],
    relatedCertifications: ['CompTIA Network+', 'CompTIA Security+']
  },

  // 08. State-Sponsored Hacker
  {
    id: 'state-sponsored-hacker',
    number: '08',
    name: 'State-Sponsored Hacker (APT)',
    subtitle: 'Nation-State Strategic Operator',
    definition: 'Highly skilled, well-resourced cyber operators employed or funded by nation-states to conduct espionage, sabotage critical infrastructure, or achieve geopolitical objectives.',
    objectives: 'Strategic intelligence gathering, intellectual property theft, critical infrastructure disruption, and geopolitical leverage.',
    activities: 'Covert persistent reconnaissance, developing zero-day exploit chains, infiltrating defense contractors, energy grids, and diplomatic ministries.',
    commonTechniques: ['Zero-Day Exploits', 'Supply Chain Compromise', 'Living-off-the-Land (LotL)', 'Custom Proprietary Malware', 'Advanced Memory Injection'],
    legalEthicalContext: 'Sanctioned by sponsor governments but strictly illegal in target states, governed by espionage and international conflict dynamics.',
    careerRoles: ['Government Cyber Operator', 'Intelligence Agency Specialist', 'National Defense Cyber Command'],
    relatedSkills: ['Kernel Exploitation', 'Firmware Reverse Engineering', 'Threat Intelligence', 'Stealth Operations'],
    relatedCertifications: ['OSED', 'OSEE', 'CISSP']
  },

  // 09. Hacktivist
  {
    id: 'hacktivist',
    number: '09',
    name: 'Hacktivist',
    subtitle: 'Ideological & Political Activist',
    definition: 'A hacker or group who uses cyberattacks to promote political causes, social change, freedom of speech, or human rights campaigns.',
    objectives: 'Draw public attention to injustices, disrupt political organizations, leak sensitive records, or protest corporate policies.',
    activities: 'Website defacements with manifestos, leaking private executive emails, and launching denial of service attacks against government agencies.',
    commonTechniques: ['Distributed Denial of Service (DDoS)', 'Doxxing', 'Website Defacement', 'Database Leaks via Paste Sites'],
    legalEthicalContext: 'Unlawful under computer misuse laws worldwide regardless of ideological justification or social motivation.',
    careerRoles: ['Activism is not a recognized professional career path; carries serious criminal liability.'],
    relatedSkills: ['Anonymity Protocols (Tor/VPN)', 'OSINT', 'DDoS Infrastructure'],
    relatedCertifications: []
  },

  // 10. Insider Threat
  {
    id: 'insider-threat',
    number: '10',
    name: 'Insider Threat',
    subtitle: 'Privileged Internal Risk',
    definition: 'A current or former employee, contractor, or business partner who misuses legitimate access privileges to exfiltrate data, commit fraud, or sabotage operations.',
    objectives: 'Sell proprietary IP to competitors, extort employers, enact revenge after termination, or bypass controls through sheer negligence.',
    activities: 'Copying source code to personal USB storage, downloading customer databases, creating rogue backdoor accounts, or sharing access credentials.',
    commonTechniques: ['Authorized Data Exfiltration', 'Abuse of Legitimate Privileges', 'Disabling Audit Logging', 'Creation of Shadow Admin Accounts'],
    legalEthicalContext: 'Direct violation of employment contracts, NDAs, trade secret statutes, and computer fraud legislation.',
    careerRoles: ['Mitigated professionally by Insider Threat Analysts, UEBA Engineers, and DLP Specialists.'],
    relatedSkills: ['Data Loss Prevention (DLP)', 'Access Control Management', 'Behavioral Auditing (UEBA)'],
    relatedCertifications: ['CISSP', 'CISM']
  },

  // 11. Ethical Hacker (Industry Practitioner)
  {
    id: 'ethical-hacker',
    number: '11',
    name: 'Ethical Hacker',
    subtitle: 'Certified Professional Practitioner',
    definition: 'A professional practitioner who uses hacking skills, methodologies, and tools to identify system weaknesses and help organizations remediate them before malicious actors exploit them.',
    objectives: 'Validate security controls, test real-world attack vectors, educate stakeholders, and protect enterprise resilience.',
    activities: 'Conducting comprehensive penetration tests, physical security testing, red team simulations, and developer training.',
    commonTechniques: ['Full-scope Penetration Testing', 'Social Engineering Assessments', 'Wireless Audits', 'Active Directory Assessments'],
    legalEthicalContext: 'Operates with formal contracts, explicit Non-Disclosure Agreements (NDAs), and adherence to ethical codes.',
    careerRoles: ['Ethical Hacker', 'Penetration Tester', 'Security Assessment Lead'],
    relatedSkills: ['Threat Modeling', 'Exploitation Techniques', 'Remediation Guidance', 'Client Communication'],
    relatedCertifications: ['OSCP+', 'PNPT', 'eCPPT', 'Security+']
  },

  // 12. Security Researcher
  {
    id: 'security-researcher',
    number: '12',
    name: 'Security Researcher / Vulnerability Researcher',
    subtitle: 'Zero-Day Discovery Expert',
    definition: 'An expert who investigates software, hardware, protocols, and cryptography to discover previously unknown vulnerabilities (0-days) and publish defensive findings.',
    objectives: 'Advance computer science security, uncover fundamental software bugs, develop secure design patterns, and coordinate responsible disclosure with vendors.',
    activities: 'Fuzzing software protocols, reverse engineering binaries in disassemblers (Ghidra/IDA Pro), analyzing cryptographic implementations, and writing CVE advisories.',
    commonTechniques: ['Binary Fuzzing (AFL, LibFuzzer)', 'Static and Dynamic Binary Analysis', 'Source Code Auditing', 'Proof of Concept (PoC) Engineering'],
    legalEthicalContext: 'Follows Coordinated Vulnerability Disclosure (CVD) and safe harbor guidelines (ISO/IEC 29147).',
    careerRoles: ['Vulnerability Researcher', 'Security Architect', 'Cryptanalyst', 'Software Security Specialist'],
    relatedSkills: ['C/C++', 'Assembly', 'Debugging (x64dbg/GDB)', 'Reverse Engineering'],
    relatedCertifications: ['OSED', 'OSWE', 'OSEE']
  },

  // 13. Bug Bounty Hunter
  {
    id: 'bug-bounty-hunter',
    number: '13',
    name: 'Bug Bounty Hunter',
    subtitle: 'Crowdsourced Vulnerability Specialist',
    definition: 'An independent security researcher who discovers and reports security vulnerabilities in participating organizations through managed bounty programs.',
    objectives: 'Identify high-impact valid vulnerabilities within defined scopes to earn financial bounties and community reputation.',
    activities: 'Reconnaissance on public web assets, submitting structured vulnerability reports with reproduction steps, and collaborating with program triagers.',
    commonTechniques: ['Subdomain Enumeration', 'API Endpoint Discovery', 'Logic Flaw Hunting', 'IDOR and Access Control Bypass', 'SSRF and XSS Hunting'],
    legalEthicalContext: 'Protected by program Safe Harbor policies as long as activities remain within defined program scopes and terms of service.',
    careerRoles: ['Full-time / Part-time Bug Bounty Hunter', 'Application Security Consultant'],
    relatedSkills: ['Web Reconnaissance', 'Automation Scripting (Bash/Go/Python)', 'Burp Suite Mastery', 'Report Writing'],
    relatedCertifications: ['OSWA', 'OSWE', 'eWPT']
  },

  // 14. Red Team Operator
  {
    id: 'red-team',
    number: '14',
    name: 'Red Team Operator',
    subtitle: 'Adversary Simulation Specialist',
    definition: 'An offensive security specialist who simulates realistic adversary tactics, techniques, and procedures (TTPs) to test the detection and response capabilities of an organization.',
    objectives: 'Assess organizational response capability, test people and processes (not just software flaws), and simulate full cyber attack campaigns covertly.',
    activities: 'Spear phishing campaigns, assumed-breach exercises, Active Directory privilege escalation, lateral movement, and maintaining covert persistence.',
    commonTechniques: ['C2 Frameworks (Cobalt Strike, Sliver)', 'EDR Evasion', 'Process Injection', 'Living-off-the-Land Binaries (LOLBins)', 'Kerberos Attacks'],
    legalEthicalContext: 'Authorized by senior executive leadership with strict Rules of Engagement (RoE) and trusted emergency contact procedures.',
    careerRoles: ['Red Team Operator', 'Adversary Emulation Engineer', 'Principal Offensive Consultant'],
    relatedSkills: ['Adversary Simulation', 'PowerShell & C# Development', 'Active Directory Internals', 'Stealth Operations'],
    relatedCertifications: ['OSEP', 'CRTO', 'OSCP+']
  },

  // 15. Blue Team Analyst
  {
    id: 'blue-team',
    number: '15',
    name: 'Blue Team / Defensive Analyst',
    subtitle: 'Enterprise Security Defender',
    definition: 'A cybersecurity professional responsible for maintaining internal network defenses, monitoring threats, hunting anomalies, analyzing logs, and responding to incidents.',
    objectives: 'Detect adversary activity in real time, minimize mean-time-to-detect (MTTD) and mean-time-to-remediate (MTTR), and harden system configurations.',
    activities: 'SIEM monitoring, threat hunting, malware triage, firewall and EDR policy tuning, patch management, and digital forensics.',
    commonTechniques: ['Log Correlation & Querying (KQL/SPL)', 'Memory Forensics (Volatility)', 'Network Traffic Analysis (Wireshark/Zeek)', 'Endpoint Detection & Response (EDR)', 'YARA/Sigma Rule Authoring'],
    legalEthicalContext: 'Authorized defenders operating on organization-owned assets to preserve business confidentiality, integrity, and availability.',
    careerRoles: ['SOC Analyst', 'Incident Responder', 'Detection Engineer', 'Threat Hunter', 'Digital Forensics Analyst'],
    relatedSkills: ['Log Analysis', 'SIEM/SOAR', 'Threat Intelligence', 'Operating System Telemetry'],
    relatedCertifications: ['CySA+', 'OSDA', 'GCIH', 'GCFA', 'BTL1']
  },

  // 16. Purple Team Specialist
  {
    id: 'purple-team',
    number: '16',
    name: 'Purple Team Specialist',
    subtitle: 'Offensive-Defensive Integrator',
    definition: 'A collaborative security practice where offensive (Red) and defensive (Blue) teams work closely together in real-time to test specific attack techniques and immediately tune detection mechanisms.',
    objectives: 'Close the gap between vulnerability discovery and defensive detection; maximize return on investment from security controls through iterative testing.',
    activities: 'Atomic attack simulation (Atomic Red Team), walking through MITRE ATT&CK techniques with defenders observing telemetry, and immediate SIEM rule tuning.',
    commonTechniques: ['Adversary Emulation Plans', 'Atomic Red Team execution', 'Continuous Detection Engineering', 'MITRE ATT&CK Coverage Mapping'],
    legalEthicalContext: 'Fully transparent collaborative exercise sanctioned by enterprise security leadership.',
    careerRoles: ['Purple Team Lead', 'Continuous Security Validation Engineer', 'Detection Engineering Consultant'],
    relatedSkills: ['Cross-domain Offensive & Defensive Knowledge', 'Threat Telemetry Analysis', 'Collaboration & Facilitation'],
    relatedCertifications: ['OSDA', 'CySA+', 'OSCP+', 'CISSP']
  },

  // 17. Cybercriminal
  {
    id: 'cybercriminal',
    number: '17',
    name: 'Cybercriminal Syndicate Operator',
    subtitle: 'Commercial Crime Enterprise',
    definition: 'Members of organized criminal syndicates who operate cyberattacks strictly as a commercial business enterprise focused on maximizing financial revenue.',
    objectives: 'Direct financial theft, running Ransomware-as-a-Service (RaaS) affiliate networks, illicit carding markets, and money laundering.',
    activities: 'Operating ransomware negotiation portals, purchasing initial access from brokers (IABs), and laundering illicit cryptocurrency through mixers.',
    commonTechniques: ['Ransomware-as-a-Service (RaaS)', 'Initial Access Brokerage (IAB)', 'Banking Trojans', 'SIM Swapping', 'Business Email Compromise (BEC)'],
    legalEthicalContext: 'Major international organized crime; investigated by international law enforcement (Interpol, FBI, Europol).',
    careerRoles: ['Criminal syndicate; subject to global sanctions, asset forfeiture, and prison.'],
    relatedSkills: ['Cryptocurrency Flow Analysis', 'Financial Systems Exploitation', 'Affiliate Management'],
    relatedCertifications: []
  }
];
