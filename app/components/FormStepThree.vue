<template>
  <div class="flex flex-col min-h-[200px]">
    <h2 class="text-xl font-semibold mb-6">{{ t('formStepThree.title') }}</h2>
    <span class="text-lg text-gray-700 text-center mt-12">{{ t('formStepThree.inProgress') }}</span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
