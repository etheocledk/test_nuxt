<template>
  <div class="space-y-8">
    <UForm
      :state="state"
      class="space-y-6 bg-white dark:bg-gray-900 rounded-xl p-6"
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
        </UFormField>
        <UFormField :label="t('formStepOne.lastname')" name="nom">
          <UInput
            v-model="state.nom"
            :placeholder="t('formStepOne.lastnamePlaceholder')"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
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
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive } from 'vue'
import { useToast } from '#imports'
import { useRouter } from 'vue-router'
import IconMail from '~/components/icons/IconMail.vue'

const { t } = useI18n()

interface FormState {
  prenom: string
  nom: string
  email: string
}

function validate(state: FormState) {
  const errors: Record<string, string> = {}
  if (!state.prenom) errors.prenom = 'Le prénom est requis'
  if (!state.nom) errors.nom = 'Le nom est requis'
  if (!state.email || !state.email.includes('@')) errors.email = 'Email invalide'
  return errors
}

const state = reactive<FormState>({
  prenom: '',
  nom: '',
  email: ''
})

const toast = useToast()
const router = useRouter()
const emit = defineEmits(['nextStep'])
async function onSubmit(event: FormSubmitEvent<FormState>) {
  const errors = validate(state)
  if (Object.keys(errors).length > 0) {
    toast.add({ title: 'Erreur', description: Object.values(errors).join(', '), color: 'error' })
    return
  }
  toast.add({ title: 'Succès', description: 'Formulaire envoyé.', color: 'success' })
  console.log(state)
  emit('nextStep')
}
</script>
