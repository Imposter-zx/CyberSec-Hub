import { Difficulty, Pricing, Resource, Certification, Tool, YouTubeChannel, Threat } from '@/types';

export interface FilterState {
  searchQuery: string;
  category: string;
  difficulty: Difficulty | 'all';
  pricing: Pricing | 'all';
  verifiedOnly: boolean;
  type: string;
}

export const initialFilterState: FilterState = {
  searchQuery: '',
  category: 'all',
  difficulty: 'all',
  pricing: 'all',
  verifiedOnly: false,
  type: 'all',
};

export function filterResources(resources: Resource[], filters: FilterState): Resource[] {
  return resources.filter((r) => {
    // Search query filter
    if (filters.searchQuery.trim().length > 0) {
      const q = filters.searchQuery.toLowerCase();
      const matchesSearch =
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.skills.some((s) => s.toLowerCase().includes(q));
      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.category !== 'all' && r.category !== filters.category) {
      return false;
    }

    // Difficulty filter
    if (filters.difficulty !== 'all' && r.difficulty !== filters.difficulty) {
      return false;
    }

    // Pricing filter
    if (filters.pricing !== 'all' && r.pricing !== filters.pricing) {
      return false;
    }

    // Verified filter
    if (filters.verifiedOnly && r.status !== 'verified') {
      return false;
    }

    // Type filter
    if (filters.type !== 'all' && r.resourceType !== filters.type) {
      return false;
    }

    return true;
  });
}

export function filterCertifications(
  certs: Certification[],
  filters: { query: string; level: Difficulty | 'all'; domain: string; practicalOnly: boolean }
): Certification[] {
  return certs.filter((c) => {
    if (filters.query.trim().length > 0) {
      const q = filters.query.toLowerCase();
      const match =
        c.name.toLowerCase().includes(q) ||
        c.provider.toLowerCase().includes(q) ||
        c.domain.toLowerCase().includes(q) ||
        c.skillsTested.some((s) => s.toLowerCase().includes(q));
      if (!match) return false;
    }

    if (filters.level !== 'all' && c.level !== filters.level) {
      return false;
    }

    if (filters.domain !== 'all' && c.domain !== filters.domain) {
      return false;
    }

    if (filters.practicalOnly && !c.practical) {
      return false;
    }

    return true;
  });
}

export function filterTools(
  toolList: Tool[],
  filters: { query: string; category: string; difficulty: Difficulty | 'all' }
): Tool[] {
  return toolList.filter((t) => {
    if (filters.query.trim().length > 0) {
      const q = filters.query.toLowerCase();
      const match =
        t.name.toLowerCase().includes(q) ||
        t.purpose.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (filters.category !== 'all' && t.category !== filters.category) {
      return false;
    }

    if (filters.difficulty !== 'all' && t.difficulty !== filters.difficulty) {
      return false;
    }

    return true;
  });
}

export function filterYouTubeChannels(
  channels: YouTubeChannel[],
  filters: { query: string; category: string }
): YouTubeChannel[] {
  return channels.filter((ch) => {
    if (filters.query.trim().length > 0) {
      const q = filters.query.toLowerCase();
      const match =
        ch.name.toLowerCase().includes(q) ||
        ch.description.toLowerCase().includes(q) ||
        ch.mainTopics.some((t) => t.toLowerCase().includes(q));
      if (!match) return false;
    }

    if (filters.category !== 'all' && !ch.categories.includes(filters.category)) {
      return false;
    }

    return true;
  });
}

export function filterThreats(
  threatList: Threat[],
  filters: { query: string; category: string; difficulty: Difficulty | 'all' }
): Threat[] {
  return threatList.filter((t) => {
    if (filters.query.trim().length > 0) {
      const q = filters.query.toLowerCase();
      const match =
        t.name.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (filters.category !== 'all' && t.category !== filters.category) {
      return false;
    }

    if (filters.difficulty !== 'all' && t.difficulty !== filters.difficulty) {
      return false;
    }

    return true;
  });
}
