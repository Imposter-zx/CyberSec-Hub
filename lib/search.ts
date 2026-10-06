import { SearchResult } from '@/types';
import { resources } from '@/data/resources';
import { certifications } from '@/data/certifications';
import { threats } from '@/data/threats';
import { hackerTypes } from '@/data/hackers';
import { authenticationConcepts } from '@/data/authentication';
import { encryptionConcepts } from '@/data/encryption';
import { firewallTypes } from '@/data/firewalls';
import { youtubeChannels } from '@/data/youtube';
import { tools } from '@/data/tools';
import { roadmaps } from '@/data/roadmaps';
import { knowledgeTopics } from '@/data/knowledge';

export function globalSearch(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) return [];

  const cleanQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search Resources
  resources.forEach((r) => {
    const match =
      r.name.toLowerCase().includes(cleanQuery) ||
      r.description.toLowerCase().includes(cleanQuery) ||
      r.category.toLowerCase().includes(cleanQuery) ||
      r.skills.some((s) => s.toLowerCase().includes(cleanQuery));

    if (match) {
      results.push({
        id: r.id,
        title: r.name,
        category: r.category,
        type: 'Resource',
        difficulty: r.difficulty,
        description: r.description,
        tags: [...r.skills, r.pricing, r.resourceType],
        url: r.url,
        internalUrl: `/learn?id=${r.id}`,
      });
    }
  });

  // Search Certifications
  certifications.forEach((c) => {
    const match =
      c.name.toLowerCase().includes(cleanQuery) ||
      c.provider.toLowerCase().includes(cleanQuery) ||
      c.domain.toLowerCase().includes(cleanQuery) ||
      c.skillsTested.some((s) => s.toLowerCase().includes(cleanQuery));

    if (match) {
      results.push({
        id: c.id,
        title: c.name,
        category: c.domain,
        type: 'Certification',
        difficulty: c.level,
        description: `${c.provider} - ${c.targetAudience}`,
        tags: [c.provider, c.level, c.domain],
        url: c.officialUrl,
        internalUrl: `/certifications?id=${c.id}`,
      });
    }
  });

  // Search Threats
  threats.forEach((t) => {
    const match =
      t.name.toLowerCase().includes(cleanQuery) ||
      t.definition.toLowerCase().includes(cleanQuery) ||
      t.category.toLowerCase().includes(cleanQuery) ||
      t.impact.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: t.id,
        title: t.name,
        category: t.category,
        type: 'Security Threat',
        difficulty: t.difficulty,
        description: t.definition,
        tags: [t.category, ...(t.securityControls || [])],
        internalUrl: `/knowledge/threats#${t.id}`,
      });
    }
  });

  // Search Hacker Types
  hackerTypes.forEach((h) => {
    const match =
      h.name.toLowerCase().includes(cleanQuery) ||
      h.definition.toLowerCase().includes(cleanQuery) ||
      h.careerRoles.some((r) => r.toLowerCase().includes(cleanQuery));

    if (match) {
      results.push({
        id: h.id,
        title: h.name,
        category: 'Hacker Types & Roles',
        type: 'Hacker Type',
        description: h.definition,
        tags: h.careerRoles,
        internalUrl: `/knowledge/hackers#${h.id}`,
      });
    }
  });

  // Search Authentication
  authenticationConcepts.forEach((a) => {
    const match =
      a.name.toLowerCase().includes(cleanQuery) ||
      a.definition.toLowerCase().includes(cleanQuery) ||
      a.category.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: a.id,
        title: a.name,
        category: a.category,
        type: 'Authentication',
        description: a.definition,
        tags: a.useCases,
        internalUrl: `/knowledge/authentication#${a.id}`,
      });
    }
  });

  // Search Encryption
  encryptionConcepts.forEach((e) => {
    const match =
      e.name.toLowerCase().includes(cleanQuery) ||
      e.definition.toLowerCase().includes(cleanQuery) ||
      e.category.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: e.id,
        title: e.name,
        category: e.category,
        type: 'Cryptography',
        description: e.definition,
        tags: [e.type, e.status, ...(e.useCases || [])],
        internalUrl: `/knowledge/encryption#${e.id}`,
      });
    }
  });

  // Search Firewalls
  firewallTypes.forEach((f) => {
    const match =
      f.name.toLowerCase().includes(cleanQuery) ||
      f.definition.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: f.id,
        title: f.name,
        category: 'Network Defense',
        type: 'Firewall',
        description: f.definition,
        tags: f.relatedTechnologies,
        internalUrl: `/knowledge/firewalls#${f.id}`,
      });
    }
  });

  // Search YouTube Channels
  youtubeChannels.forEach((y) => {
    const match =
      y.name.toLowerCase().includes(cleanQuery) ||
      y.description.toLowerCase().includes(cleanQuery) ||
      y.categories.some((c) => c.toLowerCase().includes(cleanQuery));

    if (match) {
      results.push({
        id: y.id,
        title: y.name,
        category: 'YouTube Channel',
        type: 'YouTube',
        description: y.description,
        tags: y.categories,
        url: y.url,
        internalUrl: `/youtube#${y.id}`,
      });
    }
  });

  // Search Tools
  tools.forEach((t) => {
    const match =
      t.name.toLowerCase().includes(cleanQuery) ||
      t.purpose.toLowerCase().includes(cleanQuery) ||
      t.category.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: t.id,
        title: t.name,
        category: t.category,
        type: 'Tool',
        difficulty: t.difficulty,
        description: t.purpose,
        tags: [...t.platform, t.license],
        url: t.officialUrl,
        internalUrl: `/tools#${t.id}`,
      });
    }
  });

  // Search Roadmaps
  roadmaps.forEach((r) => {
    const match =
      r.title.toLowerCase().includes(cleanQuery) ||
      r.description.toLowerCase().includes(cleanQuery) ||
      r.targetRole.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: r.id,
        title: r.title,
        category: r.category,
        type: 'Learning Roadmap',
        difficulty: r.difficulty,
        description: `${r.targetRole} - ${r.description}`,
        tags: [r.category, r.targetRole],
        internalUrl: `/roadmaps/${r.id}`,
      });
    }
  });

  // Search Knowledge Topics
  knowledgeTopics.forEach((k) => {
    const match =
      k.title.toLowerCase().includes(cleanQuery) ||
      k.definition.toLowerCase().includes(cleanQuery) ||
      k.category.toLowerCase().includes(cleanQuery);

    if (match) {
      results.push({
        id: k.id,
        title: k.title,
        category: k.category,
        type: 'Knowledge Topic',
        difficulty: k.difficulty,
        description: k.definition,
        tags: [k.category, ...(k.relatedTopics || [])],
        internalUrl: `/knowledge/${k.id}`,
      });
    }
  });

  return results;
}

export function getSearchSuggestions(query: string): string[] {
  if (!query || query.trim().length < 2) return [];
  const clean = query.toLowerCase().trim();

  const terms = [
    'OSCP+',
    'Security+',
    'Burp Suite',
    'Nmap',
    'TryHackMe',
    'PortSwigger Academy',
    'SQL Injection',
    'Cross-Site Scripting (XSS)',
    'Ransomware',
    'Zero Trust',
    'Active Directory',
    'Diffie-Hellman',
    'Argon2',
    'Passkeys',
    'Next-Generation Firewall',
    'John Hammond',
    'IppSec',
    'Ghidra',
    'Volatility',
    'Wireshark',
    'Blue Team',
    'Red Team',
    'CISSP',
    'OAuth 2.0',
    'SAML',
  ];

  return terms.filter((term) => term.toLowerCase().includes(clean)).slice(0, 6);
}
