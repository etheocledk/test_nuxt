<template>
  <div class="flex min-h-screen">
    <!-- Sidebar gauche -->
    <aside
      class="w-64 min-w-64 max-w-sm flex flex-col h-full bg-white dark:bg-gray-900/95 fixed left-0 top-0 bottom-0 z-20 border-r border-gray-200 dark:border-gray-700 overflow-x-hidden px-3"
    >
      <div class=" dark:border-gray-700">
        <div class="p-3 flex justify-center">
          <TeamsMenu :collapsed="collapsed"  />
        </div>

        <UNavigationMenu
          :collapsed="collapsed"
          :items="menu"
          orientation="vertical"
          class="space-y-3 my-6 text-xl"
          item-class="py-4 px-5 rounded-lg"
        />
      </div>
      <div class="mt-auto p-4 flex flex-col gap-4">
        <UButton color="error" block icon="i-lucide-log-out">Déconnexion</UButton>
      </div>
    </aside>
    <!-- Colonne droite : header + main -->
    <div class="flex flex-col flex-1 ml-64 min-h-screen">
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
          <UButton
            icon="i-lucide-bell"
            variant="ghost"
            aria-label="Notifications"
            color="neutral"
          />
          <UButton
            icon="i-lucide-megaphone"
            variant="ghost"
            aria-label="Annonces"
            color="neutral"
          />
          <UButton icon="i-lucide-help-circle" variant="ghost" aria-label="Aide" color="neutral" />
          <UButton
            :icon="theme === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
            :color="theme === 'dark' ? 'primary' : 'neutral'"
            variant="ghost"
            aria-label="Thème"
            @click="theme = theme === 'dark' ? 'light' : 'dark'"
          />
        </div>
      </header>
      <main class="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-gray-800 py-12" style="margin-top: 56px">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

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
