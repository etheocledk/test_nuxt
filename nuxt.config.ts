// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Wink' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  imports: {
    dirs: ['composables/**']
  },
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@pinia/nuxt'
    // '@nuxtjs/tailwindcss',
  ],
  image: {
    dir: 'assets/images',
    providers: {
      myProvider: {
        name: 'myProvider',
        provider: '~/providers/my-provider.ts',
        options: {
          baseURL: process.env.NUXT_PUBLIC_SITE_URL
        }
      }
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'warning', 'neutral', 'success', 'info', 'error']
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  },
  zodI18n: {
    localeCodesMapping: {
      'en-GB': 'en-US',
      'fr-FR': 'fr-FR'
    }
  },
  i18n: {
    defaultLocale: 'fr-FR',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'fr-FR',
        language: 'fr-FR',
        name: 'Français',
        file: 'fr-FR.json'
      },
      {
        code: 'en-US',
        language: 'en-US',
        name: 'English',
        file: 'en-US.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      fallbackLocale: 'fr-FR'
    },
    bundle: {
      optimizeTranslationDirective: false
    }
  }
})
