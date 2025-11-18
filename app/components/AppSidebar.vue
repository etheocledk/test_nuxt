<template>
  <aside
    class="w-64 min-w-64 max-w-sm flex flex-col h-full bg-white dark:bg-gray-900/95 fixed left-0 top-0 bottom-0 z-20 border-r border-gray-200 dark:border-gray-700 overflow-x-hidden px-3"
  >
    <div class="dark:border-gray-700">
      <div class="p-3 flex justify-center">
        <TeamsMenu :collapsed="collapsed" />
      </div>
      <UNavigationMenu
        :collapsed="collapsed"
        :items="menu.map(item => ({ ...item, label: t(item.label ?? '') }))"
        orientation="vertical"
        class="space-y-3 my-6 text-xl"
        item-class="py-4 px-5 rounded-lg"
      />
    </div>
    <div class="mt-auto p-4 flex flex-col gap-4">
      <UButton color="error" block icon="i-lucide-log-out">{{ t('sidebar.logout') }}</UButton>
    </div>
  </aside>
</template>
<script setup lang="ts">
import TeamsMenu from '~/components/TeamsMenu.vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  collapsed: boolean,
  menu: NavigationMenuItem[]
}>()
</script>
