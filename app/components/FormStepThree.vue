<template>
  <div class="space-y-8 bg-white dark:bg-gray-900 rounded-xl p-2 w-full max-w-6xl mx-auto min-h-[60vh] flex flex-col">
    <div class="flex flex-col gap-2">
      <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {{ t('formStepThree.title') }}
      </h2>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <p class="text-lg text-gray-500 dark:text-gray-300">
        {{ t('formStepThree.inProgress') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>



