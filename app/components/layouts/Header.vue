<template>
  <div>
    
  </div>
  <!-- <header class="w-full bg-default sticky top-0 left-0 right-0 z-30 border-b border-default">
    <ToolBar sticky class="py-4">
      <template #left>
        <UButton variant="ghost" color="neutral" size="xl"
          :icon="toggleAside ? 'line-md:menu-unfold-right' : 'line-md:menu-unfold-left'" square
          class="w-10 h-10 flex-shrink-0" @click="handleToggle" />
      </template>

      <template #right>
        <CompanySpaceSwitch v-if="user?.active_profile_type === 'recruiter' && haveOrganization"
          class="hidden sm:block" />

        <ColorModeButton class="hidden sm:block" />

        <ProfileDropdown class="ml-2" />
      </template>
    </ToolBar>
  </header> -->
</template>

<!-- <script setup lang="ts">
import { InviteModal } from '#components'

const toggleAside = ref(false)
const searchQuery = ref('')

const overlay = useOverlay()
const modal = overlay.create(InviteModal)

const { user } = useAuth()
const { haveOrganization } = useOrganizationSelector()

const handleInvite = () => {
  modal.open()
}

const emit = defineEmits<{
  (e: 'toggleSidebar'): void
}>()

function handleToggle() {
  toggleAside.value = !toggleAside.value
  emit('toggleSidebar')
}

defineProps<{
  title: string
}>()

function handleSearch() {
  console.log('Recherche:', searchQuery.value)
}
</script> -->
