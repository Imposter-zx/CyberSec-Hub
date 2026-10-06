# CyberSec Hub

> **Learn. Practice. Secure.**

CyberSec Hub is a modern, responsive, multilingual, centralized cybersecurity learning and knowledge platform designed to organize free learning resources, core technical concepts, threat intelligence taxonomies, authentication standards, cryptography breakdowns, firewall architectures, industry certifications, tools, labs, and interactive roadmaps.

---

## Key Features

- **Knowledge Encyclopedia**: Deep technical breakdowns across 14 hacker profiles, 35+ security threats (mapped to MITRE ATT&CK & OWASP), Authentication (AAA framework, Passkeys, OAuth 2.0, SAML), Cryptography (AES, ChaCha20, RSA, ECC, Argon2id), and Firewalls.
- **Interactive Career Roadmaps**: 8 structured learning tracks (Beginner, Pentesting, Web Security, Blue Team, Red Team, DFIR, Reverse Engineering, Cloud Security).
- **Certification Explorer & Comparison Matrix**: 25+ industry certifications (including the full OffSec series, CompTIA, ISC2, GIAC/SANS, Cisco, and Cloud) with side-by-side comparison.
- **Hands-on Labs & Tools Directory**: Curated tools with platform requirements and safety notes.
- **Multilingual Support**: Internationalization supporting English, French (Français), and Arabic (العربية) with native Right-to-Left (RTL) layout.
- **Light & Dark Mode**: Persistent theme switching with accessible contrast.
- **Global Search**: Instant multi-entity search across all topics, threats, tools, and certifications.
- **Zero Emojis & Professional Tone**: Rigorous technical cybersecurity terminology and design.

---

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Internationalization**: Custom Context I18n Engine (EN / FR / AR + RTL)
- **Theme**: Next-themes architecture with Dark/Light mode support
- **Hosting Ready**: Static Export / Vercel / GitHub Pages ready

---

## Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm or pnpm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/cybersec-hub.git

# Navigate to project directory
cd cybersec-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── layout.tsx                  # Root layout with Theme & I18n providers
│   ├── page.tsx                    # Home page with hero, search, 17 categories
│   ├── globals.css                 # Theme variables & base stylesheet
│   ├── learn/                      # Learning resources directory with filters
│   ├── knowledge/                  # Encyclopedia hub
│   │   ├── hackers/                # 14 hacker profiles & roles
│   │   ├── threats/                # 35+ threats with MITRE & OWASP
│   │   ├── authentication/         # AAA framework & modern auth
│   │   ├── encryption/             # Cryptography & password hashing
│   │   ├── firewalls/              # Firewall architectures & DMZ diagram
│   │   └── [topic]/                # Dynamic concept deep-dive articles
│   ├── certifications/             # Certification explorer
│   │   ├── offsec/                 # Dedicated OffSec hub
│   │   └── compare/                # Side-by-side comparison matrix
│   ├── youtube/                    # YouTube channel directory
│   ├── labs/                       # Hands-on practice platforms
│   ├── tools/                      # Security tools with safety notices
│   ├── roadmaps/                   # 8 interactive learning tracks
│   ├── search/                     # Global multi-entity search
│   └── about/                      # About & Methodology
├── components/
│   ├── layout/                     # Navbar, Footer, Breadcrumbs
│   ├── theme/                      # ThemeProvider (Dark / Light)
│   └── ui/                         # Reusable cards, badges, search bar, timeline
├── data/                           # Structured TypeScript datasets
│   ├── resources.ts
│   ├── certifications.ts
│   ├── threats.ts
│   ├── hackers.ts
│   ├── authentication.ts
│   ├── encryption.ts
│   ├── firewalls.ts
│   ├── youtube.ts
│   ├── tools.ts
│   ├── roadmaps.ts
│   └── knowledge.ts
├── lib/                            # Utils, search engine, filter logic, i18n
└── types/                          # TypeScript domain interfaces
```

---

## Contributing

We welcome community contributions! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on adding resources, certifications, or knowledge articles.

---

## License

This project is licensed under the [MIT License](./LICENSE).
