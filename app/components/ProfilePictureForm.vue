<template>
  <div>
    <div class="flex flex-row items-center gap-6">
      <!-- Avatar actuel -->
      <div class="shrink-0 flex flex-col items-center">
        <span class="text-sm text-gray-800 dark:text-gray-100 mb-1">{{ label }}</span>
        <div class="relative">
          <template v-if="avatarUrl === defaultAvatar">
            <div
              :class=" [
                shape === 'square'
                  ? 'w-26 h-26 flex items-center justify-center rounded-lg border-4 border-white shadow-sm bg-gray-400 relative'
                  : 'w-26 h-26 flex items-center justify-center rounded-full border-4 border-white shadow-sm bg-gray-400 relative'
              ]"
            >
              <template v-if="shape === 'square'">
                <IconBuilding />
              </template>
              <template v-else>
                <IconAvatar />
              </template>
            </div>
          </template>
          <template v-else>
            <img
              :src="avatarUrl"
              alt="Avatar utilisateur"
              :class="
                shape === 'square'
                  ? 'w-26 h-26 rounded-xl object-cover border-4 border-white shadow-sm'
                  : 'w-26 h-26 rounded-full object-cover border-4 border-white shadow-sm'
              "
            />
          </template>
          <div
            v-if="isUploading"
            :class="
              shape === 'square'
                ? 'absolute inset-0 bg-white bg-opacity-50 rounded-xl flex items-center justify-center'
                : 'absolute inset-0 bg-white bg-opacity-50 rounded-full flex items-center justify-center'
            "
          >
            <IconSpinner v-if="isUploading" />
          </div>
        </div>
      </div>
      <!-- Contrôles -->
      <div class="flex flex-col items-start">
        <div class="space-y-2">
          <div class="flex gap-3 items-center">
            <div>
              <!-- Upload button -->
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleFileUpload"
              />
            </div>
            <div class="mt-8">
              <div class="flex gap-1">
                <button
                  type="button"
                  class="btn btn-outline btn-primary btn-sm border border-gray-300 mx-1 rounded-xl px-4 py-2 flex items-center gap-2"
                  :disabled="isUploading"
                  @click="triggerFileSelect"
                >
                  <IconUpload />
                  {{ avatarUrl === defaultAvatar ? 'Ajouter une photo' : 'Modifier la photo' }}
                </button>
                <button
                  type="button"
                  class="btn btn-outline btn-error btn-sm border border-gray-300 mx-1 rounded-xl px-4 py-2"
                  :disabled="isUploading || !avatarUrl"
                  @click="removeAvatar"
                >
                  Supprimer
                </button>
              </div>
              <span class="text-sm mt-1 block">au format *.png ou *.jpeg max 5mo</span>
            </div>
          </div>
          <div
            v-if="isUploading"
            class="bg-blue-100 border border-blue-200 rounded-lg p-2 max-w-xl"
          >
            <div class="flex items-center gap-2">
              <IconSpinner
                class="animate-spin h-4 w-4 text-blue-700 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              />
              <p class="text-xs text-blue-700 font-medium">Téléchargement en cours...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import IconBuilding from '~/components/icons/IconBuilding.vue'
import IconAvatar from '~/components/icons/IconAvatar.vue'
import IconSpinner from '~/components/icons/IconSpinner.vue'
import IconUpload from '~/components/icons/IconUpload.vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Photo de profil'
  },
  shape: {
    type: String,
    default: 'circle'
  }
})

const defaultAvatar = 'https://api.dicebear.com/9.x/notionists/svg?seed=default'
const avatarUrl = ref(defaultAvatar)
const isUploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

function triggerFileSelect() {
  if (fileInput.value && !isUploading.value) {
    fileInput.value.value = ''
    fileInput.value.click()
  }
}

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return
  if (
    !['image/jpeg', 'image/png', 'image/webp'].includes(file.type) ||
    file.size > 5 * 1024 * 1024
  ) {
    alert('Format ou taille de fichier non valide.')
    return
  }
  const reader = new FileReader()
  isUploading.value = true
  reader.onload = (e) => {
    avatarUrl.value = e.target?.result as string
    isUploading.value = false
  }
  reader.onerror = () => {
    alert("Erreur lors du chargement de l'image.")
    isUploading.value = false
  }
  reader.readAsDataURL(file)
}

function removeAvatar() {
  avatarUrl.value = defaultAvatar
}
</script>
