<template>
  <div class="space-y-8">
    <UForm :state="state" class="space-y-6" @submit="onSubmit">
      <div class="flex flex-col gap-2">
        <UButton
          type="button"
          color="white"
          variant="ghost"
          @click="emit('prev-step')"
          class="flex items-center gap-2 shadow-none border-none cursor-pointer hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Retour</span>
        </UButton>
        <h2 class="text-xl font-semibold mb-4">Créez votre espace de travail</h2>
      </div>
      <ProfilePictureForm
        label="Logo de l’entreprise"
        shape="square"
        icon="building"
        class="mb-6"
      />
      <div class="space-y-3">
        <UFormField label="Nom de l'entreprise" name="nomEntreprise">
          <UInput
            v-model="state.nomEntreprise"
            placeholder="Peugeot"
            class="w-lg text-lg"
            size="lg"
          />
        </UFormField>
        <UFormField label="Description de l'entreprise" name="description">
          <UTextarea
            v-model="state.description"
            placeholder="Décrivez votre entreprise brièvement :

Histoire et chiffres clés
Produits ou services commercialisés
Culture et valeurs"
            class="w-lg text-lg"
            size="lg"
          />
        </UFormField>
        <UFormField label="Site internet" name="site">
          <div class="flex">
            <span
              class="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm"
              >https://</span
            >
            <UInput
              v-model="state.site"
              placeholder="votre-entreprise.com"
              class="w-md text-lg"
              size="lg"
              :ui="{ rounded: 'rounded-r-md rounded-l-none' }"
            />
          </div>
        </UFormField>
        <UFormField label="Adresse du siège social" name="adresse">
          <UInput
            v-model="state.adresse"
            placeholder="Renseignez l’adresse de votre entreprise"
            class="w-lg text-lg"
            size="lg"
          />
        </UFormField>
        <UFormField label="Secteur d'activité" name="secteur">
          <UInput
            v-model="state.secteur"
            placeholder="Renseignez le secteur d’activité de votre entreprise"
            class="w-lg text-lg"
            size="lg"
          />
        </UFormField>
      </div>
      <div class="flex mt-8 w-lg justify-between">
        <UButton
          type="button"
          color="white"
          variant="ghost"
          @click="emit('prev-step')"
          class="flex items-center gap-2 shadow-none border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Retour</span>
        </UButton>
        <UButton type="submit" color="primary" class="w-2/3 flex justify-center">Continuer</UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useToast } from '#imports'
import ProfilePictureForm from './ProfilePictureForm.vue'

const emit = defineEmits(['prev-step', 'next-step'])

interface FormState {
  nomEntreprise: string
  description: string
  site: string
  adresse: string
  secteur: string
}

const state = reactive<FormState>({
  nomEntreprise: '',
  description: '',
  site: '',
  adresse: '',
  secteur: ''
})

const toast = useToast()
function validate(state: FormState) {
  const errors: Record<string, string> = {}
  if (!state.nomEntreprise) errors.nomEntreprise = "Le nom de l'entreprise est requis"
  if (!state.description) errors.description = 'La description est requise'
  if (!state.site) errors.site = 'Le site internet est requis'
  if (!state.adresse) errors.adresse = "L'adresse est requise"
  if (!state.secteur) errors.secteur = "Le secteur d'activité est requis"
  return errors
}

function onSubmit() {
  const errors = validate(state)
  if (Object.keys(errors).length > 0) {
    toast.add({ title: 'Erreur', description: Object.values(errors).join(', '), color: 'error' })
    return
  }
  emit('next-step')
}
</script>
