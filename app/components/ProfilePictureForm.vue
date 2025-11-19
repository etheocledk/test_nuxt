<template>
  <div>
    <div class="flex flex-row items-center gap-6">
      <!-- Avatar actuel -->
      <div class="shrink-0 flex flex-col items-center">
        <span class="text-sm text-gray-800 dark:text-gray-100 mb-1">{{
          props.label || t('profilePicture.label')
        }}</span>
        <div class="relative">
          <template v-if="avatarUrl === defaultAvatar">
            <div
              :class="[
                shape === 'square'
                  ? 'w-26 h-26 flex items-center justify-center rounded-lg border-4 border-white shadow-sm bg-gray-400 relative'
                  : 'w-26 h-26 flex items-center justify-center rounded-full border-4 border-white shadow-sm bg-gray-400 relative'
              ]"
            >
              <template v-if="shape === 'square'">
                <IconsIconBuilding />
              </template>
              <template v-else>
                <IconsIconAvatar />
              </template>
            </div>
          </template>
          <template v-else>
            <img
              :src="avatarUrl"
              :alt="t('profilePicture.label')"
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
            <IconsIconSpinner v-if="isUploading" />
          </div>
        </div>
      </div>
      <!-- Contrôles -->
      <div class="flex flex-col items-start">
        <div class="space-y-2">
          <div class="flex gap-1 items-center">
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
                <UButton
                  type="button"
                  color="primary"
                  variant="outline"
                  size="sm"
                  class="mx-1 rounded-xl px-4 py-2 flex items-center gap-2"
                  :disabled="isUploading"
                  @click="triggerFileSelect"
                  aria-label="{{ avatarUrl === defaultAvatar ? t('profilePicture.addPhoto') : t('profilePicture.editPhoto') }}"
                >
                  <IconsIconUpload />
                  {{
                    avatarUrl === defaultAvatar
                      ? t('profilePicture.addPhoto')
                      : t('profilePicture.editPhoto')
                  }}
                </UButton>
                <UButton
                  type="button"
                  color="error"
                  variant="outline"
                  size="sm"
                  class="mx-1 rounded-xl px-4 py-2"
                  :disabled="isUploading || !avatarUrl"
                  @click="removeAvatar"
                  aria-label="{{ t('profilePicture.remove') }}"
                >
                  {{ t('profilePicture.remove') }}
                </UButton>
              </div>
              <span class="text-sm mt-1 block">{{ t('profilePicture.format') }}</span>
            </div>
          </div>
          <div
            v-if="isUploading"
            class="bg-blue-100 border border-blue-200 rounded-lg p-2 max-w-xl"
          >
            <div class="flex items-center gap-2">
              <IconsIconSpinner
                class="animate-spin h-4 w-4 text-blue-700 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              />
              <p class="text-xs text-blue-700 font-medium">{{ t('profilePicture.uploading') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  label: {
    type: String,
    default: undefined
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
    alert(t('profilePicture.invalidFile'))
    return
  }
  const reader = new FileReader()
  isUploading.value = true
  reader.onload = (e) => {
    avatarUrl.value = e.target?.result as string
    isUploading.value = false
  }
  reader.onerror = () => {
    alert(t('profilePicture.uploadError'))
    isUploading.value = false
  }
  reader.readAsDataURL(file)
}

function removeAvatar() {
  avatarUrl.value = defaultAvatar
}
</script>
