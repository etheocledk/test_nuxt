<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-10">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-6 bg-white dark:bg-gray-900 rounded-xl pl-20"
      v-slot="{ errors }"
      @submit="onSubmit"
    >
      <h2 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        {{ t('formStepOne.title') }}
      </h2>
      <ProfilePictureForm :label="t('formStepOne.profilePicture')" />
      <div class="space-y-3">
        <UFormField :label="t('formStepOne.firstname')" name="prenom">
          <UInput
            v-model="state.prenom"
            :placeholder="t('formStepOne.firstnamePlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
          <template #error>
            <span v-if="getError(errors, 'prenom')" class="text-red-500 text-sm">{{ getError(errors, 'prenom') }}</span>
          </template>
        </UFormField>
        <UFormField :label="t('formStepOne.lastname')" name="nom">
          <UInput
            v-model="state.nom"
            :placeholder="t('formStepOne.lastnamePlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
          <template #error>
            <span v-if="getError(errors, 'nom')" class="text-red-500 text-sm">{{ getError(errors, 'nom') }}</span>
          </template>
        </UFormField>
        <UFormField :label="t('formStepOne.email')" name="email">
          <UInput
            v-model="state.email"
            :placeholder="t('formStepOne.emailPlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          >
            <template #leading>
              <IconMail />
            </template>
          </UInput>
          <template #error>
            <span v-if="getError(errors, 'email')" class="text-red-500 text-sm">{{ getError(errors, 'email') }}</span>
          </template>
        </UFormField>
      </div>
      <div class="flex justify-start">
        <UButton
          type="submit"
          color="primary"
          class="w-lg text-md p-1 flex text-center justify-center"
        >
          {{ t('formStepOne.continue') }}
        </UButton>
      </div>
    </UForm>
    <LazyNuxtImg
          provider="myProvider" src="/assets/images/profile.jpeg"/>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { useI18n } from 'vue-i18n'
import IconMail from '~/components/icons/IconMail.vue'
import { z } from 'zod'

const { t } = useI18n()

const schema = z.object({ 
  prenom: z.string().nonempty({ message: t('formStepOne.requiredFirstname') }),
  nom: z.string().nonempty({ message: t('formStepOne.requiredLastname') }),
  email: z.string().email({ message: t('formStepOne.invalidEmail') })
})

type FormState = z.infer<typeof schema>

const state = reactive<Partial<FormState>>({
  prenom: '',
  nom: '',
  email: ''
})

const emit = defineEmits(['nextStep'])
async function onSubmit(event: FormSubmitEvent<FormState>) {
  console.log(state)
  emit('nextStep')
}

function getError(errors: any[], field: string) {
  const err = errors.find(e => e.path === field)
  return err ? err.message : ''
}
</script>
