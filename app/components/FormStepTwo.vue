<template>
  <div class="space-y-8">
    <UForm
      :state="state"
      class="space-y-6 bg-white dark:bg-gray-900 rounded-xl p-6"
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
            <span>Retour</span>
          </UButton>
        </div>
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Créez votre espace de travail
        </h2>
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
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
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
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
        </UFormField>
        <UFormField label="Site internet" name="site">
          <div class="flex">
            <span
              class="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 text-sm"
              >https://</span
            >
            <UInput
              v-model="state.site"
              placeholder="votre-entreprise.com"
              class="w-md text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              size="lg"
            />
          </div>
        </UFormField>
        <UFormField label="Adresse du siège social" name="adresse">
          <UInput
            v-model="state.adresse"
            placeholder="Renseignez l’adresse de votre entreprise"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
        </UFormField>
        <UFormField label="Secteur d'activité" name="secteur">
          <UInput
            v-model="state.secteur"
            placeholder="Renseignez le secteur d’activité de votre entreprise"
            class="w-lg text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            size="lg"
          />
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
import { useI18n } from 'vue-i18n'
import ProfilePictureForm from './ProfilePictureForm.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'

const { t } = useI18n()

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
  if (!state.nomEntreprise) errors.nomEntreprise = t('formStepTwo.requiredCompanyName')
  if (!state.description) errors.description = t('formStepTwo.requiredDescription')
  if (!state.site) errors.site = t('formStepTwo.requiredWebsite')
  if (!state.adresse) errors.adresse = t('formStepTwo.requiredAddress')
  if (!state.secteur) errors.secteur = t('formStepTwo.requiredSector')
  return errors
}

function onSubmit() {
  const errors = validate(state)
  if (Object.keys(errors).length > 0) {
    toast.add({ title: t('formStepTwo.error'), description: Object.values(errors).join(', '), color: 'error' })
    return
  }
  emit('next-step')
}
</script>
