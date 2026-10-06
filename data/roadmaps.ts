import { Roadmap } from '@/types';

export const roadmaps: Roadmap[] = [
  {
    id: 'cybersecurity-beginner',
    title: 'Cybersecurity Beginner Roadmap',
    description: 'A structured foundational path designed for complete newcomers to build solid fundamentals in computing, networks, operating systems, and security concepts before specializing.',
    difficulty: 'beginner',
    category: 'Foundations',
    estimatedSequence: '1. Computer Basics -> 2. Networking -> 3. Linux/Windows -> 4. Python -> 5. Security Core -> 6. First Cert',
    targetRole: 'Junior Security Associate / Cybersecurity Intern / IT Security Specialist',
    steps: [
      {
        id: 'cb-1',
        title: 'Computer & Hardware Fundamentals',
        description: 'Understand CPU architecture, RAM memory, storage, virtualization basics, binary/hexadecimal number systems, and basic operating system components.',
        difficulty: 'beginner',
        skills: ['Virtualization (VirtualBox/VMware)', 'Binary & Hex Notation', 'OS Architecture Basics'],
        resources: ['picoctf', 'sans-cyber-aces'],
        labs: ['OverTheWire Bandit Room 0-5'],
        certifications: ['CompTIA A+ (optional)', 'ISC2 CC']
      },
      {
        id: 'cb-2',
        title: 'Networking Fundamentals',
        description: 'Master the OSI 7-Layer model, TCP/IP stack, IPv4 subnetting, DNS resolution, DHCP, HTTP/HTTPS, ARP, and packet flow.',
        difficulty: 'beginner',
        skills: ['TCP 3-way Handshake', 'Subnetting & CIDR', 'DNS & Routing Concepts', 'Packet Capture with Wireshark'],
        resources: ['cisco-networking-academy', 'tryhackme'],
        labs: ['TryHackMe Network Fundamentals Path'],
        certifications: ['CompTIA Network+']
      },
      {
        id: 'cb-3',
        title: 'Linux & Command-Line Mastery',
        description: 'Navigate the Linux file system hierarchy, manage users/groups, file permissions (chmod/chown), process management, bash pipes, and SSH administration.',
        difficulty: 'beginner',
        skills: ['Bash Commands (grep, awk, sed, find)', 'Linux Permissions Model', 'Package Management', 'SSH Key Setup'],
        resources: ['overthewire', 'kali-linux-docs'],
        labs: ['OverTheWire Bandit 0 to 34'],
        certifications: ['KLCP']
      },
      {
        id: 'cb-4',
        title: 'Windows Operating System Security',
        description: 'Understand Windows registry, NTFS permissions, Windows Services, Event Viewer logs, PowerShell basics, and Local Security Policy.',
        difficulty: 'beginner',
        skills: ['Windows Event Logs (Sysmon)', 'PowerShell Command Line', 'User Account Control (UAC)'],
        resources: ['microsoft-learn-security', 'tryhackme'],
        labs: ['TryHackMe Windows Fundamentals'],
        certifications: ['Microsoft SC-900']
      },
      {
        id: 'cb-5',
        title: 'Python Scripting for Security',
        description: 'Write Python scripts for basic port scanning, parsing log files, automating HTTP requests, and handling file I/O.',
        difficulty: 'beginner',
        skills: ['Python Basics', 'Sockets & Requests Library', 'JSON & Log Parsing'],
        resources: ['google-cybersecurity-certificate', 'cryptohack'],
        labs: ['CryptoHack Intro Challenges'],
        certifications: ['Security+']
      },
      {
        id: 'cb-6',
        title: 'Cybersecurity Core Concepts',
        description: 'Learn the CIA Triad (Confidentiality, Integrity, Availability), AAA framework, symmetric vs asymmetric encryption, hashing, and defense-in-depth.',
        difficulty: 'beginner',
        skills: ['CIA Triad Application', 'Basic Cryptography Concepts', 'Security Policies & Controls'],
        resources: ['nist-cybersecurity-framework', 'sans-cyber-aces'],
        labs: ['TryHackMe Introduction to Cyber Security'],
        certifications: ['CompTIA Security+', 'ISC2 CC']
      }
    ]
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester Roadmap',
    description: 'Comprehensive progressive pathway to becoming a professional ethical hacker and technical penetration tester capable of assessing network and infrastructure vulnerabilities.',
    difficulty: 'intermediate',
    category: 'Offensive Security',
    estimatedSequence: '1. Networking/OS -> 2. Enumeration -> 3. Vulnerability Assessment -> 4. Active Directory -> 5. OSCP+',
    targetRole: 'Penetration Tester / Ethical Hacker / Security Consultant',
    steps: [
      {
        id: 'pt-1',
        title: 'Network Reconnaissance & Port Scanning',
        description: 'Deep mastery of Nmap scanning techniques, host discovery, service fingerprinting, banner grabbing, and NSE scripting.',
        difficulty: 'beginner',
        skills: ['Nmap Advanced Flags', 'Netcat Listeners', 'Wireshark Traffic Analysis during Scans'],
        resources: ['tryhackme', 'kali-linux-docs'],
        labs: ['TryHackMe Nmap Room', 'VulnHub Easy Boxes'],
        certifications: ['eJPT', 'CompTIA PenTest+']
      },
      {
        id: 'pt-2',
        title: 'Vulnerability Assessment & Exploit Modification',
        description: 'Searching exploit databases (SearchSploit), understanding public exploit code (Python/C), compiling source exploits, and safely verifying vulnerabilities.',
        difficulty: 'intermediate',
        skills: ['Exploit-DB Searching', 'C Code Compilation', 'Python Exploit Debugging', 'Metasploit Auxiliary Modules'],
        resources: ['exploit-database', 'vulnhub'],
        labs: ['Hack The Box Easy Linux/Windows Machines'],
        certifications: ['eJPT', 'TCM PNPT']
      },
      {
        id: 'pt-3',
        title: 'Linux & Windows Privilege Escalation',
        description: 'Exploiting misconfigured SUID binaries, cron jobs, sudo rights, unquoted service paths, token impersonation (Potato attacks), and kernel exploits.',
        difficulty: 'intermediate',
        skills: ['LinPEAS / WinPEAS Triage', 'Linux SUID Exploitation', 'SeImpersonatePrivilege Abuse', 'DLL Hijacking'],
        resources: ['hacktricks', 'hack-the-box'],
        labs: ['Hack The Box Privilege Escalation Track', 'TryHackMe Linux PrivEsc'],
        certifications: ['PNPT', 'OSCP+']
      },
      {
        id: 'pt-4',
        title: 'Active Directory Attacks & Lateral Movement',
        description: 'Kerberoasting, AS-REP Roasting, Pass-the-Hash, Pass-the-Ticket, BloodHound graph analysis, and domain enumeration via Impacket.',
        difficulty: 'advanced',
        skills: ['Kerberos Ticket Attacks', 'BloodHound Cypher Queries', 'Impacket Tool Suite', 'Lateral Movement & Pivoting'],
        resources: ['the-cyber-mentor', 'hacktricks', 'hack-the-box'],
        labs: ['Hack The Box Active Directory Track', 'TryHackMe Holo / Wreath'],
        certifications: ['OSCP+', 'PNPT', 'OSEP']
      },
      {
        id: 'pt-5',
        title: 'Report Writing & Professional Delivery',
        description: 'Translating technical findings into executive summaries, detailed technical reproduction steps, CVSS scoring, and actionable remediation roadmaps.',
        difficulty: 'intermediate',
        skills: ['CVSS 3.1 Scoring', 'Executive Presentation', 'Technical Remediation Writing'],
        resources: ['the-cyber-mentor', 'sans-institute'],
        labs: ['Complete 5 full HTB machine formal pentest reports'],
        certifications: ['OSCP+', 'PNPT']
      }
    ]
  },
  {
    id: 'web-security',
    title: 'Web Security & Bug Bounty Roadmap',
    description: 'Specialized path for securing and testing modern web applications, REST APIs, microservices, and participating in bug bounty programs.',
    difficulty: 'intermediate',
    category: 'Application Security',
    estimatedSequence: '1. HTTP Protocol -> 2. Burp Suite -> 3. OWASP Top 10 -> 4. Advanced Web Attacks -> 5. OSWA/OSWE',
    targetRole: 'Web Application Pentester / Bug Bounty Hunter / AppSec Engineer',
    steps: [
      {
        id: 'ws-1',
        title: 'Web Protocols, HTTP & Browser Security',
        description: 'Understand HTTP methods, status codes, headers, cookies, Same-Origin Policy (SOP), Cross-Origin Resource Sharing (CORS), and Content Security Policy (CSP).',
        difficulty: 'beginner',
        skills: ['HTTP Request/Response Analysis', 'Cookie Flags (HttpOnly, SameSite, Secure)', 'CORS & CSP Rules'],
        resources: ['portswigger-web-security-academy', 'pwnfunction'],
        labs: ['PortSwigger Academy Fundamentals'],
        certifications: ['OSWA', 'eWPT']
      },
      {
        id: 'ws-2',
        title: 'Burp Suite Mastery & Intercepting Proxies',
        description: 'Professional usage of Burp Suite Proxy, Repeater, Intruder, Match and Replace rules, Decoder, and community BApp extensions.',
        difficulty: 'beginner',
        skills: ['Burp Interception', 'Repeater Testing', 'Intruder Wordlist Attacks', 'Logger++ Analysis'],
        resources: ['portswigger-web-security-academy', 'rana-khalil'],
        labs: ['PortSwigger Academy Labs on all basic vulnerability modules'],
        certifications: ['OSWA']
      },
      {
        id: 'ws-3',
        title: 'OWASP Top 10 Core Web Vulnerabilities',
        description: 'Hands-on exploitation and defense of SQL Injection (Error, Union, Blind), Cross-Site Scripting (Reflected, Stored, DOM), CSRF, SSRF, and IDOR.',
        difficulty: 'intermediate',
        skills: ['SQLi Query Crafting', 'Context-aware XSS Payloads', 'SSRF Internal Pivoting', 'IDOR Parameter Enumeration'],
        resources: ['portswigger-web-security-academy', 'owasp', 'rana-khalil'],
        labs: ['PortSwigger SQLi, XSS, SSRF, CSRF Labs (Apprentice & Practitioner)'],
        certifications: ['OSWA', 'eWPT']
      },
      {
        id: 'ws-4',
        title: 'Modern Authentication & API Vulnerabilities',
        description: 'Attacking JSON Web Tokens (none algorithm, weak secrets), OAuth 2.0 redirect URI bypasses, SAML XML signature wrapping, and REST API IDOR bugs.',
        difficulty: 'intermediate',
        skills: ['JWT Signature Cracking & Tampering', 'OAuth Flow Manipulation', 'GraphQL Introspection Exploitation'],
        resources: ['pentesterlab', 'insiderphd'],
        labs: ['PentesterLab Essential & JWT Badges', 'PortSwigger OAuth Labs'],
        certifications: ['OSWA', 'OSWE']
      },
      {
        id: 'ws-5',
        title: 'White-box Code Review & Custom Exploit Scripting',
        description: 'Reading PHP, Java, Python, and Node.js source code to discover vulnerabilities, deserialization flaws, and writing automated Python exploit chains.',
        difficulty: 'advanced',
        skills: ['Source Code Auditing', 'Insecure Deserialization', 'Python Exploit Development'],
        resources: ['portswigger-web-security-academy', 'exploit-database'],
        labs: ['PortSwigger Expert Labs', 'Root Me Web Server Challenges'],
        certifications: ['OSWE']
      }
    ]
  },
  {
    id: 'blue-team',
    title: 'Blue Team & SOC Analyst Roadmap',
    description: 'Path for defensive security analysts focused on threat monitoring, alert triaging, log analysis, SIEM engineering, and incident response.',
    difficulty: 'intermediate',
    category: 'Defensive Security',
    estimatedSequence: '1. OS Telemetry -> 2. Network Defense -> 3. SIEM/Logs -> 4. Incident Response -> 5. Threat Hunting',
    targetRole: 'SOC Analyst (Tier 1/2) / Detection Engineer / Incident Responder',
    steps: [
      {
        id: 'bt-1',
        title: 'Operating System Security & Telemetry',
        description: 'Understanding Windows Security Event IDs (4624, 4625, 4688, 7045), Sysmon configuration for process creation, and Linux auditd logs.',
        difficulty: 'beginner',
        skills: ['Windows Event Log Analysis', 'Sysmon Telemetry', 'Linux auditd / /var/log/auth.log'],
        resources: ['letsdefend', 'sans-cyber-aces'],
        labs: ['LetsDefend SOC Analyst Fundamentals'],
        certifications: ['CompTIA CySA+', 'Microsoft SC-200']
      },
      {
        id: 'bt-2',
        title: 'SIEM & Log Query Engineering',
        description: 'Writing effective search queries in Splunk (SPL), Elastic (KQL/EQL), and Microsoft Sentinel (KQL) to detect anomalies and unauthorized lateral movement.',
        difficulty: 'intermediate',
        skills: ['Splunk Search Processing Language (SPL)', 'Kusto Query Language (KQL)', 'Correlation Rule Design'],
        resources: ['blackperl', 'microsoft-learn-security'],
        labs: ['CyberDefenders Boss of the SOC (BOTS) Labs'],
        certifications: ['CySA+', 'OSDA']
      },
      {
        id: 'bt-3',
        title: 'Incident Handling & Malware Triage',
        description: 'Executing the NIST/SANS Incident Response lifecycle (Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned) and analyzing suspicious email attachments.',
        difficulty: 'intermediate',
        skills: ['Phishing Header Analysis', 'Sandbox Malware Triage (Any.Run / VirusTotal)', 'Host Network Isolation'],
        resources: ['cyberdefenders', 'letsdefend'],
        labs: ['CyberDefenders Blue Team CTF challenges'],
        certifications: ['GIAC GCIH', 'BTL1']
      },
      {
        id: 'bt-4',
        title: 'Threat Intelligence & MITRE ATT&CK Mapping',
        description: 'Consuming Cyber Threat Intelligence (CTI) feeds, utilizing MISP, mapping observed attacker telemetry to MITRE ATT&CK techniques, and writing Sigma rules.',
        difficulty: 'advanced',
        skills: ['MITRE ATT&CK Matrix Mapping', 'Sigma Rule Creation', 'YARA Rule Authoring'],
        resources: ['mitre-attack', 'sans-institute'],
        labs: ['LetsDefend Incident Response Cases'],
        certifications: ['OSDA', 'GCFA']
      }
    ]
  },
  {
    id: 'red-team',
    title: 'Red Team Operator Roadmap',
    description: 'Adversary simulation path covering evasion, command and control (C2) infrastructure, stealthy lateral movement, and multi-domain Active Directory exploitation.',
    difficulty: 'advanced',
    category: 'Offensive Security',
    estimatedSequence: '1. Advanced AD -> 2. C2 Architecture -> 3. EDR Evasion -> 4. Adversary Emulation',
    targetRole: 'Red Team Operator / Adversary Simulation Specialist',
    steps: [
      {
        id: 'rt-1',
        title: 'Advanced Active Directory & Domain Trust Exploitation',
        description: 'Forest trusts, cross-forest Kerberoasting, Unconstrained & Constrained Delegation, Shadow Credentials, and Active Directory Certificate Services (AD CS) attacks.',
        difficulty: 'advanced',
        skills: ['Certipy / AD CS Escalation', 'Kerberos RBCD', 'Forest Trust Pivoting'],
        resources: ['hacktricks', 'hack-the-box'],
        labs: ['Hack The Box Pro Labs (Dante / Zephyr)'],
        certifications: ['OSEP', 'CRTO']
      },
      {
        id: 'rt-2',
        title: 'Command and Control (C2) Infrastructure Setup',
        description: 'Designing resilient, stealthy C2 redirectors using CDN domain fronting, Apache mod_rewrite rules, malleable C2 profiles, and egress filtering evasion.',
        difficulty: 'advanced',
        skills: ['Sliver / Havoc / Mythic C2 Deployment', 'DNS Tunneling', 'Domain Fronting'],
        resources: ['hacktricks'],
        labs: ['Build local multi-tier C2 lab with redirectors'],
        certifications: ['OSEP']
      },
      {
        id: 'rt-3',
        title: 'Antivirus & EDR Evasion Mechanics',
        description: 'Process hollowing, unhooking ntdll.dll, direct system calls (Syswhispers), AMSI patching in memory, and obfuscating C# .NET assemblies.',
        difficulty: 'advanced',
        skills: ['Direct Syscalls', 'AMSI / ETW Memory Patching', 'Process Injection Techniques'],
        resources: ['exploit-database'],
        labs: ['Bypass Windows Defender on Windows 11 using custom C# loader'],
        certifications: ['OSEP', 'OSED']
      }
    ]
  },
  {
    id: 'dfir',
    title: 'Digital Forensics & Incident Response (DFIR) Roadmap',
    description: 'Specialized path for investigating security breaches, analyzing compromised disk images, reconstructing timelines, and conducting volatile memory forensics.',
    difficulty: 'intermediate',
    category: 'Defensive Security',
    estimatedSequence: '1. Forensic Principles -> 2. Disk Artifacts -> 3. Memory Analysis -> 4. Timeline Reconstruction',
    targetRole: 'Digital Forensics Examiner / Senior Incident Response Consultant',
    steps: [
      {
        id: 'df-1',
        title: 'Digital Forensics Principles & Evidence Preservation',
        description: 'Chain of custody, forensic write-blockers, dead vs live acquisition, creating raw (.raw / .dd) and Expert Witness (.E01) disk images with cryptographic verification (SHA-256).',
        difficulty: 'beginner',
        skills: ['FTK Imager Acquisition', 'Cryptographic Hashes for Evidence Integrity', 'Chain of Custody Documentation'],
        resources: ['dfir-diva', 'autopsy'],
        labs: ['CyberDefenders Disk Image Evidence Acquisition'],
        certifications: ['GCFA', 'CySA+']
      },
      {
        id: 'df-2',
        title: 'Windows File System & Artifact Forensics',
        description: 'Analyzing the Master File Table ($MFT, $LogFile), Registry hives (SAM, SYSTEM, SOFTWARE), Shimcache, Amcache, Shellbags, and Prefetch files to determine execution proof.',
        difficulty: 'intermediate',
        skills: ['Autopsy Investigation', 'Eric Zimmerman Tools (MFTECmd, PECmd, Registry Explorer)', 'KAPE Triage Collection'],
        resources: ['13cubed', 'cyberdefenders'],
        labs: ['CyberDefenders RedLine / Windows Endpoint Investigation Labs'],
        certifications: ['GCFA', 'GCIH']
      },
      {
        id: 'df-3',
        title: 'Memory Forensics with Volatility',
        description: 'Extracting running process trees (pslist/pstree), injected DLLs (malfind), network connections (netscan), and dumped password hashes from raw RAM memory captures.',
        difficulty: 'advanced',
        skills: ['Volatility 3 Framework', 'Code Injection Identification', 'Kernel Driver Inspection'],
        resources: ['13cubed', 'cyberdefenders'],
        labs: ['CyberDefenders Memory Dump Forensic Challenges'],
        certifications: ['GCFA']
      }
    ]
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering & Malware Analysis Roadmap',
    description: 'Low-level software analysis path focused on dissecting compiled binary executables, static and dynamic analysis, disassemblers, and exploit research.',
    difficulty: 'advanced',
    category: 'Software Security',
    estimatedSequence: '1. C & Assembly -> 2. Dynamic Debugging -> 3. Ghidra Decompilation -> 4. Advanced Exploit Dev',
    targetRole: 'Reverse Engineer / Malware Analyst / Vulnerability Researcher',
    steps: [
      {
        id: 're-1',
        title: 'C Programming & x86/x64 Assembly Language',
        description: 'Deep understanding of stack frames, CPU registers (EAX/RAX, ESP/RSP, EBP/RBP), calling conventions (cdecl, stdcall, fastcall), pointers, and memory layout.',
        difficulty: 'intermediate',
        skills: ['x86/x64 Assembly Reading', 'Stack Layout & Buffer Mechanics', 'C Memory Pointers'],
        resources: ['liveoverflow', 'picoctf'],
        labs: ['PicoCTF Binary Exploitation Rooms'],
        certifications: ['OSED']
      },
      {
        id: 're-2',
        title: 'Dynamic Analysis & Debugging',
        description: 'Running untrusted executables inside isolated sandboxes, setting breakpoints in x64dbg/GDB, inspecting CPU registers in real time, and tracking API calls.',
        difficulty: 'intermediate',
        skills: ['x64dbg / GDB Breakpoints', 'Process Hacker Inspection', 'Procmon API Tracking'],
        resources: ['eric-parker', 'liveoverflow'],
        labs: ['Analyze crackme challenges on Root-Me'],
        certifications: ['OSED', 'OSCP+']
      },
      {
        id: 're-3',
        title: 'Static Analysis & Decompilation with Ghidra',
        description: 'Disassembling stripped binaries, defining function signatures and data structures in Ghidra, identifying cryptographic constants, and reconstructing high-level C logic.',
        difficulty: 'advanced',
        skills: ['Ghidra Decompiler Mastery', 'Function Renaming & Struct Definitions', 'Control Flow Graph (CFG) Analysis'],
        resources: ['liveoverflow', 'ghidra'],
        labs: ['Dissect real obfuscated malware samples from MalwareBazaar'],
        certifications: ['OSED', 'OSEE']
      }
    ]
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Architecture Roadmap',
    description: 'Modern enterprise cloud security path covering AWS/Azure/GCP identity and access management, infrastructure as code, container security, and Zero Trust cloud defense.',
    difficulty: 'intermediate',
    category: 'Cloud Security',
    estimatedSequence: '1. Cloud IAM -> 2. Network VPC Security -> 3. Containers/K8s -> 4. Cloud Architecture & Certs',
    targetRole: 'Cloud Security Engineer / DevSecOps Architect / Cloud Security Specialist',
    steps: [
      {
        id: 'cs-1',
        title: 'Cloud Fundamentals & Identity (IAM)',
        description: 'Mastering AWS IAM and Microsoft Entra ID policies, role-based access, temporary STS credentials, service principals, and least privilege enforcement.',
        difficulty: 'beginner',
        skills: ['JSON IAM Policy Crafting', 'AssumeRole & Service Principals', 'Multi-Account Organizations'],
        resources: ['microsoft-learn-security'],
        labs: ['Microsoft Learn SC-900 Interactive Labs'],
        certifications: ['Microsoft SC-900', 'AWS Certified Security - Specialty']
      },
      {
        id: 'cs-2',
        title: 'Cloud Networking & Perimeter Controls',
        description: 'Configuring Virtual Private Clouds (VPCs), Security Groups, Network Access Control Lists (NACLs), AWS WAF, and VPC Flow Log analysis.',
        difficulty: 'intermediate',
        skills: ['VPC Peering & Transit Gateways', 'Security Group Ingress/Egress Rules', 'WAF Rule Sets'],
        resources: ['microsoft-learn-security'],
        labs: ['Deploy hardened multi-tier VPC in Terraform'],
        certifications: ['AWS Certified Security - Specialty']
      },
      {
        id: 'cs-3',
        title: 'Container & Kubernetes Security (K8s)',
        description: 'Hardening Docker container images, non-root user execution, Docker socket risks, Kubernetes RBAC, Network Policies, and pod security admission.',
        difficulty: 'advanced',
        skills: ['Dockerfile Security Scanning (Trivy)', 'Kubernetes Network Policies', 'Pod Security Standards'],
        resources: ['owasp'],
        labs: ['Container security auditing in minikube'],
        certifications: ['CKS (Certified Kubernetes Security Specialist)']
      }
    ]
  }
];
