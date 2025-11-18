/**
 * Locale management composable
 * Enhanced for better type safety and functionality
 */

export interface LocaleOption {
  code: string
  name: string
  flag: string
}

export function useI18nLocale() {
  const { locale, setLocale: nuxtSetLocale } = useI18n()
  
  // Define available locales with enhanced metadata
  const availableLocales = computed<LocaleOption[]>(() => [
    {
      code: 'fr-FR',
      name: 'Français',
      flag: '🇫🇷'
    },
    {
      code: 'en-US',
      name: 'English',
      flag: '🇺🇸'
    }
  ])

  // Current locale
  const currentLocale = computed(() => locale.value)

  // Set locale with validation and storage persistence
  const setLocale = async (newLocale: string) => {
    try {
      // Validate locale
      const isValidLocale = availableLocales.value.some(l => l.code === newLocale)
      if (!isValidLocale) {
        console.warn(`Invalid locale: ${newLocale}`)
        return
      }

      await nuxtSetLocale(newLocale as 'fr-FR' | 'en-US')
      
      // Store in localStorage for persistence
      if (import.meta.client) {
        localStorage.setItem('locale', newLocale)
      }
    } catch (error) {
      console.error('Failed to set locale:', error)
    }
  }

  // Get current locale option with metadata
  const getCurrentLocaleOption = computed(() => 
    availableLocales.value.find(l => l.code === currentLocale.value)
  )

  // Initialize locale from storage or browser preference
  const initLocale = () => {
    if (import.meta.client) {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && availableLocales.value.some(l => l.code === savedLocale)) {
        setLocale(savedLocale)
        return
      }
      
      // Fallback to browser language detection
      const browserLang = navigator.language
      const langPrefix = (browserLang ?? '').split('-')[0]
      const supportedLocale = langPrefix
        ? availableLocales.value.find(l => l.code.startsWith(langPrefix))
        : undefined
      
      if (supportedLocale) {
        setLocale(supportedLocale.code)
      }
    }
  }

  // Get locale by code
  const getLocaleByCode = (code: string) => {
    return availableLocales.value.find(l => l.code === code)
  }

  // Check if locale is supported
  const isLocaleSupported = (code: string) => {
    return availableLocales.value.some(l => l.code === code)
  }

  return {
    currentLocale,
    availableLocales,
    setLocale,
    getCurrentLocaleOption,
    initLocale,
    getLocaleByCode,
    isLocaleSupported
  }
}
