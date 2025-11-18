<template>
  <header
    class="fixed top-0 left-64 right-0 z-30 flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-900/95 border-b border-gray-200"
    style="width: calc(100%-18rem)"
  >
    <LazyNuxtImg
      provider="myProvider"
      src="/assets/images/logo.png"
      alt="Logo"
      class="h-10 w-auto"
      quality="100"
    />
    <div class="absolute right-6 flex items-center gap-3">
      <SharedLanguageSelector />
      <UButton icon="i-lucide-bell" variant="ghost" aria-label="Notifications" color="neutral" />
      <UButton icon="i-lucide-megaphone" variant="ghost" aria-label="Annonces" color="neutral" />
      <UButton icon="i-lucide-help-circle" variant="ghost" aria-label="Aide" color="neutral" />
      <UButton
        :icon="theme === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
        :color="theme === 'dark' ? 'primary' : 'neutral'"
        variant="ghost"
        aria-label="Thème"
        @click="$emit('toggle-theme')"
      />
    </div>
  </header>
</template>
<script setup lang="ts">
import SharedLanguageSelector from '~/components/shared/LanguageSelector.vue'
import UButton from '@nuxt/ui'

defineProps<{ theme: string }>();
const emit = defineEmits(['toggle-theme'])
</script>
