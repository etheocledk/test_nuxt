<template>
  <div>
    
  </div>
  <!-- <ToolBar :sticky="true">
    <template #left>
      <UButton
        v-for="tab in tabs"
        :key="tab.key"
        :variant="activeTab === tab.key ? 'solid' : 'ghost'"
        :icon="tab.icon"
        :color="activeTab === tab.key ? 'primary' : 'neutral'"
        size="xl"
        @click="$emit('update:activeTab', tab.key)"
      >
        {{ $t(tab.label) }}
      </UButton>
    </template>

    <div class="flex items-center space-x-1"></div>
  </ToolBar> -->
</template>

<!-- <script setup lang="ts">
interface Tab {
  key: string
  label: string
  icon: string
}

interface Props {
  activeTab: string
  tabs: Tab[]
}

defineProps<Props>()

defineEmits<{
  'update:activeTab': [value: string]
}>()
</script> -->
