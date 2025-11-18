<template>
  <div>
    
  </div>
  <!-- <aside
    class="h-full transition-all z-50 ease-in-out border-r border-muted duration-300 custom-scrollbar flex flex-col"
    :class="[
      isCollapsed ? 'w-20' : 'w-64',
      isInteracting ? 'overflow-y-auto' : 'overflow-y-hidden'
    ]" @mouseenter="handleInteraction" @mouseleave="handleDelayedLeave" @click="handleInteraction"
    @touchstart="handleInteraction">

    <div class="flex justify-center py-6 px-4 flex-shrink-0">
      <div :class="isCollapsed ? 'w-24' : 'w-32'" class="transition-all ease-in-out duration-300">
        <LazyNuxtImg provider="myProvider" src="/images/logo.png" quality="100" alt="Logo JP"
          class="w-full h-full object-contain" />
      </div>
    </div>

    <nav class="flex-1 px-4 pb-6 overflow-y-auto">
      <SearchCommand class="w-full max-w-md mb-4" />
      <UNavigationMenu :items="navigationItems" tooltip popover orientation="vertical" :collapsed="isCollapsed"
        variant="pill" class="w-full" />
    </nav>

    <div class="px-4 border-t border-accented py-2">
      <UserSwitch :collapsed="isCollapsed" />
    </div>
  </aside> -->
</template>


<!-- <script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

interface Props {
  isCollapsed: boolean
}

defineProps<Props>()

const { currentMenu, isActive, currentPageMetadata } = useNavigation()
const route = useRoute()

// État pour le menu actif
const activeMenuItem = ref<string | undefined>()

// Transformer le menu actuel en format compatible avec UNavigationMenu
const navigationItems = computed(() => {
  const mapChild = (child: NavigationMenuItem, groupIndex: number, itemIndex: number, childIndex: number) => {
    const childTo = typeof child.to === 'string' ? child.to : undefined

    return {
      ...child,
      value: childTo ?? `child-${groupIndex}-${itemIndex}-${childIndex}`,
      to: childTo,
      active: childTo ? isActive(childTo, false) : false
    }
  }

  const mapItem = (item: NavigationMenuItem, groupIndex: number, itemIndex: number) => {
    const itemTo = typeof item.to === 'string' ? item.to : undefined
    const mappedChildren = item.children && Array.isArray(item.children)
      ? (item.children as NavigationMenuItem[]).map((child, childIndex) => mapChild(child, groupIndex, itemIndex, childIndex))
      : undefined
    const hasActiveChild = mappedChildren?.some(child => child.active) ?? false
    const isParentActive = itemTo
      ? isActive(itemTo, false) || currentPageMetadata.value.parentRoute === itemTo
      : false

    return {
      ...item,
      value: itemTo ?? `item-${groupIndex}-${itemIndex}`,
      to: itemTo,
      active: isParentActive || hasActiveChild,
      children: mappedChildren
    }
  }

  return currentMenu.value.map((group, groupIndex) =>
    group.map((item, itemIndex) => mapItem(item as NavigationMenuItem, groupIndex, itemIndex))
  )
})

// Mettre à jour l'élément actif quand la route change
watch(() => route.path, () => {
  const checkActive = (items: NavigationMenuItem[]) => {
    return items.find((item) => {
      if (item.active) return true
      if (currentPageMetadata.value.parentRoute && item.to) {
        return currentPageMetadata.value.parentRoute === item.to
      }
      if (item.to && typeof item.to === 'string' && isActive(item.to, false)) return true
      if (item.children && Array.isArray(item.children)) {
        return (item.children as NavigationMenuItem[]).some((child) => {
          if (child.active) return true
          if (typeof child.to === 'string') {
            return isActive(child.to, false)
          }
          return false
        })
      }
      return false
    })
  }

  // Parcourir tous les groupes pour trouver l'élément actif
  activeMenuItem.value = undefined
  for (const group of navigationItems.value) {
    const activeItem = checkActive(group)
    if (activeItem) {
      activeMenuItem.value = activeItem.value
      break
    }
  }
}, { immediate: true })

const isInteracting = ref(false)

let timeout: ReturnType<typeof setTimeout> | null = null

const handleInteraction = () => {
  isInteracting.value = true
  if (timeout) clearTimeout(timeout)
}

const handleDelayedLeave = () => {
  timeout = setTimeout(() => {
    isInteracting.value = false
  }, 2000)
}

// Nettoyage du timeout lors du démontage
onBeforeUnmount(() => {
  if (timeout) {
    clearTimeout(timeout)
  }
})
</script> -->

<!-- <style scoped>
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
</style> -->
