<script setup lang="ts">
import { useI18nLocale } from '~/components/core/useI18nLocale'

const showLang = ref(false)
const { currentLocale, setLocale } = useI18nLocale()

const handleChange = async (code: string) => {
  await setLocale(code)
  showLang.value = false
}
</script>

<template>
  <div class="relative group">
    <button
      class="rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
      aria-label="Changer la langue"
      @click="showLang = !showLang"
    >
      <span class="text-2xl">
        {{ currentLocale === 'fr-FR' ? '🇫🇷' : '🇬🇧' }}
      </span>
    </button>
    <div v-if="showLang" class="absolute bottom-14 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 px-2 flex flex-col gap-1 min-w-[60px] z-50 animate-fade-in">
      <button
        class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg"
        @click="handleChange('fr-FR')"
      >
        <span class="text-2xl">🇫🇷</span> Français
      </button>
      <button
        class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg"
        @click="handleChange('en-US')"
      >
        <span class="text-2xl">🇬🇧</span> English
      </button>
    </div>
  </div>
</template>
