<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-10">
    <UForm
      :schema="schema"
      :state="state"
      v-slot="{ errors }"
      class="space-y-6 bg-white dark:bg-gray-900 rounded-xl pl-20"
      @submit="onSubmit"
    >
      <div class="flex flex-col gap-2">
        <div>
          <UButton
            type="button"
            color="neutral"
            variant="ghost"
            class="flex items-center gap-2 shadow-none border-none cursor-pointer hover:underline"
            @click="emit('prev-step')"
          >
            <IconArrowLeft />
            <span>{{ t('formStepTwo.back') }}</span>
          </UButton>
        </div>
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('formStepTwo.title') }}
        </h2>
      </div>
      <ProfilePictureForm
        :label="t('formStepTwo.logo')"
        shape="square"
        icon="building"
        class="mb-6"
      />
      <div class="space-y-3">
        <UFormField :label="t('formStepTwo.companyName')" name="nomEntreprise">
          <UInput
            v-model="state.nomEntreprise"
            :placeholder="t('formStepTwo.companyNamePlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
          <template #error>
            <span v-if="getError(errors, 'nomEntreprise')" class="text-red-500 text-sm">{{ getError(errors, 'nomEntreprise') }}</span>
          </template>
        </UFormField>
        <UFormField :label="t('formStepTwo.companyDescription')" name="description">
          <UTextarea
            v-model="state.description"
            :placeholder="t('formStepTwo.companyDescriptionPlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
          <template #error>
            <span v-if="getError(errors, 'description')" class="text-red-500 text-sm">{{ getError(errors, 'description') }}</span>
          </template>
        </UFormField>
        <UFormField :label="t('formStepTwo.website')" name="site">
          <div class="flex">
            <span
              class="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 text-sm"
              >https://</span
            >
            <UInput
              v-model="state.site"
              :placeholder="t('formStepTwo.websitePlaceholder')"
              class="w-md text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              size="lg"
            />
          </div>
          <template #error>
            <span v-if="getError(errors, 'site')" class="text-red-500 text-sm">{{ getError(errors, 'site') }}</span>
          </template>
        </UFormField>
        <UFormField :label="t('formStepTwo.address')" name="adresse">
          <UInput
            v-model="state.adresse"
            :placeholder="t('formStepTwo.addressPlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
          <template #error>
            <span v-if="getError(errors, 'adresse')" class="text-red-500 text-sm">{{ getError(errors, 'adresse') }}</span>
          </template>
        </UFormField>
        <UFormField :label="t('formStepTwo.sector')" name="secteur">
          <UInput
            v-model="state.secteur"
            :placeholder="t('formStepTwo.sectorPlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
          <template #error>
            <span v-if="getError(errors, 'secteur')" class="text-red-500 text-sm">{{ getError(errors, 'secteur') }}</span>
          </template>
        </UFormField>
      </div>
      <div class="flex justify-between mt-8 w-lg">
        <UButton
          type="button"
          color="neutral"
          variant="ghost"
          class="flex items-center gap-2 shadow-none border-none cursor-pointer hover:underline"
          @click="emit('prev-step')"
        >
          <UIcon name="ph:arrow-left" class="h-5 w-5 cursor-pointer hover:underline" />
          <span>{{ t('formStepTwo.back') }}</span>
        </UButton>
        <UButton type="submit" color="primary" class="w-2/3 flex justify-center">{{ t('formStepTwo.continue') }}</UButton>
      </div>
    </UForm>
    <LazyNuxtImg
          provider="myProvider" src="/assets/images/entreprise.jpeg"/>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProfilePictureForm from './ProfilePictureForm.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import { z } from 'zod'

const { t } = useI18n()

const emit = defineEmits(['prev-step', 'next-step'])

const schema = z.object({
  nomEntreprise: z.string().min(1, t('formStepTwo.requiredCompanyName')),
  description: z.string().min(1, t('formStepTwo.requiredDescription')),
  site: z.string().min(1, t('formStepTwo.requiredWebsite')),
  adresse: z.string().min(1, t('formStepTwo.requiredAddress')),
  secteur: z.string().min(1, t('formStepTwo.requiredSector'))
})

type FormState = z.infer<typeof schema>


const state = reactive<Partial<FormState>>({
  nomEntreprise: '',
  description: '',
  site: '',
  adresse: '',
  secteur: ''
})

function onSubmit() {

  emit('next-step')
}

function getError(errors: any[], field: string) {
  const err = errors.find(e => e.path === field)
  return err ? err.message : ''
}
</script>
