/**
 * I18n type definitions for enhanced type safety
 */

// Locale types
export type LocaleCode = 'fr-FR' | 'en-US'

export interface LocaleConfig {
  code: LocaleCode
  name: string
  flag: string
  direction?: 'ltr' | 'rtl'
}

// Translation key types (based on JSON structure)
export type TranslationKey = typeof import('../app/i18n/locales/en-US.json')

// Enhanced translation function type
export interface TranslateFunction {
  (key: TranslationKey | string, valuesOrFallback?: Record<string, unknown> | string): string
}

// Locale option for selectors
export interface LocaleOption {
  code: LocaleCode
  name: string
  flag: string
}

// I18n store state
export interface I18nState {
  currentLocale: LocaleCode
  availableLocales: LocaleConfig[]
  isLoading: boolean
}

declare global {
  interface Window {
    __LOCALE_STORAGE_KEY__: string
  }
}

export {}
