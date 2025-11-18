<template>
  <div
    class="container mx-auto py-10 px-10 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
  >
    <SharedSeoManager />
    <UStepper v-model="step" :items="items" />
    <div class="mt-8">
      <FormStepOne v-if="step === 0" @next-step="step++" />
      <FormStepTwo v-else-if="step === 1" @prev-step="step--" @next-step="step++" />
      <FormStepThree v-else-if="step === 2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { StepperItem } from '@nuxt/ui'
import FormStepOne from '~/components/FormStepOne.vue'
import FormStepTwo from '~/components/FormStepTwo.vue'
import FormStepThree from '~/components/FormStepThree.vue'

const { t, locale } = useI18n()

const items = computed<StepperItem[]>(() => [
  {
    title: t('formStepOne.title')
  },
  {
    title: t('formStepTwo.title')
  },
  {
    title: t('formStepThree.title')
  }
])

const step = ref(0)
</script>
