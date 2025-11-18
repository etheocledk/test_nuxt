<template>
  <div class="flex min-h-screen">
    <!-- Sidebar gauche -->
    <aside class="w-56! min-w-56 max-w-xs flex flex-col h-full bg-white dark:bg-gray-900/95 fixed left-0 top-0 bottom-0 z-20">
      <div>
        <div class="flex items-center justify-center py-6">
          <UIcon v-if="collapsed" name="i-lucide-layout-dashboard" class="size-5 text-primary mx-auto" />
          <span v-else class="font-bold text-lg">Menu</span>
        </div>
        <UNavigationMenu
          :collapsed="collapsed"
          :items="menu"
          orientation="vertical"
          class="space-y-2 my-4 text-lg"
          item-class="py-3 px-4 rounded-md"
        />
      </div>
      <div class="mt-auto p-4">
        <UButton color="error" block icon="i-lucide-log-out">Déconnexion</UButton>
      </div>
    </aside>
    <!-- Colonne droite : header + main -->
    <div class="flex flex-col flex-1 ml-56 min-h-screen">
      <header class="fixed top-0 left-56 right-0 z-30 flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-900/95" style="width:calc(100%-14rem)">
        <LazyNuxtImg provider="myProvider" src="assets/images/logo.png" alt="Logo" class="h-10 w-auto" quality="100" />
        <div class="absolute right-6 flex items-center gap-3">
          <UButton icon="i-lucide-bell" variant="ghost" aria-label="Notifications" color="neutral" />
          <UButton icon="i-lucide-megaphone" variant="ghost" aria-label="Annonces" color="neutral" />
          <UButton icon="i-lucide-help-circle" variant="ghost" aria-label="Aide" color="neutral" />
          <UButton
            :icon="theme === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
            :color="theme === 'dark' ? 'primary' : 'neutral'"
            variant="ghost"
            @click="theme = theme === 'dark' ? 'light' : 'dark'"
            aria-label="Thème"
          />
        </div>
      </header>
      <main class="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-800" style="margin-top:56px;">
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
  { label: 'Support', icon: 'i-lucide-life-buoy', to: '/support' },
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
