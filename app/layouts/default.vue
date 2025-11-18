<template>
  <div class="flex min-h-screen">
    <div class="flex flex-col flex-1 min-h-screen">
      <UHeader title="">
        <LazyNuxtImg
          provider="myProvider"
          src="/assets/images/logo.png"
          :alt="t('header.logo_alt')"
          class="h-10 w-auto"
          quality="100"
        />
       </UHeader>
      <UMain
        class=" bg-accented"
      >
        <slot />
      </UMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const menu = computed<NavigationMenuItem[]>(() => {
  const _ = locale.value
  return [
    { label: 'sidebar.dashboard', icon: 'i-lucide-layout-dashboard', to: '/' },
    { label: 'sidebar.messages', icon: 'i-lucide-mail', to: '/messages' },
    { label: 'sidebar.users', icon: 'i-lucide-users', to: '/users' },
    { label: 'sidebar.stats', icon: 'i-lucide-bar-chart-2', to: '/stats' },
    { label: 'sidebar.projects', icon: 'i-lucide-folder', to: '/projects' },
    { label: 'sidebar.support', icon: 'i-lucide-life-buoy', to: '/support' }
  ]
})

const collapsed = ref(false)
const theme = ref('light')

watchEffect(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;
  border: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8);
}
</style>
