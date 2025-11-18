<template>
  <div class="min-h-screen bg-default">
    <SeoManager />

    <div class="flex h-screen overflow-hidden">
      <!-- Mobile Overlay -->
      <!-- <div :class="overlayClasses" @click="closeSidebar"></div>
      <div :class="sidebarClasses">
        <SideBar :is-collapsed="isCollapsed || false" @close="closeSidebar" />
      </div> -->

      <!-- <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div ref="headerRef">
          <Header
            :title="currentPageMetadata.title"
            :breadcrumb="currentBreadcrumb"
            class="flex-shrink-0"
            @toggle-sidebar="toggleSidebar"
          />
          <ToolBar v-if="showBreadcrumb">
            <UBreadcrumb :items="currentBreadcrumb" />
          </ToolBar>
        </div>
        <main
          class="flex-1 overflow-y-auto relative"
          role="main"
          :aria-label="currentPageMetadata.title"
        >
          <UContainer :class="shouldRemovePadding ? 'p-0!' : ''">
            <slot />
          </UContainer>
        </main>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { HeaderHeightKey } from '~/types/injection-keys'

// const { isCollapsed, isMobile, toggleSidebar, closeSidebar, sidebarClasses, overlayClasses } =
//   useSidebar()

// const headerRef = useTemplateRef('headerRef')
// const { height: headerHeight } = useElementSize(headerRef)

// provide(HeaderHeightKey, headerHeight)

// const { currentPageMetadata, currentBreadcrumb } = useNavigation()

// const route = useRoute()
// watch(
//   () => route.path,
//   () => {
//     if (isMobile.value) {
//       closeSidebar()
//     }
//   }
// )

// const shouldRemovePadding = computed(() => {
//   return route.query.removePadding === 'true' || route.meta.removePadding === true
// })

// const showBreadcrumb = computed(() => {
//   return route.meta.showBreadcrumbs !== false
// })
</script>
