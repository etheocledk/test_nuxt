<template>
  <div class="space-y-8">
    <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
      <h2 class="text-xl font-semibold mb-6">Faisons connaissance</h2>
      <ProfilePictureForm label="Photo de profil" />
      <div class="space-y-3">
        <UFormField label="Prénom" name="prenom">
          <UInput v-model="state.prenom" placeholder="Votre prénom" class="w-lg text-lg" size="lg" />
        </UFormField>
        <UFormField label="Nom" name="nom">
          <UInput v-model="state.nom" placeholder="Votre nom" class="w-lg text-lg" size="lg" />
        </UFormField>
        <UFormField label="Email" name="email">
          <UInput v-model="state.email" placeholder="Votre email" class="w-lg text-lg" size="lg">
            <template #leading>
              <!-- Icône boîte mail -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
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
          Continuer
        </UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive } from 'vue'
import { useToast } from '#imports'

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
async function onSubmit(event: FormSubmitEvent<FormState>) {
  const errors = validate(state)
  if (Object.keys(errors).length > 0) {
    toast.add({ title: 'Erreur', description: Object.values(errors).join(', '), color: 'error' })
    return
  }
  toast.add({ title: 'Succès', description: 'Formulaire envoyé.', color: 'success' })
  console.log(state)
}
</script>
