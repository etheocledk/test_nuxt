<template>
  <div class="flex flex-col min-h-screen">
    <UApp :locale="localesValues[currentLocale]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
type LocaleCode = 'fr-FR' | 'en-US'

const { locale } = useI18n()

const localesValues = {
  'fr-FR': locales.fr,
  'en-US': locales.en
}

const currentLocale = computed(() => locale.value as LocaleCode)
</script>
