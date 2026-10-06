export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Pricing = 'free' | 'freemium' | 'paid';
export type ResourceType =
  | 'course'
  | 'platform'
  | 'documentation'
  | 'lab'
  | 'ctf'
  | 'academy'
  | 'certification-prep'
  | 'research'
  | 'framework'
  | 'community';

export type VerificationStatus = 'verified' | 'needs-verification' | 'archived';
export type ContentType =
  | 'video'
  | 'article'
  | 'interactive'
  | 'hands-on'
  | 'lecture'
  | 'tutorial'
  | 'walkthrough'
  | 'documentation';

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  subcategory?: string;
  difficulty: Difficulty;
  pricing: Pricing;
  resourceType: ResourceType;
  skills: string[];
  languages: string[];
  platform: string;
  official: boolean;
  lastVerified: string;
  status: VerificationStatus;
  relatedCertifications: string[];
  relatedTopics: string[];
  recommendedFor: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  officialUrl: string;
  domain: string;
  level: Difficulty;
  targetAudience: string;
  skillsTested: string[];
  examType: string;
  practical: boolean;
  duration: string;
  prerequisites: string[];
  renewalRequirements: string;
  validityPeriod: string;
  cost: string;
  relatedCertifications: string[];
  recommendedResources: string[];
  careerRelevance: string;
  lastVerified: string;
  categories: string[];
}

export interface YouTubeChannel {
  id: string;
  name: string;
  url: string;
  categories: string[];
  level: Difficulty[];
  description: string;
  mainTopics: string[];
  contentType: ContentType[];
  relatedCertifications: string[];
  recommendedContent?: string[];
  official: boolean;
  lastVerified: string;
}

export interface Tool {
  id: string;
  name: string;
  officialUrl: string;
  category: string;
  purpose: string;
  platform: string[];
  license: string;
  difficulty: Difficulty;
  learningResources: string[];
  relatedCertifications: string[];
  safetyNote?: string;
}

export interface Threat {
  id: string;
  name: string;
  category: string;
  definition: string;
  attackObjective: string;
  attackSurface: string;
  attackLifecycle: string;
  impact: string;
  detection: string;
  prevention: string;
  mitigation: string;
  securityControls: string[];
  mitreAttackTechniques?: string[];
  owaspCategory?: string;
  difficulty: Difficulty;
  relatedThreats: string[];
}

export interface HackerType {
  id: string;
  name: string;
  definition: string;
  objectives: string;
  activities: string;
  commonTechniques: string[];
  legalEthicalContext: string;
  careerRoles: string[];
  relatedSkills: string[];
  relatedCertifications: string[];
}

export interface AuthenticationConcept {
  id: string;
  name: string;
  category: 'Knowledge Factor' | 'Possession Factor' | 'Biometric Factor' | 'Modern Authentication' | 'Core Concept';
  definition: string;
  howItWorks: string;
  advantages: string[];
  limitations: string[];
  useCases: string[];
  relatedConcepts: string[];
}

export interface EncryptionConcept {
  id: string;
  name: string;
  category: string;
  type: 'symmetric' | 'asymmetric' | 'hashing' | 'concept';
  definition: string;
  howItWorks: string;
  keySize?: string;
  status: 'current' | 'deprecated' | 'legacy';
  useCases: string[];
  relatedConcepts: string[];
}

export interface FirewallType {
  id: string;
  name: string;
  definition: string;
  howItWorks: string;
  advantages: string[];
  limitations: string[];
  useCases: string[];
  relatedTechnologies: string[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  skills: string[];
  resources: string[];
  labs: string[];
  certifications: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  category: string;
  estimatedSequence: string;
  targetRole: string;
  steps: RoadmapStep[];
}

export interface KnowledgeTopic {
  id: string;
  title: string;
  category: string;
  definition: string;
  explanation: string;
  howItWorks?: string;
  whyItMatters: string;
  examples: string[];
  commonAttacksOrDefenses?: string[];
  relatedTopics: string[];
  difficulty: Difficulty;
  relatedResources: string[];
  relatedCertifications: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  type: string;
  difficulty?: Difficulty;
  description: string;
  tags: string[];
  url?: string;
  internalUrl: string;
}

export type Language = 'en' | 'fr' | 'ar';
