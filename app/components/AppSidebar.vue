<template>
  <aside
    class="w-64 min-w-64 max-w-sm flex flex-col h-full bg-white dark:bg-gray-900/95 fixed left-0 top-0 bottom-0 z-20 border-r border-gray-200 dark:border-gray-700 overflow-x-hidden px-3"
  >
    <div class="dark:border-gray-700">
      <div class="pt-6 flex justify-center">
        <TeamsMenu :collapsed="collapsed" />
      </div>
      <UNavigationMenu
        :items="translatedMenu"
        tooltip
        popover
        orientation="vertical"
        :collapsed="collapsed"
        variant="pill"
        :ui="{link: 'text-md py-2', list: 'space-y-2'}"
        class="w-full space-y-5 my-8 text-base"
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
import { computed } from 'vue'

const { t, locale } = useI18n()

const props = defineProps<{
  collapsed: boolean
  menu: NavigationMenuItem[]
}>()

const translatedMenu = computed(() => {
  const _ = locale.value
  return props.menu.map((item) => ({ ...item, label: t(item.label ?? '') }))
})
</script>
