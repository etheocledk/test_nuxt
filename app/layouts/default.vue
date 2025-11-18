<template>
  <div class="flex min-h-screen">
    <div class="flex flex-col flex-1 min-h-screen">
      <UHeader title="" class="flex justify-center items-center py-2">
        <LazyNuxtImg
          class="h-12 w-auto mx-auto"
          provider="myProvider"
          src="/assets/images/logo.png"
          :alt="t('header.logo_alt')"
          quality="100"
        />
      </UHeader>
      <UMain class="bg-accented">
        <slot />
      </UMain>
      <!-- Bouton flottant pour thème et langue (select custom drapeau) -->
      <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        <button
          class="rounded-full shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          :aria-label="theme === 'dark' ? t('header.theme') + ' clair' : t('header.theme') + ' sombre'"
          @click="toggleTheme"
        >
          <span v-if="theme === 'dark'">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
          </span>
        </button>
        <!-- Sélecteur customisé de langue avec drapeaux -->
        <div class="relative group">
          <button
            class="rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
            aria-label="Changer la langue"
            @click="showLang = !showLang"
          >
            <span class="text-2xl">
              {{ locale === 'fr-FR' ? '🇫🇷' : '🇬🇧' }}
            </span>
          </button>
          <div v-if="showLang" class="absolute bottom-14 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 px-2 flex flex-col gap-1 min-w-[60px] z-50 animate-fade-in">
            <button
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg"
              @click="locale = 'fr-FR'; showLang = false"
            >
              <span class="text-2xl">🇫🇷</span> Français
            </button>
            <button
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg"
              @click="locale = 'en-US'; showLang = false"
            >
              <span class="text-2xl">🇬🇧</span> English
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const menu = computed<NavigationMenuItem[]>(() => {
  const _ = locale.value
  return [
    { label: 'sidebar.dashboard', icon: 'i-lucide-layout-dashboard', to: '/' },
    { label: 'sidebar.messages', icon: 'i-lucide-mail', to: '/messages' },
    { label: 'sidebar.users', icon: 'i-lucide-users', to: '/users' },
    { label: 'sidebar.stats', icon: 'i-lucide-bar-chart-2', to: '/stats' },
    { label: 'sidebar.projects', icon: 'i-lucide-folder', to: '/projects' },
    { label: 'sidebar.support', icon: 'i-lucide-life-buoy', to: '/support' }
  ]
})

const collapsed = ref(false)
const theme = ref('light')
const showLang = ref(false)

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;
  border: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8);
}
</style>
