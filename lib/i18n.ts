// Supported languages for the MVP
export const SUPPORTED_LANGUAGES = ['en', 'de', 'fr', 'it'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en'

export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
}

// Validate and normalize language code
export function normalizeLanguage(lang?: string | null): SupportedLanguage {
  if (!lang) return DEFAULT_LANGUAGE
  const normalized = lang.toLowerCase().slice(0, 2)
  return SUPPORTED_LANGUAGES.includes(normalized as SupportedLanguage)
    ? (normalized as SupportedLanguage)
    : DEFAULT_LANGUAGE
}

// Get language from various sources (query param, cookie, etc.)
export function getLanguageFromRequest(searchParams?: URLSearchParams): SupportedLanguage {
  const langParam = searchParams?.get('lang')
  return normalizeLanguage(langParam)
}

// Basic UI strings (can be expanded as needed)
export const uiStrings = {
  en: {
    home: 'Home',
    documents: 'Documents',
    login: 'Log In',
    signup: 'Sign Up',
    logout: 'Log Out',
    switchLanguage: 'Language',
  },
  de: {
    home: 'Startseite',
    documents: 'Dokumente',
    login: 'Anmelden',
    signup: 'Registrieren',
    logout: 'Abmelden',
    switchLanguage: 'Sprache',
  },
  fr: {
    home: 'Accueil',
    documents: 'Documents',
    login: 'Connexion',
    signup: 'S\'inscrire',
    logout: 'Déconnexion',
    switchLanguage: 'Langue',
  },
  it: {
    home: 'Home',
    documents: 'Documenti',
    login: 'Accedi',
    signup: 'Registrati',
    logout: 'Esci',
    switchLanguage: 'Lingua',
  },
}

export function getUIStrings(lang: SupportedLanguage) {
  return uiStrings[lang]
}

