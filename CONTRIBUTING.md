# Contributing to CyberSec Hub

Thank you for your interest in improving CyberSec Hub! We welcome high-quality contributions from cybersecurity practitioners, students, and educators.

---

## Core Content Standards

To preserve data integrity, all contributions must strictly adhere to the following rules:

1. **No Emojis**: Do not use emojis anywhere in code, titles, cards, descriptions, or badges.
2. **Official Links Only**: Use direct official URLs for certifications, frameworks, and vendor tools. Never use affiliate links or link shorteners.
3. **Accuracy**: Never invent or guess certification exam pricing, exam formats, or renewal requirements. If variable, mark as `"Verify on official provider website."`
4. **Verification Timestamp**: Set `lastVerified: 'YYYY-MM-DD'` to the date you verified the resource.
5. **Educational & Defensive Scope**: Do not submit weaponized exploit payloads, malicious scripts, or tutorials for unauthorized access.

---

## How to Add Content

### 1. Adding a Learning Resource
Open `data/resources.ts` and append a new object conforming to the `Resource` interface:
```typescript
{
  id: 'unique-slug',
  name: 'Platform Name',
  description: 'Detailed description...',
  url: 'https://official-link.com',
  category: 'Web Security',
  difficulty: 'beginner', // 'beginner' | 'intermediate' | 'advanced'
  pricing: 'free', // 'free' | 'freemium' | 'paid'
  resourceType: 'academy', // 'course' | 'platform' | 'documentation' | 'lab' | 'ctf' | 'academy' | 'framework'
  skills: ['Skill A', 'Skill B'],
  languages: ['English'],
  platform: 'Web',
  official: true,
  lastVerified: '2025-01-15',
  status: 'verified',
  relatedCertifications: ['OSWA'],
  relatedTopics: ['web-attacks'],
  recommendedFor: ['Beginners'],
}
```

### 2. Adding a Certification
Open `data/certifications.ts` and append a new entry matching the `Certification` interface.

### 3. Adding a Threat Analysis
Open `data/threats.ts` and add technical details including `attackObjective`, `attackSurface`, `attackLifecycle`, `detection`, `prevention`, and relevant MITRE ATT&CK technique IDs.

---

## Development & Pull Request Workflow

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/add-new-resource`).
3. Verify TypeScript builds without errors: `npm run build`.
4. Commit with descriptive messages.
5. Submit a Pull Request.
