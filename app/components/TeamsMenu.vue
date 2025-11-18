<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  collapsed?: boolean
}>()

const teams = ref([
  {
    label: 'Wink',
    avatar: {
      src: '/assets/images/logo.png',
      alt: 'Wink'
    }
  }
])
const selectedTeam = ref(teams.value[0])

const items = computed<DropdownMenuItem[][]>(() => [
  [
    {
      ...teams.value[0],
      onSelect() {
        selectedTeam.value = teams.value[0]
      }
    }
  ],
  [
    {
      label: 'Manage team',
      icon: 'i-lucide-cog'
    }
  ]
])
</script>

<template>
  <UDropdownMenu
    :items="
      items.map((group) =>
        group.map((item) => ({
          ...item,
          label: t('teamsMenu.' + (item.label || '').toLowerCase().replace(/ /g, ''))
        }))
      )
    "
    :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{ content: collapsed ? 'w-40' : 'w-(--reka-dropdown-menu-trigger-width)' }"
  >
    <UButton
      v-bind="{
        ...selectedTeam,
        label: collapsed
          ? undefined
          : t('teamsMenu.' + (selectedTeam?.label || '').toLowerCase().replace(/ /g, '')),
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down'
      }"
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      class="data-[state=open]:bg-elevated font-medium text-base"
      :class="[!collapsed && 'py-2']"
      :ui="{
        trailingIcon: 'text-dimmed'
      }"
    />
  </UDropdownMenu>
</template>
