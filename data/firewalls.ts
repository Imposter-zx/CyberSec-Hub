import { FirewallType } from '@/types';

export const firewallTypes: FirewallType[] = [
  {
    id: 'packet-filtering',
    name: 'Packet Filtering Firewall (Stateless)',
    definition: 'A first-generation firewall operating at the Network and Transport layers (Layers 3 & 4) that inspects each individual packet in isolation based on static header rules.',
    howItWorks: 'Evaluates packet headers against an Access Control List (ACL) checking Source IP, Destination IP, Protocol (TCP/UDP/ICMP), and Source/Destination Ports. Treats every single packet independently without remembering previous packets in the conversation.',
    advantages: [
      'Extremely high packet throughput and low latency',
      'Low memory and CPU resource consumption',
      'Cost-effective and built directly into standard enterprise routers'
    ],
    limitations: [
      'Cannot track connection state or detect spoofed TCP SYN/ACK flags',
      'Incapable of inspecting application layer payloads (Layer 7)',
      'Requires opening broad high-numbered ports for return traffic'
    ],
    useCases: ['Edge perimeter coarse filtering', 'Router access control lists (Cisco ACLs)', 'DDoS volumetric initial traffic shedding'],
    relatedTechnologies: ['Cisco IOS ACLs', 'Linux iptables (raw table)', 'Edge routers']
  },
  {
    id: 'stateful-inspection',
    name: 'Stateful Inspection Firewall',
    definition: 'A firewall architecture that tracks the state of active network connections in a dynamic state table, allowing return traffic for established sessions automatically.',
    howItWorks: 'Monitors the complete TCP 3-way handshake (SYN, SYN-ACK, ACK) and records connection tuples (Source IP/Port, Dest IP/Port, State: ESTABLISHED/RELATED) in memory. Packets matching an active established session bypass rule evaluation and are forwarded immediately.',
    advantages: [
      'Much higher security than stateless packet filters',
      'No need to manually open incoming ephemeral ports for outbound client traffic',
      'Detects TCP sequence number anomalies and flag spoofing attacks'
    ],
    limitations: [
      'State table memory exhaustion attacks (SYN flood DDoS against firewall state table)',
      'Cannot detect malicious payloads hidden inside permitted port 443/80 sessions'
    ],
    useCases: ['Corporate network boundary defense', 'Standard internal network segmentation', 'Traditional enterprise perimeters'],
    relatedTechnologies: ['Linux Netfilter / Conntrack', 'Cisco ASA', 'pfSense / OPNsense']
  },
  {
    id: 'proxy-firewall',
    name: 'Proxy Firewall / Circuit-Level Gateway',
    definition: 'A firewall operating at the Application layer that acts as an intermediary (man-in-the-middle) between clients and servers, preventing direct network connections between endpoints.',
    howItWorks: 'Client establishes a TCP connection to the proxy server -> Proxy terminates the client connection, evaluates the request content against security policies -> Proxy establishes a new, independent connection to the target server on behalf of the client.',
    advantages: [
      'Complete isolation: external servers never see internal client IP addresses',
      'Ability to perform deep caching, protocol sanitization, and URL categorization',
      'Granular application authentication enforcement'
    ],
    limitations: [
      'Higher latency and lower overall network throughput',
      'Can break custom or non-standard protocol traffic'
    ],
    useCases: ['Outbound corporate web browsing gateways', 'Secure forward proxy architectures', 'High-security enclave isolation'],
    relatedTechnologies: ['Squid Proxy', 'Blue Coat / Symantec ProxySG', 'Zscaler Internet Access']
  },
  {
    id: 'web-application-firewall',
    name: 'Web Application Firewall (WAF)',
    definition: 'A specialized Layer 7 security device or cloud service designed to inspect, monitor, and filter HTTP/HTTPS traffic to and from a web application.',
    howItWorks: 'Decodes inbound HTTP requests (parsing URLs, JSON bodies, multipart form data, headers) and executes pattern matching rules (e.g. OWASP Core Rule Set - CRS) to detect attacks such as SQL Injection, XSS, SSRF, path traversal, and malicious bots before they reach the web server.',
    advantages: [
      'Specialized protection against OWASP Top 10 web vulnerabilities',
      'Enables virtual patching (blocking exploits for unpatched application bugs instantly)',
      'Provides rate limiting, bot protection, and Geo-IP blocking'
    ],
    limitations: [
      'Inspects only HTTP/HTTPS protocols; cannot defend non-web services',
      'Prone to false positives and evasion through advanced payload encoding'
    ],
    useCases: ['Public-facing e-commerce websites', 'REST API gateways', 'Microservices protection', 'PCI-DSS Section 6.6 compliance'],
    relatedTechnologies: ['ModSecurity / Coraza (CRS)', 'Cloudflare WAF', 'AWS WAF', 'F5 BIG-IP ASM']
  },
  {
    id: 'next-generation-firewall',
    name: 'Next-Generation Firewall (NGFW)',
    definition: 'A deep-packet inspection firewall combining traditional stateful inspection with Application Control, Integrated Intrusion Prevention System (IPS), SSL/TLS Decryption, and Threat Intelligence.',
    howItWorks: 'Decrypts TLS traffic at line rate -> Identifies applications by behavioral signature regardless of port (App-ID, e.g. identifying BitTorrent running on port 443) -> Maps traffic to corporate user identities via Active Directory integration (User-ID) -> Scans payload against integrated IPS and sandbox malware analysis (WildFire).',
    advantages: [
      'App-ID stops port-hopping evasion techniques',
      'Full visibility into encrypted TLS traffic with SSL forward proxy inspection',
      'Unified policy management combining firewall, antivirus, IPS, and URL filtering'
    ],
    limitations: [
      'High hardware and subscription licensing costs',
      'SSL/TLS decryption requires deploying private enterprise CA certificates to all endpoints'
    ],
    useCases: ['Modern corporate enterprise perimeters', 'Data center core security', 'Enterprise campus network gateways'],
    relatedTechnologies: ['Palo Alto Networks PA-Series', 'Fortinet FortiGate', 'Check Point Quantum']
  },
  {
    id: 'host-based-firewall',
    name: 'Host-Based Firewall',
    definition: 'A firewall software installed directly on an individual operating system endpoint to filter inbound and outbound traffic specifically for that single device.',
    howItWorks: 'Hooks into the OS kernel network stack (e.g., Windows Filtering Platform, Linux Netfilter). Evaluates packets based on local processes/executables (`allow chrome.exe on port 443, block powershell.exe outbound`).',
    advantages: [
      'Per-application network restriction capability',
      'Protects mobile laptops when connected to untrusted public Wi-Fi outside corporate perimeter',
      'Defends against lateral movement inside internal network subnets'
    ],
    limitations: [
      'Consumes local host CPU and memory resources',
      'Can be tampered with if an attacker achieves root/admin privileges on the host'
    ],
    useCases: ['Workstations, laptops, standalone servers', 'Windows Defender Firewall with Advanced Security', 'Linux UFW / firewalld / iptables'],
    relatedTechnologies: ['Windows Defender Firewall', 'Linux UFW (Uncomplicated Firewall)', 'macOS Application Firewall']
  },
  {
    id: 'cloud-firewall',
    name: 'Cloud-Native Firewall / Firewall-as-a-Service (FWaaS)',
    definition: 'A cloud-hosted software-defined firewall deployed as a scalable managed service to secure cloud Virtual Private Clouds (VPCs) and distributed remote workers.',
    howItWorks: 'Managed centrally through cloud provider APIs or SASE (Secure Access Service Edge) platforms. Scales automatically with network traffic, inspecting VPC-to-VPC, internet egress, and hybrid cloud VPN connections.',
    advantages: [
      'Zero physical hardware deployment or capacity provisioning required',
      'Elastic autoscaling during traffic spikes',
      'Native integration with cloud IAM, resource tagging, and cloud logging'
    ],
    limitations: [
      'Cloud data processing egress and hourly uptime billing costs',
      'Vendor lock-in with proprietary cloud policy constructs'
    ],
    useCases: ['AWS Network Firewall & Security Groups', 'Azure Firewall', 'Google Cloud VPC Firewall', 'SASE / Zero Trust remote workforce'],
    relatedTechnologies: ['AWS Network Firewall', 'Azure Firewall', 'Zscaler Cloud Firewall', 'Cloudflare Magic Firewall']
  }
];
