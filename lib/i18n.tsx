'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    site_title: 'CyberSec Hub',
    site_tagline: 'Learn. Practice. Secure.',
    hero_title: 'Cybersecurity Learning Hub',
    hero_subtitle: 'Learn cybersecurity from fundamentals to advanced security research.',
    start_learning: 'Start Learning',
    explore_roadmaps: 'Explore Roadmaps',
    explore_certifications: 'Explore Certifications',
    browse_free_resources: 'Browse Free Resources',
    search_placeholder: 'Search cybersecurity topics, certifications, labs, courses, or channels...',
    featured_free_resources: 'Featured Free Resources',
    popular_learning_paths: 'Popular Learning Paths',
    certifications_showcase: 'Cybersecurity Certifications',
    recommended_youtube: 'Recommended YouTube Channels',
    recently_verified: 'Recently Verified Resources',
    categories_title: 'Explore Knowledge Categories',
    nav_home: 'Home',
    nav_learn: 'Learn',
    nav_knowledge: 'Knowledge Base',
    nav_certifications: 'Certifications',
    nav_youtube: 'YouTube',
    nav_labs: 'Labs',
    nav_tools: 'Tools',
    nav_roadmaps: 'Roadmaps',
    nav_about: 'About',
    nav_search: 'Search',
    nav_hackers: 'Types of Hackers',
    nav_threats: 'Security Threats',
    nav_auth: 'Authentication',
    nav_encryption: 'Encryption & Cryptography',
    nav_firewalls: 'Firewalls & Network Defense',
    nav_compare_cert: 'Certification Comparison',
    nav_offsec: 'OffSec Certifications',
    footer_desc: 'A structured, open knowledge platform organizing cybersecurity learning resources, technical concepts, threat intelligence, and career pathways.',
    footer_educational_disclaimer: 'CyberSec Hub is an educational project. External resources belong to their respective owners.',
    filter_all: 'All',
    filter_beginner: 'Beginner',
    filter_intermediate: 'Intermediate',
    filter_advanced: 'Advanced',
    filter_free: 'Free',
    filter_freemium: 'Freemium',
    filter_paid: 'Paid',
    filter_verified: 'Verified',
    filter_category: 'Category',
    filter_difficulty: 'Difficulty',
    filter_pricing: 'Pricing',
    filter_type: 'Resource Type',
    view_details: 'View Details',
    official_website: 'Official Website',
    last_verified: 'Last verified',
    practical_exam: 'Practical Exam',
    theoretical_exam: 'Theoretical Exam',
    safety_notice: 'Educational & Safety Notice',
    compare_action: 'Compare Certifications',
    clear_filters: 'Clear Filters',
    results_found: 'results found',
  },
  fr: {
    site_title: 'CyberSec Hub',
    site_tagline: 'Apprendre. Pratiquer. Sécuriser.',
    hero_title: 'Hub d\'Apprentissage en Cybersécurité',
    hero_subtitle: 'Apprenez la cybersécurité des fondamentaux jusqu\'à la recherche de sécurité avancée.',
    start_learning: 'Commencer l\'apprentissage',
    explore_roadmaps: 'Explorer les parcours',
    explore_certifications: 'Explorer les certifications',
    browse_free_resources: 'Ressources gratuites',
    search_placeholder: 'Rechercher des concepts, certifications, labs, cours ou chaînes...',
    featured_free_resources: 'Ressources gratuites sélectionnées',
    popular_learning_paths: 'Parcours d\'apprentissage populaires',
    certifications_showcase: 'Certifications en Cybersécurité',
    recommended_youtube: 'Chaînes YouTube recommandées',
    recently_verified: 'Ressources récemment vérifiées',
    categories_title: 'Explorer les catégories',
    nav_home: 'Accueil',
    nav_learn: 'Apprendre',
    nav_knowledge: 'Base de connaissances',
    nav_certifications: 'Certifications',
    nav_youtube: 'YouTube',
    nav_labs: 'Laboratoires',
    nav_tools: 'Outils',
    nav_roadmaps: 'Parcours',
    nav_about: 'À propos',
    nav_search: 'Recherche',
    nav_hackers: 'Types de Hackers',
    nav_threats: 'Menaces de sécurité',
    nav_auth: 'Authentification',
    nav_encryption: 'Chiffrement et Cryptographie',
    nav_firewalls: 'Pare-feu et Défense Réseau',
    nav_compare_cert: 'Comparateur de certifications',
    nav_offsec: 'Certifications OffSec',
    footer_desc: 'Une plateforme éducative structurée organisant les ressources d\'apprentissage, concepts techniques, menaces et parcours professionnels en cybersécurité.',
    footer_educational_disclaimer: 'CyberSec Hub est un projet éducatif. Les ressources externes appartiennent à leurs propriétaires respectifs.',
    filter_all: 'Tous',
    filter_beginner: 'Débutant',
    filter_intermediate: 'Intermédiaire',
    filter_advanced: 'Avancé',
    filter_free: 'Gratuit',
    filter_freemium: 'Freemium',
    filter_paid: 'Payant',
    filter_verified: 'Vérifié',
    filter_category: 'Catégorie',
    filter_difficulty: 'Difficulté',
    filter_pricing: 'Tarification',
    filter_type: 'Type de ressource',
    view_details: 'Voir les détails',
    official_website: 'Site Officiel',
    last_verified: 'Dernière vérification',
    practical_exam: 'Examen pratique',
    theoretical_exam: 'Examen théorique',
    safety_notice: 'Avis éducatif et de sécurité',
    compare_action: 'Comparer les certifications',
    clear_filters: 'Effacer les filtres',
    results_found: 'résultats trouvés',
  },
  ar: {
    site_title: 'CyberSec Hub',
    site_tagline: 'تعلم. تدرب. أمّن.',
    hero_title: 'منصة تعلم الأمن السيبراني',
    hero_subtitle: 'تعلم الأمن السيبراني من المفاهيم الأساسية إلى أبحاث الأمان المتقدمة.',
    start_learning: 'ابدأ التعلم',
    explore_roadmaps: 'استكشف المسارات',
    explore_certifications: 'استكشف الشهادات',
    browse_free_resources: 'تصفح الموارد المجانية',
    search_placeholder: 'ابحث في مواضيع الأمن السيبراني، الشهادات، المختبرات، أو القنوات...',
    featured_free_resources: 'موارد مجانية مميزة',
    popular_learning_paths: 'مسارات التعلم الشائعة',
    certifications_showcase: 'شهادات الأمن السيبراني',
    recommended_youtube: 'قنوات يوتيوب الموصى بها',
    recently_verified: 'موارد تم التحقق منها حديثاً',
    categories_title: 'استكشف تصنيفات المعرفة',
    nav_home: 'الرئيسية',
    nav_learn: 'تعلم',
    nav_knowledge: 'قاعدة المعرفة',
    nav_certifications: 'الشهادات',
    nav_youtube: 'يوتيوب',
    nav_labs: 'المختبرات',
    nav_tools: 'الأدوات',
    nav_roadmaps: 'مسارات التعلم',
    nav_about: 'حول المنصة',
    nav_search: 'بحث',
    nav_hackers: 'أنواع المخترقين',
    nav_threats: 'التهديدات الأمنية',
    nav_auth: 'المصادقة والتحقق',
    nav_encryption: 'التشفير وعلم التعمية',
    nav_firewalls: 'الجدران النارية والدفاع الشبكي',
    nav_compare_cert: 'مقارنة الشهادات',
    nav_offsec: 'شهادات OffSec',
    footer_desc: 'منصة معرفية تعليمية منظمة تجمع مصادر التعلم والمفاهيم التقنية والتهديدات ومسارات المهن في الأمن السيبراني.',
    footer_educational_disclaimer: 'CyberSec Hub هو مشروع تعليمي. الموارد الخارجية ملك لأصحابها الشرعيين.',
    filter_all: 'الكل',
    filter_beginner: 'مبتدئ',
    filter_intermediate: 'متوسط',
    filter_advanced: 'متقدم',
    filter_free: 'مجاني',
    filter_freemium: 'مجاني جزئياً',
    filter_paid: 'مدفوع',
    filter_verified: 'تم التحقق',
    filter_category: 'التصنيف',
    filter_difficulty: 'المستوى',
    filter_pricing: 'السعر',
    filter_type: 'نوع المورد',
    view_details: 'عرض التفاصيل',
    official_website: 'الموقع الرسمي',
    last_verified: 'آخر تحقق',
    practical_exam: 'اختبار عملي',
    theoretical_exam: 'اختبار نظري',
    safety_notice: 'تنبيه تعليمي وأمني',
    compare_action: 'مقارنة الشهادات',
    clear_filters: 'إعادة ضبط الفلاتر',
    results_found: 'نتائج تم العثور عليها',
  }
};

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isRTL: false,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('cybersec_lang') as Language;
    if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cybersec_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isRTL: language === 'ar',
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
