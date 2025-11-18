<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
    <div class="text-6xl font-extrabold text-primary-600 dark:text-primary-400 mb-2">404</div>
    <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
      {{ t('error.pageNotFound') }}
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-300">{{ t('error.pageNotFoundDescription') }}</p>
  </div>
</template>
