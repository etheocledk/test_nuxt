<template>
  <div class="container mx-auto py-10 px-10 bg-white rounded-xl border border-gray-200">
    <UStepper v-model="step" :items="items" />
    <div class="mt-8">
      <FormStepOne v-if="step === 0" @next-step="step++" />
      <FormStepTwo v-else-if="step === 1" />
      <FormStepThree v-else-if="step === 2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { StepperItem } from '@nuxt/ui'
import FormStepOne from '~/components/FormStepOne.vue'
import FormStepTwo from '~/components/FormStepTwo.vue'
import FormStepThree from '~/components/FormStepThree.vue'

const items = ref<StepperItem[]>([
  {
    title: 'Faisons connaissance',
  },
  {
    title: 'Créez votre espace de travail',
  },
  {
    title: 'Mieux vous connaître',
  },
])

const step = ref(0)
</script>