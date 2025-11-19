<template>
  <UContainer class="my-12 pt-8 bg-default rounded-2xl border-muted px-0! border ">
    <SharedSeoManager />
    <UStepper v-model="step" :items="items" />
    <div class="mt-8">
      <Transition name="fade-slide" mode="out-in">
        <component
          :is="currentStepComponent"
          :key="step"
          @next-step="nextStep"
          @prev-step="prevStep"
        />
      </Transition>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { StepperItem } from '@nuxt/ui'
import FormStepOne from '~/components/FormStepOne.vue'
import FormStepTwo from '~/components/FormStepTwo.vue'
import FormStepThree from '~/components/FormStepThree.vue'

const { t } = useI18n()

const items = computed<StepperItem[]>(() => [
  { title: t('formStepOne.title') },
  { title: t('formStepTwo.title') },
  { title: t('formStepThree.title') }
])

const step = ref(0)

const currentStepComponent = computed(() => {
  if (step.value === 0) return FormStepOne
  if (step.value === 1) return FormStepTwo
  if (step.value === 2) return FormStepThree
  return FormStepOne
})

function nextStep() {
  if (step.value < 2) step.value++
}
function prevStep() {
  if (step.value > 0) step.value--
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
