<template>
  <UContainer class="my-12 pt-8 bg-default rounded-2xl border-muted px-0! border ">
    <SharedSeoManager />
    <UStepper v-model="step" :items="items" />
    <div class="mt-8">
      <FormStepOne v-if="step === 0" @next-step="step++" />
      <FormStepTwo v-else-if="step === 1" @prev-step="step--" @next-step="step++" />
      <FormStepThree v-else-if="step === 2" />
    </div>
  </UContainer>
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
