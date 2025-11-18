<template>
  <div class="flex min-h-screen">
    <AppSidebar :collapsed="collapsed" :menu="menu" />
    <div class="flex flex-col flex-1 ml-64 min-h-screen">
      <AppHeader :theme="theme" @toggle-theme="theme = theme === 'dark' ? 'light' : 'dark'" />
      <main class="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-gray-800 py-12" style="margin-top: 56px">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import AppSidebar from '~/components/AppSidebar.vue'
import AppHeader from '~/components/AppHeader.vue'

const menu: NavigationMenuItem[] = [
  { label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/' },
  { label: 'Messages', icon: 'i-lucide-mail', to: '/messages' },
  { label: 'Utilisateurs', icon: 'i-lucide-users', to: '/users' },
  { label: 'Statistiques', icon: 'i-lucide-bar-chart-2', to: '/stats' },
  { label: 'Projets', icon: 'i-lucide-folder', to: '/projects' },
  { label: 'Support', icon: 'i-lucide-life-buoy', to: '/support' }
]

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
